# Managed by forge-core v8.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Phase 4: Verify — asmlk-dev

### core.4.10: Type check

When running multiple verification commands (type check, lint, build), make all independent calls in parallel.

> No dedicated type check command configured. TypeScript errors are caught during build (`npx next build`). Consider adding `"typecheck": "tsc --noEmit"` to package.json scripts.

### core.4.20: Lint

Lint: `npx eslint`

### core.4.30: Tests

> No test runner configured. Skip test verification. Install vitest or jest to enable automated testing.

### core.4.40: Quality gates

Quality gates: check `references/quality-gates.md`

### core.4.88: Learning Loop: propose quality insights

Analyze self-review findings for recurring patterns. If a quality issue appeared in 2+ recent features, propose adding it as a quality insight to config. User confirms before config update.

1. Load `.claude/forge/config.yaml` -> `learning_loop.quality_insights[]`
2. If self-review found issues similar to existing insights -> skip (already known)
3. If NEW recurring pattern detected (appeared in 2+ recent features):
   - Propose: "Add quality insight: '{pattern}' (found in {source})"
   - User confirms -> append to `learning_loop.quality_insights[]` with date, action, pattern, source, scope
4. If insights count > 15 -> suggest consolidation

### core.4.90: Phase 4 checkpoint

**Checkpoint:** TaskUpdate Phase 4 → `completed`. Log to pipeline-state.yaml.
