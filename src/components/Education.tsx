import { GraduationCap } from 'lucide-react';
import { education, formatEducationPeriod, educationYears } from '../data/education';
import { Timeline, TimelineItem } from './ui/Timeline';
import Tile from './ui/Tile';

export default function Education() {
  const year = new Date().getFullYear();

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <GraduationCap className="text-blue-400" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>

        <Timeline>
          {education.map((edu) => {
            const ongoing = edu.end > year;
            const years = educationYears(edu);
            return (
              <TimelineItem
                key={edu.degree}
                accent={edu.accent}
                current={ongoing}
                tile={<Tile icon={edu.icon} />}
              >
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                      {ongoing && (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 text-xs font-medium">
                          Pursuing
                        </span>
                      )}
                    </div>
                    <p className="font-medium accent-text">{edu.institution}</p>
                  </div>
                  <span className="accent-chip">{edu.score}</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                  {formatEducationPeriod(edu)}
                  {years ? <span> · {years} yrs</span> : null}
                </p>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </section>
  );
}
