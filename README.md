# Untitled UI starter kit for Next.js

[![CI](https://github.com/untitleduico/untitledui-nextjs-starter-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/untitleduico/untitledui-nextjs-starter-kit/actions/workflows/ci.yml)

This is an official Untitled UI starter kit for Next.js. Kickstart your Untitled UI project with Next.js in seconds.

## Untitled UI React

[Untitled UI React](https://www.untitledui.com/react) is the world’s largest collection of open-source React UI components. Everything you need to design and develop modern, beautiful interfaces—fast.

Built with React 19.1, Tailwind CSS v4.1, TypeScript 5.8, and React Aria, Untitled UI React components deliver modern performance, type safety, and maintainability.

[Learn more](https://www.untitledui.com/react) • [Documentation](https://www.untitledui.com/react/docs/introduction) • [Figma](https://www.untitledui.com/figma) • [FAQs](https://www.untitledui.com/faqs)

## Getting started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Testing

This project includes a comprehensive test suite with **179 tests** covering utilities, hooks, and components.

Run tests with Vitest:

```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```

Run tests in CI mode:

```bash
bun test:run
```

Generate coverage report:

```bash
bun test:coverage
```

**Test Coverage:**
- 9 test files
- 179 passing tests
- Utilities: `cx`, `isReactComponent`
- Hooks: `useBreakpoint`, `useClipboard`, `useResizeObserver`
- Components: Badge, Button, Checkbox, Toggle

**Testing Stack:**
- [Vitest](https://vitest.dev/) - Fast unit test framework
- [React Testing Library](https://testing-library.com/react) - Component testing utilities
- [jsdom](https://github.com/jsdom/jsdom) - Browser environment for tests

## CI/CD

This project uses GitHub Actions for continuous integration. The CI pipeline runs on every push to `main` and on pull requests.

**CI Pipeline Steps:**
1. **Lint** - Runs Biome/Ultracite linter
2. **Type Check** - TypeScript compiler check
3. **Test** - Runs all 179 tests with Vitest
4. **Build** - Production build with Next.js

**Workflow Status:**
- Triggered on: Push to `main`, Pull requests to `main`
- Concurrency: Cancels in-progress runs for same branch
- Required: All jobs must pass before merge

## Resources

Untitled UI React is built on top of [Untitled UI Figma](https://www.untitledui.com/figma), the world's largest and most popular Figma UI kit and design system. Explore more:

**[Untitled UI Figma:](https://www.untitledui.com/react/resources/figma-files)** The world's largest Figma UI kit and design system.
<br/>
**[Untitled UI Icons:](https://www.untitledui.com/react/resources/icons)** A clean, consistent, and neutral icon library crafted specifically for modern UI design.
<br/>
**[Untitled UI file icons:](https://www.untitledui.com/react/resources/file-icons)** Free file format icons, designed specifically for modern web and UI design.
<br/>
**[Untitled UI flag icons:](https://www.untitledui.com/react/resources/flag-icons)** Free country flag icons, designed specifically for modern web and UI design.
<br/>
**[Untitled UI avatars:](https://www.untitledui.com/react/resources/avatars)** Free placeholder user avatars and profile pictures to use in your projects.
<br/>
**[Untitled UI logos:](https://www.untitledui.com/react/resources/logos)** Free fictional company logos to use in your projects.

## License

Untitled UI React open-source components are licensed under the MIT license, which means you can use them for free in unlimited commercial projects.

> [!NOTE]
> This license applies only to the starter kit and to the components included in this open-source repository. [Untitled UI React PRO](https://www.untitledui.com/react) includes hundreds more advanced UI components and page examples and is subject to a separate [license agreement](https://www.untitledui.com/license).

[Untitled UI license agreement →](https://www.untitledui.com/license)

[Frequently asked questions →](https://www.untitledui.com/faqs)
