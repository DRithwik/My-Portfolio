// Who you are: name, links, About text, resume and contact copy.
import { stats } from './codingPlatforms';

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

// Highlights in the About card. The numbers come from codingPlatforms.ts;
// the current-role line is added automatically from experience.ts.
export const highlights = [
  `Rank ${stats.gfg.instituteRank} in Institute (VCE) on GeeksforGeeks`,
  `Interviewbit Global Rank : ${stats.interviewbit.globalRank}`,
  'Secured rank 326 in Job-A-Thon 36 Hiring Challenge',
  `${stats.gfg.streakDays}+ Days Coding Streak`,
  'Letter of Recommendation from IIT Bombay',
];

export const contact = {
  heading: "Let's Create Something Amazing Together",
  text: "I'm always excited to collaborate on new projects and bring innovative ideas to life. Whether you have a specific project in mind or just want to connect, I'd love to hear from you.",
};
