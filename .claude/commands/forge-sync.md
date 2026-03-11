---
name: forge-sync
description: Sync GitHub issues for asmlk-dev (GGx321/asmlk-dev)
argument-hint: "[--label=<label>] [--state=open|closed|all]"
allowed-tools:
  - Bash
  - Read
  - Write
---
# Managed by forge-core v8.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# /forge-sync — Sync GitHub Issues

Sync issues from GitHub repository GGx321/asmlk-dev.

1. Run: `bash .claude/scripts/forge-sync.sh {{ arguments }}`
2. Display synced issues summary (open count, labels, assignees)
3. If errors: show error message and suggest `gh auth status` check
