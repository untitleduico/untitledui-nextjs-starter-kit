# AUDIT.md

## Purpose

This document defines how AI agents should audit interfaces against the design system.

The goal of an audit is not criticism.

The goal is consistency, maintainability, accessibility, and system compliance.

All findings should reference documented rules.

Avoid subjective feedback.

---

# Audit Priorities

Evaluate issues in the following order:

1. Accessibility
2. Pattern Compliance
3. Component Compliance
4. Token Compliance
5. Visual Consistency
6. Refinement Opportunities

Never reverse this order.

---

# Required References

All audit findings must reference:

* DESIGN.md
* TOKENS.md
* COMPONENTS.md
* PATTERNS.md

Feedback without references should not be considered valid.

---

# Audit Workflow

## Step 1

Identify the screen purpose.

Examples:

* dashboard
* settings page
* form
* resource list
* detail page

---

## Step 2

Determine the expected pattern.

Reference:

PATTERNS.md

---

## Step 3

Evaluate component selection.

Reference:

COMPONENTS.md

---

## Step 4

Evaluate token usage.

Reference:

TOKENS.md

---

## Step 5

Evaluate accessibility.

Reference:

DESIGN.md

---

## Step 6

Generate findings.

---

# Severity Levels

## Critical

Directly impacts:

* accessibility
* usability
* task completion

Examples:

* missing labels
* inaccessible contrast
* missing focus states

---

## Major

Violates system rules.

Examples:

* custom component
* custom token
* incorrect pattern usage

---

## Minor

Improvement opportunity.

Examples:

* spacing inconsistency
* visual imbalance
* hierarchy refinement

---

## Observation

No action required.

Informational only.

---

# Accessibility Checks

Verify:

□ Keyboard navigation

□ Visible focus states

□ Accessible labels

□ Sufficient contrast

□ Semantic structure

□ Error communication

□ Form accessibility

Accessibility failures are always Critical.

---

# Pattern Compliance Checks

Verify:

□ Appropriate pattern selected

□ Pattern structure maintained

□ Information hierarchy preserved

□ Navigation predictable

□ Single primary goal visible

Common Violations:

* mixed patterns
* missing hierarchy
* unclear workflows

---

# Component Compliance Checks

Verify:

□ Existing components used

□ Appropriate component selected

□ Component semantics preserved

□ Existing variants used

Common Violations:

* custom controls
* duplicate components
* misuse of buttons
* misuse of badges

---

# Token Compliance Checks

Verify:

□ Existing tokens used

□ Semantic tokens used correctly

□ Approved spacing used

□ Approved typography used

□ Approved radius used

Common Violations:

* raw values
* custom spacing
* custom colors
* inconsistent typography

---

# Layout Checks

Verify:

□ Clear hierarchy

□ Consistent alignment

□ Predictable grouping

□ Appropriate density

□ Appropriate whitespace

Common Violations:

* visual clutter
* inconsistent spacing
* weak grouping

---

# Visual Language Checks

Verify:

□ Neutral foundation

□ Controlled color usage

□ Appropriate emphasis

□ Consistent elevation

□ Consistent radius

Common Violations:

* excessive color
* excessive shadows
* excessive borders
* decorative effects

---

# Empty State Checks

Verify:

□ Explanation provided

□ Reason provided

□ Clear action provided

Common Violations:

* no next step
* decorative-only content

---

# Form Checks

Verify:

□ Clear labels

□ Clear validation

□ Logical grouping

□ Appropriate field selection

□ Appropriate action hierarchy

Common Violations:

* placeholder as label
* excessive required fields
* validation overload

---

# Table Checks

Verify:

□ Scanability

□ Action discoverability

□ Appropriate density

□ Column prioritization

Common Violations:

* excessive columns
* hidden actions
* poor hierarchy

---

# Audit Output Format

Use the following structure.

---

Finding

Severity:
Critical | Major | Minor | Observation

Category:
Accessibility | Pattern | Component | Token | Layout | Visual

Issue:
Short description.

Reference:
Document and section.

Reason:
Why this violates the system.

Recommendation:
Specific corrective action.

---

# Example Finding

Severity:
Major

Category:
Token

Issue:
Custom spacing value detected.

Reference:
TOKENS.md → Spacing Tokens

Reason:
Spacing must originate from approved spacing tokens.

Recommendation:
Replace custom spacing with the nearest approved spacing token.

---

# Audit Behavior

Avoid:

* personal preference
* aesthetic opinions
* speculative feedback

Prefer:

* documented rules
* objective findings
* actionable recommendations

---

# AI Self-Check

Before returning an audit:

Verify:

□ Every finding references documentation

□ Every finding includes a recommendation

□ Severity is appropriate

□ Accessibility issues prioritized

□ Pattern issues prioritized

□ No subjective feedback included

---

# Final Rule

Do not ask:

"Would I design it this way?"

Ask:

"Does this comply with the system?"
