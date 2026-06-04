# AGENTS.md

## Purpose

This document defines how AI agents should interact with the design system.

It establishes the order of decision-making, sources of truth, escalation rules, and generation constraints.

All AI-assisted design and implementation work must follow this document.

---

# Primary Objective

Generate interfaces that are:

* consistent
* accessible
* maintainable
* predictable

The goal is not originality.

The goal is system compliance.

---

# Source of Truth Hierarchy

When making decisions, use the following order:

1. DESIGN.md
2. TOKENS.md
3. COMPONENTS.md
4. PATTERNS.md

If a conflict exists:

Follow the higher-level document.

---

# Required Reading Order

Before generating any UI:

Read:

1. DESIGN.md
2. TOKENS.md
3. COMPONENTS.md
4. PATTERNS.md

Do not skip documents.

---

# Decision Framework

For every design decision:

Ask:

1. Does an existing pattern solve this?
2. Does an existing component solve this?
3. Does an existing token solve this?
4. Is a new solution actually required?

Default answer should be reuse.

---

# Design Principles

Always prioritize:

1. Accessibility
2. Clarity
3. Consistency
4. Reusability
5. Efficiency
6. Visual refinement

Never reverse this order.

---

# Generation Workflow

When generating screens:

Step 1

Identify the user goal.

Examples:

* manage users
* create invoice
* edit settings
* monitor activity

---

Step 2

Select an existing page pattern.

Examples:

* Dashboard Pattern
* Form Pattern
* Detail Page Pattern
* Resource List Pattern

---

Step 3

Compose using existing components.

Do not create custom components.

---

Step 4

Apply existing tokens.

Do not invent visual values.

---

Step 5

Validate hierarchy and accessibility.

---

# Component Rules

Always:

* use existing components
* use documented variants
* preserve component behavior

Never:

* create one-off variants
* alter component semantics
* create duplicate components

---

# Token Rules

Always:

* use semantic tokens
* use approved spacing values
* use approved typography roles

Never:

* use raw hex values
* use arbitrary spacing
* create new token names
* bypass semantic meaning

---

# Pattern Rules

Always:

* start from an existing pattern
* preserve pattern structure
* maintain predictable hierarchy

Never:

* invent page structures without justification
* mix unrelated patterns
* prioritize aesthetics over usability

---

# Layout Rules

Every page should follow:

Page

↓

Sections

↓

Groups

↓

Components

↓

Content

Maintain this hierarchy.

---

# Visual Rules

Prefer:

* whitespace
* typography
* grouping

For hierarchy.

Avoid:

* excessive color
* excessive borders
* excessive elevation

---

# Accessibility Rules

All generated interfaces must support:

* keyboard navigation
* visible focus states
* sufficient contrast
* semantic structure

Accessibility is mandatory.

---

# Reuse Rules

Before introducing:

A new token

Ask:

Can an existing token solve this?

---

A new component

Ask:

Can an existing component solve this?

---

A new pattern

Ask:

Can an existing pattern solve this?

---

# Escalation Rules

Only create:

New Token

When no semantic token exists.

---

New Component

When composition cannot solve the problem.

---

New Pattern

When no documented workflow exists.

---

Creation of new system primitives requires explicit justification.

---

# Anti-Patterns

Never:

* create custom spacing values
* create custom typography scales
* create duplicate patterns
* create duplicate components
* introduce decorative effects
* prioritize novelty
* optimize for visual uniqueness

---

# AI Self-Check

Before returning any design:

Verify:

□ Existing pattern used

□ Existing components used

□ Existing tokens used

□ Accessibility maintained

□ Clear hierarchy exists

□ No unnecessary customization

□ No duplicate solutions introduced

If any answer is no:

Revise before returning.

---

# Output Expectations

Generated interfaces should feel:

* calm
* structured
* professional
* predictable
* scalable

Generated interfaces should not feel:

* experimental
* playful
* decorative
* trendy
* visually loud

---

# Final Rule

When uncertain:

Choose the solution that introduces the least amount of change to the existing system.
