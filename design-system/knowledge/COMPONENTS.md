# COMPONENTS.md

## Overview

This document defines how components should be selected and composed.

The purpose of the component system is not to maximize variety.

The purpose of the component system is to create predictable user experiences through consistent patterns.

Before introducing a new component, verify that an existing component cannot solve the problem.

---

# Component Selection Principles

## Reuse Before Creation

Always prefer an existing component.

Creating a new component should be considered a last resort.

---

## Simplicity Before Flexibility

Choose the simplest component capable of solving the problem.

Avoid introducing complexity for hypothetical future needs.

---

## Consistency Before Optimization

If multiple components could work, prefer the one most commonly used throughout the product.

---

# Buttons

## Purpose

Initiate actions.

Buttons exist to perform operations.

---

## Use When

* saving data
* creating records
* submitting forms
* confirming actions
* navigating to important destinations

---

## Do Not Use When

* displaying information
* creating visual emphasis
* replacing links
* creating layout structure

---

## Hierarchy

### Primary Button

Represents the main action.

Rules:

* one dominant action per context
* should be visually obvious

Examples:

* Create
* Save
* Continue

---

### Secondary Button

Supporting action.

Examples:

* Cancel
* Back
* Duplicate

---

### Tertiary Button

Low-emphasis action.

Examples:

* Learn More
* View All

---

## Common Mistakes

* multiple primary buttons
* primary buttons used for secondary actions
* excessive button groups

---

# Inputs

## Purpose

Collect user data.

---

## Use When

* entering information
* editing information
* searching

---

## Do Not Use When

* selecting from small predefined options
* toggling states
* choosing from a short list

Use more specific controls instead.

---

## Common Mistakes

* unclear labels
* placeholder used as label
* excessive validation noise

---

# Textarea

## Purpose

Collect multi-line content.

---

## Use When

Users need space to think or write.

Examples:

* descriptions
* notes
* comments

---

## Do Not Use When

Single-line content is expected.

---

# Select

## Purpose

Choose one option from a predefined set.

---

## Use When

The available options are known and controlled.

---

## Do Not Use When

Users need to search large datasets.

Prefer combobox patterns.

---

## Common Mistakes

* too many options
* unclear labels
* hidden defaults

---

# Checkbox

## Purpose

Independent selection.

Each option may be chosen separately.

---

## Use When

Multiple selections are allowed.

---

## Do Not Use When

Only one option may be selected.

Use radio groups instead.

---

# Radio Group

## Purpose

Single selection.

---

## Use When

Users must choose exactly one option.

---

## Do Not Use When

Multiple selections are allowed.

---

# Toggle

## Purpose

Immediate state change.

---

## Use When

The action takes effect immediately.

Examples:

* notifications
* feature enablement
* visibility settings

---

## Do Not Use When

Additional confirmation is required.

---

# Badge

## Purpose

Communicate status or categorization.

---

## Use When

Displaying:

* status
* labels
* categories

---

## Do Not Use When

Highlighting important actions.

Badges are informational.

---

## Common Mistakes

* clickable badges without clear affordance
* excessive badge usage

---

# Avatar

## Purpose

Represent people.

---

## Use When

Identity improves understanding.

Examples:

* assignees
* authors
* collaborators

---

## Do Not Use When

Identity is irrelevant.

---

# Cards

## Purpose

Group related information.

---

## Use When

Information benefits from visual separation.

Examples:

* dashboards
* summaries
* settings groups

---

## Do Not Use When

Simple layouts already provide structure.

Avoid card nesting.

---

## Common Mistakes

* card inside card
* excessive elevation
* unnecessary borders

---

# Tables

## Purpose

Compare structured information.

---

## Use When

Users need to scan multiple records.

---

## Do Not Use When

Users need to read detailed narratives.

---

## Common Mistakes

* excessive columns
* insufficient hierarchy
* actions hidden unnecessarily

---

# Tabs

## Purpose

Switch between related views.

---

## Use When

Users move between peer sections.

---

## Do Not Use When

The content has a strict sequence.

Use steps instead.

---

# Dropdown Menu

## Purpose

Reveal secondary actions.

---

## Use When

Actions are useful but not primary.

---

## Do Not Use When

The action is frequently used.

Expose important actions directly.

---

# Modal

## Purpose

Temporary focused interaction.

---

## Use When

User attention must be isolated.

Examples:

* confirmations
* creation flows
* destructive actions

---

## Do Not Use When

The task is long or complex.

Prefer dedicated pages.

---

## Common Mistakes

* large workflows in modals
* nested modals
* modal chains

---

# Drawer

## Purpose

Contextual editing without losing page context.

---

## Use When

Users need reference to surrounding content.

---

## Do Not Use When

Full attention is required.

Use a modal or dedicated page.

---

# Empty State

## Purpose

Guide users when content is absent.

---

## Required Elements

* explanation
* next step
* clear action

---

## Common Mistakes

* decorative illustrations without guidance
* missing action
* vague messaging

---

# Tooltip

## Purpose

Clarify existing UI.

---

## Use When

Additional context improves understanding.

---

## Do Not Use When

Critical information is required.

Important information should be visible.

---

# Alert

## Purpose

Communicate system feedback.

---

## Use When

Users need awareness.

Examples:

* success
* warning
* error
* information

---

## Do Not Use When

The information is not actionable or relevant.

---

# Component Composition Rules

Prefer:

Page
→ Section
→ Card
→ Component

Avoid:

Page
→ Card
→ Card
→ Card
→ Component

Deep nesting increases cognitive load.

---

# Escalation Model

Before introducing a new component:

1. Can an existing component solve this?
2. Can multiple existing components solve this?
3. Can composition solve this?
4. Is a new pattern actually required?

Only create a new component if all previous answers are no.

---

# AI Rules

When generating interfaces:

1. Use existing components.
2. Prefer composition over customization.
3. Avoid one-off components.
4. Avoid specialized variants.
5. Follow established hierarchy.
6. Use the simplest component available.
7. Preserve consistency over novelty.

If uncertain, choose the component already used elsewhere in the product.
