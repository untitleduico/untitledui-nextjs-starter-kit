# Design System Documentation

Design language documentation for interfaces built with Untitled UI.

This documentation is structured to be used consistently by designers, engineers, and AI agents.

---

## What this is

This is not a component library.

This is the design language behind the component library — the principles, decisions, constraints, and taste that determine how every interface should look and behave.

The component library tells you what exists.

This documentation tells you why it exists, how to use it, and how to extend it without breaking it.

---

## Reading order

### For humans

Read in order:

1. [DESIGN.md](DESIGN.md) — What the interface looks and feels like
2. [knowledge/TASTE.md](knowledge/TASTE.md) — How to make aesthetic judgment calls
3. [knowledge/TOKENS.md](knowledge/TOKENS.md) — Which values are approved and how to use them
4. [knowledge/COMPONENTS.md](knowledge/COMPONENTS.md) — How to select and compose components
5. [knowledge/PATTERNS.md](knowledge/PATTERNS.md) — How to compose components into screens
6. [knowledge/DECISIONS.md](knowledge/DECISIONS.md) — Why key decisions were made

### For AI agents

Start with the agent contract:

1. [ai/AGENTS.md](ai/AGENTS.md) — Base behavior rules for all AI work
2. [ai/GENERATE.md](ai/GENERATE.md) — Rules for generating new interfaces
3. [ai/AUDIT.md](ai/AUDIT.md) — Rules for auditing existing interfaces

---

## File structure

```
design-system/
│
├── DESIGN.md                    # Design language definition (start here)
│
├── knowledge/
│   ├── TASTE.md                 # Aesthetic judgment rules
│   ├── TOKENS.md                # Token definitions and usage rules
│   ├── COMPONENTS.md            # Component selection and composition rules
│   ├── PATTERNS.md              # Screen-level composition patterns
│   └── DECISIONS.md             # Key design decisions and rationale
│
└── ai/
    ├── AGENTS.md                # Base AI agent behavior contract
    ├── GENERATE.md              # AI generation workflow and rules
    └── AUDIT.md                 # AI audit workflow and rules
```

---

## Foundation

Built on [Untitled UI](https://www.untitledui.com/react/docs/introduction) — a modern React component library based on React Aria Components with Tailwind CSS v4.

The design language is intentionally product-focused rather than brand-expressive. It is designed to serve SaaS application interfaces.
