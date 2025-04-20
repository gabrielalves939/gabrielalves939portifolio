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
