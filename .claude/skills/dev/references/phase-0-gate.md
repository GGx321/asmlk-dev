# Managed by forge-core v8.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Phase 0: Gate — asmlk-dev

### core.0.10: Read task description, identify intent

Read task description, identify intent (new feature, bug fix, schema change, refactor).
Quick assessment before detailed planning. IF task is a simple bug fix or single-file change → skip to Phase 1.

**Checkpoint:** Create `.claude/forge/pipeline-state.yaml` with task_name, execution_mode_resolved, empty insights/decisions/friction_events arrays.

### core.0.20: Execution mode resolution

**Execution Mode Resolution:**
1. Read `.claude/forge/config.yaml` → `pipeline.execution_mode`, `pipeline.execution_strategy`
2. IF `execution_strategy == "adaptive"`:
   - Estimated files ≤ 5 AND single entity → resolve `economy`
   - Estimated files 6-15 AND routine (no schema migration, no new deps, single entity) → resolve `balanced`
   - Estimated files 6-15 AND complex/new domain → resolve `quality`
   - Estimated files > 15 OR schema migration OR money/PII/auth → resolve `quality`
   - AskUserQuestion: "Задача оценена как [{resolved_mode}]. Подтверждаете?", options=["да", "выбрать другой режим"]
3. IF `execution_strategy == "ask"` → AskUserQuestion with options=["economy", "balanced", "quality", "manual"]
4. IF `execution_strategy == "fixed"` → use configured mode
5. Store in pipeline-state.yaml: `execution_mode_resolved: {mode}`

### core.0.30: Create task tree

**Create Task Tree:**

<!-- IF execution_mode_resolved == economy -->
Create 5 top-level tasks (phases only):
<!-- ENDIF -->
<!-- IF execution_mode_resolved == balanced -->
Create ~15 tasks (phases + key subtasks):
<!-- ENDIF -->
<!-- IF execution_mode_resolved == quality OR execution_mode_resolved == manual -->
Create full task tree with subtasks (~25+ tasks):
<!-- ENDIF -->

Use TaskCreate for each task, then TaskUpdate(addBlockedBy) to wire dependencies:
- Phase 0: Task Analysis [no dependencies]
- Phase 1: Schema + Contracts [blockedBy: Phase 0]
- Phase 2: RED Tests [blockedBy: Phase 1]
- Phase 3: Implementation [blockedBy: Phase 2]
- Phase 4: Verification [blockedBy: Phase 3]
- Phase 5: Close [blockedBy: Phase 4]

**Atomicity guard:** Verify ALL tasks have blockedBy edges wired before proceeding. If context compaction interrupts between TaskCreate and TaskUpdate(addBlockedBy), the task tree exists without dependency edges — rewire them.

### core.0.40: Load project memory

Read `.claude/memory/dev-conventions.md`, `dev-patterns.md`, `dev-decisions.md` if they exist.
Apply loaded conventions and patterns to current task analysis.
Skip if files don't exist (first run).

<!-- IF execution_mode_resolved == economy -->
> [Skipped: Memory Load] — режим economy. Memory не загружается для экономии токенов.
<!-- ENDIF -->

### core.0.50: Scope check

**Scope Check** — count independent UI units:

| Signal | Threshold |
|--------|-----------|
| Page-level routes | 2+ |
| Modals/drawers with distinct business logic | 2+ |
| Unrelated component trees | 3+ |
| Files across different feature areas | >15 |

IF ANY threshold exceeded → decompose before proceeding:

| # | Subtask | ~Files | Scope | Depends on |
|---|---------|--------|-------|------------|
| 1 | ... | ~N | features/... | — |

Shared foundation (API types, shared hooks) is implemented before subtask #1.

**Keep together (do NOT split):**
- Same UI element reused across contexts (button in modal AND detail view)
- Shared state/hook serving components of one feature
- Tightly coupled parent-child (list → list item → item actions)
- Visual consistency work (theme tokens, layout shell)

Ask user for execution mode:
- **Pipeline** — all subtasks sequentially, full verify each, summary at end
- **Step-by-step** — stop after each subtask for feedback
- **Skip** — proceed without decomposition

Each subtask runs the full pipeline (Phase 0 → 1 → 2 → 3 → 4) independently.

**Checkpoint:** TaskUpdate "Scope Check" → `completed` (or `skipped`). Log to pipeline-state.yaml.

### core.0.60: Approach discussion (brainstorm gate)

**Approach Discussion**: IF task involves architectural decisions (state management strategy, new shared pattern, component architecture, routing approach):
- **Decision cache:** Check `.claude/memory/dev-decisions.md` for relevant cached decisions. If found: "Using previously decided: {decision}. Override? [y/N]". If N → skip, use cached. If y → re-discuss.
- Present 2-3 options with trade-offs
- AskUserQuestion with approach options, wait for user choice before proceeding

**Checkpoint:** TaskUpdate "Brainstorm Gate" → `completed` (or `skipped`). Log to pipeline-state.yaml.

<!-- IF execution_mode_resolved == economy -->
> [Skipped: Brainstorm Gate] — режим economy. Дизайн-решения принимаются автоматически.
<!-- ENDIF -->

<!-- IF execution_mode_resolved == manual -->
> Brainstorm gate (~3K токенов). Выполнить или пропустить?
<!-- ENDIF -->

### core.0.70: Red flags scan

Load `references/red-flags.md` — if ANY red flag triggers during this task, STOP and ask user.

<!-- IF execution_mode_resolved == economy -->
> [Skipped: Red Flags] — режим economy. Scope creep не контролируется.
<!-- ENDIF -->

<!-- IF execution_mode_resolved == manual -->
> Red flags scan (~1K токенов). Выполнить или пропустить?
<!-- ENDIF -->

### core.0.80: Session check

IF estimated scope > 20 files OR > 3 distinct subsystems → recommend saving checkpoint and starting fresh session for better generation quality (non-blocking — user can continue).

### git_conv.0.30: Branch safety check

If current branch matches a protected branch (main) → WARN and offer: create feature branch / continue / abort.

### core.0.90: Phase 0 checkpoint

**Checkpoint:** TaskUpdate Phase 0 → `completed`. Log to pipeline-state.yaml: insights, decisions, friction events collected.
