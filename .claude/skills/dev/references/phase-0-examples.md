# Managed by forge-core v8.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Phase 0 — Few-Shot Filtering Examples

## Example 1: New Feature (balanced)

**Input:** "Add contact form with Telegram notification"
**Mode:** balanced | **Type:** new-feature

**Filtered steps:**
- core.0.10, core.0.20, core.0.30, core.0.40, core.0.50, core.0.60, core.0.70, core.0.80, git_conv.0.30, core.0.90
- core.1.10, core.1.30, core.1.40, core.1.50, core.1.90
- core.2.10, core.2.50, core.2.90
- core.3.20, core.3.30, core.3.40, core.3.90
- core.4.10, core.4.20, core.4.30, core.4.90
- core.5.10, core.5.20, core.5.30, core.5.40, core.5.45, git_conv.5.46, core.5.85, core.5.90

**Total:** 30 steps

## Example 2: Bug Fix (economy)

**Input:** "Fix hero section animation glitch on mobile"
**Mode:** economy | **Type:** bug-fix

**Filtered steps:**
- core.0.10, core.0.20, core.0.30, core.0.50, core.0.80, git_conv.0.30, core.0.90
- core.1.10, core.1.30, core.1.40, core.1.50, core.1.90
- core.3.20, core.3.40, core.3.90
- core.4.90
- core.5.10, core.5.20, core.5.45, git_conv.5.46, core.5.85, core.5.90

**Total:** 21 steps

## Example 3: Styling Change (quality)

**Input:** "Redesign skills section with new card layout"
**Mode:** quality | **Type:** new-feature

**Filtered steps:**
- core.0.10, core.0.20, core.0.30, core.0.40, core.0.50, core.0.60, core.0.70, core.0.80, git_conv.0.30, core.0.90
- core.1.10, core.1.30, core.1.40, core.1.50, core.1.90
- core.2.10, core.2.50, core.2.90
- core.3.20, core.3.30, core.3.40, core.3.90
- core.4.10, core.4.20, core.4.30, core.4.40, core.4.88, core.4.90
- core.5.10, core.5.20, core.5.25, core.5.35, core.5.45, git_conv.5.46, core.5.85, core.5.90

**Total:** 34 steps
