# Codebase Context

> **IMPORTANT**: Read this file at the start of every session and re-read it before taking any action if it may have been modified during the session.

---

## 1. Communication Language

- All instructions from the user will be in **Russian**. Always respond in **Russian**.
- All text inside the project (code, comments, documentation) must be written in **English**, as all other project contributors are English-speaking.

---

## 2. Karpathy Guidelines

At the start of every new session, activate `/karpathy-guidelines` (skill from the `andrej-karpathy-skills` plugin).

If the skill is not installed, notify the user and ask them to install it from:
https://github.com/multica-ai/andrej-karpathy-skills

---

## 3. File Modification Rules

- **CLAUDE.md** and **AGENT.md** must never be modified. They are source-controlled upstream files.
- All new instructions and knowledge must be added only to `claude/codebase-context.md` or other files inside the `claude/` directory.

---

## 4. Design Token Architecture

### Overview

The project uses a three-level token system defined in `src/styles/theme.css`:

```
Level 1 — Primitives:   --color-neutral-900: rgb(13 13 18)
Level 2 — Semantic:     --color-text-primary: var(--color-neutral-900)
Level 3 — TW mapping:   --text-color-primary: var(--color-text-primary)
```

### Level 2 — Semantic tokens (`--color-*`)

Named as `--color-{category}-{name}` (e.g. `--color-text-primary`, `--color-bg-primary`, `--color-border-brand`).

- This is the **canonical design token** — the name that matches Figma/Token Studio/W3C token format (`color.text.primary` → `--color-text-primary`).
- This is the only level designers need to know about.
- Dark mode overrides are applied at this level inside `.dark-mode {}` in `@layer base`.

### Level 3 — Tailwind property mapping (`--text-color-*`, `--background-color-*`, etc.)

Named following Tailwind v4's namespace convention:

| CSS variable prefix     | Tailwind utility | CSS property       |
|-------------------------|------------------|--------------------|
| `--text-color-{name}`   | `text-{name}`    | `color`            |
| `--background-color-{name}` | `bg-{name}` | `background-color` |
| `--border-color-{name}` | `border-{name}`  | `border-color`     |
| `--ring-color-{name}`   | `ring-{name}`    | `--tw-ring-color`  |
| `--outline-color-{name}`| `outline-{name}` | `outline-color`    |

This level is **Tailwind plumbing only** — it proxies the semantic token so Tailwind generates a clean utility class name (e.g. `text-primary` instead of `text-text-primary`).

Dark mode does **not** need to override this level — it re-reads the semantic token automatically.

### Rule: Adding new semantic tokens

When adding a new semantic color token, always create **both** levels:

```css
/* In @theme {} — add both: */

/* Level 2: semantic token (matches Figma naming) */
--color-text-my-token: var(--color-neutral-700);

/* Level 3: Tailwind mapping (generates `text-my-token` utility) */
--text-color-my-token: var(--color-text-my-token);
```

For dark mode, override **only** the Level 2 token inside `.dark-mode {}`:

```css
@layer base {
    .dark-mode {
        --color-text-my-token: var(--color-neutral-300);
        /* --text-color-my-token is NOT needed here */
    }
}
```

The same pattern applies for `bg-`, `border-`, `ring-`, and `outline-` tokens.

---

## 5. Tailwind `--spacing` Variable

`--spacing` is a **built-in Tailwind CSS v4 variable** — it is not defined anywhere in the project source.

**Value:** `--spacing: 0.25rem` (= 4px)

It is the base unit of the entire Tailwind spacing scale (e.g. `p-4` = `1rem` = `--spacing * 4`). Tailwind v4 exposes it as a CSS custom property so custom tokens can be built relative to it.

**Usage in this project** (`src/styles/theme.css`): all typography size and line-height tokens are derived from it:

```css
--text-xs:              calc(var(--spacing) * 3);    /* 0.75rem  = 12px */
--text-xs--line-height: calc(var(--spacing) * 4.5);  /* 1.125rem = 18px */
--text-sm:              calc(var(--spacing) * 3.5);  /* 0.875rem = 14px */
--text-md:              calc(var(--spacing) * 4);    /* 1rem     = 16px */
--text-lg:              calc(var(--spacing) * 4.5);  /* 1.125rem = 18px */
--text-xl:              calc(var(--spacing) * 5);    /* 1.25rem  = 20px */
/* …and all display-* sizes follow the same pattern */
```

To override the entire spacing scale project-wide, set `--spacing` once inside `@theme {}` in `src/styles/theme.css`.
