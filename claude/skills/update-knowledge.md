# Skill: Update Knowledge

## Trigger phrases

Activate this skill when the user says any of the following:
- "обнови знания" / "обновить знания"
- "update knowledge"
- "сохрани сведения" / "сохранить сведения"

---

## Default target file

If the user does not specify a target file, use:

```
claude/codebase-context.md
```

---

## Steps

### 1. Identify the knowledge to save

Look at the recent conversation and identify facts that:
- Were discovered by reading code, configs, or running commands.
- Are **not already documented** in any of the following files:
  - `CLAUDE.md`
  - `AGENT.md`
  - `claude/codebase-context.md`
  - Any other file inside `claude/`

Skip anything that is already covered, trivially derivable from the code, or ephemeral (e.g. "we ran the dev server").

### 2. Determine the right file

Read `claude/codebase-context.md` (and any other relevant `claude/` files) to understand the existing structure.

- If the new knowledge fits naturally into `claude/codebase-context.md`, use it.
- If the knowledge logically belongs in a **different** file (e.g. a dedicated architecture doc, a component guide, a new file that does not yet exist), **stop and ask the user** before proceeding:

  > "Эти сведения лучше сохранить в `claude/<other-file>.md`, а не в `codebase-context.md`. Сохранить туда?"

  Wait for confirmation, then proceed.

### 3. Write the knowledge

- Add the new section to the target file.
- Follow the existing formatting style of the target file (headers, code blocks, tables).
- Write all content in **English** (per project rules in `claude/codebase-context.md` §1).
- Be concise — one focused section per topic.
- Include concrete values, file paths, and examples where relevant.

### 4. Confirm

After saving, tell the user in one sentence what was added and where.
