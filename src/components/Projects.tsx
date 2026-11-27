import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, projectPath } from '../data/projects';
import Reveal from './ui/Reveal';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-8">
          <Code2 className="text-blue-400" />
          <h2 className="text-3xl font-bold">Projects Made</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const image = (
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 accent-dot opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
            return (
              <Reveal
                key={project.slug}
                delay={(i % 2) * 120}
                className="glow-group group h-full"
              >
                <div
                  className="glow-card overflow-hidden h-full flex flex-col"
                  style={{ '--accent': project.accent } as React.CSSProperties}
                >
                  {project.detail ? (
                    <Link to={projectPath(project)} aria-label={`${project.title} details`} className="block cursor-pointer">
                      {image}
                    </Link>
                  ) : (
                    image
                  )}
                  <div className="p-6 relative flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 self-start accent-underline">{project.title}</h3>
                    {project.desc && <p className="text-gray-400 mb-4">{project.desc}</p>}
                    <ul className="text-gray-300 mb-4 space-y-1.5 mt-2">
                      {project.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full accent-dot" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 accent-text hover:gap-2 transition-all font-medium"
                      >
                        View <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
