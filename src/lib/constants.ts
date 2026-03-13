import type { Project, Skill, SocialLink } from "@/types";

export const SITE_CONFIG = {
  name: "Alex Samoliuk"
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/GGx321", icon: "github" },
  { label: "Instagram", href: "https://www.instagram.com/asmlk.dev", icon: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/oleksandr-samoliuk-0ab1203b7", icon: "linkedin" },
];

export const SKILLS: Skill[] = [
  { name: "TypeScript", icon: "\u26A1", category: "frontend" },
  { name: "React", icon: "\u269B\uFE0F", category: "frontend" },
  { name: "Next.js", icon: "\u25B2", category: "frontend" },
  { name: "Tailwind CSS", icon: "\uD83C\uDFA8", category: "frontend" },
  { name: "Node.js", icon: "\uD83D\uDFE2", category: "backend" },
  { name: "NestJS", icon: "\uD83D\uDC08", category: "backend" },
  { name: "PostgreSQL", icon: "\uD83D\uDC18", category: "backend" },
  { name: "Prisma", icon: "🔷", category: "backend" },
  { name: "Redis", icon: "\uD83D\uDD34", category: "backend" },
  { name: "Docker", icon: "\uD83D\uDC33", category: "devops" },
  { name: "AWS", icon: "\u2601\uFE0F", category: "devops" },
  { name: "CI/CD", icon: "\uD83D\uDD04", category: "devops" },
  { name: "Web3 / DApps", icon: "🔗", category: "web3" },
  { name: "EVM / Solidity", icon: "⛓️", category: "web3" },
  { name: "TON", icon: "💎", category: "web3" },
  { name: "TRON", icon: "⚡", category: "web3" },
  { name: "Telegram Bots", icon: "🤖", category: "web3" },
  { name: "Mini Apps", icon: "📱", category: "web3" },
  { name: "Git", icon: "\uD83D\uDCE6", category: "tools" },
  { name: "Figma", icon: "🎯", category: "tools" },
  { name: "VS Code", icon: "💻", category: "tools" },
  { name: "Postman", icon: "📮", category: "tools" },
];

export const PROJECTS: Project[] = [
  {
    tags: ["React", "TypeScript", "TON Connect", "Telegram Mini App"],
  },
  {
    tags: ["Next.js", "NestJS", "PostgreSQL", "Multi-chain", "WebSocket"],
  },
  {
    tags: ["React", "TypeScript", "AI Integration", "REST API"],
  },
  {
    tags: ["Node.js", "Solidity", "EVM", "Multi-chain", "PostgreSQL"],
  },
  {
    tags: ["Node.js", "EVM", "Telegram Bot API", "Web3.js"],
  },
];

export const RATE_LIMIT = {
  windowMs: 30_000,
  maxRequests: 1,
} as const;
