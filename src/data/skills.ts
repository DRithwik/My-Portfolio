// Technical skills: the cards on the home page and the page each card opens
// (/skills/<slug>). A page is a list of sections of three kinds:
//   cards  - titled cards with bullet lists ('stack' = one per row, 'grid' = two columns)
//   certs  - certification cards with provider and skill badges
//   notes  - one card of short titled notes
import { Code2, Globe, Brain, Blocks, Server, type LucideIcon } from 'lucide-react';

export type SkillSection =
  | { kind: 'cards'; title: string; layout: 'stack' | 'grid'; cards: { title: string; items: string[] }[] }
  | { kind: 'certs'; title: string; certs: { name: string; provider: string; skills: string[] }[] }
  | { kind: 'notes'; title: string; notes: { title: string; text: string }[] };

export interface SkillCategory {
  slug: string;
  title: string; // card title on the home page
  accent: string; // brand colour for the card and its page
  icon: LucideIcon; // card icon
  skills: string[]; // badges on the home page card
  page: {
    title: string;
    icon: LucideIcon;
    sections: SkillSection[];
  };
}

export const skillCategories: SkillCategory[] = [
  {
    slug: 'frontend',
    accent: '#38bdf8',
    title: 'Frontend Development',
    icon: Code2,
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SCSS/SASS', 'HTML5/CSS3', 'Redux', 'Material UI'],
    page: {
      title: 'Frontend Development',
      icon: Code2,
      sections: [
        {
          kind: 'cards',
          title: 'Learning Roadmap',
          layout: 'stack',
          cards: [
            {
              title: 'Fundamentals',
              items: [
                'HTML5 - Semantic elements, forms, validation',
                'CSS3 - Flexbox, Grid, Animations',
                'JavaScript - ES6+, DOM manipulation',
                'Responsive Design principles',
              ],
            },
            {
              title: 'React Ecosystem',
              items: ['React.js Core Concepts', 'Hooks and State Management', 'Component Lifecycle', 'Context API & Redux'],
            },
            {
              title: 'Next.js & Advanced',
              items: ['Server-Side Rendering', 'Static Site Generation', 'API Routes', 'Performance Optimization'],
            },
          ],
        },
        {
          kind: 'cards',
          title: 'Essential Tools',
          layout: 'grid',
          cards: [
            { title: 'Development Tools', items: ['VS Code', 'Chrome DevTools', 'Git', 'npm/yarn'] },
            { title: 'UI Libraries', items: ['Tailwind CSS', 'Material UI', 'Styled Components', 'Framer Motion'] },
          ],
        },
        {
          kind: 'notes',
          title: 'Best Practices',
          notes: [
            { title: 'Component Architecture', text: 'Build reusable, maintainable components following SOLID principles' },
            { title: 'Performance Optimization', text: 'Implement code splitting, lazy loading, and proper state management' },
            { title: 'Accessibility', text: 'Follow WCAG guidelines and implement proper ARIA attributes' },
          ],
        },
      ],
    },
  },
  {
    slug: 'backend',
    accent: '#34d399',
    title: 'Backend Development',
    icon: Globe,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Mongoose', 'SQL', 'JWT', 'WebSocket'],
    page: {
      title: 'Backend Development',
      icon: Server,
      sections: [
        {
          kind: 'cards',
          title: 'Learning Roadmap',
          layout: 'stack',
          cards: [
            {
              title: 'Fundamentals',
              items: ['Node.js Core Concepts', 'Express.js Framework', 'RESTful API Design', 'Database Design'],
            },
            {
              title: 'Database Management',
              items: ['MongoDB & Mongoose', 'SQL Fundamentals', 'Data Modeling', 'Query Optimization'],
            },
            {
              title: 'Advanced Concepts',
              items: ['Authentication & Authorization', 'API Security', 'WebSockets', 'Microservices Architecture'],
            },
          ],
        },
        {
          kind: 'cards',
          title: 'Essential Tools',
          layout: 'grid',
          cards: [
            { title: 'Development Tools', items: ['Postman', 'MongoDB Compass', 'Docker', 'PM2'] },
            { title: 'Security Tools', items: ['JWT', 'Helmet.js', 'OAuth 2.0', 'Rate Limiting'] },
          ],
        },
        {
          kind: 'notes',
          title: 'Best Practices',
          notes: [
            { title: 'API Design', text: 'Follow RESTful principles and implement proper error handling' },
            { title: 'Security', text: 'Implement authentication, authorization, and data validation' },
            { title: 'Performance', text: 'Optimize database queries and implement caching strategies' },
          ],
        },
      ],
    },
  },
  {
    slug: 'cs-fundamentals',
    accent: '#a78bfa',
    title: 'CS Fundamentals',
    icon: Brain,
    skills: ['Data Structures', 'Algorithms', 'OOPS', 'Operating Systems', 'DBMS', 'Computer Networks', 'System Design'],
    page: {
      title: 'CS Fundamentals',
      icon: Brain,
      sections: [
        {
          kind: 'cards',
          title: 'Learning Roadmap',
          layout: 'stack',
          cards: [
            {
              title: 'Data Structures',
              items: ['Arrays and Strings', 'Linked Lists', 'Trees and Graphs', 'Hash Tables', 'Heaps and Priority Queues'],
            },
            {
              title: 'Algorithms',
              items: ['Sorting and Searching', 'Dynamic Programming', 'Graph Algorithms', 'Greedy Algorithms', 'Backtracking'],
            },
            {
              title: 'System Design',
              items: ['Scalability', 'Load Balancing', 'Caching', 'Database Sharding', 'Microservices'],
            },
          ],
        },
        {
          kind: 'cards',
          title: 'Learning Resources',
          layout: 'grid',
          cards: [
            { title: 'Learning Platforms', items: ['GeeksforGeeks', 'LeetCode', 'InterviewBit', 'System Design Primer'] },
            {
              title: 'Books',
              items: [
                'Introduction to Algorithms',
                'Cracking the Coding Interview',
                'Clean Code',
                'Designing Data-Intensive Applications',
              ],
            },
          ],
        },
        {
          kind: 'notes',
          title: 'Problem Solving Approach',
          notes: [
            { title: 'Understanding the Problem', text: 'Break down complex problems into smaller, manageable parts' },
            { title: 'Pattern Recognition', text: 'Identify common patterns and apply appropriate algorithms' },
            { title: 'Optimization', text: 'Analyze time and space complexity to improve efficiency' },
          ],
        },
      ],
    },
  },
  {
    slug: 'other',
    accent: '#f59e0b',
    title: 'Other Skills',
    icon: Blocks,
    skills: ['Git/GitHub', 'Docker', 'AWS', 'Blockchain', 'Ethereum', 'Smart Contracts', 'Ethical Hacking', 'Penetration Testing'],
    page: {
      title: 'Other Technical Skills',
      icon: Blocks,
      sections: [
        {
          kind: 'cards',
          title: 'Skill Categories',
          layout: 'stack',
          cards: [
            {
              title: 'DevOps & Cloud',
              items: ['Git Version Control', 'Docker Containerization', 'AWS Services', 'CI/CD Pipelines'],
            },
            { title: 'Blockchain', items: ['Ethereum Development', 'Smart Contracts', 'Web3.js', 'Solidity'] },
            {
              title: 'Cybersecurity',
              items: ['Ethical Hacking', 'Penetration Testing', 'Network Security', 'Security Auditing'],
            },
          ],
        },
        {
          kind: 'certs',
          title: 'Certifications & Training',
          certs: [
            { name: 'AWS Certified Developer', provider: 'Amazon Web Services', skills: ['EC2', 'S3', 'Lambda', 'DynamoDB'] },
            {
              name: 'Certified Ethical Hacker',
              provider: 'EC-Council',
              skills: ['Penetration Testing', 'Security Analysis', 'Vulnerability Assessment'],
            },
            {
              name: 'Blockchain Developer',
              provider: 'Ethereum Foundation',
              skills: ['Smart Contracts', 'DApps', 'Tokenization'],
            },
          ],
        },
        {
          kind: 'notes',
          title: 'Project Experience',
          notes: [
            { title: 'Cloud-Native Applications', text: 'Deployed and managed applications on AWS infrastructure' },
            { title: 'Blockchain Solutions', text: 'Developed smart contracts and DApps on Ethereum network' },
            { title: 'Security Assessments', text: 'Conducted security audits and penetration testing' },
          ],
        },
      ],
    },
  },
];

export const skillPath = (c: SkillCategory) => `/skills/${c.slug}`;
