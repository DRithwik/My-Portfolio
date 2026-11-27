import React from 'react';
import { User, FileText, ExternalLink } from 'lucide-react';
import { totalMonths, currentRole, monthsFor, formatDuration } from '../data/experience';
import { aboutParagraphs, aboutStats, highlights, resume } from '../data/profile';
import { formatMonth, formatDurationShort } from '../lib/dates';
import CountUp from './ui/CountUp';
import Reveal from './ui/Reveal';

function StatTile({
  accent,
  label,
  delay,
  children,
}: {
  accent: string;
  label: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <Reveal delay={delay} className="glow-group">
      <div className="glow-card p-3 h-full" style={{ '--accent': accent } as React.CSSProperties}>
        <div className="text-2xl md:text-3xl font-bold accent-text tabular-nums leading-tight whitespace-nowrap">{children}</div>
        <p className="text-xs text-gray-400 mt-1 leading-snug">{label}</p>
      </div>
    </Reveal>
  );
}

export default function About() {
  const role = currentRole();
  // Time in the current role only (not the total across internships).
  const roleMonths = role ? monthsFor(role) : 0;
  const lines = role
    ? [`${role.role} at ${role.company} · ${formatDuration(roleMonths)}`, ...highlights]
    : highlights;

  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-12">
          <User className="text-blue-400" />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Reveal>
            {aboutParagraphs.map((text, i) => (
              <p
                key={i}
                className={`text-gray-300 leading-relaxed ${i < aboutParagraphs.length - 1 ? 'mb-6 ' : ''}text-lg`}
              >
                {text}
              </p>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <div>
              <div className="glow-card glow-self p-6" style={{ '--accent': '#60a5fa' } as React.CSSProperties}>
                <a href={resume.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-center gap-4 mb-2">
                    <FileText className="text-blue-400" size={24} />
                    <h3 className="text-xl font-semibold">My Resume</h3>
                  </div>
                </a>
                <p className="text-gray-300 mb-5">View my resume to know more about me :)</p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {aboutStats.map((s, i) => (
                    <StatTile key={s.label} accent={s.accent} label={s.label} delay={i * 80}>
                      {s.prefix}
                      <CountUp value={s.value} />
                      {s.suffix}
                    </StatTile>
                  ))}
                  {role ? (
                    <StatTile accent={role.accent ?? '#60a5fa'} label={`At ${role.company}`} delay={aboutStats.length * 80}>
                      {roleMonths < 12 ? (
                        <>
                          <CountUp value={roleMonths} /> mos
                        </>
                      ) : (
                        formatDurationShort(roleMonths)
                      )}
                    </StatTile>
                  ) : (
                    <StatTile accent="#60a5fa" label="Total experience" delay={aboutStats.length * 80}>
                      {formatDurationShort(totalMonths())}
                    </StatTile>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  {lines.map((line) => (
                    <div key={line} className="flex items-center gap-2">
                      <span className="w-2 h-2 shrink-0 bg-blue-400 rounded-full"></span>
                      <p className="text-gray-300">{line}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                >
                  View / Download Resume
                  <ExternalLink size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-gray-400 mt-2">Last updated: {formatMonth(resume.lastUpdated)}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
}
