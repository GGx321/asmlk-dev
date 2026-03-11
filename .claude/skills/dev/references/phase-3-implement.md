# Managed by forge-core v8.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Phase 3: Implement (GREEN) — asmlk-dev

### core.3.20: Implement feature-by-feature

Implement solutions that work for all valid inputs, not just test cases. Do not hard-code values or create solutions only for specific test inputs.

Order of implementation (Component-based):
1. **Types/Interfaces** (`src/types/`): shared types, API response types
2. **Lib/Services** (`src/lib/`): utilities, validations, API helpers, constants
3. **UI Components** (`src/components/ui/`): reusable UI primitives with typed props
4. **Sections** (`src/components/sections/`): page section components
5. **Layout** (`src/components/layout/`): Header, Footer if affected
6. **Pages** (`src/app/`): route-level composition, API routes

For each area:
- Follow conventions from `references/contract-convention.md`
- Use Tailwind CSS v4 for all styling (no inline styles unless design system requires)
- API calls in `src/lib/` only, not in components
- Run verification after completing

### core.3.30: Run created tests (must be green)

**GREEN Verification:**

> No test runner configured. Skip GREEN verification. When a test runner is added, run tests against created test files.

ALL tests from Phase 2 MUST pass. If any fail:
- Read failure message
- Fix implementation (NOT the test — test is the spec)
- Re-run until green

**Inner TDD loop:** Work one test file at a time:
1. Read test assertions
2. Implement minimal code to pass
3. Run test file
4. Green? Next file. Red? Fix implementation.

Do NOT proceed until all Phase 2 tests are green.

### core.3.40: Pre-verify self-check

<!-- IF execution_mode_resolved == economy -->
**Pre-Verify (economy):** Build check (`npx next build`) + naming conventions only.
> [Skipped: Detailed Self-Review] — режим economy. Только build и naming, без layer-specific проверок.
<!-- ELSE IF execution_mode_resolved == manual -->
> Full self-review: layer-specific checklist (~4K токенов). Выполнить полностью или только build?
<!-- ENDIF -->

Before running formal verification, quick manual check:
- [ ] All new files follow naming conventions (kebab-case files, PascalCase components)
- [ ] No layer boundary violations (imports from wrong layers)
- [ ] No hardcoded values that should be config/env
- [ ] No TODO/FIXME without explanation
- [ ] Components use Tailwind CSS v4 design tokens (no hardcoded colors/spacing outside token system)
- [ ] Async components have loading + error states

If any issue found → fix before proceeding to Phase 4.

Before moving to Phase 4, assess: did implementation fully address the task? Were any shortcuts taken that need revisiting?

**Checkpoint:** TaskUpdate "Self-Review" → `completed`.

### core.3.90: Phase 3 checkpoint

**Checkpoint:** TaskUpdate Phase 3 → `completed`. Log to pipeline-state.yaml.
