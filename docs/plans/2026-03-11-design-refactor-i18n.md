# Design Refactor + i18n Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refactor the portfolio site to a frosted glass aesthetic in black/grey tones with Coral Red accent, and add bilingual support (RU/EN) via `next-intl` with URL-prefix routing.

**Architecture:** `next-intl` handles i18n with `[locale]` dynamic segment in App Router. Translation files in `src/messages/{ru,en}.json`. Middleware auto-detects browser locale and redirects. Design tokens in CSS variables via Tailwind v4 `@theme inline`. All components updated to frosted glass style.

**Tech Stack:** Next.js 16, next-intl, Tailwind CSS v4, Framer Motion, React 19

---

## Task 1: Create Branch + Install Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Create git branch**

```bash
git checkout -b refactor/design-i18n
```

**Step 2: Install next-intl**

```bash
npm install next-intl
```

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add next-intl dependency"
```

---

## Task 2: Set Up i18n Infrastructure

**Files:**
- Create: `src/i18n/routing.ts`
- Create: `src/i18n/request.ts`
- Create: `src/i18n/navigation.ts`
- Create: `src/middleware.ts`
- Modify: `next.config.ts`

**Step 1: Create routing config**

File: `src/i18n/routing.ts`

```typescript
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ru', 'en'],
  defaultLocale: 'ru',
  localeDetection: true,
});
```

**Step 2: Create request config**

File: `src/i18n/request.ts`

```typescript
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as 'ru' | 'en')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

**Step 3: Create navigation helpers**

File: `src/i18n/navigation.ts`

```typescript
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
```

**Step 4: Create middleware**

File: `src/middleware.ts`

```typescript
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(ru|en)/:path*'],
};
```

**Step 5: Update next.config.ts**

File: `next.config.ts`

```typescript
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);
```

**Step 6: Commit**

```bash
git add src/i18n/ src/middleware.ts next.config.ts
git commit -m "feat: add next-intl i18n infrastructure"
```

---

## Task 3: Create Translation Files

**Files:**
- Create: `src/messages/ru.json`
- Create: `src/messages/en.json`

**Step 1: Create Russian translations**

File: `src/messages/ru.json`

All translatable strings from existing components: site config, nav, hero, about, skills, projects, contact, footer. Extract from current hardcoded Russian text in components and `constants.ts`.

**Step 2: Create English translations**

File: `src/messages/en.json`

Mirror structure of `ru.json` with English translations.

**Step 3: Commit**

```bash
git add src/messages/
git commit -m "feat: add RU/EN translation files"
```

---

## Task 4: Restructure App Directory for Locale Routing

**Files:**
- Create: `src/app/[locale]/layout.tsx`
- Create: `src/app/[locale]/page.tsx`
- Modify: `src/app/layout.tsx` (becomes minimal root)
- Move: `src/app/api/contact/route.ts` stays in place (API routes are not locale-prefixed)

**Step 1: Create locale layout**

File: `src/app/[locale]/layout.tsx`

Move existing layout.tsx logic here. Add `NextIntlClientProvider`, set `html lang` dynamically, locale-aware metadata.

**Step 2: Create locale page**

File: `src/app/[locale]/page.tsx`

Move existing page.tsx logic here. Pass locale to sections.

**Step 3: Simplify root layout**

File: `src/app/layout.tsx`

Minimal root layout (just children passthrough, no html/body — those are in `[locale]/layout.tsx`).

**Step 4: Verify build**

```bash
npm run build
```

Expected: Build succeeds, `/ru` and `/en` routes work.

**Step 5: Commit**

```bash
git add src/app/
git commit -m "feat: restructure app directory for locale routing"
```

---

## Task 5: Update Design Tokens

**Files:**
- Modify: `src/app/globals.css`

**Step 1: Update CSS variables and theme**

Replace current color tokens with frosted glass palette:
- `--background: #09090b`
- `--foreground: #fafafa`
- `--muted: #a1a1aa`
- `--border: rgba(255,255,255,0.08)`
- `--card: rgba(255,255,255,0.04)`
- `--card-hover: rgba(255,255,255,0.07)`
- `--accent: #EF4444`
- `--accent-hover: #DC2626`
- `--glass-blur: 12px`
- `--glass-border: rgba(255,255,255,0.1)`

Add utility classes for glass effects: `.glass-card`, `.glass-surface`.

**Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: update design tokens to frosted glass palette"
```

---

## Task 6: Update UI Components

**Files:**
- Modify: `src/components/ui/button.tsx`
- Modify: `src/components/ui/card.tsx`
- Modify: `src/components/ui/input.tsx`
- Modify: `src/components/ui/textarea.tsx`
- Modify: `src/components/ui/section-heading.tsx`

**Step 1: Update button** — coral red primary, glass secondary/ghost variants.

**Step 2: Update card** — frosted glass styling with backdrop-blur.

**Step 3: Update input** — dark bg, thin border, coral focus ring.

**Step 4: Update textarea** — same as input.

**Step 5: Update section-heading** — adjust to new palette.

**Step 6: Commit**

```bash
git add src/components/ui/
git commit -m "feat: update UI components to frosted glass style"
```

---

## Task 7: Update Layout Components + Language Switcher

**Files:**
- Modify: `src/components/layout/header.tsx`
- Modify: `src/components/layout/footer.tsx`
- Create: `src/components/ui/language-switcher.tsx`

**Step 1: Create language switcher component**

`RU | EN` toggle that uses `next-intl` navigation to switch locale.

**Step 2: Update header** — frosted glass bar, add language switcher.

**Step 3: Update footer** — glass style, thin top border.

**Step 4: Commit**

```bash
git add src/components/layout/ src/components/ui/language-switcher.tsx
git commit -m "feat: update layout + add language switcher"
```

---

## Task 8: Update Hero Section

**Files:**
- Modify: `src/components/sections/hero.tsx`

**Step 1: Implement split layout** — text left, photo right.

**Step 2: Add B&W photo** — circle/rounded with glass border, coral glow behind.

**Step 3: Replace gradient orbs** — subtle coral background glow.

**Step 4: Wire translations** — `useTranslations('hero')`.

**Step 5: Mobile responsive** — photo top, text below.

**Step 6: Commit**

```bash
git add src/components/sections/hero.tsx
git commit -m "feat: redesign hero section with photo + glass"
```

---

## Task 9: Update About Section

**Files:**
- Modify: `src/components/sections/about.tsx`

**Step 1: Frosted glass stat cards** — glass bg, thin border, coral numbers.

**Step 2: Wire translations** — `useTranslations('about')`.

**Step 3: Commit**

```bash
git add src/components/sections/about.tsx
git commit -m "feat: redesign about section with glass cards"
```

---

## Task 10: Update Skills Section

**Files:**
- Modify: `src/components/sections/skills.tsx`

**Step 1: Glass pill badges** — frosted glass pills for each skill.

**Step 2: Wire translations** — `useTranslations('skills')`.

**Step 3: Commit**

```bash
git add src/components/sections/skills.tsx
git commit -m "feat: redesign skills section with glass pills"
```

---

## Task 11: Update Projects Section

**Files:**
- Modify: `src/components/sections/projects.tsx`

**Step 1: Glass project cards** — frosted glass with hover effects.

**Step 2: Glass tag pills** — smaller glass badges for tech tags.

**Step 3: Wire translations** — `useTranslations('projects')`.

**Step 4: Commit**

```bash
git add src/components/sections/projects.tsx
git commit -m "feat: redesign projects section with glass cards"
```

---

## Task 12: Update Contact Section

**Files:**
- Modify: `src/components/sections/contact.tsx`

**Step 1: Glass form container** — frosted glass wrapper.

**Step 2: Updated inputs** — dark bg, thin border, coral focus.

**Step 3: Wire translations** — form labels, placeholders, messages.

**Step 4: Commit**

```bash
git add src/components/sections/contact.tsx
git commit -m "feat: redesign contact section with glass form"
```

---

## Task 13: Update Constants + Types

**Files:**
- Modify: `src/lib/constants.ts`
- Modify: `src/types/index.ts`

**Step 1: Remove hardcoded translatable text** from constants. Keep structural data (links, tech stacks, project metadata). Move display text to translation files.

**Step 2: Update types** if needed for i18n.

**Step 3: Commit**

```bash
git add src/lib/ src/types/
git commit -m "refactor: extract translatable text from constants"
```

---

## Task 14: Final Verification

**Step 1: Build verification**

```bash
npm run build
```

Expected: Build succeeds without errors.

**Step 2: Lint check**

```bash
npm run lint
```

Expected: No new lint errors.

**Step 3: Manual verification**

```bash
npm run dev
```

Check:
- `/` redirects to `/ru` or `/en` based on browser
- `/ru` shows Russian text
- `/en` shows English text
- Language switcher works
- All sections have frosted glass styling
- Coral red accent on CTA buttons
- Hero photo displays correctly (once user provides image)
- Mobile responsive layout
- Contact form submits correctly

**Step 4: Final commit (if any fixes needed)**

```bash
git add .
git commit -m "fix: address verification issues"
```
