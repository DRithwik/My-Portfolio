import { Book, Briefcase, Award, Code2 } from 'lucide-react';
import type { ResumeSection } from './types';

export const resumeSections: ResumeSection[] = [
  {
    title: 'Education',
    icon: Book,
    items: [
      {
        title: 'B.Tech in Computer Science & Engineering',
        organization: 'Vardhaman College of Engineering',
        period: '2022 - 2026',
        details: ['CGPA: 8.1/10', 'Data Structures and Algorithms', 'Web Development']
      },
      {
        title: 'Intermediate',
        organization: 'Sri Chaitanya Junior College',
        period: '2020 - 2022',
        details: ['Marks: 921/1000']
      }
    ]
  },
  {
    title: 'Experience',
    icon: Briefcase,
    items: [
      {
        title: 'Cyber Security Intern',
        organization: 'National Institute of Electronics & Information Technology (NIELIT)',
        period: 'August 2024 – October 2024',
        details: [
          'Gained practical experience in Cybersecurity and Ethical Hacking',
          'Completed hands-on projects in risk assessment and penetration testing',
          'Developed expertise in cryptography and network security',
          'Created a Blockchain-Based EHR Management system',
          'Implemented secure authentication systems',
          'Conducted vulnerability assessments and security audits'
        ]
      }
    ]
  },
  {
    title: 'Technical Skills',
    icon: Code2,
    items: [
      {
        title: 'Programming Languages',
        details: ['C++', 'JavaScript', 'Python', 'TypeScript']
      },
      {
        title: 'Web Technologies',
        details: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB']
      },
      {
        title: 'Other Skills',
        details: ['Data Structures', 'Algorithms', 'System Design', 'Blockchain']
      }
    ]
  },
  {
    title: 'Achievements',
    icon: Award,
    items: [
      {
        title: 'Competitive Programming',
        details: [
          'Rank 1 in Institute (VCE) on GeeksforGeeks',
          'Secured rank 326 in Job-A-Thon 36 Hiring Challenge | Geeks for Geeks Contest',
          '210+ Days Streak on GeeksforGeeks',
          '150+ Days Streak on CodeChef',
          'Consistent Problem Solving on LeetCode',
          'Advanced Problem Solver on Coding Ninjas',
          'Regular contributor to open-source projects'
        ]
      }
    ]
  }
];