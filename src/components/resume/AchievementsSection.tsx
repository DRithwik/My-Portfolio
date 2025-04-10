import React from 'react';
import { achievements } from './data';
export default function AchievementsSection() {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-blue-400">Achievements</h3>
      <div className="bg-gray-800/30 p-6 rounded-xl">
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
