import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Briefcase className="text-blue-400"/>
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>
        <div className="experience-card mb-8">
          <h3 className="text-xl font-semibold text-blue-400">Full Stack Developer</h3>
          <p className="text-gray-300">TechnoHacks Solution Pvt. Ltd.</p>
          <p className="text-sm text-gray-500 mb-4">January 2025 – March 2025 (2 months)</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Developed and maintained scalable web applications using React.js and Node.js</li>
            <li>Collaborated with designers and backend developers to implement new features</li>
            <li>Enhanced application performance through optimization techniques</li>
            <li>Integrated RESTful APIs and ensured seamless data flow between client and server</li>
            <li>Participated in code reviews and contributed to team-wide best practices</li>
          </ul>
        </div>
        <div className="experience-card mb-8">
          <h3 className="text-xl font-semibold text-blue-400">Cyber Security Intern</h3>
          <p className="text-gray-300">National Institute of Electronics & Information Technology (NIELIT)</p>
          <p className="text-sm text-gray-500 mb-4">August 2024 – October 2024 (2 months)</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Gained practical experience in Cybersecurity and Ethical Hacking</li>
            <li>Completed hands-on projects involving risk assessment and penetration testing</li>
            <li>Learned advanced concepts like cryptography and network security</li>
            <li>Utilized tools and frameworks to analyze cyber threats</li>
            <li>Strengthened expertise in ethical hacking techniques</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
