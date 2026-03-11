# Portfolio — Fullstack Developer

Портфолио-сайт фуллстак разработчика с формой заявки через Telegram.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Notifications:** Telegram Bot API

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint

## Architecture

Single-page landing с секциями: Hero, About, Skills, Projects, Contact.

```
src/
  app/             # Next.js App Router pages & API routes
  components/
    sections/      # Page sections (hero, about, skills, projects, contact)
    ui/            # Reusable UI primitives (button, input, card, etc.)
    layout/        # Header, Footer
  lib/             # Utils, validations, constants, telegram API
  types/           # TypeScript interfaces
```

## Pipeline

- **Mode:** Sequential
- **Execution:** Balanced (adaptive)
- **Git workflow:** Trunk-based
- **Commits:** Conventional Commits (`feat:`, `fix:`, `docs:`, etc.)

## Conventions

- **Files:** kebab-case (`section-heading.tsx`)
- **Components:** PascalCase named exports (`Hero`, `Button`, `Card`)
- **Constants:** UPPER_SNAKE_CASE (`SITE_CONFIG`, `NAV_LINKS`)
- **Types/Interfaces:** PascalCase (`Project`, `Skill`, `ContactFormData`)
- **Schemas:** camelCase (`contactFormSchema`)
- **API routes:** kebab-case dirs (`api/contact/route.ts`)
- Styling: Tailwind utility classes, CSS variables in globals.css
- Validation: Zod schemas in `lib/validations.ts`, shared between client & server
- Config data (skills, projects, nav): `lib/constants.ts`
- API routes return `{ success: boolean; error?: string }`

## Quality Gates

- Build verification (`npm run build`)
- Secret scanning (no secrets in code)
- Dependency audit (`npm audit`)
- Input validation (Zod on API boundaries)
- Design token consistency (CSS variables)
- Responsive breakpoints (mobile/tablet/desktop)

## Environment Variables

Copy `.env.example` to `.env.local`:

- `TELEGRAM_BOT_TOKEN` — Telegram bot token from @BotFather
- `TELEGRAM_CHAT_ID` — Chat ID to receive messages
