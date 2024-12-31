import React, { useState } from 'react';
import { Code2, ExternalLink } from 'lucide-react';
import ProjectDetails from './ProjectDetails';

const projects = [
  {
    title: 'Microsoft Loop Clone',
    desc: '',
    tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Liveblocks'],
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80',
    link: 'https://github.com/DRithwik/toop_microsoft_loop_clone',
    points: [
      'Implemented real-time collaboration using Liveblocks',
      'Built a rich text editor with formatting options',
      'Added drag-and-drop file upload functionality',
      'Integrated user authentication and workspace management'
    ]
  },
  {
    title: 'Event Registration System',
    desc: '',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    link: 'https://github.com/DRithwik/Event-Registration-System-WTS',
    points: [
      'Developed RESTful APIs for event management',
      'Implemented real-time availability checking',
      'Added secure payment gateway integration',
      'Built an admin dashboard for event management'
    ]
  },
  {
    title: 'Portfolio',
    desc: '',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    link: 'https://github.com/DRithwik/portfolio',
    points: [
      'Designed and implemented responsive layouts',
      'Added smooth animations and transitions',
      'Integrated dynamic content loading',
      'Optimized performance and accessibility'
    ]
  },
  {
    title: 'Notion Clone',
    desc: '',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80',
    link: 'https://github.com/DRithwik',
    points: [
      'Built a block-based editor with rich formatting',
      'Implemented real-time collaboration features',
      'Added document sharing and permissions',
      'Integrated cloud storage for attachments'
    ]
  }
];

export default function Projects() {
  const [showProjectDetails, setShowProjectDetails] = useState(false);

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
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
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
                    View Code <ExternalLink size={16} />
                  </a>
                  {project.title === 'Notion Clone' && (
                    <button 
                      onClick={() => setShowProjectDetails(true)}
                      className="project-link"
                    >
                      View Details <ExternalLink size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showProjectDetails && (
        <ProjectDetails onClose={() => setShowProjectDetails(false)} />
      )}
    </section>
  );
}