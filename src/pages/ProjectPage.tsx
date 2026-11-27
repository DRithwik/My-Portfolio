import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Globe } from 'lucide-react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project?.detail) return <Navigate to="/" replace />;
  const { detail } = project;
  const style = { '--accent': detail.accent, '--accent-text': detail.accentText } as React.CSSProperties;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4" style={style}>
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/#projects')}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8"
        >
          <ArrowLeft size={20} /> Back to Projects
        </button>

        <img src={project.image} alt={project.title} className="w-full rounded-2xl mb-10 border accent-border-soft" />

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <a
            href={detail.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border accent-btn transition-colors"
          >
            <Globe size={18} /> {detail.siteLabel} <ExternalLink size={16} />
          </a>
        </div>

        {detail.intro.map((text, i) => (
          <p key={i} className={`text-gray-300 text-lg leading-relaxed ${i < detail.intro.length - 1 ? 'mb-4' : 'mb-10'}`}>
            {text}
          </p>
        ))}

        <div className="grid gap-6 mb-12">
          {detail.sections.map((s) => (
            <div key={s.title} className="bg-gray-800/40 border border-gray-700/60 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent-text)' }}>
                {s.title}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">{s.text}</p>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                {s.url.replace('https://', '')} <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Built with</h2>
        <div className="flex flex-wrap gap-2">
          {detail.tech.map((t) => (
            <span key={t} className="tech-badge">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
