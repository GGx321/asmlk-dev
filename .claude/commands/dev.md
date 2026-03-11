---
name: dev
description: Start feature development using project-specific pipeline
argument-hint: "<task description or issue number>"
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash
  - Glob
  - Grep
  - Task
---
# Managed by forge-core v8.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# /dev — Feature Development

Start developing a feature, bug fix, or refactoring task.

1. Load the `dev` skill — it contains the full pipeline
2. Parse task from arguments: {{ arguments }}
3. Execute the pipeline from Phase 0 through Phase 5
4. If task is linked to a GitHub issue: update issue status after completion
