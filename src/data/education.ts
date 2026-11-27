// Education, newest first. `start` is optional (leave it out for a single year).
export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  start?: number;
  end: number;
}

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'Vardhaman College of Engineering',
    score: 'C.G.P.A: 8.1/10',
    start: 2022,
    end: 2026,
  },
  {
    degree: 'Intermediate',
    institution: 'Sri Chaitanya Junior College',
    score: 'Marks: 921/1000',
    start: 2020,
    end: 2022,
  },
  {
    degree: 'Metriculation',
    institution: 'Dr. KKR Gowtham Concept School',
    score: 'G.P.A: 10/10',
    end: 2020,
  },
];

/** "2022 - 2026"; adds "(Expected)" while the end year is still ahead. */
export function formatEducationPeriod(item: EducationItem, now: Date = new Date()): string {
  const range = item.start ? `${item.start} - ${item.end}` : `${item.end}`;
  return item.end > now.getFullYear() ? `${range} (Expected)` : range;
}
