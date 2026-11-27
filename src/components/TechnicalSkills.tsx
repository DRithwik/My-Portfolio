import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, ArrowUpRight } from 'lucide-react';
import { skillCategories, skillPath } from '../data/skills';
import Reveal from './ui/Reveal';
import Tile from './ui/Tile';

export default function TechnicalSkills() {
  const navigate = useNavigate();

  const open = (route: string) => {
    window.scrollTo(0, 0);
    navigate(route);
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Terminal className="text-blue-400" />
          <h2 className="text-3xl font-bold">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <Reveal key={category.slug} delay={(i % 2) * 120} className="glow-group h-full">
              <div
                role="link"
                tabIndex={0}
                onClick={() => open(skillPath(category))}
                onKeyDown={(e) => e.key === 'Enter' && open(skillPath(category))}
                className="glow-card p-6 h-full cursor-pointer"
                style={{ '--accent': category.accent } as React.CSSProperties}
              >
                <div className="flex items-center gap-4 mb-5">
                  <Tile icon={category.icon} size="md" />
                  <h3 className="text-xl font-semibold flex-1">{category.title}</h3>
                  <ArrowUpRight
                    size={20}
                    className="accent-text glow-arrow"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
