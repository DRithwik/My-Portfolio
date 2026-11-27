import React from 'react';
import { Briefcase } from 'lucide-react';
import {
  experiences,
  monthsFor,
  totalMonths,
  formatDuration,
  formatPeriod,
} from '../data/experience';

export default function Experience() {
  const total = formatDuration(totalMonths());

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-2">
            <Briefcase className="text-blue-400" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm border border-blue-500/30">
            Total: {total}
          </span>
        </div>

        {experiences.map((exp) => (
          <div key={`${exp.company}-${exp.start}`} className="experience-card mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
              {!exp.end && (
                <span className="px-2 py-0.5 rounded-md bg-teal-500/15 text-teal-300 text-xs">
                  Present
                </span>
              )}
            </div>
            <p className="text-gray-300">
              {exp.company}
              {exp.employmentType && ` · ${exp.employmentType}`}
            </p>
            <p className="text-sm text-gray-500">
              {formatPeriod(exp)} · {formatDuration(monthsFor(exp))}
            </p>
            {exp.location && <p className="text-sm text-gray-500">{exp.location}</p>}
            <div className="mb-4" />
            {exp.points.length > 0 && (
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
