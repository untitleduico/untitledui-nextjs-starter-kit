# DESIGN.md

## Overview

This document defines the visual language and design principles used throughout the product.

The system is based on Untitled UI and follows a modern SaaS design language optimized for clarity, scalability, accessibility, and implementation efficiency.

This document serves as the primary source of truth for designers, engineers, and AI systems generating or modifying interfaces.

When conflicts occur between local implementation decisions and this document, this document takes precedence.

---

# Design Philosophy

The design language prioritizes:

1. Clarity over decoration
2. Consistency over novelty
3. Structure over expression
4. Accessibility over visual complexity
5. Reuse over reinvention

The interface should feel:

* Professional
* Modern
* Calm
* Efficient
* Trustworthy

The interface should never feel:

* Playful
* Experimental
* Decorative
* Aggressive
* Visually noisy

---

# Core Principles

## Information First

Visual styling exists to support understanding.

Content and hierarchy are always more important than visual effects.

Avoid decorative elements that do not improve comprehension.

---

## Hierarchy Through Structure

Hierarchy is primarily communicated through:

* spacing
* typography
* grouping
* layout

Avoid relying on color alone to create hierarchy.

---

## Systematic Consistency

Identical problems should receive identical solutions.

Do not create new visual patterns when existing patterns solve the same problem.

Prefer consistency over local optimization.

---

## Minimal Visual Weight

Interfaces should use the minimum amount of visual treatment required.

Prefer:

* subtle borders
* subtle shadows
* restrained color usage

Avoid:

* heavy shadows
* large gradients
* excessive elevation
* decorative effects

---

## Accessible by Default

Accessibility is not an enhancement.

Accessibility is a baseline requirement.

Every component and layout decision must support:

* readability
* keyboard navigation
* focus visibility
* sufficient contrast

---

# Visual Characteristics

The visual language is characterized by:

* neutral foundations
* restrained accent usage
* generous spacing
* medium corner radius
* subtle elevation
* strong typography hierarchy
* clean alignment
* predictable interaction patterns

The visual language should appear mature and product-focused.

---

# Color Language

## Role of Color

Color communicates meaning before brand expression.

Color should primarily be used for:

* status
* feedback
* emphasis
* actions

Color should not be used as decoration.

---

## Neutral Foundation

Most surfaces should rely on neutral colors.

Neutral colors create:

* clarity
* flexibility
* content focus

Most of the interface should be composed of neutral values.

---

## Accent Usage

Accent colors are intentionally limited.

Accent colors should be reserved for:

* primary actions
* active states
* selected states
* important emphasis

Avoid introducing multiple competing accent colors within the same context.

---

## Semantic Colors

Semantic colors communicate state.

Common semantic categories include:

* Success
* Warning
* Error
* Information

Semantic meaning must remain consistent across all screens.

---

# Typography Language

## Typography Drives Hierarchy

Typography is the primary hierarchy mechanism.

Users should understand page structure without relying on color.

---

## Reading Experience

Typography should prioritize readability over expression.

Prefer:

* clean sans-serif fonts
* comfortable line height
* predictable scaling

Avoid:

* decorative fonts
* compressed typography
* excessive font weight variation

---

## Type Scale

The system uses a structured type scale.

Every text element should map to an existing semantic typography role.

Avoid creating custom text sizes.

---

# Spacing Language

## Space Creates Structure

Spacing is the primary layout tool.

Layouts should feel open and breathable.

Generous whitespace improves comprehension.

---

## Consistent Rhythm

Spacing should follow a predictable scale.

Avoid arbitrary spacing decisions.

All spacing should originate from approved spacing tokens.

---

## Grouping Logic

Elements with related meaning should be visually grouped.

Increase spacing when meaning changes.

Spacing should communicate relationships.

---

# Layout Language

## Predictable Layouts

Users should recognize patterns quickly.

Prefer established layouts over unique compositions.

---

## Content Alignment

Strong alignment improves readability.

Elements should align to shared layout boundaries whenever possible.

Avoid visual drift.

---

## Progressive Disclosure

Show only the information necessary for the current task.

Complexity should be revealed gradually.

---

# Shape Language

## Corner Radius

The system uses moderate corner radii.

The goal is softness without playfulness.

Avoid:

* sharp industrial corners
* highly rounded consumer-style corners

---

## Borders

Borders provide structure.

Borders should remain subtle and supportive.

Avoid strong visual separation unless necessary.

---

# Elevation Language

Elevation is used sparingly.

Elevation should communicate:

* layering
* focus
* temporary surfaces

Examples:

* dropdowns
* popovers
* modals

Avoid stacking multiple elevation levels in a single view.

---

# Interaction Language

## Predictable Interactions

Interactive elements should behave consistently.

Users should never need to learn new interaction patterns for familiar actions.

---

## Visible Feedback

Every user action should produce visible feedback.

Examples:

* hover states
* active states
* loading states
* success states
* error states

---

## Motion

Motion should support understanding.

Motion should:

* clarify transitions
* communicate state changes
* reinforce causality

Motion should never exist purely for decoration.

---

# Component Philosophy

## Reuse Before Creation

Always prefer existing components before creating new ones.

New components should only be introduced when existing components cannot solve the problem.

---

## Composition Before Customization

Prefer composing existing primitives.

Avoid creating specialized one-off components.

---

## Consistent Behavior

Components with similar purposes should behave similarly.

Behavioral consistency is as important as visual consistency.

---

# Accessibility

Accessibility requirements apply to all interfaces.

Minimum expectations:

* keyboard accessibility
* visible focus indicators
* semantic structure
* accessible naming
* sufficient contrast

Accessibility should be considered during design, not after implementation.

---

# Do

* Use existing components
* Use approved tokens
* Maintain spacing rhythm
* Preserve hierarchy
* Prefer simplicity
* Follow established patterns
* Optimize for readability

---

# Don't

* Invent new colors
* Invent new spacing values
* Introduce decorative effects
* Create one-off patterns
* Overuse elevation
* Overuse accent colors
* Sacrifice accessibility for aesthetics
* Prioritize novelty over consistency

---

# Decision Framework

When evaluating design decisions, apply the following order:

1. Accessibility
2. Clarity
3. Consistency
4. Reusability
5. Efficiency
6. Visual refinement

If a decision improves aesthetics but reduces consistency, choose consistency.

If a decision improves uniqueness but reduces clarity, choose clarity.
