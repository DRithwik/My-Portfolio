import React from 'react';
import { ExternalLink } from 'lucide-react';
import { profiles } from './data';

export default function ProfilesSection() {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6 text-blue-400">Profile Links</h3>
      <div className="bg-gray-800/30 p-6 rounded-xl">
        <div className="flex flex-wrap gap-4">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              {profile.name}
              <ExternalLink size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}