export interface ResumeItem {
  title: string;
  organization?: string;
  period?: string;
  details: string[];
}

export interface ResumeSection {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  items: ResumeItem[];
}