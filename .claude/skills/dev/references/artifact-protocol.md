# Managed by forge-core v8.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Pipeline Artifact Protocol (P25)

> Inter-phase communication via structured artifact files.

## Format

YAML frontmatter + Markdown body per phase:

```yaml
---
id: phase-{N}
phase: {name}
status: done          # pending | in_progress | done | failed | partial
summary: |
  2-5 lines: what happened, key outputs.
refs:
  affected_layers: [dto, service, controller]
  files_modify: [src/users/users.service.ts]
  files_create: [src/migrations/20260307-add-email.ts]
---
## Details (audit trail — never loaded unless resuming/debugging)
Full reasoning, analysis, logs...
```

## Writing Rules

1. Every phase MUST write one artifact file on completion
2. Required fields: `id`, `phase`, `status`, `summary`, `refs`
3. `summary` — 2-5 lines, enough for orchestrator to decide next action
4. `refs` — file paths, layer names, config keys (pointers, not content)
5. On failure: `status: failed`, summary explains what went wrong

## Reading Rules

1. Orchestrator reads ONLY `status` + `summary` between phases
2. Orchestrator passes `refs` to next phase — never reads ref targets itself
3. Subagent receives only refs relevant to its scope
4. Subagent reads ref targets (actual files) on demand
5. Never read `details` (MD body) unless resuming or debugging
6. Never read artifacts from phases more than 1 step back

## Directory

```
.claude/forge/pipeline/
  index.yaml                    # master index (phase statuses)
  phase-0-gate.yaml
  phase-1-contract.yaml
  phase-2-test-manifest.yaml
  phase-3-layers/{layer}.yaml   # per-layer in Phase 3
  phase-4-verify.yaml
  phase-5-summary.yaml
```

## Resume

1. Read `index.yaml` → find first non-done phase
2. If `partial`: read per-layer statuses within that phase
3. Resume from failed/pending item with its artifact refs
4. Cost: ~500 tokens (index + one summary)

## Cleanup

After Phase 5 success: delete `.claude/forge/pipeline/` entirely.
Exception: `--keep-artifacts` for debug → `.claude/forge/pipeline-archive/{id}/`.
