import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { skillCategories, type SkillSection } from '../data/skills';
import Reveal from '../components/ui/Reveal';
import Tile from '../components/ui/Tile';

function Dot({ top = false }: { top?: boolean }) {
  return <span className={`w-2 h-2 shrink-0 rounded-full accent-dot${top ? ' mt-2' : ''}`}></span>;
}

function Section({ section }: { section: SkillSection }) {
  switch (section.kind) {
    case 'cards':
      return (
        <div className={section.layout === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-6'}>
          {section.cards.map((card, i) => (
            <Reveal key={card.title} delay={section.layout === 'grid' ? (i % 2) * 120 : 0} className="glow-group h-full">
              <div className="glow-card p-6 h-full">
                <h3 className="text-xl font-semibold accent-text mb-4">{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Dot />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      );
    case 'certs':
      return (
        <div className="space-y-6">
          {section.certs.map((cert) => (
            <Reveal key={cert.name} className="glow-group">
              <div className="glow-card p-6">
                <h3 className="text-xl font-semibold accent-text mb-2">{cert.name}</h3>
                <p className="text-gray-400 mb-4">Provider: {cert.provider}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      );
    case 'notes':
      return (
        <Reveal>
          <div className="glow-card glow-self p-6">
            <ul className="space-y-4">
              {section.notes.map((note) => (
                <li key={note.title} className="flex items-start gap-2">
                  <Dot top />
                  <div>
                    <h4 className="font-semibold mb-1">{note.title}</h4>
                    <p className="text-gray-300">{note.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      );
  }
}

export default function SkillPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const category = skillCategories.find((c) => c.slug === slug);
  if (!category) return <Navigate to="/" replace />;

  const { title, icon, sections } = category.page;

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8"
      style={{ '--accent': category.accent } as React.CSSProperties}
    >
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="max-w-4xl mx-auto">
        <div className="glow-group flex items-center gap-4 mb-10">
          <Tile icon={icon} />
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
