"use client";

import { useTranslations } from "next-intl";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "Обо мне", href: "#about" },
  { label: "Навыки", href: "#skills" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакт", href: "#contact" },
];

const COLUMN_HEADING =
  "font-mono text-xs text-accent uppercase tracking-wider mb-4";
const LINK_STYLE =
  "text-sm text-muted hover:text-foreground transition-colors";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/6 bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-mono text-lg text-foreground">&lt;Alex /&gt;</p>
          <p className="mt-2 text-sm text-muted">
            Fullstack Developer. React, Node.js, TypeScript.
          </p>
        </div>

        <div>
          <h4 className={COLUMN_HEADING}>Навигация</h4>
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className={LINK_STYLE}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className={COLUMN_HEADING}>Контакты</h4>
          <div className="flex flex-col gap-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={LINK_STYLE}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/6">
        <p className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-muted">
          &copy; {year} {SITE_CONFIG.name}. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
