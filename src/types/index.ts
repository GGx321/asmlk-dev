export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  github?: string;
  image?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
}

export type SkillCategory = "frontend" | "backend" | "devops" | "tools";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  contact: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  error?: string;
}
