// Month-based date helpers shared by every data file.
// Dates are written as "YYYY-MM" strings.

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2025-08" -> absolute month index (year * 12 + month0) */
export function toIndex(ym: string): number {
  const [y, m] = ym.split('-').map(Number);
  return y * 12 + (m - 1);
}

export function currentIndex(now: Date = new Date()): number {
  return now.getFullYear() * 12 + now.getMonth();
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
