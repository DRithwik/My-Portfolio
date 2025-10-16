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
    tech: ['Next.js', 'GPT-4o', 'Exa Search API', 'TypeScript'],
    image: 'https://i.ibb.co/N2JVPMLp/Final-output-with-report.png',
    link: 'https://github.com/DRithwik/Deep-Research-AI-Agent',
    points: [
      'Built an AI agent with Next.js & multi-LLM support.',
      'Integrated Exa API for advanced data retrieval.',
      'Enabled iterative, customizable research workflows.',
      'Built a modular UI with Tailwind and Shadcn UI.'
    ]
  },
  {
    title: 'Rx Appoints',
    desc: '',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Solidity'],
    image: 'https://i.ibb.co/whJC4Hv0/Screenshot-2025-10-16-194407.png',
    link: 'https://github.com/DRithwik/Rx_appoints',
    points: [
      'AI models (RF, LSTM) for medicine suggestions.',
      'BERT-based assistant for queries and reminders.',
      'Secured prescriptions via Ethereum and IPFS.',
      'Unified AI, NLP & blockchain system.'
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
