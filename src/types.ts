export interface StatItem {
  id: string;
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  description: string;
}

export interface SkillItem {
  name: string;
  category: 'Strategic' | 'Technical' | 'Analytical';
  description: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  clientType: string;
  duration: string;
  challenge: string;
  strategy: string[];
  result: string;
  longResult: string;
}

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
  colorFrom: string;
  colorTo: string;
}

export interface ToolItem {
  name: string;
  category: string;
  url?: string;
}

export interface ClientItem {
  id: string;
  name: string;
  logo: string;
  alt: string;
}
