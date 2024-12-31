import React from 'react';
import type { ResumeSection as ResumeSectionType } from './types';

interface ResumeSectionProps {
  section: ResumeSectionType;
}

export default function ResumeSection({ section }: ResumeSectionProps) {
  const { title, icon: Icon, items } = section;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Icon className="text-blue-400" size={24} />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
            <h4 className="text-lg font-semibold text-blue-400 mb-2">{item.title}</h4>
            {item.organization && (
              <p className="text-gray-300 mb-1">{item.organization}</p>
            )}
            {item.period && (
              <p className="text-gray-400 text-sm mb-3">{item.period}</p>
            )}
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {item.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}