import React from 'react';
import { projects } from './data';

export default function ProjectsSection() {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-blue-400">Projects</h3>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800/30 p-6 rounded-xl">
            <h4 className="font-semibold mb-2">{project.name}</h4>
            <p className="text-gray-400 mb-4">{project.tech}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}