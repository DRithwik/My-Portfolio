// Coding platform profiles and stats.
// The numbers in `stats` are used on the Coding Platforms cards and in the
// About card, so change them here once and both update.

export const codingStatsLastUpdated = '2026-05'; // YYYY-MM, shown as "Last updated"

export const stats = {
  gfg: { instituteRank: 1, streakDays: 720 },
  interviewbit: { globalRank: 10 },
  code360: { vceTopperCount: 5, level: 7 },
  codechef: { streakDays: 550 },
  leetcode: { contestRating: 1548, badge: '300 Days Badge' },
};

export interface Platform {
  id: string;
  name: string;
  username: string;
  url: string;
  accent: string; // brand colour for the tile, glow and badges
  monogram: string; // short text shown in the tile
  logo?: string; // optional image in /public; replaces the monogram
  badges: string[];
}

export const platforms: Platform[] = [
  {
    id: 'gfg',
    name: 'GeeksforGeeks',
    username: 'rithwik_d',
    url: 'https://auth.geeksforgeeks.org/user/rithwik_d',
    accent: '#3fb26b',
    monogram: 'GfG',
    badges: [`Rank #${stats.gfg.instituteRank} in Institute (VCE)`, `${stats.gfg.streakDays}+ Days Streak`],
  },
  {
    id: 'interviewbit',
    name: 'InterviewBit',
    username: 'rithwik-d',
    url: 'https://www.interviewbit.com/profile/rithwik-d/',
    accent: '#3b9eff',
    monogram: 'IB',
    badges: [`Global Rank #${stats.interviewbit.globalRank}`],
  },
  {
    id: 'code360',
    name: 'Coding Ninjas',
    username: 'rithwik_d',
    url: 'https://www.naukri.com/code360/profile/e79ad955-af5d-4a19-beca-cb89b1e84273',
    accent: '#f7931e',
    monogram: 'CN',
    badges: [`${stats.code360.vceTopperCount} Times Topper (VCE)`, `Level ${stats.code360.level} in Code 360`],
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    username: 'rithwik007',
    url: 'https://www.codechef.com/users/rithwik007',
    accent: '#c08a5b',
    monogram: 'CC',
    badges: [`${stats.codechef.streakDays}+ Days Streak`],
  },
  {
    id: 'leetcode',
    name: 'LeetCode',
    username: 'd_rithwik',
    url: 'https://leetcode.com/u/d_rithwik/',
    accent: '#ffa116',
    monogram: 'LC',
    badges: [`Contest Rating: ${stats.leetcode.contestRating}`, stats.leetcode.badge],
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    username: 'rithwikdmail',
    url: 'https://www.hackerrank.com/profile/rithwikdmail',
    accent: '#2ec866',
    monogram: 'HR',
    badges: ['Problem Solving & DSA'],
  },
];

export const platformAccent = (id: string) => platforms.find((p) => p.id === id)?.accent ?? '#60a5fa';
