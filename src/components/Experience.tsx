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
          <h3 className="text-xl font-semibold text-blue-400">AI Developer Intern</h3>
          <p className="text-gray-300">Summer of AI 2025, Viswam.AI</p>
          <p className="text-sm text-gray-500 mb-4">May 2025 – Present</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Gained mastery in Python, Collaborative Software Development, and DevOps.</li>
            <li>Built a solid foundation in AI concepts to advance in AI engineering roles.</li>
            <li>Acquired hands-on experience by procuring data and fine-tuning a custom AI model with a dedicated team.</li>
            <li>Transformed finetuned models into real-world AI applications through impactful projects.</li>
            <li>Showcased skills and emerged as a key contributor in a dynamic, free, and open-source community.</li>
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
