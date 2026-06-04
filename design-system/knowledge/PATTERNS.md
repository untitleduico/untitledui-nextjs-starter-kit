# PATTERNS.md

## Overview

This document defines how components are composed into complete user experiences.

Patterns exist to reduce cognitive load, increase predictability, and improve consistency.

Whenever possible, use an existing pattern before creating a new layout.

Patterns should remain stable even when components evolve.

---

# Pattern Selection Principles

## Familiarity Before Originality

Users should recognize structure immediately.

Prefer established SaaS patterns over unique layouts.

---

## Consistency Before Local Optimization

The same user task should use the same layout pattern throughout the product.

---

## Progressive Disclosure

Show information only when needed.

Avoid overwhelming users with complexity.

---

## Single Primary Goal

Every screen should have one dominant purpose.

Competing priorities reduce clarity.

---

# Dashboard Pattern

## Purpose

Provide overview and monitoring.

Users should understand current status within seconds.

---

## Structure

Page Header

↓

Summary Metrics

↓

Primary Content

↓

Secondary Content

---

## Typical Components

* Page Header
* KPI Cards
* Charts
* Tables
* Alerts

---

## Rules

Prioritize information density carefully.

Most important information should appear above the fold.

Avoid excessive card nesting.

---

## Common Mistakes

* too many metrics
* equal visual weight everywhere
* excessive dashboard customization

---

# Resource List Pattern

## Purpose

Browse and manage collections of records.

Examples:

* users
* projects
* invoices
* tickets

---

## Structure

Page Header

↓

Filters

↓

Search

↓

Table or List

↓

Pagination

---

## Typical Components

* Search
* Filters
* Table
* Bulk Actions
* Pagination

---

## Rules

Search and filtering should remain visible.

Primary actions should appear near the page title.

---

## Common Mistakes

* hiding important actions
* excessive filtering complexity
* inconsistent table actions

---

# Detail Page Pattern

## Purpose

View and manage a single entity.

Examples:

* user profile
* project details
* invoice details

---

## Structure

Header

↓

Key Information

↓

Sections

↓

Related Content

---

## Typical Components

* Heading
* Metadata
* Tabs
* Cards
* Tables

---

## Rules

Most important information appears first.

Secondary information should be grouped.

---

## Common Mistakes

* large walls of content
* poor hierarchy
* mixing overview and editing

---

# Settings Pattern

## Purpose

Configure system behavior.

---

## Structure

Settings Navigation

↓

Settings Group

↓

Individual Controls

↓

Save State

---

## Typical Components

* Forms
* Toggles
* Selects
* Alerts

---

## Rules

Group related settings.

Keep labels explicit.

Describe consequences clearly.

---

## Common Mistakes

* unclear terminology
* hidden dependencies
* oversized forms

---

# Form Pattern

## Purpose

Collect information efficiently.

---

## Structure

Context

↓

Fields

↓

Validation

↓

Primary Action

---

## Rules

Ask only for required information.

Reduce cognitive effort.

Provide clear labels.

---

## Typical Components

* Inputs
* Selects
* Checkboxes
* Textareas
* Buttons

---

## Common Mistakes

* placeholder-only labels
* excessive required fields
* validation appearing too early

---

# Multi-Step Flow Pattern

## Purpose

Guide users through complex tasks.

Examples:

* onboarding
* setup
* checkout
* account creation

---

## Structure

Progress Indicator

↓

Current Step

↓

Next Action

---

## Rules

One decision at a time.

Progress must remain visible.

---

## Common Mistakes

* too many steps
* hidden progress
* inconsistent navigation

---

# Modal Pattern

## Purpose

Temporary focused task.

---

## Appropriate Uses

* confirmations
* simple creation flows
* destructive actions

---

## Structure

Title

↓

Content

↓

Actions

---

## Rules

Keep content concise.

Avoid long workflows.

---

## Common Mistakes

* nested modals
* complex forms
* multiple competing actions

---

# Drawer Pattern

## Purpose

Edit content without leaving context.

---

## Appropriate Uses

* quick edits
* previews
* secondary workflows

---

## Rules

Main page context should remain relevant.

If attention must fully shift, use a dedicated page.

---

# Empty State Pattern

## Purpose

Guide users when no content exists.

---

## Required Elements

Explanation

↓

Reason

↓

Action

---

## Rules

Always provide a next step.

Focus on guidance rather than decoration.

---

## Common Mistakes

* no CTA
* vague messaging
* decorative illustrations without utility

---

# Search Pattern

## Purpose

Help users locate known information.

---

## Structure

Search Input

↓

Results

↓

Refinement

---

## Rules

Search should feel immediate.

Filters should complement search.

---

## Common Mistakes

* over-reliance on filters
* hidden search
* poor empty results states

---

# Notification Pattern

## Purpose

Communicate system events.

---

## Types

Success

Warning

Error

Information

---

## Rules

Notifications should be concise.

Communicate outcome first.

---

## Common Mistakes

* excessive notifications
* repeated notifications
* non-actionable messages

---

# Table Pattern

## Purpose

Support comparison and management of structured data.

---

## Structure

Table Header

↓

Rows

↓

Actions

↓

Pagination

---

## Rules

Support scanning.

Prioritize important columns.

Keep actions discoverable.

---

## Common Mistakes

* excessive columns
* horizontal scrolling
* hidden critical actions

---

# Navigation Pattern

## Purpose

Help users understand location and move efficiently.

---

## Structure

Primary Navigation

↓

Section Navigation

↓

Page Content

---

## Rules

Navigation should remain predictable.

Information architecture should stay stable.

---

## Common Mistakes

* duplicate navigation systems
* unclear labels
* changing navigation structure frequently

---

# Hierarchy Pattern

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

Never reverse this hierarchy.

---

# Layout Density Model

Default Density:

Comfortable

Preferred for most SaaS interfaces.

---

Compact Density:

Used for:

* data-heavy tables
* monitoring tools
* power-user workflows

---

Relaxed Density:

Used sparingly.

Examples:

* onboarding
* marketing
* educational experiences

---

# Pattern Escalation Framework

Before creating a new layout:

1. Can an existing pattern solve the problem?
2. Can two existing patterns be combined?
3. Can the workflow be simplified?
4. Is a new pattern actually required?

Only introduce a new pattern when all previous answers are no.

---

# AI Rules

When generating screens:

1. Start with an existing pattern.
2. Preserve pattern structure.
3. Use existing components.
4. Keep a single primary goal.
5. Maintain predictable hierarchy.
6. Prefer familiar SaaS layouts.
7. Optimize for clarity over originality.

If uncertain, use the closest existing pattern rather than inventing a new one.
