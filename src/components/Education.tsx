import React from 'react';
import { GraduationCap } from 'lucide-react';
import { education, formatEducationPeriod } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <GraduationCap className="text-blue-400" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="text-xl font-semibold text-blue-400">{edu.degree}</h3>
              <p className="text-gray-300 mt-2">{edu.institution}</p>
              <p className="text-gray-400 text-sm mt-1">{edu.score}</p>
              <p className="text-gray-500 text-sm mt-1">{formatEducationPeriod(edu)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}