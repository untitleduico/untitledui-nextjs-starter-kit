# TASTE.md

## Purpose

This document defines the aesthetic judgment system behind the design language.

It describes how design decisions should feel, not merely how they should be constructed.

While other documents define rules, this document defines taste.

Use this document when multiple solutions are technically correct and a qualitative decision must be made.

---

# Core Taste Statement

The system should feel:

* Calm
* Clear
* Professional
* Structured
* Efficient

The system should not feel:

* Trend-driven
* Decorative
* Experimental
* Playful
* Attention-seeking

When choosing between two acceptable solutions, choose the one that feels calmer and more predictable.

---

# Design Personality

Imagine the interface as a person.

The system is:

* Experienced
* Competent
* Reliable
* Thoughtful
* Reserved

The system is not:

* Loud
* Emotional
* Entertaining
* Opinionated
* Expressive

The interface should communicate confidence through restraint.

---

# Visual Restraint

Restraint is a feature.

The design language intentionally avoids visual excess.

Prefer:

* fewer colors
* fewer borders
* fewer shadows
* fewer visual effects

Avoid solving problems by adding visual complexity.

First remove.

Then simplify.

Only then add.

---

# Density Philosophy

The system values efficient use of space.

However, efficiency should never compromise readability.

Preferred density:

Comfortable

The interface should feel productive, not crowded.

---

# Hierarchy Philosophy

Hierarchy should emerge naturally.

Preferred hierarchy tools:

1. Typography
2. Spacing
3. Grouping

Use color only as a supporting mechanism.

If hierarchy depends primarily on color, the hierarchy is weak.

---

# Color Taste

Color is functional.

Color is not decoration.

Most screens should be visually neutral.

Accent color should be earned.

When everything is highlighted, nothing is highlighted.

---

# Typography Taste

Typography should feel invisible.

Users should notice understanding, not styling.

Preferred characteristics:

* clean
* readable
* structured
* predictable

Avoid typography that calls attention to itself.

---

# Surface Philosophy

Most surfaces should recede into the background.

Content should receive attention.

Containers should support content rather than compete with it.

Good surfaces feel almost invisible.

---

# Border Philosophy

Borders exist to clarify structure.

Borders should not dominate the interface.

When spacing can solve the problem, prefer spacing.

When grouping can solve the problem, prefer grouping.

Only then use borders.

---

# Shadow Philosophy

Shadows communicate elevation.

Shadows do not communicate importance.

Avoid using shadows to create emphasis.

Use shadows only when layers need to be understood.

---

# Radius Philosophy

Corners should feel approachable.

Not playful.

Not mechanical.

The ideal feeling is:

Soft professionalism.

---

# Component Taste

Components should feel generic.

This is intentional.

Generic components scale better than highly specialized components.

Prefer:

* reusable
* composable
* predictable

Avoid:

* bespoke
* highly branded
* visually unique

---

# Pattern Taste

Users should recognize workflows immediately.

The best pattern is often the one users have already seen elsewhere.

Familiarity creates confidence.

Originality should be used sparingly.

---

# Dashboard Taste

Dashboards should support decisions.

Not impress stakeholders.

Good dashboards:

* reduce uncertainty
* expose important information
* enable action

Bad dashboards:

* maximize metrics
* maximize visual complexity
* maximize decoration

---

# Form Taste

Forms should feel effortless.

Good forms reduce cognitive load.

Good forms feel shorter than they are.

Bad forms feel longer than they are.

Prefer clarity over compactness.

---

# Table Taste

Tables are work tools.

They should feel efficient.

Avoid turning tables into marketing experiences.

Users should be able to scan information rapidly.

---

# Empty State Taste

Empty states should guide.

Not entertain.

Illustration is optional.

Guidance is mandatory.

The next action matters more than visual treatment.

---

# Motion Taste

Motion should explain.

Motion should not perform.

If motion can be removed without losing understanding, it is probably unnecessary.

---

# Information Architecture Taste

Organization is more important than presentation.

A well-organized screen with average styling is preferable to a beautiful screen with poor structure.

Structure wins.

Always.

---

# Visual Maturity Scale

When evaluating a design, ask:

Does it feel more mature or less mature?

Prefer:

* mature
* stable
* intentional

Avoid:

* trendy
* fashionable
* attention-seeking

The goal is longevity.

Not novelty.

---

# SaaS Benchmark

The design language should feel closer to:

* Linear
* Stripe Dashboard
* GitHub
* Notion
* Vercel
* Untitled UI

Than to:

* Dribbble concepts
* Marketing landing pages
* Consumer entertainment apps

The system serves work.

Not entertainment.

---

# Decision Framework

When two solutions are equally valid:

Choose the one that is:

* simpler
* calmer
* clearer
* more reusable
* more predictable

In that order.

---

# AI Taste Evaluation

Before returning a solution ask:

Does this feel:

□ calm

□ professional

□ structured

□ predictable

□ efficient

Does it feel:

□ trendy

□ decorative

□ experimental

□ visually loud

If any answer in the second group is yes:

Revise.

---

# Final Rule

Good taste is subtraction.

The system becomes stronger when unnecessary elements are removed.

When uncertain:

Remove before adding.

---

# Taxonomy Rules

Taxonomy defines the naming conventions and the criteria for when something new is allowed into the system.

This is where the system learns to say no.

---

## Component vs. Pattern vs. Primitive

A **primitive** is a foundational building block that cannot be decomposed further.

Examples: Button, Input, Checkbox, Badge, Avatar.

A **component** is a combination of primitives and logic with a distinct purpose.

Examples: InputGroup, AvatarLabelGroup, DatePicker, Modal.

A **pattern** is a composition of components into a screen-level workflow.

Examples: Form Pattern, Resource List Pattern, Settings Pattern.

When evaluating something new, identify which category it belongs to before deciding how to introduce it.

---

## Naming Rules

Token names follow: `[category]-[semantic-role]`

Examples: `text-primary`, `bg-brand-solid`, `border-error`.

Component variant names follow: `[size]-[color]` or `[color]-[state]`.

Examples: `sm`, `md`, `lg` for sizes. `primary`, `secondary`, `destructive` for intent.

Do not use: descriptive visual names (`text-dark`, `bg-blue`).

Do not use: position-based names (`left-panel`, `top-bar`).

Do not use: version numbers in names (`button-v2`, `card-new`).

---

## When to Say No to a New Component

Before adding a new component, answer these questions:

1. Can an existing component solve this?
2. Can composition of existing components solve this?
3. Is this actually a pattern rather than a component?
4. Would this variant be used in at least three different contexts?
5. Would this create a naming conflict or conceptual overlap?

If the answer to question 4 is no, the solution should be an inline implementation, not a new component.

If the answer to question 5 is yes, reconsider the scope before creating.

---

## When to Say No to a New Token

Before adding a new token:

1. Does an existing token express this intent?
2. Is this a raw value being dressed up as a token?
3. Is this a one-off exception or a systematic need?

If the answer to question 1 is yes, use the existing token.

If the answer to question 2 is yes, reject the new token.

If the answer to question 3 is "one-off exception," use an inline value and document why.

---

# Rejected Patterns

This section documents patterns and approaches that were evaluated and explicitly rejected.

Knowing what was rejected prevents the same mistakes from being reintroduced.

---

## Rejected: Multiple accent colors per product section

**What it was:**
Using different accent colors for different product areas or modules (billing = orange, analytics = blue, settings = neutral).

**Why rejected:**
Color in this system carries semantic meaning, not section identity. Orange means warning. Blue means information. Introducing section-specific accent colors would create ambiguity: is orange here a warning or a billing module indicator?

**Rule:**
NEVER introduce section-specific accent colors. All brand interaction uses the single brand accent color.

---

## Rejected: Disabled state color tokens

**What it was:**
Dedicated color tokens for disabled states: `text-disabled`, `bg-disabled_subtle`, `ring-disabled`.

**Why rejected:**
Required per-component token mapping, created maintenance burden, and was inconsistently applied. Opacity-based disabled states are simpler, more consistent, and visually equivalent.

**Rule:**
NEVER use `text-disabled` or similar tokens. Apply `opacity-50 cursor-not-allowed` instead.

---

## Rejected: Decorative motion

**What it was:**
Entrance animations, hover parallax effects, loading animations designed primarily to demonstrate technical sophistication or create delight.

**Why rejected:**
The system serves work. Motion that exists to impress or entertain distracts from the task. It also creates accessibility problems (prefers-reduced-motion) and performance overhead.

**Rule:**
NEVER add motion that cannot be justified by "this clarifies a state change" or "this communicates causality." If removing the animation would not confuse the user, it should be removed.

---

## Rejected: Card-inside-card layouts

**What it was:**
Nesting cards within cards to create visual grouping inside already-grouped content (e.g., a card inside a settings card inside a page).

**Why rejected:**
Creates visual noise, increases cognitive load, and often signals a structure problem that should be solved through spacing and typography rather than additional containers.

**Rule:**
Do not nest cards more than one level deep. If you need grouping inside a card, use spacing, dividers, or typography hierarchy — not another card.

---

## Rejected: Sharp industrial corners

**What it was:**
Using `rounded-none` or `rounded-xs` as the default component radius.

**Why rejected:**
Creates a mechanical, cold visual personality inconsistent with the target feeling of "calm and professional." The product should feel approachable, not austere.

**Rule:**
NEVER use sharp corners as a default. Default radius is `rounded-lg` (8px).
