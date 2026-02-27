export interface SkillCategory {
  coreCS: string[];
  languages: string[];
  web: string[];
  data: string[];
  cloud: string[];
  testing: string[];
  other: string[];
}

export interface RoundChecklistItem {
  roundTitle: string;
  items: string[];
}

export interface DayPlan {
  day: string;
  focus: string;
  tasks: string[];
}

export interface RoundMapping {
  roundTitle: string;
  focusAreas: string[];
  whyItMatters: string;
}

export interface AnalysisEntry {
  id: string;
  createdAt: string;
  company: string;
  role: string;
  jdText: string;
  extractedSkills: SkillCategory;
  roundMapping: RoundMapping[];
  checklist: RoundChecklistItem[];
  plan7Days: DayPlan[];
  questions: string[];
  baseScore: number;
  skillConfidenceMap: Record<string, 'know' | 'practice'>;
  finalScore: number;
  updatedAt: string;
  companyIntel?: {
    name: string;
    industry: string;
    size: 'Startup' | 'Mid-size' | 'Enterprise';
    hiringFocus: string;
  };
}