import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: "Cyber Security and Ethical Hacking",
    issuer: "National Institute of Electronics & Information Technology (NIELIT)",
    date: "October 2024",
    description: "Comprehensive training in cybersecurity fundamentals, ethical hacking techniques, and security assessment methodologies. Gained hands-on experience with penetration testing tools and security frameworks.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80",
    skills: ["Penetration Testing", "Network Security", "Security Auditing", "Risk Assessment"]
  },
  {
    title: "Letter of Recommendation",
    issuer: "IIT Bombay",
    date: "2024",
    description: "Received recognition for exceptional performance and innovative contributions during collaborative research projects. Demonstrated strong problem-solving abilities and technical expertise.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    skills: ["Research Methodology", "Technical Innovation", "Project Management", "Academic Excellence"]
  },
  {
    title: "Code 360 - Level 7 Achievement",
    issuer: "Coding Ninjas",
    date: "2024",
    description: "Achieved the prestigious Level 7 certification in the Code 360 program, demonstrating mastery in advanced programming concepts, data structures, and algorithmic problem-solving.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    skills: ["Advanced Algorithms", "Data Structures", "Problem Solving", "Competitive Programming"]
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Award className="text-blue-400" />
          <h2 className="text-3xl font-bold">Certificates & Achievements</h2>
        </div>

        <div className="space-y-8">
          {certificates.map((cert, index) => (
            <div 
              key={cert.title}
              className="certificate-card group bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative overflow-hidden h-48 md:h-auto">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-transparent"></div>
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-blue-400">{cert.title}</h3>
                    <span className="text-sm text-gray-400">{cert.date}</span>
                  </div>
                  <p className="text-gray-300 mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 mb-4">{cert.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="tech-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Certificate <ExternalLink size={16} />
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
