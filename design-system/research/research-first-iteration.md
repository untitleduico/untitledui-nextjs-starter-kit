После анализа концепции DESIGN.md, практик AI-first design systems и того, как устроен Untitled UI, я бы не рекомендовал ограничиваться одним `DESIGN.md`.

Для вашей ситуации (SaaS + Untitled UI + Figma + GitHub + VS Code + AI-assisted design/development) оптимальной будет **трехуровневая система памяти дизайн-системы**, где DESIGN.md является только верхним уровнем.

---

# Цель

Создать единый источник истины, который:

* понимают дизайнеры;
* понимают разработчики;
* понимают AI агенты;
* можно хранить в Git;
* можно обновлять полуавтоматически;
* позволяет генерировать новые компоненты без деградации стиля Untitled UI.

---

# Что в итоге нужно создать

## 1. DESIGN.md

Главный документ.

Назначение:

* описать Design Language;
* объяснить визуальную философию;
* описать правила принятия решений;
* дать AI контекст для генерации новых интерфейсов.

Это будет аналог Google DESIGN.md, но адаптированный под Untitled UI.

Пример структуры:

```text
DESIGN.md

Overview
Design Principles
Brand Personality
Color System
Typography
Spacing
Radius
Elevation
Layout Principles
Interaction Patterns
Component Philosophy
Accessibility
Do / Don't
```

Важно:

В отличие от большинства примеров из awesome-design-md, здесь нужно документировать не бренд, а именно **Untitled UI Language**, поскольку ваша задача сейчас — зафиксировать существующий стиль.

---

## 2. TOKENS.md

Отдельный документ для токенов.

Причина:

DESIGN.md хорошо объясняет "почему".

Но AI часто ошибается именно в выборе конкретных токенов.

Поэтому нужен отдельный слой памяти.

Пример:

```text
TOKENS.md

Color Tokens
Typography Tokens
Spacing Tokens
Radius Tokens
Shadow Tokens
Border Tokens
Motion Tokens
```

Для каждого токена:

```yaml
color.text.primary
usage:
  - page headings
  - card titles
never_use:
  - helper text
```

Это напрямую следует из идей Romina Kavcic о AI-readable tokens.

---

## 3. COMPONENTS.md

Самый важный документ для практического использования.

Назначение:

описать как именно используется Untitled UI.

Пример:

```text
Button
Badge
Input
Textarea
Select
Avatar
Card
Table
Modal
Dropdown
Tabs
```

Для каждого компонента:

```text
Purpose

Variants

Allowed combinations

Common mistakes

Examples

Anti-patterns
```

Именно этот документ сильнее всего уменьшает количество ошибок AI.

---

## 4. COMPOSITION.md

Документ уровня паттернов.

Это то, чего нет в DESIGN.md спецификации, но на чем делает акцент Romina.

Содержит:

```text
Page Structure

Dashboard Pattern

Form Pattern

Table Pattern

Settings Pattern

Empty State Pattern

Modal Pattern

Detail Page Pattern
```

То есть:

не компонент → а композиция компонентов.

---

## 5. AI-GUIDELINES.md

Инструкция специально для AI.

По сути аналог AGENTS.md для дизайна.

Пример:

```text
When generating UI:

Always prefer existing components.

Never invent spacing values.

Never create new color tokens.

Never mix semantic levels.

Prefer existing page patterns.

Use composition patterns before creating new layouts.
```

Это сильно повышает качество результатов в Cursor, Claude Code, Copilot, GPT и подобных инструментах.

---

# Какие skills нужны

Я бы ограничился двумя.

---

## Skill 1 — Design Audit

Вход:

```text
Figma screenshot
or
React component
or
HTML
```

Проверяет:

* цвета;
* отступы;
* радиусы;
* типографику;
* нарушения паттернов;
* нарушения композиции.

Выход:

```text
Violation
Expected
Suggested Fix
```

---

## Skill 2 — Component Generator

Вход:

```text
Create a new Pricing Card
```

Skill обязан:

1. прочитать DESIGN.md;
2. прочитать TOKENS.md;
3. прочитать COMPONENTS.md;
4. прочитать COMPOSITION.md;

и только потом генерировать компонент.

---

# Что НЕ нужно делать

Я бы исключил:

### Огромный брендбук

Не помогает AI.

---

### PDF документацию

Плохо читается агентами.

---

### Отдельный сайт документации

Сейчас не нужен.

GitHub markdown будет полезнее.

---

### MCP сервер

Для вашей задачи преждевременно.

Сначала нужно создать память системы.

---

# Предлагаемая структура репозитория

```text
design-system/

├── DESIGN.md
├── TOKENS.md
├── COMPONENTS.md
├── COMPOSITION.md
├── AI-GUIDELINES.md

├── examples/
│   ├── dashboard.md
│   ├── settings.md
│   ├── table.md
│   └── forms.md

├── prompts/
│   ├── audit.md
│   └── generate-component.md
```

---

# Порядок работ

## Этап 1

Создаем:

* DESIGN.md
* TOKENS.md

Это фиксирует язык Untitled UI.

---

## Этап 2

Создаем:

* COMPONENTS.md

Это фиксирует библиотеку.

---

## Этап 3

Создаем:

* COMPOSITION.md

Это фиксирует продуктовые паттерны.

---

## Этап 4

Создаем:

* AI-GUIDELINES.md
* Design Audit Skill
* Component Generator Skill

---

# Что я бы сделал на вашем месте

Не пытался бы документировать весь Untitled UI.

Вместо этого документировал бы:

1. Core Design Language Untitled UI.
2. Ваши токены.
3. Только используемые компоненты.
4. Только используемые page patterns.

Обычно это покрывает около 80% ошибок дизайнеров, разработчиков и AI при примерно 20% объема документации.

Следующим сообщением я могу предложить уже конкретную структуру каждого файла (разделы, шаблоны и содержание), а затем полностью сгенерировать весь комплект markdown-файлов для вашей дизайн-системы на основе Untitled UI.
