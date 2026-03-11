---
name: forge-status
description: Show project status and forge ecosystem health
allowed-tools:
  - Bash
  - Read
  - Glob
---
# Managed by forge-core v8.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# /forge-status — Project Status

Show current project status for asmlk-dev.

1. Read `.claude/forge/config.yaml` for ecosystem configuration
2. Check installed modules:
   - forge-core: ✅ (v8.0.0)
   - forge-product: {{ has_product_module ? "✅" : "❌ not installed" }}
   - forge-qa: {{ has_qa_module ? "✅" : "❌ not installed" }}
   - forge-tracker: {{ has_tracker_module ? "✅" : "❌ not installed" }}
3. Show pipeline config: mode={{ pipeline.mode }}, execution={{ pipeline.execution_mode }}
4. Show recent pipeline runs from `.claude/forge/pipeline-state.yaml` if exists
5. Check git status for uncommitted changes
6. If `.claude/scripts/forge-status.md` exists, run additional status checks
