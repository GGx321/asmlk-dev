# Managed by forge-core v8.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Quality Gates — asmlk-dev

## Verification Checklist

Run these checks before completing any feature. Severity determines action on failure.

| # | Check | Command / Method | Severity |
|---|-------|-----------------|----------|
| 1 | Build verification | `npx next build` | blocker |
| 2 | Lint | `npx eslint` | blocker |
| 3 | Secret scanning | Grep for API keys, tokens, passwords in staged files | blocker |
| 4 | Dependency audit | `npm audit` | warning |
| 5 | Lockfile committed | Verify `package-lock.json` is tracked | warning |
| 6 | Input validation | All API route inputs validated with Zod | blocker |
| 7 | Design token consistency | No hardcoded colors/spacing outside CSS variables | warning |
| 8 | Breakpoint coverage | UI tested at mobile (320px+), tablet (768px+), desktop (1024px+) | warning |
| 9 | Typography scale | Font sizes use design system scale, no arbitrary values | info |
| 10 | Component API hygiene | Props typed, no boolean soup (>3 booleans = refactor) | warning |

## Severity Levels

| Severity | Action |
|----------|--------|
| blocker | HALT — must fix before proceeding |
| warning | Report to user, continue if acknowledged |
| info | Note in summary, no action required |

## Mode Overrides

| Check | economy | balanced | quality |
|-------|---------|----------|---------|
| Build verification | run | run | run |
| Lint | skip | run | run |
| Secret scanning | run | run | run |
| Dependency audit | skip | skip | run |
| Lockfile committed | skip | run | run |
| Input validation | skip | run | run |
| Design token consistency | skip | run | run |
| Breakpoint coverage | skip | skip | run |
| Typography scale | skip | skip | run |
| Component API hygiene | skip | run | run |
