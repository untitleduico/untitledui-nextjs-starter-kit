# DECISIONS.md

## Purpose

This document records significant design decisions: what was decided, why, and what was rejected.

This is the most valuable layer of the documentation for AI agents and new contributors.

Knowing what was decided is useful. Knowing why — and what was rejected — is irreplaceable.

---

## Format

Each decision uses the following structure:

```
## Decision [ID]: [Short title]
Status: Accepted | Deprecated | Superseded
Context: Why this decision was needed
Decision: What was decided
Alternatives considered: What was evaluated and rejected
Consequences: What this decision produces
```

---

# Decisions

## Decision 001: Single brand accent color

**Status:** Accepted

**Context:**

During the design language definition, the question arose of whether to support multiple accent colors for different product areas (e.g., one color per module or feature set).

Many SaaS products use multi-accent palettes to differentiate sections. This creates visual richness but introduces ambiguity: which color means what? Is the orange for billing or for warnings?

**Decision:**

The system uses exactly one brand accent color.

The brand accent is used for primary actions, active states, selected states, and brand emphasis only.

Secondary visual variety is achieved through typography, spacing, and semantic colors — not through additional accent colors.

**Alternatives considered:**

Multiple accent colors per product area — rejected because it creates competing visual priorities and makes the semantic meaning of color inconsistent.

**Consequences:**

Color usage in the product is predictable. Users learn quickly: brand color means primary action or active state. Designers cannot introduce competing accent colors that dilute this meaning.

---

## Decision 002: Disabled states via opacity, not color tokens

**Status:** Accepted

**Context:**

In earlier versions of the design system (v7 and earlier), disabled states used specific color tokens: `bg-disabled_subtle`, `text-disabled`, `ring-disabled`.

This required maintaining multiple disabled color tokens per semantic category. It also made disabled states harder to implement consistently because each component had to map to specific disabled token values.

**Decision:**

In v8, all disabled states use `opacity-50` and `cursor-not-allowed` applied to the component root.

There is no `text-disabled` token. There is no `bg-disabled` token.

**Alternatives considered:**

Maintaining dedicated disabled color tokens — rejected because it increased maintenance overhead and created inconsistency when components missed the correct disabled token.

**Consequences:**

Disabled states are visually consistent across all components without per-component token mapping. AI agents and engineers cannot use a `text-disabled` token — it does not exist. Any reference to `text-disabled` in generated code is an error.

---

## Decision 003: React Aria Components as the component foundation

**Status:** Accepted

**Context:**

When selecting the behavioral foundation for the component library, several approaches were evaluated: building custom components from scratch, using Radix UI primitives, using HeadlessUI, or using React Aria Components.

The primary requirements were: keyboard accessibility by default, WAI-ARIA compliance, cross-browser consistency, and low behavioral maintenance burden.

**Decision:**

All interactive components are built on React Aria Components.

React Aria handles keyboard navigation, focus management, ARIA attribute assignment, and interaction events.

Custom components wrap React Aria primitives and add visual styling via Tailwind CSS.

**Alternatives considered:**

Radix UI — rejected because React Aria's accessibility model is more comprehensive and the WAI-ARIA patterns are more thoroughly implemented.

Custom from scratch — rejected because the maintenance burden for accessibility is too high and the failure modes are too costly.

**Consequences:**

Accessibility is handled at the primitive layer. Component authors focus on visual styling and composition. AI-generated components that bypass React Aria primitives risk accessibility regressions.

---

## Decision 004: Inter for UI text, system monospace for code

**Status:** Accepted

**Context:**

The question of whether to use a single typeface or a pairing (e.g., display serif + body sans-serif) was evaluated for UI text.

A serif/sans pairing creates editorial personality and expressive hierarchy but adds complexity: two fonts to load, two rendering contexts to maintain, and more edge cases in tight layouts.

For code and technical content, a separate monospace typeface is necessary for readability and convention.

**Decision:**

The system uses two font roles:

- `--font-body` and `--font-display`: **Inter** for all UI text — body, headings, display, labels, navigation.
- `--font-mono`: system monospace stack (`ui-monospace`, `Roboto Mono`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`) for code snippets, technical values, and monospaced content.

Inter is a purpose-built screen typeface with excellent legibility at small sizes and a wide range of weights. The monospace role uses the system stack to avoid loading an additional font file.

No expressive or decorative secondary typeface is introduced.

**Alternatives considered:**

A serif display typeface paired with Inter for body — rejected because it introduces expressive personality that conflicts with the "calm and professional" design language goal. The system serves work, not identity expression.

A custom monospace typeface (e.g., JetBrains Mono loaded as a web font) — not currently adopted. The system stack covers all cases without the additional load cost.

**Consequences:**

UI text hierarchy is achieved through size, weight, and color — not through typeface switching. The monospace stack is handled by the operating system, keeping font loading lightweight. Any code or technical content in the product must use `font-mono`, not Inter.

---

## Decision 005: Semantic token naming over raw color naming

**Status:** Accepted

**Context:**

When defining the token architecture, the choice between semantic naming (`text-primary`, `bg-brand-solid`) and raw color naming (`neutral-900`, `brand-600`) was evaluated.

Raw color names are easy to understand visually: `neutral-900` is clearly very dark neutral. But they tie the token to a specific color value rather than an intent.

**Decision:**

All tokens used in components use semantic names.

Raw color scale values (`neutral-900`, `brand-600`) exist in the theme definition as source values but are not used directly in component code.

Components reference semantic tokens: `text-primary`, not `text-neutral-900`.

**Alternatives considered:**

Raw color names — rejected because they break when the theme changes (e.g., rebrand from purple to blue). A component using `text-brand-700` would continue to work correctly after a rebrand. A component using `text-purple-700` would not.

**Consequences:**

The design system supports theming and rebranding without component-level changes. AI agents must use semantic token names. Any AI-generated code referencing raw Tailwind color classes (`text-neutral-900`, `bg-blue-600`) is using the wrong token layer.

---

## Decision 007: Three-level token architecture (Primitives → Semantic → Tailwind mapping)

**Status:** Accepted

**Context:**

Tailwind CSS v4 generates utility classes from CSS custom properties using a namespace convention: a variable named `--text-color-primary` generates the class `text-primary`. Without this mapping layer, using a semantic token like `--color-text-primary` directly would require the class `text-text-primary` — which is redundant and does not match the expected token naming.

The design system also needs to support dark mode overrides and match Figma/Token Studio naming conventions.

**Decision:**

The token system uses three explicit levels:

- **Level 1 — Primitives:** Raw color values (`--color-neutral-900`). Source of truth for base colors. Not used directly in component code.
- **Level 2 — Semantic tokens:** Intent-named tokens (`--color-text-primary`). This is the canonical design token that matches Figma naming. Dark mode overrides are applied at this level only.
- **Level 3 — Tailwind property mapping:** Proxy variables (`--text-color-primary`) that generate clean Tailwind utility classes (`text-primary`). These do not hold values — they point to Level 2 tokens.

When adding a new token, both Level 2 and Level 3 must always be created. Dark mode must only override Level 2.

**Alternatives considered:**

Using Level 2 directly as Tailwind tokens — rejected because it would generate class names like `text-text-primary` (redundant prefix) or require working around Tailwind v4's namespace convention in unintuitive ways.

Eliminating Level 3 entirely and using `var(--color-text-primary)` inline — rejected because it bypasses Tailwind's utility system and requires inline CSS everywhere instead of utility classes.

**Consequences:**

The system produces clean utility class names (`text-primary`, `bg-brand-solid`) that match design token intent names. The failure mode is silent: if a developer adds only Level 2 without Level 3, no Tailwind class is generated and the token cannot be used in components without a build error or warning. This risk must be explicitly documented.

---

## Decision 006: Moderate corner radius as the default

**Status:** Accepted

**Context:**

The corner radius defines a significant part of the visual personality. Sharp corners (radius-none or radius-xs) feel industrial. Very rounded corners (radius-2xl and above) feel consumer/mobile and playful.

The system targets professional SaaS products: productivity tools, admin interfaces, dashboards.

**Decision:**

The default component radius is `rounded-lg` (8px).

Cards, dropdowns, popovers, and modals use `rounded-lg`.

Inputs use `rounded-md` (6px).

Badges and small components use `rounded-sm` or `rounded-md`.

**Alternatives considered:**

Sharp corners (radius-sm everywhere) — rejected because they create a mechanical, cold feeling inconsistent with the "calm and professional" target.

Very rounded corners (radius-2xl+ everywhere) — rejected because they signal a consumer/entertainment product rather than a professional tool.

**Consequences:**

The system achieves "soft professionalism" — approachable without being playful. The radius personality is consistent across all components. Introducing very large radius values in product UI is a system violation.
