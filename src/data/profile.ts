// Who you are: name, links, About text, resume and contact copy.
import { stats, platformAccent } from './codingPlatforms';

export const profile = {
  name: 'Rithwik Deshaboina',
  shortName: 'Rithwik',
  brand: 'Rithwik.tech',
  welcome: 'Welcome to my digital space',
  tagline: 'Turning Ideas into Code & Creativity into Reality',
  email: 'rithwikdmail@gmail.com',
  phone: '+91 7989585736',
  github: 'https://github.com/DRithwik',
  linkedin: 'https://www.linkedin.com/in/rithwik-d-865a6727a/',
};

export const resume = {
  url: 'https://drive.google.com/file/d/12IPn950yVC3ZPiXc0EGAT-buj4iWHu1s/view?usp=sharing',
  lastUpdated: '2026-05', // YYYY-MM
};

export const aboutParagraphs = [
  'I am an enthusiastic Software Development Engineer (SDE) in the process, and I like to solve challenging issues and provide meaningful solutions. The need to design efficient systems, data structures and love of algorithms drive me to have interest in software development.',
  'My coding abilities have been continuously developed by working over various coding sites such as GeeksforGeeks, CodeChef, and InterviewBit, Naukri Code360 where I have been on a streak of impressive results and answered various competitive coding challenges.',
  'Having an enhanced background of React and Next.js, a sense of creating a personality-based user-interfaces. I am eager to develop quality software that will change a difference.',
];

// About card. `aboutStats` are the big counting numbers (values come from
// codingPlatforms.ts); an Experience tile is added automatically from
// experience.ts. `highlights` are the short lines under them.
export interface AboutStat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  accent: string;
}

export const aboutStats: AboutStat[] = [
  { prefix: '#', value: stats.gfg.instituteRank, label: 'GFG rank in institute (VCE)', accent: platformAccent('gfg') },
  { prefix: '#', value: stats.interviewbit.globalRank, label: 'InterviewBit global rank', accent: platformAccent('interviewbit') },
  { value: stats.gfg.streakDays, suffix: '+', label: 'Days coding streak', accent: '#f97316' },
];

export const highlights = [
  'Secured rank 326 in Job-A-Thon 36 Hiring Challenge',
  'Letter of Recommendation from IIT Bombay',
];

export const contact = {
  heading: "Let's Create Something Amazing Together",
  text: "I'm always excited to collaborate on new projects and bring innovative ideas to life. Whether you have a specific project in mind or just want to connect, I'd love to hear from you.",
};
