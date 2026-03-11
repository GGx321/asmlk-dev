# Managed by forge-core v8.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Phase 2: RED (Test-First) — asmlk-dev

> **Note:** No test runner is currently configured for this project. Install vitest or jest to enable TDD workflow. Until then, Phase 2 steps generate test stubs but cannot verify RED/GREEN status.

### core.2.10: Generate test stubs from task + plan

**Test Skeleton Generation (RED phase):**

Based on Phase 1 contract (affected layers, schema changes, plan):
1. For each affected layer, create test file if not exists
2. Add `describe` block for each modified/created module
3. Add `it.todo()` or empty `it()` for each expected behavior:
   - From task requirements (core)
   - From schema changes (migration tests)
   - From error scenarios (edge cases)
4. Write test files to disk

**Output:** List of created test files with assertion count.

**Pipeline Artifact:** Write `phase-2-test-manifest.yaml`:
```yaml
id: phase-2
phase: test
status: done
summary: "{N} test files, {M} assertions, all RED"
refs:
  test_files:
    {layer}: [path/to/test1, path/to/test2]
  assertion_count: {M}
```

### core.2.50: Verify RED (run tests, confirm fail)

**Structured RED Verification:**

> No test runner configured. Skip RED verification. When a test runner is installed (vitest/jest), run it against the created test files.

Verify for each test file:
1. Tests FAIL (not error/crash)
2. Failure messages match expected behavior descriptions
3. Fails because feature is MISSING, not because of typos or setup

**If tests PASS:** They test existing behavior. Remove or rewrite — passing tests in RED phase prove nothing.
**If tests ERROR:** Fix test setup (imports, config), do NOT proceed to GREEN.

**Gate:** Do not proceed to Phase 3 until all created tests fail correctly.

### core.2.90: Phase 2 checkpoint

**Phase 2 Checkpoint:**
- Verify test files exist on disk
- Update pipeline-state.yaml: `phase_2: complete, test_files: [...]`
- Write pipeline artifact: `phase-2-test-manifest.yaml`
- Mark TodoWrite items for Phase 2 as complete
