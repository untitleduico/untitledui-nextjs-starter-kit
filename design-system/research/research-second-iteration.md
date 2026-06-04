# Ключевое отличие от первой итерации

Не создавать документацию про **Untitled UI как библиотеку компонентов**, а создать документацию про **Untitled UI Design Language**.

Это гораздо ближе к тому, что ожидают от DESIGN.md и что будет полезно для AI.

---

# Что я предлагаю сделать

Не 5 файлов, а следующий набор:

```text
design-system/

├── DESIGN.md
│
├── knowledge/
│   ├── TOKENS.md
│   ├── COMPONENTS.md
│   └── PATTERNS.md
│
└── ai/
    ├── AGENTS.md
    ├── AUDIT.md
    └── GENERATE.md
```

---

# Что будет содержать каждый файл

## DESIGN.md

Главный документ.

Отвечает на вопрос:

> Как выглядит интерфейс в стиле Untitled UI?

Содержимое:

```text
Design Philosophy

Core Principles

Visual Characteristics

Color Language

Typography Language

Spacing Language

Layout Language

Interaction Language

Accessibility

Do / Don't
```

Это будет аналог Google DESIGN.md.

---

## TOKENS.md

Отвечает на вопрос:

> Какие решения считаются допустимыми?

Не просто список токенов.

А список токенов + правила использования.

Пример:

```yaml
Text / Primary

Use:
  - page titles
  - section titles

Avoid:
  - helper text
  - disabled text
```

---

## COMPONENTS.md

Отвечает на вопрос:

> Как мыслить компонентами Untitled UI?

Для каждого компонента:

```text
Purpose

When to use

When not to use

Hierarchy

Variants

Composition Rules

Common Mistakes
```

---

## PATTERNS.md

Самый недооцененный файл.

Отвечает на вопрос:

> Как компоненты собираются в страницы?

Например:

```text
Dashboard Pattern

Table Pattern

Settings Pattern

Form Pattern

Detail Page Pattern

Empty State Pattern

Modal Pattern
```

Именно здесь обычно ломаются дизайнеры и AI.

---

## AGENTS.md

Системный промпт для любых AI агентов.

Правила:

```text
Never invent tokens.

Never invent colors.

Prefer existing components.

Prefer existing patterns.

Prefer semantic tokens.

Follow DESIGN.md first.
```

---

## AUDIT.md

Промпт для Design Audit агента.

Вход:

```text
Screenshot
Figma frame
React component
```

Выход:

```text
Violation
Reason
Reference
Fix
```

---

## GENERATE.md

Промпт для генерации новых компонентов.

Обязывает AI:

1. проверить существующие паттерны;
2. проверить существующие компоненты;
3. использовать только разрешенные токены;
4. использовать стиль Untitled UI.

---

# Что будет демонстрировать этот пилот руководству

Не просто документацию.

А полноценную AI-ready Design System Memory.

То есть:

```text
DESIGN.md
     ↓
TOKENS.md
     ↓
COMPONENTS.md
     ↓
PATTERNS.md
     ↓
AI Agents
```

Это очень хорошо соответствует тому направлению, которое сейчас продвигают:

* Google DESIGN.md
* Agent-first documentation
* Romina Kavcic
* AI-readable design systems
* Design Memory Systems

---

# Порядок создания

Я бы делал в следующем порядке:

### Шаг 1

Создать полноценный:

```text
DESIGN.md
```

Это фундамент.

---

### Шаг 2

Создать:

```text
TOKENS.md
```

---

### Шаг 3

Создать:

```text
COMPONENTS.md
```

---

### Шаг 4

Создать:

```text
PATTERNS.md
```

---

### Шаг 5

Создать:

```text
AGENTS.md
AUDIT.md
GENERATE.md
```

И уже после этого у вас будет демонстрационный репозиторий, который выглядит как современная AI-native документация дизайн-системы на базе Untitled UI. Начинать я бы рекомендовал именно с полного `DESIGN.md`, потому что от него будет зависеть структура всех остальных файлов.
