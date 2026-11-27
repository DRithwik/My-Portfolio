import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, projectPath } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-8">
          <Code2 className="text-blue-400" />
          <h2 className="text-3xl font-bold">Projects Made</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="project-card group">
              {(() => {
                const image = (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                );
                return project.detail ? (
                  <Link to={projectPath(project)} aria-label={`${project.title} details`} className="block cursor-pointer">
                    {image}
                  </Link>
                ) : (
                  image
                );
              })()}
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                  {project.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
