import React, { useState } from 'react';
import { Code2, ExternalLink } from 'lucide-react';
import ProjectDetails from './ProjectDetails';

const projects = [
  {
    title: 'Microsoft Loop Clone',
    tech: ['Next.js', 'JavaScript', 'CSS', 'Clerk'],
    image: 'https://i.ibb.co/bgzLGGmr/image.png',
    link: 'https://github.com/DRithwik/Microsoft-Loop-Clone',
    points: [
      'A Next.js-based collaborative workspace app',
      'Enables editing & teamwork using Liveblocks',
      'Integrates AI assistance via Gemini API',
      'Secured with Clerk authentication'
    ]
  },
  {
    title: 'Deep Research AI Agent',
    desc: '',
    tech: ['Next.js 15', 'GPT-4o', 'Exa Search API', 'TypeScript'],
    image: 'https://media-hosting.imagekit.io/1573d4fb17df4e3b/Final%20output%20with%20report.jpg?Expires=1841826615&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HvEszYPaT2XyZPRtfUnD20ctzruJ5S4bnfaZvNdK33kKw3XwfI96Zt88WnnOYFP6sjhDjshyRnYuZ7hOXHsUXx5vLiXqszZFYaDvFRWEhE3Ix6YtQWvfSONUO8S-N6dTV1vQz9jAUZmyszPZgjUYGutXPqYF2aOO6XJEDuSVVqwgx8ZinwGVKPyDC6SCCPj6X3XLkJWmeIkwj3Phv8lmkoesRt6uGbnIHQ0qPuiOyjthZJc6sCgOF6IqdO7nK3Brhi5XwRD~ofrksGJSYBLAOYDJlRKqmIW3lz1nxtt5taGAiYecqmQRqKtba9HVSYLLFmvr3A33uItsa7~~z0ophA__',
    link: 'https://github.com/DRithwik/Deep-Research-AI-Agent',
    points: [
      'Built an AI research agent with Next.js, Vercel SDK, and multiple LLMs.',
      'Integrated Exa Search API for enhanced data sourcing.',
      'Enabled customizable, iterative research workflows.',
      'Used modular UI components with Tailwind and Shadcn UI.'
    ]
  },
  {
    title: 'Portfolio',
    desc: '',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    link: 'https://github.com/DRithwik/My-Portfolio',
    points: [
      'Designed and implemented responsive layouts',
      'Added smooth animations and transitions',
      'Integrated dynamic content loading',
      'Optimized performance and accessibility'
    ]
  },
  {
    title: "Password Generator",
    tech: ["React.js", "JavaScript", "CSS", "HTML"],
    image: "https://i.ibb.co/Y7shBCY/image.png",
    link: "https://github.com/DRithwik/Password-Generator",
    points: [
      "Developed a password generator using React",
      "Allowed users to customize password length,..",
      "Included options for uppercase, lowercase,..",
      "Designed a user-friendly and intuitive interface"
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
                    View <ExternalLink size={16} />
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
