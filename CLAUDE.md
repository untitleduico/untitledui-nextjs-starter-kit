# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Official Untitled UI starter kit for Next.js. A comprehensive React component library built with Next.js 16, React 19, Tailwind CSS v4, and React Aria Components.

## Commands

```bash
bun dev          # Start dev server with Turbopack
bun run build    # Production build
bun run start    # Start production server
bun test         # Run tests in watch mode
bun test:run     # Run tests once (CI mode)
```

## CI/CD

GitHub Actions workflow (`.github/workflows/ci.yml`) runs on push to `main` and PRs:

1. **Lint** - `bun x ultracite check`
2. **Type Check** - `bun x tsc --noEmit`
3. **Test** - `bun test:run` (179 tests)
4. **Build** - `bun run build`

All jobs must pass before merging PRs.

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

## Code Quality & Testing

### Linting & Formatting

Uses **Biome** with **Ultracite** preset for fast, AI-ready code formatting:
- 4-space indentation
- Configured with `ultracite/core`, `ultracite/react`, `ultracite/next` presets
- Custom rules for UI component library patterns
- Run `bun x ultracite fix` to auto-fix issues
- Run `bun x ultracite check` to check for issues

### Testing

Uses **Vitest** with **React Testing Library**:
- Test files: `*.test.ts` and `*.test.tsx`
- Run `bun test` to run tests
- Run `bun test:run` for CI mode
- Run `bun test:coverage` for coverage report
- Current: 179 tests across 9 test files (hooks, utilities, components)

### Test Infrastructure

```typescript
// vitest.config.ts
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.tsx",
  },
});
```

Mocked APIs in test setup:
- `next/navigation` (useRouter, usePathname, useSearchParams)
- `next/image` (Image component)
- `next-themes` (ThemeProvider)
- `window.matchMedia` and `ResizeObserver`

### React Aria Testing Best Practices

**Important:** React Aria components use different attribute patterns than standard HTML.

**Switch/Toggle Components:**
- Use `screen.getByRole("switch")` for queries
- Test state via `onChange` callbacks, not `data-selected` attributes
- Input uses `aria-checked`, wrapper may have `data-selected`

**Checkbox Components:**
- `data-indeterminate` is on wrapper element, not input
- Query with `container.querySelector("[data-indeterminate]")`
- Custom className applied to wrapper, not checkbox input

**SVG Elements:**
- Use `element.classList.contains()` instead of `className.toContain()`
- SVG className is not a plain string property

**Button Components:**
- Tailwind-merge reorders classes - test individual classes, not full string
- React Aria Button uses `data-disabled` for disabled state

**Testing Pattern (Correct):**
```typescript
it("should toggle when clicked", async () => {
  const handleChange = vi.fn();
  render(<Toggle onChange={handleChange} />);
  await user.click(screen.getByRole("switch"));
  expect(handleChange).toHaveBeenCalledWith(true);
});
```
