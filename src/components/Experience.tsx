import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Briefcase className="text-blue-400" />
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>

        {/* AI Developer Intern */}
        <div className="experience-card mb-8">
          <h3 className="text-xl font-semibold text-blue-400">Software Developer Intern</h3>
          <p className="text-gray-300">Inventi Globe Pvt. Ltd.</p>
          <p className="text-sm text-gray-500 mb-4">Aug 2025 – Present</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Developed and improved features for the HR management page, streamlining company workflows.</li>
            <li>Assisted in building and deploying client websites, focusing on user-friendly design and functionality.</li>
            <li>Enhanced web development skills and gained real-world project experience through team collaboration.</li>
            <li>Learned effective communication and problem-solving in a professional environment.</li>
            <li>Built practical skills in teamwork, web technologies, and real-world problem solving.</li>
          </ul>
        </div>

        {/* Full Stack Developer */}
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

      </div>
    </section>
  );
}
