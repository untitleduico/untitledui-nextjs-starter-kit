# TOKENS.md

## Overview

This document defines how design tokens are used throughout the system.

Tokens exist to ensure consistency, predictability, scalability, and accessibility.

Designers, engineers, and AI systems must use existing tokens before introducing new values.

Never introduce arbitrary visual values when an existing token can solve the problem.

---

# Token Philosophy

Tokens represent design decisions.

Tokens are not implementation details.

Every token should communicate intent.

Good:

* text.primary
* text.secondary
* border.subtle
* surface.primary

Bad:

* gray500
* blue300
* border2

Tokens should describe purpose rather than appearance.

---

# Color Tokens

## Text Tokens

### text.primary

Purpose:

Primary content.

Use for:

* page titles
* section titles
* body text
* table content

Do not use for:

* disabled content
* helper text
* placeholder text

---

### text.secondary

Purpose:

Supporting information.

Use for:

* descriptions
* metadata
* supporting labels

Do not use for:

* critical actions
* primary content

---

### text.tertiary

Purpose:

Low-emphasis information.

Use for:

* timestamps
* secondary metadata
* supplementary details

Do not use for:

* important content

---

### text.disabled

Purpose:

Unavailable content.

Use only when interaction is unavailable.

Never use to reduce visual noise.

---

# Surface Tokens

## surface.primary

Purpose:

Primary application background.

Default page surface.

---

## surface.secondary

Purpose:

Grouped content areas.

Examples:

* cards
* panels
* settings sections

---

## surface.tertiary

Purpose:

Nested containers.

Use sparingly.

Avoid deep nesting.

---

# Border Tokens

## border.primary

Purpose:

Default separation.

Examples:

* cards
* inputs
* tables

---

## border.subtle

Purpose:

Minimal visual structure.

Use when content already provides strong hierarchy.

---

## border.focus

Purpose:

Interactive focus indication.

Must always remain visible.

Never remove focus styling.

---

# Action Tokens

## action.primary

Purpose:

Primary call-to-action.

Rules:

Only one primary action should dominate a local context.

Examples:

* Create
* Save
* Continue

---

## action.secondary

Purpose:

Supporting actions.

Examples:

* Cancel
* Back
* View Details

---

## action.tertiary

Purpose:

Low emphasis actions.

Examples:

* Learn More
* View All

---

# Semantic Tokens

## semantic.success

Meaning:

Successful completion.

Use consistently.

Never use for branding.

---

## semantic.warning

Meaning:

Potential issue requiring attention.

Use only for warnings.

---

## semantic.error

Meaning:

Problems requiring correction.

Must remain highly visible.

---

## semantic.info

Meaning:

Neutral informational state.

Should not imply success or failure.

---

# Typography Tokens

## Display

Purpose:

High-impact page headings.

Use sparingly.

Maximum one display heading per view.

---

## Heading

Purpose:

Page sections.

Creates primary hierarchy.

---

## Subheading

Purpose:

Section subdivisions.

Creates secondary hierarchy.

---

## Body

Purpose:

Default reading experience.

Most content should use body styles.

---

## Caption

Purpose:

Supporting information.

Examples:

* timestamps
* metadata
* helper text

Avoid using for critical information.

---

# Spacing Tokens

## Philosophy

Spacing communicates relationships.

Never choose spacing visually.

Choose spacing semantically.

---

## Space XS

Use for:

* tightly related elements
* icon-to-label spacing

Avoid using for section separation.

---

## Space SM

Use for:

* form field relationships
* component internals

---

## Space MD

Use for:

* card sections
* grouped content

Most commonly used spacing token.

---

## Space LG

Use for:

* section separation
* major content groups

---

## Space XL

Use for:

* page-level separation
* large layout transitions

---

# Radius Tokens

## Radius Small

Use for:

* inputs
* badges
* compact controls

---

## Radius Medium

Default radius.

Use for:

* cards
* dropdowns
* popovers

Preferred system radius.

---

## Radius Large

Use sparingly.

Examples:

* large promotional surfaces
* marketing layouts

Avoid in product UI.

---

# Shadow Tokens

## Shadow Small

Purpose:

Subtle separation.

Examples:

* dropdowns
* floating controls

---

## Shadow Medium

Purpose:

Elevated surfaces.

Examples:

* popovers
* dialogs

---

## Shadow Large

Purpose:

Rare high-focus surfaces.

Examples:

* modal dialogs

Avoid stacking multiple large shadows.

---

# Motion Tokens

## Motion Fast

Use for:

* hover feedback
* small transitions

Should feel immediate.

---

## Motion Standard

Use for:

* component transitions
* dropdowns
* drawers

Default motion duration.

---

## Motion Slow

Use sparingly.

Only for large spatial transitions.

---

# Token Selection Rules

When choosing tokens:

1. Use semantic tokens first.
2. Use existing tokens before creating new ones.
3. Prefer lower emphasis.
4. Escalate emphasis only when necessary.
5. Use spacing to create hierarchy before using color.

---

# Anti-Patterns

Do not:

* create one-off tokens
* create component-specific colors
* use raw values instead of tokens
* invent spacing values
* bypass semantic meaning
* use color to replace hierarchy
* use shadows to replace structure

---

# AI Rules

When generating UI:

Always:

* use existing semantic tokens
* use existing spacing tokens
* use existing typography tokens

Never:

* invent token names
* invent color scales
* invent spacing values
* use raw hex values
* use arbitrary radius values

If uncertain:

Prefer the lower-emphasis token.
