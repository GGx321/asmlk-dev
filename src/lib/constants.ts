import type { Project, Skill, SocialLink } from "@/types";

export const SITE_CONFIG = {
  name: "Alex Samoliuk"
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "Telegram", href: "https://t.me", icon: "telegram" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
];

export const SKILLS: Skill[] = [
  { name: "TypeScript", icon: "\u26A1", category: "frontend" },
  { name: "React", icon: "\u269B\uFE0F", category: "frontend" },
  { name: "Next.js", icon: "\u25B2", category: "frontend" },
  { name: "Tailwind CSS", icon: "\uD83C\uDFA8", category: "frontend" },
  { name: "Node.js", icon: "\uD83D\uDFE2", category: "backend" },
  { name: "NestJS", icon: "\uD83D\uDC08", category: "backend" },
  { name: "PostgreSQL", icon: "\uD83D\uDC18", category: "backend" },
  { name: "Redis", icon: "\uD83D\uDD34", category: "backend" },
  { name: "Docker", icon: "\uD83D\uDC33", category: "devops" },
  { name: "AWS", icon: "\u2601\uFE0F", category: "devops" },
  { name: "CI/CD", icon: "\uD83D\uDD04", category: "devops" },
  { name: "Git", icon: "\uD83D\uDCE6", category: "tools" },
];

export const PROJECTS: Project[] = [
  {
    tags: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "WebSocket"],
    href: "https://example.com",
    github: "https://github.com",
  },
  {
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    href: "https://example.com",
    github: "https://github.com",
  },
  {
    tags: ["Next.js", "D3.js", "PostgreSQL", "Redis"],
    href: "https://example.com",
    github: "https://github.com",
  },
  {
    tags: ["Node.js", "Redis", "Docker", "Prometheus"],
    github: "https://github.com",
  },
];

export const RATE_LIMIT = {
  windowMs: 30_000,
  maxRequests: 1,
} as const;
