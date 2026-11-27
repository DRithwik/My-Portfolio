import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';
import { platforms, codingStatsLastUpdated } from '../data/codingPlatforms';
import { formatMonth } from '../lib/dates';
import Reveal from './ui/Reveal';
import Tile from './ui/Tile';

export default function CodingPlatforms() {
  return (
    <section id="coding-platforms" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-2">
            <Code2 className="text-blue-400" />
            <h2 className="text-3xl font-bold">Coding Platforms</h2>
          </div>
          <span className="text-sm text-gray-400">Last updated: {formatMonth(codingStatsLastUpdated)}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {platforms.map((platform, i) => (
            <Reveal key={platform.id} delay={(i % 2) * 120} className="glow-group h-full">
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-card p-6 h-full flex flex-col"
                style={{ '--accent': platform.accent } as React.CSSProperties}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Tile logo={platform.logo} text={platform.monogram} alt={platform.logo ? `${platform.name} logo` : ''} size="md" />
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold">{platform.name}</h3>
                    <p className="text-gray-400 text-sm">@{platform.username}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {platform.badges.map((badge) => (
                    <span key={badge} className="accent-chip">
                      {badge}
                    </span>
                  ))}
                </div>
                <span className="mt-auto inline-flex items-center gap-2 accent-text font-medium">
                  View Profile <ExternalLink size={16} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
