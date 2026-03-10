import type { NavLink, Project, Skill, SocialLink } from "@/types";

export const SITE_CONFIG = {
  name: "Alex Developer",
  role: "Fullstack Developer",
  description:
    "Создаю современные веб-приложения от идеи до продакшена. TypeScript, React, Node.js и облачные технологии.",
  email: "hello@example.com",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Обо мне", href: "#about" },
  { label: "Навыки", href: "#skills" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакт", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "Telegram", href: "https://t.me", icon: "telegram" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
];

export const SKILLS: Skill[] = [
  { name: "TypeScript", icon: "⚡", category: "frontend" },
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "Next.js", icon: "▲", category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend" },
  { name: "Node.js", icon: "🟢", category: "backend" },
  { name: "NestJS", icon: "🐈", category: "backend" },
  { name: "PostgreSQL", icon: "🐘", category: "backend" },
  { name: "Redis", icon: "🔴", category: "backend" },
  { name: "Docker", icon: "🐳", category: "devops" },
  { name: "AWS", icon: "☁️", category: "devops" },
  { name: "CI/CD", icon: "🔄", category: "devops" },
  { name: "Git", icon: "📦", category: "tools" },
];

export const PROJECTS: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Маркетплейс с микросервисной архитектурой, системой оплаты и real-time уведомлениями.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "WebSocket"],
    href: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "Канбан-доска с drag-and-drop, коллаборацией в реальном времени и интеграцией с Telegram.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    href: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Дашборд аналитики с визуализацией данных, фильтрами и экспортом отчётов.",
    tags: ["Next.js", "D3.js", "PostgreSQL", "Redis"],
    href: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "API Gateway",
    description:
      "Высоконагруженный API Gateway с rate limiting, кешированием и мониторингом.",
    tags: ["Node.js", "Redis", "Docker", "Prometheus"],
    github: "https://github.com",
  },
];

export const SKILL_CATEGORIES: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  devops: "DevOps",
  tools: "Инструменты",
};

export const RATE_LIMIT = {
  windowMs: 30_000,
  maxRequests: 1,
} as const;
