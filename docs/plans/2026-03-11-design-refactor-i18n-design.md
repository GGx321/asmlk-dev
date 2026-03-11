# Design Refactor: Frosted Glass + i18n

**Date:** 2026-03-11
**Branch:** `refactor/design-i18n`
**Status:** Approved

## Summary

Full visual refactor of the portfolio site to a frosted glass aesthetic in black/grey tones with Coral Red accent, plus bilingual support (Russian + English) via `next-intl` with URL-prefix routing and browser-based locale detection.

## Requirements

1. **Visual**: Frosted glass design — matte glass surfaces, minimal transparency, texture focus
2. **Palette**: Black/grey tones + Coral Red (`#EF4444`) CTA accent
3. **i18n**: `/ru` and `/en` URL prefixes, auto-detect browser locale, redirect from `/`
4. **Sections**: Same 5 sections (Hero, About, Skills, Projects, Contact), redesigned
5. **Hero photo**: Black-and-white photo, split layout (text left, photo right)
6. **Goal**: Converting fullstack developer portfolio

## Design System

### Color Tokens

| Token | Value | Purpose |
|-------|-------|---------|
| `--background` | `#09090b` | Main background (zinc-950) |
| `--foreground` | `#fafafa` | Primary text (zinc-50) |
| `--muted` | `#a1a1aa` | Secondary text (zinc-400) |
| `--border` | `rgba(255,255,255,0.08)` | Glass panel borders |
| `--card` | `rgba(255,255,255,0.04)` | Glass card backgrounds |
| `--card-hover` | `rgba(255,255,255,0.07)` | Card hover state |
| `--accent` | `#EF4444` | CTA buttons, key elements |
| `--accent-hover` | `#DC2626` | Hover on accent elements |
| `--glass-blur` | `12px` | Frosted glass blur amount |
| `--glass-border` | `rgba(255,255,255,0.1)` | Subtle white glass border |

### Frosted Glass Principles

- Cards: `backdrop-filter: blur(12px)`, bg `rgba(255,255,255,0.04)`, border `1px solid rgba(255,255,255,0.1)`
- No pronounced shadows — depth via transparency layers
- Background elements: subtle gradient spots (coral/grey) for "glow behind glass" effect
- Texture: barely visible noise pattern on background

### Typography

- Headings: Inter (bold, 700) — already connected
- Monospace: JetBrains Mono — already connected
- Scale: Tailwind defaults

## Component Design

### Header
- Frosted glass bar: `backdrop-blur-xl`, bg `rgba(9,9,11,0.8)`, bottom border `rgba(255,255,255,0.06)`
- Logo `<Alex />` — white, mono font
- Navigation — `text-muted`, hover → `text-foreground`
- Language switcher: `RU | EN` button right of nav, active locale highlighted

### Hero
- Split layout: text left, B&W photo right
- Photo: circle or rounded rectangle, thin glass border + subtle coral glow behind
- Background: subtle coral glow, muted, centered toward photo side
- Heading: large, bold, white. Subtitle: `text-muted`
- CTA: primary — filled coral red, secondary — glass card with border
- Mobile: photo top center, text below

### About
- Stat cards → frosted glass cards with thin border
- Numbers in cards — coral red accent
- Description text — `text-muted`

### Skills
- Categories → horizontal filters or vertical groups
- Skills → small frosted glass pill/badge
- Skill icons — `text-muted`, hover → `text-foreground`

### Projects
- Project cards → frosted glass with hover effect (brighter border, slight lift)
- Tags → small glass pills
- Demo/GitHub links → accent color

### Contact
- Form in frosted glass container
- Inputs: dark bg, thin border, focus → coral ring
- Submit button: filled coral red

### Footer
- Minimal: copyright + social links
- Top border `rgba(255,255,255,0.06)`

## i18n Architecture

### Library: `next-intl`

### File Structure
```
src/
  i18n/
    request.ts          # i18n config for server components
    routing.ts          # locale definitions, default locale
  messages/
    ru.json             # Russian translations
    en.json             # English translations
  app/
    [locale]/           # dynamic locale segment
      layout.tsx        # locale-aware layout
      page.tsx          # locale-aware page
  middleware.ts         # browser locale detection + redirect
```

### Routing
- `/` → auto-redirect to `/ru` or `/en` based on `Accept-Language` header
- `/ru` — Russian version
- `/en` — English version
- All internal links locale-aware via `next-intl` navigation helpers

### Translation Scope
- `SITE_CONFIG` labels
- `NAV_LINKS` labels
- All section headings and body text
- Form labels, placeholders, validation messages, success/error states
- Meta tags (title, description, OpenGraph)
- `SKILLS` names (keep as-is, tech names are universal)
- `PROJECTS` titles and descriptions

## Affected Files

### New Files
- `src/i18n/request.ts`
- `src/i18n/routing.ts`
- `src/messages/ru.json`
- `src/messages/en.json`
- `src/middleware.ts`
- `src/app/[locale]/layout.tsx`
- `src/app/[locale]/page.tsx`
- `public/images/hero-photo.jpg` (user provides)

### Modified Files
- `src/app/globals.css` — new design tokens
- `src/components/layout/header.tsx` — glass style + language switcher
- `src/components/layout/footer.tsx` — glass style
- `src/components/sections/hero.tsx` — split layout + photo + glass
- `src/components/sections/about.tsx` — glass cards
- `src/components/sections/skills.tsx` — glass pills
- `src/components/sections/projects.tsx` — glass cards
- `src/components/sections/contact.tsx` — glass form
- `src/components/ui/button.tsx` — coral accent variants
- `src/components/ui/card.tsx` — glass style
- `src/components/ui/input.tsx` — glass style
- `src/components/ui/textarea.tsx` — glass style
- `src/components/ui/section-heading.tsx` — updated style
- `src/lib/constants.ts` — extract translatable text
- `src/types/index.ts` — i18n types if needed
- `next.config.ts` — next-intl plugin
- `package.json` — add next-intl

### Removed Files
- `src/app/layout.tsx` (moved to `[locale]/layout.tsx`)
- `src/app/page.tsx` (moved to `[locale]/page.tsx`)
