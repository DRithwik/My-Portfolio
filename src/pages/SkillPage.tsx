import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { skillCategories, type SkillSection } from '../data/skills';

function Bullet({ top = false }: { top?: boolean }) {
  return <span className={`w-2 h-2 bg-blue-400 rounded-full${top ? ' mt-2' : ''}`}></span>;
}

function Section({ section }: { section: SkillSection }) {
  switch (section.kind) {
    case 'cards':
      return (
        <div className={section.layout === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-8'}>
          {section.cards.map((card) => (
            <div key={card.title} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{card.title}</h3>
              <ul className="space-y-3">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Bullet />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case 'certs':
      return (
        <div className="space-y-6">
          {section.certs.map((cert) => (
            <div key={cert.name} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{cert.name}</h3>
              <p className="text-gray-400 mb-4">Provider: {cert.provider}</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    case 'notes':
      return (
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <ul className="space-y-4">
            {section.notes.map((note) => (
              <li key={note.title} className="flex items-start gap-2">
                <Bullet top />
                <div>
                  <h4 className="font-semibold mb-1">{note.title}</h4>
                  <p className="text-gray-300">{note.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
  }
}

export default function SkillPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const category = skillCategories.find((c) => c.slug === slug);
  if (!category) return <Navigate to="/" replace />;

  const { title, icon: Icon, sections } = category.page;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Icon className="text-blue-400" size={32} />
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>

        {sections.map((section, i) => (
          <section key={section.title} className={i < sections.length - 1 ? 'mb-12' : undefined}>
            <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
            <Section section={section} />
          </section>
        ))}
      </div>
    </div>
  );
}
