export interface Project {
  tags: string[];
  href?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
}

export type SkillCategory = "frontend" | "backend" | "devops" | "web3" | "tools";

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
