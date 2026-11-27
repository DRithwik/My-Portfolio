// Education, newest first. `start` is optional (leave it out for a single year).
// `accent` colours the tile, name and hover glow; `icon` is shown in the tile.
import { GraduationCap, BookOpen, School, type LucideIcon } from 'lucide-react';

export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  start?: number;
  end: number;
  accent: string;
  icon: LucideIcon;
}

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'Vardhaman College of Engineering',
    score: 'C.G.P.A: 8.1/10',
    start: 2022,
    end: 2026,
    accent: '#60a5fa',
    icon: GraduationCap,
  },
  {
    degree: 'Intermediate',
    institution: 'Sri Chaitanya Junior College',
    score: 'Marks: 921/1000',
    start: 2020,
    end: 2022,
    accent: '#a78bfa',
    icon: BookOpen,
  },
  {
    degree: 'Metriculation',
    institution: 'Dr. KKR Gowtham Concept School',
    score: 'G.P.A: 10/10',
    end: 2020,
    accent: '#34d399',
    icon: School,
  },
];

/** "2022 - 2026"; adds "(Expected)" while the end year is still ahead. */
export function formatEducationPeriod(item: EducationItem, now: Date = new Date()): string {
  const range = item.start ? `${item.start} - ${item.end}` : `${item.end}`;
  return item.end > now.getFullYear() ? `${range} (Expected)` : range;
}

/** Number of years, e.g. 4 for 2022-2026; undefined for a single year. */
export function educationYears(item: EducationItem): number | undefined {
  return item.start ? item.end - item.start : undefined;
}
