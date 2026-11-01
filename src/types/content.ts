export type Locale = "pt" | "en";

export type LocalizedText = Record<Locale, string>;

export interface ProjectLink {
  label: LocalizedText;
  href: string;
}

export interface PricingPlan {
  name: string;
  price: LocalizedText;
}

export type ProjectStatus = "live" | "in-development" | "concept";

export interface ProjectEntry {
  slug: string;
  name: string;
  status: ProjectStatus;
  tagline: LocalizedText;
  description: LocalizedText[];
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
  playful?: boolean;
  period?: LocalizedText;
  highlights?: LocalizedText[];
  pricing?: PricingPlan[];
  hasArchitectureDiagram?: boolean;
}

export interface ExperienceEntry {
  company: string;
  role: LocalizedText;
  period: LocalizedText;
  bullets: LocalizedText[];
}

export interface SkillGroup {
  title: LocalizedText;
  items: string[];
}

export interface StatEntry {
  value: string;
  label: LocalizedText;
}
