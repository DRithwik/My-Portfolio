import React from 'react'; 
import { User, FileText, ExternalLink } from 'lucide-react';
import { formatDuration, totalMonths, currentRole } from '../data/experience';
import { aboutParagraphs, highlights, resume } from '../data/profile';
import { formatMonth } from '../lib/dates';
 
export default function About() {
  const role = currentRole();
  const experience = `${formatDuration(totalMonths())} experience`;
  const items = [...highlights, role ? `${role.role} at ${role.company} · ${experience}` : experience];

  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-12">
          <User className="text-blue-400" />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            {aboutParagraphs.map((text, i) => (
              <p
                key={i}
                className={`text-gray-300 leading-relaxed ${i < aboutParagraphs.length - 1 ? 'mb-6 ' : ''}text-lg`}
              >
                {text}
              </p>
            ))}
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="highlight-card group">
              <div className="p-6">
                <a
                  href={resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <FileText className="text-blue-400 group-hover:scale-110 transition-transform" size={24} />
                    <h3 className="text-xl font-semibold">My Resume</h3>
                  </div>
                </a>
                <p className="text-gray-300 mb-4">View my resume to know more about me :)</p>
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
                >
                  View / Download Resume
                  <ExternalLink size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-gray-400 mt-2">Last updated: {formatMonth(resume.lastUpdated)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
}
