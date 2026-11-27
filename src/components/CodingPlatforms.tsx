import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';
import { platforms, codingStatsLastUpdated } from '../data/codingPlatforms';
import { formatMonth } from '../lib/dates';

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
          {platforms.map((platform) => (
            <div key={platform.name} className="platform-card group">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                <p className="text-gray-400 mb-2">@{platform.username}</p>
                <p className="text-gray-300 mb-4">{platform.achievements}</p>
                <a 
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Profile <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
