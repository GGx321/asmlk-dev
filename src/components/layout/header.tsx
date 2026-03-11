"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SITE_CONFIG } from "@/lib/constants";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

const NAV_ITEMS = [
  { key: "about" as const, href: "#about" },
  { key: "skills" as const, href: "#skills" },
  { key: "projects" as const, href: "#projects" },
  { key: "contact" as const, href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");

  return (
    <header className="glass-surface fixed top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-lg font-bold tracking-tight text-foreground"
        >
          {`<${SITE_CONFIG.name.split(" ")[0]} />`}
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label={t("menu")}
          >
            <span
              className={`h-0.5 w-6 bg-foreground transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-foreground transition-opacity ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-foreground transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/6 bg-[rgba(9,9,11,0.95)] backdrop-blur-xl md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-sm text-muted transition-colors hover:text-foreground"
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
