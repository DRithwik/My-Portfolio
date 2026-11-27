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

        <ol className="relative">
          {/* timeline rail behind the logos */}
          <div
            aria-hidden
            className="absolute left-6 md:left-8 top-6 bottom-6 w-px bg-gradient-to-b from-blue-400/70 via-gray-600/50 to-transparent"
          />

          {experiences.map((exp) => {
            const current = !exp.end;
            const style = { '--accent': exp.accent ?? '#60a5fa' } as React.CSSProperties;

            return (
              <li
                key={`${exp.company}-${exp.start}`}
                className="exp-item relative flex gap-3 md:gap-6 mb-8 last:mb-0"
                style={style}
              >
                <div className="relative shrink-0 z-10">
                  <div className="exp-logo">
                    {exp.logo ? (
                      <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full grid place-items-center bg-gray-800">
                        <Briefcase className="text-gray-400" />
                      </div>
                    )}
                  </div>
                  {current && (
                    <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5" title="Current role">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 ring-2 ring-gray-900" />
                    </span>
                  )}
                </div>

                <div className="exp-card flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                        {current && (
                          <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 text-xs font-medium">
                            Present
                          </span>
                        )}
                      </div>
                      <p className="font-medium" style={{ color: 'var(--accent)' }}>
                        {exp.company}
                        {exp.employmentType && <span className="text-gray-400 font-normal"> · {exp.employmentType}</span>}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs px-2.5 py-1 rounded-full bg-gray-700/50 text-gray-300 border border-gray-600/40">
                      {formatDuration(monthsFor(exp))}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 mt-1">
                    {formatPeriod(exp)}
                    {exp.location && <span> · {exp.location}</span>}
                  </p>

                  {exp.points.length > 0 && (
                    <ul className="mt-4 space-y-2 text-gray-300">
                      {exp.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: 'var(--accent)' }}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
