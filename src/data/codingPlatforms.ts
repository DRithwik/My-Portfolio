// Coding platform profiles and stats.
// Every number here is used in two places: the Coding Platforms cards and the
// highlights in the About card. Change it once and both update.

export const codingStatsLastUpdated = '2026-05'; // YYYY-MM, shown as "Last updated"

export const stats = {
  gfg: { instituteRank: 1, streakDays: 720 },
  interviewbit: { globalRank: 10 },
  code360: { vceTopperCount: 5, level: 7 },
  codechef: { streakDays: 550 },
  leetcode: { contestRating: 1548, badge: '300 Days Badge' },
};

export interface Platform {
  name: string;
  username: string;
  url: string;
  achievements: string;
}

export const platforms: Platform[] = [
  {
    name: 'GeeksforGeeks',
    username: 'rithwik_d',
    url: 'https://auth.geeksforgeeks.org/user/rithwik_d',
    achievements: `Rank #${stats.gfg.instituteRank} in Institute (VCE), ${stats.gfg.streakDays}+ Days Streak`,
  },
  {
    name: 'InterviewBit',
    username: 'rithwik-d',
    url: 'https://www.interviewbit.com/profile/rithwik-d/',
    achievements: `Global Rank #${stats.interviewbit.globalRank}`,
  },
  {
    name: 'Coding Ninjas',
    username: 'rithwik_d',
    url: 'https://www.naukri.com/code360/profile/e79ad955-af5d-4a19-beca-cb89b1e84273',
    achievements: `${stats.code360.vceTopperCount} Times Topper (VCE), Level ${stats.code360.level} in Code 360,`,
  },
  {
    name: 'CodeChef',
    username: 'rithwik007',
    url: 'https://www.codechef.com/users/rithwik007',
    achievements: `${stats.codechef.streakDays}+ Days Streak`,
  },
  {
    name: 'LeetCode',
    username: 'd_rithwik',
    url: 'https://leetcode.com/u/d_rithwik/',
    achievements: `Contest Rating: ${stats.leetcode.contestRating} | ${stats.leetcode.badge}`,
  },
  {
    name: 'HackerRank',
    username: 'rithwikdmail',
    url: 'https://www.hackerrank.com/profile/rithwikdmail',
    achievements: 'Problem Solving & DSA',
  },
];
