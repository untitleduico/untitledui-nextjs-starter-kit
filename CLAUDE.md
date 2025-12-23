# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Official Untitled UI starter kit for Next.js. A comprehensive React component library built with Next.js 16, React 19, Tailwind CSS v4, and React Aria Components.

## Commands

```bash
bun dev          # Start dev server with Turbopack
bun run build    # Production build
bun run start    # Start production server
```

## Architecture

### Directory Structure

```
src/
├── app/            # Next.js App Router pages
├── components/     # UI component library
│   ├── application/  # Feature-rich components (tabs, pagination, navigation)
│   ├── base/         # Foundational UI (buttons, inputs, forms, badges)
│   ├── foundations/  # Design primitives (icons, logos)
│   ├── marketing/    # Marketing components (headers)
│   └── shared-assets/ # Illustrations, patterns
├── hooks/          # Custom hooks (useBreakpoint, useClipboard, useResizeObserver)
├── providers/      # Context providers (RouteProvider for React Aria + Next.js)
├── styles/         # Tailwind theme and global styles
└── utils/          # Helpers (cx for class merging)
```

### Component Patterns

Components follow a consistent styling architecture using `sortCx` objects organized by category:

```typescript
export const styles = sortCx({
    common: { root: "...", icon: "..." },
    sizes: { sm: { root: "..." }, md: { root: "..." } },
    colors: { primary: { root: "..." }, secondary: { root: "..." } }
});
```

- **React Aria Components**: All interactive components use React Aria for accessibility
- **Client Components**: Mark with `"use client"` when needed for interactivity
- **Icon Integration**: Use `@untitledui/icons` with `data-icon` attribute for consistent styling

### Styling System

**Tailwind CSS v4** with custom theme variables in `src/styles/theme.css`:
- Custom display typography: `text-display-xs` through `text-display-2xl`
- Custom breakpoints: `xxs` (320px), `xs` (600px)
- Semantic color tokens: `bg-primary`, `text-secondary`, `border-primary`
- Custom shadows: `shadow-skeumorphic`, `shadow-xs-skeumorphic`

**Class Merging**: Use `cx()` from `@/utils/cx` (extended tailwind-merge):
```typescript
import { cx } from "@/utils/cx";
cx("base-classes", conditional && "conditional-classes", className)
```

### Path Aliases

`@/*` maps to `./src/*`

## Key Dependencies

- **react-aria-components**: Accessible UI primitives
- **motion**: Animations
- **next-themes**: Dark/light mode
- **input-otp**: OTP input component
- **qr-code-styling**: QR code generation

## Code Formatting

Uses Prettier with:
- 4-space indentation
- 160 character line width
- Import sorting via `@trivago/prettier-plugin-sort-imports`
- Tailwind class sorting via `prettier-plugin-tailwindcss`
