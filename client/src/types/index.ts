export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export type ProjectCategory = "all" | "web" | "mobile" | "ui";

export interface Skill {
  name: string;
  percentage: number;
  color?: string;
  level?: string;
}

export interface SkillCategory {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconBgClass: string;
  iconColorClass: string;
  skills: Skill[];
}

export interface Technology {
  name: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  inProgress: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  duration: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}
