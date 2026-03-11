"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string): void {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1.5 text-sm">
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-muted/30">|</span>}
          <button
            type="button"
            onClick={() => switchLocale(l)}
            className={`transition-colors ${
              locale === l
                ? "text-foreground font-medium"
                : "text-muted hover:text-foreground"
            }`}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
