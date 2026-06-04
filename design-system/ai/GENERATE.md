# GENERATE.md

## Purpose

This document defines how AI agents should generate new interfaces, workflows, components, and design solutions.

The objective is not creativity.

The objective is consistency with the design system.

Generated solutions should feel like a natural extension of the existing product.

---

# Primary Rule

Reuse before creation.

Before introducing anything new:

* reuse patterns
* reuse components
* reuse tokens

Creation is a last resort.

---

# Required Inputs

Before generating any solution:

Read:

1. DESIGN.md
2. TOKENS.md
3. COMPONENTS.md
4. PATTERNS.md
5. AGENTS.md

Do not skip documents.

---

# Generation Workflow

## Step 1

Understand the user goal.

Examples:

* create user
* edit project
* review invoice
* configure settings
* monitor activity

Focus on the task rather than the interface.

---

## Step 2

Identify the closest existing pattern.

Reference:

PATTERNS.md

Examples:

* Dashboard Pattern
* Resource List Pattern
* Detail Page Pattern
* Form Pattern
* Settings Pattern

Use an existing pattern whenever possible.

---

## Step 3

Select existing components.

Reference:

COMPONENTS.md

Choose the simplest component capable of solving the problem.

---

## Step 4

Apply existing tokens.

Reference:

TOKENS.md

Use semantic tokens.

Never use raw values.

---

## Step 5

Validate hierarchy.

Reference:

DESIGN.md

Hierarchy should be established through:

* spacing
* typography
* grouping

Not decoration.

---

## Step 6

Validate accessibility.

Accessibility is mandatory.

---

# Screen Generation Rules

When generating screens:

Always:

* start with a pattern
* maintain a single primary goal
* preserve hierarchy
* preserve consistency

Never:

* create artistic layouts
* prioritize novelty
* introduce decorative elements

---

# Page Construction Order

Build pages in the following order:

Page

↓

Sections

↓

Groups

↓

Components

↓

Content

Never reverse this order.

---

# Pattern Reuse Rules

Before creating a new pattern:

Ask:

Can an existing pattern solve this?

If yes:

Use existing pattern.

---

If no:

Can multiple existing patterns be combined?

If yes:

Combine patterns.

---

Only create a new pattern when both answers are no.

---

# Component Reuse Rules

Before creating a new component:

Ask:

Can an existing component solve this?

---

Can multiple components solve this together?

---

Can composition solve this?

---

Only create a new component when all answers are no.

---

# Token Usage Rules

Always:

* use semantic tokens
* use existing spacing
* use existing typography
* use existing radius

Never:

* invent tokens
* invent color values
* invent spacing values
* invent typography scales

---

# Hierarchy Rules

Hierarchy should be communicated using:

1. Typography
2. Spacing
3. Grouping

Use color only as supporting emphasis.

---

# Color Rules

Color communicates meaning.

Use color for:

* actions
* status
* feedback

Avoid using color as decoration.

---

# Layout Rules

Prefer:

* predictable layouts
* strong alignment
* consistent spacing

Avoid:

* visual experimentation
* asymmetrical complexity
* decorative structure

---

# Form Generation Rules

Forms should:

* ask only for required information
* use appropriate controls
* group related fields
* reduce cognitive effort

Avoid:

* excessive fields
* unnecessary validation
* complex layouts

---

# Table Generation Rules

Tables should:

* prioritize scanability
* expose key actions
* support comparison

Avoid:

* excessive columns
* hidden actions
* unnecessary density

---

# Dashboard Generation Rules

Dashboards should:

* surface important information first
* support monitoring
* support decision making

Avoid:

* excessive metrics
* visual noise
* equal emphasis everywhere

---

# Empty State Generation Rules

Every empty state must contain:

1. Explanation
2. Context
3. Next Action

Never generate decorative-only empty states.

---

# Modal Generation Rules

Use modals only for:

* confirmations
* focused tasks
* short workflows

Avoid:

* complex multi-step experiences
* long forms
* nested workflows

---

# Accessibility Rules

Generated interfaces must support:

□ keyboard navigation

□ visible focus states

□ accessible labels

□ semantic structure

□ sufficient contrast

Accessibility is required.

---

# Design Language Validation

Generated work should feel:

* calm
* professional
* structured
* efficient
* trustworthy

Generated work should not feel:

* playful
* experimental
* decorative
* trendy
* visually loud

---

# Escalation Rules

New Token

Allowed only when:

No semantic token exists.

---

New Component

Allowed only when:

Composition cannot solve the problem.

---

New Pattern

Allowed only when:

No documented workflow exists.

---

Every escalation requires justification.

---

# Required Output Structure

When generating UI:

Provide:

1. User Goal
2. Selected Pattern
3. Components Used
4. Token Strategy
5. Accessibility Considerations
6. Generated Solution

This makes decision-making transparent.

---

# AI Self-Check

Before returning a solution:

Verify:

□ Existing pattern used

□ Existing components used

□ Existing tokens used

□ Accessibility maintained

□ Clear hierarchy established

□ No unnecessary customization

□ No duplicate solutions introduced

□ Design language preserved

---

If any answer is no:

Revise before returning.

---

# Final Rule

When uncertain:

Choose the solution that introduces the least amount of change to the system.
