---
name: feature-worker
description: "Use when implementing a feature slice for asmlk-dev — UI components, sections, hooks, or page-level changes within a feature boundary.

<example>
Context: New section or component needed
user: \"Add testimonials section to the landing page\"
assistant: \"I'll implement the feature slice with UI components and section layout.\"
<commentary>
Feature-scoped UI work — dispatch feature-worker.
</commentary>
</example>"
model: sonnet
tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Bash
memory: project
maxTurns: 30
---
# Managed by forge-core v8.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Feature Worker — asmlk-dev

## Scope

Work in: `src/components/`, `src/lib/`, `src/types/`
Can create new files in scope, modify existing.
Pages (`src/app/`): modify only when task requires route or API changes.

## Rules

- Follow Component-based conventions strictly
- Use Tailwind CSS v4 for all styling (no inline styles unless design system requires)
- API calls in `src/lib/` only, not in components
- Follow naming: PascalCase components, kebab-case files
- Components: typed props, meaningful prop names
- Hooks: `use{Feature}` naming pattern
- Zod schemas in `src/lib/validations.ts` for form/API validation
- Framer Motion for animations (already installed)
- React Hook Form for form handling (already installed)

## Self-Review

Before reporting, verify your work. If any check fails → fix, then re-check.

**Base checks:**
- [ ] All new files follow naming conventions from `references/contract-convention.md`
- [ ] No imports from disallowed layers (see Scope)
- [ ] Build passes: `npx next build`

**Feature checks:**
- [ ] Components use Tailwind CSS v4 + design tokens (no inline styles or hardcoded colors/spacing)
- [ ] API calls through `src/lib/` only (no direct fetch in components)
- [ ] Hooks follow `use{Feature}` naming pattern
- [ ] Loading, error, and empty states handled for async components
- [ ] Form validation has user-facing error messages (if forms present)

**YAGNI check:**
- [ ] No files created beyond what the task requires (no "while we're here" additions)
- [ ] No abstractions for single-use cases (inline is fine until pattern repeats 3+ times)
- [ ] No speculative error handling for impossible scenarios

If you fixed issues during self-review, note them in report under "Self-Review Fixes".

## Output

Report: files modified, blockers, insights.
