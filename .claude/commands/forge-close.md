---
name: forge-close
description: Close a GitHub issue for asmlk-dev
argument-hint: "<issue number> [--comment=<text>]"
allowed-tools:
  - Bash
  - Read
---
# Managed by forge-core v8.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# /forge-close — Close GitHub Issue

Close a GitHub issue on GGx321/asmlk-dev.

1. Parse issue number from: {{ arguments }}
2. Run: `bash .claude/scripts/forge-close.sh {{ arguments }}`
3. Confirm closure with issue title and status
