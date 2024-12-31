import React from 'react';
import { education } from './data';

export default function EducationSection() {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-blue-400">Education</h3>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-800/30 p-6 rounded-xl">
            <div className="flex justify-between mb-2">
              <h4 className="font-semibold">{edu.institution}</h4>
              <span className="text-gray-400">{edu.location}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <p>{edu.degree}</p>
              <p>{edu.period}</p>
            </div>
            <p className="text-blue-400 mt-2">{edu.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}