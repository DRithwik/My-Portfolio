import React from 'react';
import { experience } from './data';

export default function ExperienceSection() {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-blue-400">Experience</h3>
      {experience.map((exp, index) => (
        <div key={index} className="bg-gray-800/30 p-6 rounded-xl">
          <div className="flex justify-between mb-2">
            <h4 className="font-semibold">{exp.company}</h4>
            <span className="text-gray-400">{exp.location}</span>
          </div>
          <div className="flex justify-between text-gray-300 mb-4">
            <p>{exp.position}</p>
            <p>{exp.period}</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {exp.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}