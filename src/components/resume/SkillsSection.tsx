import React from 'react';
import { skills } from './data';

export default function SkillsSection() {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-blue-400">Technical Skills</h3>
      <div className="bg-gray-800/30 p-6 rounded-xl space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <span className="font-semibold">{skill.category}:</span>{' '}
            <span className="text-gray-300">{skill.items}</span>
          </div>
        ))}
      </div>
    </div>
  );
}