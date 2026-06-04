Я бы сделал всего **7 слайдов**.

Примерно 8–10 минут.

## Slide 1 — AI-ready design system memory

### Current state:

- Untitled UI provides components
- Untitled UI does not document its design language
- Consistency relies on tribal knowledge

### Goal:

Document a design language in a format that can be used consistently by:

- Designers
- Engineers
- AI tools

Exploration based on Untitled UI

---

### Speaker Notes

> I was asked to use the Untitled UI library itself as the basis for the design language.
> 
> With that in mind, I’d like to try to demonstrate an approach that could be used to document the design language of a real product.
> 

---

## Slide 2 — The problem

### The problem

When something new is created, designers, engineers, and AI can make interpretation decisions

### Result

- Inconsistent spacing
- Inconsistent component usage
- Inconsistent visual hierarchy
- New patterns that don't match the system

Most decisions are not documented

---

### Speaker Notes

> The issue is not that w might lack components.
> 
> The issue is that many design decisions remain implicit.
> 
> People understand them through experience, but AI and new team members do not.
> 
> As these days AI becomes part of our workflow, undocumented decisions become increasingly expensive.
> 

---

## Slide 3 — Inspiration

### Recent industry trends:

- Google DESIGN.md
- AI-readable design systems
- Agent-based documentation
- Design System Memory

### Key idea:

Documentation should become executable knowledge, not just reference material.

---

### Speaker Notes

> This exploration was inspired by Google's DESIGN.md initiative and several recent design system research projects focused on AI-assisted workflows.
> 
> The common theme is that traditional documentation is written for humans.
> 
> The next generation of documentation needs to work for both humans and AI agents.
> 

---

## Slide 4 — Proposed architecture

### Design system memory

```
DESIGN.md
    ↓
TASTE.md
    ↓
TOKENS.md
    ↓
COMPONENTS.md
    ↓
PATTERNS.md
    ↓
AI AGENTS
```

### Purpose

- Design philosophy
- Design judgment
- Token rules
- Component rules
- Layout rules
- AI behavior

---

### Speaker Notes

> Instead of a single documentation file, I explored a layered model.
> 
> Each layer answers a different question.
> 
> DESIGN defines principles.
> 
> TASTE defines aesthetic judgment.
> 
> TOKENS define constraints.
> 
> COMPONENTS define building blocks.
> 
> PATTERNS define composition.
> 
> Together they form a knowledge base that AI can actually use.
> 
> So depending on the use case, we might need to use the whole documentation or only a piece of it.
> 

---

## Slide 5 — What was built

### Pilot deliverables

```
design-system/

DESIGN.md

knowledge/
├── TASTE.md
├── TOKENS.md
├── COMPONENTS.md
└── PATTERNS.md

ai/
├── AGENTS.md
├── AUDIT.md
└── GENERATE.md
```

Built using Untitled UI as the reference design language.

---

### Speaker Notes

> Even though I based this on the Untitled UI framework, the resulting documentation serves as a detailed example of how the design language documentation for a real-world product might look
> 

---

## Slide 6 — Potential use cases

### Design

- Faster onboarding
- More consistent decisions

### Engineering

- Shared design language
- Better implementation consistency

### AI

- Design audits
- Component generation
- Screen generation
- Design system compliance checks

---

### Speaker Notes

> The most interesting opportunity is not documentation itself.
> 
> The interesting opportunity is what becomes possible once the design language is documented in a structured format.
> 
> With this AI now can not only generate components. But also audit designs and validate compliance against documented rules rather than relying on assumptions.
> 

---

## Slide 7 — Recommendation

This is a draft. A concept. Not yet a real documentation.

### Next steps

- Validate whether this documentation model is useful
- Test with a small real product area
- Measure impact on consistency and AI-assisted workflows

---

### Speaker Notes

> I view this as an exploration rather than a proposal for immediate adoption.
> 
> The next logical step would be to test the approach on a real part of the product and evaluate whether it improves consistency, onboarding, and AI-assisted work.
> 
> If it proves useful, we could gradually evolve it alongside future design system work and any future redesign efforts.
>