# Managed by forge-core v8.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Phase 1: Understand — asmlk-dev

### core.1.10: Read task requirements

Never speculate about code you have not read. Before making claims about project structure, read the actual files. If referenced files don't exist, say so — don't assume contents.

When reading multiple files or running multiple checks, make all independent tool calls in parallel.

Read task requirements.

### core.1.30: Identify affected layers

Identify affected areas in frontend architecture (Component-based):
- **Pages** (`src/app/`): route-level components, API routes
- **Sections** (`src/components/sections/`): page section components (Hero, About, Skills, Projects, Contact)
- **UI** (`src/components/ui/`): reusable UI primitives (Button, Input, Card)
- **Layout** (`src/components/layout/`): structural components (Header, Footer)
- **Lib** (`src/lib/`): utilities, validations, constants, API helpers
- **Types** (`src/types/`): TypeScript interfaces and type definitions

Note which layers are affected — this determines implementation order.

### core.1.40: Schema/type changes

If type/schema change needed:
- Update TypeScript interfaces in `src/types/`
- Update API response types if backend contract changed
- Verify shared types propagate correctly across layers
- Update Zod schemas in `src/lib/validations.ts` if input shapes change

### core.1.50: Plan changes

Plan changes before writing code.

### core.1.90: Phase 1 checkpoint

**Checkpoint:** TaskUpdate Phase 1 → `completed`. Log to pipeline-state.yaml.
