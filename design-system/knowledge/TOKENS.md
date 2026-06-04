# TOKENS.md

## Overview

This document defines the design tokens used throughout the system: what they are, what they mean, and how to use them correctly.

Tokens represent decisions, not values. Every token encodes an intent.

Designers, engineers, and AI agents must use existing tokens before introducing new values.

Never use raw hex values, arbitrary spacing numbers, or hardcoded colors. Always reference a named token.

---

## How to read this document

Each token entry contains three elements, following the AI-readable token structure:

**Description** — What this token is for and where to use it.

**Context** — What tokens it pairs with, which components use it, accessibility requirements.

**Intent** — The semantic meaning this token communicates.

---

## Token Architecture

The token system has three levels. Understanding all three is required before adding or modifying tokens.

```
Level 1 — Primitives:   --color-neutral-900: rgb(13 13 18)
Level 2 — Semantic:     --color-text-primary: var(--color-neutral-900)
Level 3 — TW mapping:   --text-color-primary: var(--color-text-primary)
```

---

### Level 1 — Primitives

Raw color values. Defined in `src/styles/theme.css` inside `@theme {}`.

Examples: `--color-neutral-900`, `--color-brand-600`, `--color-red-500`

These are the raw palette. Designers and engineers do not use Level 1 directly in components.

---

### Level 2 — Semantic tokens

Named as `--color-{category}-{name}`.

Examples: `--color-text-primary`, `--color-bg-brand-solid`, `--color-border-secondary`

This is the canonical design token layer. It is:

* the level that matches Figma and Token Studio naming
* the only level designers need to know
* where dark mode overrides are applied

Dark mode overrides exist inside `.dark-mode {}` in `@layer base` and override **only** Level 2 tokens.

---

### Level 3 — Tailwind property mapping

Named following Tailwind v4's namespace convention.

| CSS variable prefix | Tailwind utility | CSS property |
|---|---|---|
| `--text-color-{name}` | `text-{name}` | `color` |
| `--background-color-{name}` | `bg-{name}` | `background-color` |
| `--border-color-{name}` | `border-{name}` | `border-color` |
| `--ring-color-{name}` | `ring-{name}` | `--tw-ring-color` |
| `--outline-color-{name}` | `outline-{name}` | `outline-color` |

This level is Tailwind plumbing only. It proxies the Level 2 token so Tailwind generates a clean utility class name. Without this level, no utility class is generated and the token cannot be used in component code.

Example: `--text-color-primary: var(--color-text-primary)` generates the `text-primary` Tailwind class.

Dark mode does **not** need to override Level 3. Level 3 re-reads Level 2 automatically.

---

### Rule: Adding new semantic color tokens

When adding a new semantic color token, always create both Level 2 and Level 3 in `@theme {}`:

```css
/* Level 2: semantic token */
--color-text-my-token: var(--color-neutral-700);

/* Level 3: Tailwind mapping */
--text-color-my-token: var(--color-text-my-token);
```

For dark mode, override **only** the Level 2 token inside `.dark-mode {}`:

```css
.dark-mode {
    --color-text-my-token: var(--color-neutral-300);
    /* --text-color-my-token is NOT needed here */
}
```

The same two-level pattern applies to `bg-`, `border-`, `ring-`, and `outline-` tokens.

**Why this matters:** If Level 3 is missing, the Tailwind utility class is never generated. The token exists in CSS but cannot be used in components. This failure is silent — no build error, no warning.

---

## Token Notation

This document uses the same token names used in component code (Level 3 utility classes).

In Tailwind CSS: `text-primary`, `bg-secondary`, `border-brand`

In CSS variables (Level 2): `--color-text-primary`, `--color-bg-secondary`, `--color-border-brand`

Never reference tokens using raw values. Never write `text-neutral-900` when `text-primary` is available.

---

# Text Color Tokens

## text-primary

**Description:** Use for all primary readable content. The default choice for any text that carries information.

Use for: page titles, section headings, body text, table cell content, form labels, navigation labels.

Do not use for: helper text, placeholder text, metadata, timestamps, disabled content.

**Context:** Pairs with `bg-primary` or `bg-secondary` surfaces. Meets WCAG AA contrast in both light and dark modes. Most commonly used text token.

**Intent:** Communicates primary information. Signals that the content deserves full attention.

Light mode value: `neutral-900`

---

## text-secondary

**Description:** Use for supporting information that is important but not primary.

Use for: descriptions, metadata, supporting labels, secondary content rows.

Do not use for: critical actions, primary headings, error messages.

**Context:** Pairs with `bg-primary` or `bg-secondary`. Slightly lower contrast than `text-primary`. Often used alongside `text-primary` to create visual hierarchy within a component.

**Intent:** Communicates supporting information. Signals secondary importance without being dismissible.

Light mode value: `neutral-700`

---

## text-tertiary

**Description:** Use for low-emphasis supplementary information.

Use for: timestamps, metadata, helper text, caption text, secondary descriptions.

Do not use for: primary content, labels for required fields, error states.

**Context:** Pairs with `bg-primary`. Lower contrast — avoid using for content the user must read to complete a task.

**Intent:** Communicates supplementary context. Signals that the content is available but not essential.

Light mode value: `neutral-600`

---

## text-quaternary

**Description:** Use only for the most subtle, lowest-emphasis information.

Use for: character counts, subtle captions, very secondary metadata.

Do not use for: anything the user needs to read to complete their task.

**Context:** Lowest contrast in the text hierarchy. Use sparingly. Must not be used for content that affects task completion.

**Intent:** Communicates ambient, non-essential context.

Light mode value: `neutral-500`

---

## text-placeholder

**Description:** Default color for placeholder text inside input fields.

Use only for: input and textarea placeholder text.

Do not use for: real content, labels, or any information the user should read.

**Context:** Used exclusively by input components. Replaced by `text-primary` when the user types.

**Intent:** Signals the absence of user input. Provides formatting hints only.

Light mode value: `neutral-500`

---

## text-brand-primary

**Description:** Use for brand-colored headings that need emphasis within the product.

Use for: pricing headers, feature highlights, brand-accented section headings.

Do not use for: body text, navigation, form labels.

**Context:** Darker brand color — high contrast on light surfaces. Pairs with `bg-primary` or `bg-brand-primary`.

**Intent:** Signals brand identity with strong emphasis.

Light mode value: `brand-900`

---

## text-brand-secondary

**Description:** Use for interactive brand-colored text and accented subheadings.

Use for: brand-colored buttons (link variant), highlighted subheadings, brand text accents.

Do not use for: primary headings, body text.

**Context:** Pairs with `bg-primary`. Has a hover state: `text-brand-secondary_hover`.

**Intent:** Signals brand interaction or secondary brand emphasis.

Light mode value: `brand-700`

---

## text-error-primary

**Description:** Use for error messages and validation feedback.

Use for: field-level error messages, form validation text, destructive state labels.

Do not use for: warnings, informational content, or as decoration.

**Context:** Always paired with `border-error` on the affected input. Meets WCAG AA contrast on white backgrounds. Has a hover state: `text-error-primary_hover`.

**Intent:** Communicates a problem that requires user correction.

Light mode value: `red-600`

---

## text-warning-primary

**Description:** Use for warning messages only.

Use for: warning state labels, caution messages.

Do not use for: errors, neutral information.

**Context:** Paired with warning semantic colors. Should always be accompanied by a visible warning icon.

**Intent:** Communicates a potential issue requiring attention, not correction.

Light mode value: `yellow-600`

---

## text-success-primary

**Description:** Use for success confirmation messages.

Use for: success state labels, confirmation messages, completion feedback.

Do not use for: branding, accent decoration.

**Context:** Paired with success semantic colors. Signals a completed action.

**Intent:** Communicates successful completion.

Light mode value: `green-600`

---

## text-white

**Description:** Text that is always white regardless of mode.

Use for: text on solid dark or brand backgrounds.

Do not use for: text on light or neutral surfaces.

**Context:** Used on `bg-brand-solid`, `bg-primary-solid`, and semantic solid backgrounds.

**Intent:** Ensures legibility on dark surfaces.

---

## text-primary_on-brand

**Description:** Primary text color when placed on brand-colored backgrounds.

Use for: headings and labels inside brand-colored sections.

**Context:** Used inside `bg-brand-section` or `bg-brand-solid` areas.

**Intent:** Maintains text legibility on brand backgrounds.

---

## Disabled States

There is no `text-disabled` token in this system.

Disabled states are communicated through opacity, not color.

Apply to disabled elements: `opacity-50 cursor-not-allowed`

This applies to text, icons, and interactive controls alike.

See `knowledge/DECISIONS.md` → Decision 002.

---

# Foreground Color Tokens

Foreground tokens apply to non-text elements: icons, decorative marks, UI indicators.

Use `fg-*` tokens via `text-`, `fill-`, `stroke-`, or `bg-` utilities depending on the element.

## fg-primary

**Description:** Highest-contrast foreground. Use for primary icons and visual marks.

Use for: primary action icons, close buttons, navigation icons.

**Intent:** Same hierarchy as `text-primary`. For non-text elements.

Light mode value: `neutral-900`

---

## fg-secondary

**Description:** High-contrast foreground for supporting icons.

Use for: table icons, supporting action icons, secondary visual marks.

Light mode value: `neutral-700`

---

## fg-tertiary

**Description:** Medium-contrast foreground.

Use for: tertiary icons, decorative marks, icon-in-label contexts.

Light mode value: `neutral-600`

---

## fg-quaternary

**Description:** Low-contrast foreground. Use sparingly.

Use for: help icons, input field leading icons, very subtle visual marks.

Do not use for: primary icons or icons that carry meaning for task completion.

**Context:** Has a hover state: `fg-quaternary_hover`.

Light mode value: `neutral-400`

---

## fg-brand-primary

**Description:** Primary brand foreground. Use for brand-colored icons.

Use for: featured icons (brand theme), progress indicators, active state indicators.

Light mode value: `brand-600`

---

## fg-error-primary / fg-warning-primary / fg-success-primary

**Description:** Semantic foreground colors for state icons.

Use for: icons inside alert components, validation icons, status indicators.

**Intent:** Match the semantic meaning of the state being communicated.

---

# Background Color Tokens

## bg-primary

**Description:** Default page and layout background.

Use for: page background, modal background, primary surface areas.

Do not use for: cards that need visual separation — use `bg-secondary`.

**Context:** White in light mode. The canvas most content sits on.

**Intent:** The base surface. Everything else is placed on top of it.

Light mode value: `white`

---

## bg-secondary

**Description:** Secondary surface. Creates contrast against `bg-primary`.

Use for: sidebars, section backgrounds, alternate row backgrounds, grouped containers.

**Context:** Very subtle. Provides visual grouping without strong separation.

**Intent:** Groups related content and creates layout structure.

Light mode value: `neutral-50`

---

## bg-tertiary

**Description:** Tertiary surface. Higher contrast than `bg-secondary`.

Use for: toggle tracks, progress bar backgrounds, input backgrounds in certain states.

**Context:** Use sparingly. More than two nesting levels creates visual confusion.

**Intent:** Provides depth within a component.

Light mode value: `neutral-100`

---

## bg-quaternary

**Description:** Fourth-level surface. Highest contrast in the background scale.

Use for: slider tracks, very dense data backgrounds.

**Intent:** Maximal density within the background hierarchy.

Light mode value: `neutral-200`

---

## bg-brand-solid

**Description:** Solid brand-colored background. Primary brand action surface.

Use for: primary buttons, active toggles, brand-colored badges, selected states.

**Context:** Pairs with `text-white`. Has a hover state: `bg-brand-solid_hover`.

**Intent:** Signals the primary brand action. The most visually prominent interactive surface.

Light mode value: `brand-600` → `rgb(127 86 217)`

---

## bg-brand-primary

**Description:** Subtle brand-tinted background.

Use for: featured icon backgrounds (brand theme), brand-accented cards, highlighted states.

**Context:** Low-contrast brand tint. Pairs with `fg-brand-primary` for icons.

Light mode value: `brand-50`

---

## bg-overlay

**Description:** Background overlay for modal and drawer backgrounds.

Use only for: modal overlays, drawer overlays.

**Context:** Semi-transparent dark color. Always placed beneath modal content.

Light mode value: `neutral-950` (at reduced opacity)

---

## bg-active

**Description:** Active/selected background for menu items and list rows.

Use for: selected dropdown items, active navigation items, highlighted list rows.

Light mode value: `neutral-50`

---

## Semantic Background Tokens

| Token | Use |
|---|---|
| bg-error-primary | Error state surfaces (input backgrounds) |
| bg-error-secondary | Error featured icon backgrounds |
| bg-error-solid | Solid error surfaces (destructive buttons) |
| bg-warning-primary | Warning state surfaces |
| bg-warning-secondary | Warning featured icon backgrounds |
| bg-success-primary | Success state surfaces |
| bg-success-secondary | Success featured icon backgrounds |
| bg-success-solid | Solid success surfaces |

---

# Border Color Tokens

## border-primary

**Description:** Default high-contrast border.

Use for: input fields, checkboxes, button groups, toggle outlines.

**Context:** Most visible border. Use when the border is part of the component structure.

**Intent:** Signals an interactive or structural boundary.

Light mode value: `neutral-300`

---

## border-secondary

**Description:** Default medium-contrast border. Most commonly used.

Use for: cards, tables, dividers, section separators, file uploaders.

**Context:** The default border for content containers and layout dividers.

**Intent:** Provides structure without visual dominance.

Light mode value: `neutral-200`

---

## border-tertiary

**Description:** Low-contrast subtle border.

Use for: chart axis lines, very subtle dividers.

**Context:** Use only when strong hierarchy already exists and a border is needed.

**Intent:** Minimal structure for already well-organized layouts.

Light mode value: `neutral-100`

---

## border-brand

**Description:** Brand-colored border. Use for active/focus states.

Use for: focused input fields, active selections, brand-accented containers.

**Context:** Paired with `bg-brand-primary` for highlighted surfaces.

**Intent:** Signals brand interaction or active selection.

Light mode value: `brand-500`

---

## border-error / border-error_subtle

**Description:** Error state borders.

Use for: invalid input fields, error state containers.

`border-error` — strong, for primary error indication.

`border-error_subtle` — subtle, for secondary error surfaces.

**Intent:** Signals that the user must correct something.

---

# Typography Tokens

## Font Family

Body and display text: **Inter**

CSS variable: `--font-body`, `--font-display`

Fallbacks: `-apple-system`, `Segoe UI`, `Roboto`, `Arial`, `sans-serif`

Monospace: `ui-monospace`, `Roboto Mono`, `SFMono-Regular`, `Menlo`

---

## Type Scale

All sizes use a 4px base unit (Tailwind spacing unit).

| Token | Size | Line Height | Tailwind class | Use |
|---|---|---|---|---|
| text-xs | 12px | 18px | `text-xs` | Captions, badges, timestamps |
| text-sm | 14px | 20px | `text-sm` | Helper text, table metadata |
| text-md | 16px | 24px | `text-md` | Body text, form labels, default UI |
| text-lg | 18px | 28px | `text-lg` | Slightly emphasized body text |
| text-xl | 20px | 30px | `text-xl` | Small section headings |
| text-display-xs | 24px | 32px | `text-display-xs` | Card headings, sub-section titles |
| text-display-sm | 30px | 38px | `text-display-sm` | Section headings |
| text-display-md | 36px | 44px | `text-display-md` | Page headings |
| text-display-lg | 48px | 60px | `text-display-lg` | Hero headings |
| text-display-xl | 60px | 72px | `text-display-xl` | Large marketing headings |
| text-display-2xl | 72px | 90px | `text-display-2xl` | Maximum display size |

Display sizes (md and larger) use negative letter spacing.

---

## Typography Rules

Every text element must map to an existing type scale step.

Do not create custom font sizes.

Do not mix more than three type scale steps within a single component.

Use `text-md` as the default body text size.

---

# Spacing Tokens

## Philosophy

Spacing communicates relationships. Never choose spacing visually. Choose spacing semantically.

Elements that belong together should be closer together. Elements that are separate should have more space between them.

---

## Spacing Scale

The system uses Tailwind's 4px base unit spacing scale.

| Semantic role | Value | Tailwind class | Use |
|---|---|---|---|
| Space 1 | 4px | `gap-1`, `p-1`, `m-1` | Tightest: icon-to-label gap |
| Space 2 | 8px | `gap-2`, `p-2`, `m-2` | Tight: within component internals |
| Space 3 | 12px | `gap-3`, `p-3`, `m-3` | Small: form field elements |
| Space 4 | 16px | `gap-4`, `p-4`, `m-4` | Default: most component padding |
| Space 5 | 20px | `gap-5`, `p-5`, `m-5` | Medium-large: section internals |
| Space 6 | 24px | `gap-6`, `p-6`, `m-6` | Large: card padding, grouped content |
| Space 8 | 32px | `gap-8`, `p-8`, `m-8` | Section separation |
| Space 10 | 40px | `gap-10`, `p-10`, `m-10` | Major content groups |
| Space 12 | 48px | `gap-12`, `p-12`, `m-12` | Page-level separation |
| Space 16 | 64px | `gap-16`, `p-16`, `m-16` | Large layout transitions |

---

## Grouping Logic

Use small spacing (Space 1–2) inside a single component.

Use medium spacing (Space 4–6) between related elements within a section.

Use large spacing (Space 8–12) between distinct sections.

Use very large spacing (Space 16+) for page-level layout transitions.

Never choose spacing arbitrarily. Every spacing decision should trace to this scale.

---

# Radius Tokens

## Radius Scale

| Token | Value | Tailwind class | Use |
|---|---|---|---|
| radius-xs | 2px | `rounded-xs` | Very tight corners |
| radius-sm | 4px | `rounded-sm` / `rounded` | Badges, chips, compact controls |
| radius-md | 6px | `rounded-md` | Inputs, small buttons |
| radius-lg | 8px | `rounded-lg` | Cards, dropdowns, popovers — default |
| radius-xl | 12px | `rounded-xl` | Large cards, modals |
| radius-2xl | 16px | `rounded-2xl` | Large containers |
| radius-3xl | 24px | `rounded-3xl` | Prominent decorative surfaces |
| radius-full | 9999px | `rounded-full` | Pills, avatars, circular buttons |

Default radius for most containers: `rounded-lg` (8px).

---

## Radius Rules

Do not create custom radius values.

Avoid using `rounded-3xl` or larger in product UI — reserve for marketing contexts.

Use the same radius within a single component.

---

# Shadow Tokens

## Shadow Scale

| Token | CSS variable | Use |
|---|---|---|
| shadow-xs | `--shadow-xs` | Subtle lift. Floating controls, tooltips. |
| shadow-sm | `--shadow-sm` | Small dropdowns, floating elements. |
| shadow-md | `--shadow-md` | Standard elevation. Cards when elevated. |
| shadow-lg | `--shadow-lg` | Panels, large dropdowns, drawers. |
| shadow-xl | `--shadow-xl` | Modals, high-focus overlays. |
| shadow-2xl | `--shadow-2xl` | Maximum elevation. Use rarely. |

---

## Shadow Rules

Use shadows to communicate layering — not importance.

Never add a shadow to create emphasis. Use spacing, color, or typography instead.

Do not stack multiple shadow levels in a single view.

Most interfaces should use at most two elevation levels: base surface and elevated surface.

---

# Token Selection Rules

When choosing a token:

1. Use semantic tokens first.
2. Use the lowest-emphasis token that communicates the intent clearly.
3. Escalate emphasis only when necessary.
4. Use spacing to create hierarchy before using color.
5. Never use raw values.

---

# Anti-Patterns

## Token usage anti-patterns

NEVER:

* use `neutral-900` when `text-primary` is available
* use raw hex values in components
* invent new token names not in this document
* create component-specific one-off color tokens
* use `text-*` tokens for icon colors — use `fg-*` tokens instead
* use semantic tokens (error, warning, success) for decoration or branding
* use `text-placeholder` for real content

## Token creation anti-patterns

NEVER create only Level 2 without Level 3:

```css
/* WRONG — Level 3 is missing. No Tailwind class will be generated. */
--color-text-my-token: var(--color-neutral-700);
```

NEVER create only Level 3 without Level 2:

```css
/* WRONG — Level 2 is missing. Dark mode will not work. */
--text-color-my-token: var(--color-neutral-700);
```

NEVER override Level 3 in dark mode:

```css
/* WRONG — Dark mode must only override Level 2. */
.dark-mode {
    --text-color-my-token: var(--color-neutral-300);
}
```

NEVER use a hard-coded value in Level 3:

```css
/* WRONG — Level 3 must proxy Level 2, not hold a raw value. */
--text-color-my-token: var(--color-neutral-700);

/* CORRECT */
--text-color-my-token: var(--color-text-my-token);
```

---

# AI Rules

## Using existing tokens in component code

When generating UI:

Always:

* use existing semantic tokens by name (the Level 3 Tailwind utility classes)
* use the token that matches the intent, not the visual appearance
* use `text-primary` for primary text, not `text-neutral-900`
* use `fg-*` tokens for icons and non-text elements
* use `bg-*` tokens for surfaces
* use `border-*` tokens for borders and rings

Never:

* invent token names
* use raw hex values
* use hardcoded spacing numbers outside the approved scale
* use raw Tailwind color classes (`text-neutral-900`, `bg-blue-600`) when semantic tokens exist

For disabled states:

Apply `opacity-50 cursor-not-allowed` to the element. Do not apply a custom color token.

---

## Creating new tokens in theme.css

When creating a new semantic color token, always create all three levels in `src/styles/theme.css`:

Step 1 — Add Level 2 (semantic) and Level 3 (Tailwind mapping) inside `@theme {}`:

```css
--color-text-my-token: var(--color-neutral-700);
--text-color-my-token: var(--color-text-my-token);
```

Step 2 — Add dark mode override inside `.dark-mode {}` in `@layer base`. Override Level 2 only:

```css
.dark-mode {
    --color-text-my-token: var(--color-neutral-300);
}
```

Missing Level 3 = no Tailwind class = silent failure.

Missing dark mode Level 2 override = the token will not adapt to dark mode.

---

If uncertain:

Prefer the lower-emphasis existing token over creating a new one.
