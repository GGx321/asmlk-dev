"use client";

import { useTranslations } from "next-intl";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/6 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between">
        <p className="text-sm text-muted">
          &copy; {year} {SITE_CONFIG.name}. {t("rights")}
        </p>

        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
