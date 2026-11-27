// Single source of truth for work experience.
// Dates are "YYYY-MM". Leave `end` undefined for a current role.
// Durations are counted in whole months, inclusive of both start and end
// month (same as LinkedIn: May 2026 – Nov 2026 = 7 mos), and are recomputed
// from today's date, so they tick up automatically every month.

export interface ExperienceItem {
  role: string;
  company: string;
  employmentType?: string;
  location?: string;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM, omit if current
  logo?: string; // path under /public
  accent?: string; // brand colour used for glow and company name
  points: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Associate Software Engineer',
    company: 'FPT Software',
    employmentType: 'Full-time',
    location: 'Hyderabad, Telangana, India · On-site',
    start: '2026-05',
    logo: '/logos/fpt.png',
    accent: '#f58a3c',
    points: [],
  },
  {
    role: 'Software Developer Intern',
    company: 'Inventiglobe Pvt. Ltd.',
    employmentType: 'Internship',
    location: 'Madhapur, Hyderabad · On-site',
    start: '2025-08',
    logo: '/logos/inventiglobe.png',
    accent: '#5ec8b9',
    end: '2026-01',
    points: [
      'Developed and improved features for the HR management page, streamlining company workflows.',
      'Assisted in building and deploying client websites, focusing on user-friendly design and functionality.',
      'Enhanced web development skills and gained real-world project experience through team collaboration.',
      'Learned effective communication and problem-solving in a professional environment.',
      'Built practical skills in teamwork, web technologies, and real-world problem solving.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'TechnoHacks Solution Pvt. Ltd.',
    start: '2025-01',
    logo: '/logos/technohacks.png',
    accent: '#c04ef0',
    end: '2025-03',
    points: [
      'Developed and maintained scalable web applications using React.js and Node.js',
      'Collaborated with designers and backend developers to implement new features',
      'Enhanced application performance through optimization techniques',
      'Integrated RESTful APIs and ensured seamless data flow between client and server',
      'Participated in code reviews and contributed to team-wide best practices',
    ],
  },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2025-08" -> absolute month index (year * 12 + month0) */
function toIndex(ym: string): number {
  const [y, m] = ym.split('-').map(Number);
  return y * 12 + (m - 1);
}

function currentIndex(now: Date = new Date()): number {
  return now.getFullYear() * 12 + now.getMonth();
}

function endIndex(item: ExperienceItem, now?: Date): number {
  return item.end ? toIndex(item.end) : currentIndex(now);
}

/** Inclusive month count for one role. */
export function monthsFor(item: ExperienceItem, now?: Date): number {
  return Math.max(0, endIndex(item, now) - toIndex(item.start) + 1);
}

/** Total months across all roles; overlapping months are counted once. */
export function totalMonths(items: ExperienceItem[] = experiences, now?: Date): number {
  const months = new Set<number>();
  for (const item of items) {
    for (let i = toIndex(item.start); i <= endIndex(item, now); i++) months.add(i);
  }
  return months.size;
}

/** 7 -> "7 mos", 12 -> "1 yr", 16 -> "1 yr 4 mos" */
export function formatDuration(months: number): string {
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts: string[] = [];
  if (y) parts.push(`${y} yr${y > 1 ? 's' : ''}`);
  if (m || !y) parts.push(`${m} mo${m === 1 ? '' : 's'}`);
  return parts.join(' ');
}

/** "2025-08" -> "Aug 2025" */
export function formatMonth(ym: string): string {
  const [y, m] = ym.split('-').map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

export function formatPeriod(item: ExperienceItem): string {
  return `${formatMonth(item.start)} – ${item.end ? formatMonth(item.end) : 'Present'}`;
}
