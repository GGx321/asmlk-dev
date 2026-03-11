# Managed by forge-core v8.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Contract & Naming Convention — asmlk-dev

## File Naming

| Category | Convention | Example |
|----------|-----------|---------|
| Files | kebab-case | `section-heading.tsx`, `contact-form.tsx` |
| Components | PascalCase named exports | `Hero`, `Button`, `ProjectCard` |
| Constants | UPPER_SNAKE_CASE | `SITE_CONFIG`, `NAV_LINKS`, `RATE_LIMIT` |
| Types/Interfaces | PascalCase | `Project`, `Skill`, `ContactFormData` |
| Schemas | camelCase | `contactFormSchema` |
| API routes | kebab-case dirs | `api/contact/route.ts` |

## Component Convention

```
src/components/{category}/{component-name}.tsx
```

- Named export: `export function ComponentName() {}`
- Props interface: `interface ComponentNameProps {}`
- Co-located styles via Tailwind CSS v4 utility classes

## Layer Structure

```
src/
  app/              # Next.js App Router pages & API routes
  components/
    sections/       # Page sections (Hero, About, Skills, Projects, Contact)
    ui/             # Reusable UI primitives (Button, Input, Card)
    layout/         # Header, Footer
  lib/              # Utils, validations, constants, Telegram API
  types/            # TypeScript interfaces
```

## Import Rules (Component-based)

- Components import from: `@/lib/*`, `@/types/*`, `@/components/ui/*`
- Sections import from: `@/components/ui/*`, `@/lib/*`, `@/types/*`
- Pages import from: `@/components/sections/*`, `@/components/layout/*`, `@/lib/*`
- Lib modules: no imports from `@/components/*`
- Types: no imports from other layers (pure type definitions)

## API Route Convention

- Routes return `{ success: boolean; error?: string }`
- Input validation via Zod schemas from `@/lib/validations.ts`
- Schemas shared between client and server

## Styling Convention

- Tailwind CSS v4 utility classes only
- CSS variables defined in `globals.css` for design tokens
- No inline styles unless design system specifically requires
- Responsive breakpoints: mobile → tablet → desktop
