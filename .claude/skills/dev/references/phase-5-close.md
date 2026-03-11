# Managed by forge-core v8.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Phase 5: Close — asmlk-dev

### core.5.10: Completeness check

**Completeness check:** Verify all top-level TaskList tasks are `completed`. If any task is not completed → go back and complete it before summarizing.

Summarize completed work for the user.

**Summary:**
- Files created: {list with paths}
- Files modified: {list with paths}

**Verification results:**
- Build: {result}
- Lint: {result}
- Tests: not configured

### core.5.20: Insights summary

**Insights collected:** (from pipeline-state.yaml)
- Insights: {count} — {brief list or "none"}
- Friction events: {count} — {brief list or "none"}
- Decisions: {count}

If insights and friction_events are empty: "No significant insights recorded this session"

### core.5.25: Persist insights to memory

For each insight collected during this pipeline run:
1. Classify: CONVENTION → `.claude/memory/dev-conventions.md`, PATTERN → `.claude/memory/dev-patterns.md`, DECISION → `.claude/memory/dev-decisions.md`
2. Deduplicate against existing memory entries (skip exact matches, merge semantic overlaps)
3. Append to appropriate file
4. Update `.claude/memory/MEMORY.md` summary if new category file created
5. Remove persisted insights from pipeline-state.yaml

### core.5.30: Persist conventions to memory

For CONVENTION-type insights only:
1. Append to `.claude/memory/dev-conventions.md`
2. Deduplicate against existing entries
3. Update `.claude/memory/MEMORY.md` summary if new file created

### core.5.35: Insights log (quality)

After memory persistence, append entries to `.claude/forge/insights-log.yaml`:
1. For each insight in pipeline-state.yaml `insights[]`: classify (CONVENTION/PATTERN per memory-protocol.md rules), append `{timestamp, task, category, summary, source: "pipeline_observation"}`
2. For each decision in `decisions[]`: append `{timestamp, task, category: "DECISION", summary: choice, source: "brainstorm_gate"}`
3. If file doesn't exist → create with `entries: []` header, then append
4. If entries count > 200 → trim oldest to keep 200

### core.5.40: Insights log (balanced)

Append CONVENTION and PATTERN entries only to `.claude/forge/insights-log.yaml` (same steps as quality, skip DECISION).

### core.5.45: Commit suggestion

`{type}({scope}): {concise summary of changes}`

Where type is one of: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert

### git_conv.5.46: Commit format validation

**Commit format:** Validate against conventional-commits — `^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\(.+\))?!?: .+`. Example: `feat(contact): add Telegram notification on form submit`

### core.5.85: Next steps

**Next steps:**
- Review: areas requiring careful manual review

### core.5.90: Phase 5 checkpoint

**Checkpoint:** TaskUpdate Phase 5 → `completed`. Log final summary to pipeline-state.yaml.
