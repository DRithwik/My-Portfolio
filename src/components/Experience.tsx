import { Briefcase } from 'lucide-react';
import { experiences, monthsFor, totalMonths, formatDuration, formatPeriod } from '../data/experience';
import { Timeline, TimelineItem } from './ui/Timeline';
import Tile from './ui/Tile';

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

        <Timeline>
          {experiences.map((exp) => {
            const current = !exp.end;
            return (
              <TimelineItem
                key={`${exp.company}-${exp.start}`}
                accent={exp.accent ?? '#60a5fa'}
                current={current}
                tile={<Tile logo={exp.logo} icon={Briefcase} alt={`${exp.company} logo`} />}
              >
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
                    <p className="font-medium accent-text">
                      {exp.company}
                      {exp.employmentType && <span className="text-gray-400 font-normal"> · {exp.employmentType}</span>}
                    </p>
                  </div>
                  <span className="accent-chip">{formatDuration(monthsFor(exp))}</span>
                </div>

                <p className="text-sm text-gray-400 mt-1">
                  {formatPeriod(exp)}
                  {exp.location && <span> · {exp.location}</span>}
                </p>

                {exp.points.length > 0 && (
                  <ul className="mt-4 space-y-2 text-gray-300">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full accent-dot" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </section>
  );
}
