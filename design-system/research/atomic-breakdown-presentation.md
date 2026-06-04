# Atomic Design Breakdown — Presentation Draft

3 slides. Approximately 4–5 minutes.

---

## Slide 1 — Two ways to apply Atomic Design

### What to show

Two columns. The visual difference between them is the **starting point**, not just the arrow direction.

---

**Left column — Component-first (bottom-up)**

Label: "Component-first"

The stack reads **bottom to top**. "Start here" label sits at the bottom next to Atoms. Arrows point upward.

```
Page           ← assembled result
  ↑
Template
  ↑
Organism
  ↑
Molecule
  ↑
Atom           ← start here
```

Caption: "What components do I need to build this screen?"

Use case label: "Building a component library from scratch"

---

**Right column — Scope-first (top-down)**

Label: "Scope-first"

The stack reads **top to bottom**. "Start here" label sits at the top next to the Screen. Arrows point downward.

```
Existing screen    ← start here
  ↓
What can the user do here?
  ↓
At what scale does each action operate?
  ↓
Map each scope to an atomic level
  ↓
Build bottom-up
```

Caption: "What structure already exists in this screen?"

Use case label: "Rebuilding or auditing an existing screen"

---

**Key visual distinction to make explicit:**

Component-first: entry point is at the **bottom** (smallest piece first).
Scope-first: entry point is at the **top** (the whole screen first).

Both approaches ultimately build bottom-up. The difference is in the analysis step that comes before building.

---

**Bottom of slide — one line**

> Component-first asks: what do I need to build? Scope-first asks: what is already here and why?

---

### Speaker notes

> Atomic Design is typically applied bottom-up — you start with the smallest pieces, atoms, and compose upward until you have a complete screen. That's the right approach when building a component library from scratch: you define your building blocks first, then assemble them.
>
> But when you're rebuilding an existing screen, you already have the result in front of you. Starting from atoms means you might spend a lot of time on components before you understand the structure they need to fit into.
>
> The scope-first approach flips the entry point. You start with the screen as a whole and ask: what can the user actually do here? Not what components exist, but what capabilities exist — and at what scale does each one operate?
>
> Both approaches end in the same place: you build bottom-up. The difference is that scope-first gives you a map of the structure before you start building, so you know exactly what you're building and why.

---

---

## Slide 2 — Scope-first breakdown of the screen

### What to show

**Left side — Scope table**

| Scope | Examples | Atomic level |
|---|---|---|
| Page | Add, Import, page title | Template / Page (4–5) |
| Navigation | Tabs between views | Template (4) |
| Table | Search, filters, pagination | Template / Organism (3–4) |
| Column | Sort, column filter | Organism (3) |
| Row | Select, edit, delete, bulk actions | Organism (3) |
| Cell | Status badge, tooltip, inline action | Atom / Molecule (1–2) |

---

**Right side — Image**

Annotated screenshot or mockup of a resource list screen (table with members/users).

The screen is divided into horizontal zones, each highlighted in a different color or outlined with a labeled bracket:

- Top zone (page header): "Page scope — Template/Page" — contains page title, Add button, Import button
- Second zone (tabs): "Navigation scope — Template" — horizontal tab bar
- Third zone (toolbar): "Table scope — Template/Organism" — search input + filter button + results count
- Fourth zone (table header row): "Column scope — Organism" — column headers with sort icons
- Fifth zone (table rows): "Row scope — Organism" — individual rows with checkbox, avatar, name, status badge, action menu
- Cell callout (one cell expanded): "Cell scope — Atom/Molecule" — status badge + tooltip, avatar + name group

Each zone label connects to the corresponding row in the table on the left.

---

**Bottom callout — one highlighted note**

> Search, filters, and pagination are independent organisms — but they share state. The template owns the connection between them.

---

### Speaker notes

> Here's how the scope-first breakdown applies to this specific screen.
>
> Each row in this table represents a different scope of control — the scale at which the user operates. Page-level actions affect the whole context. Table-level actions affect how the data is presented. Column and row actions affect specific parts of the dataset. Cell-level interactions are the smallest unit.
>
> Each scope maps naturally to an atomic level. And because the mapping follows user intent rather than visual complexity, it's easier to validate: if something feels out of place, it's usually because its scope doesn't match the atomic level it's been assigned to.
>
> One thing worth highlighting: search, filters, and pagination are each independent organisms — they could exist on any screen. But on this screen they're connected by shared business logic. Filtering the table resets the pagination. Searching narrows what the filters apply to. That shared state is template-owned, not owned by any individual component.
>
> This distinction matters when you're deciding where responsibility lives. The components don't know about each other. The template does.

---

---

## Slide 3 — Template and Page

### What to show

**Two frames side by side**

---

**Left frame — Template**

Label: "Template — Level 4"

A wireframe layout of the screen with no real content. All zones are visible as labeled containers:

- Page header zone: grey placeholder rectangle labeled "Page title + primary actions"
- Navigation zone: grey tab bar with placeholder tab labels
- Toolbar zone: grey rectangle labeled "Search + Filters + Results count"
- Table zone:
  - Column header row: grey cells with placeholder column labels and sort icon placeholders
  - Three placeholder rows: grey horizontal bars, no content
- Pagination zone: grey rectangle at the bottom labeled "Pagination"

All colors are neutral (grey). No actual data. No brand color. The frame communicates structure, not content.

Caption below: "Reusable across Members, Projects, Invoices — same structure, different content"

---

**Right frame — Page**

Label: "Page — Level 5"

The same layout filled with real content:

- Page title: "Team members"
- Primary actions: "Add member" button (brand color), "Import" button (secondary)
- Tabs: "All members", "Administrators", "Guests" (first tab active)
- Toolbar: search input with placeholder "Search members...", filter button, "248 members"
- Table header: Checkbox, Name, Role, Status, Last active, Actions columns with sort indicators
- Rows: 3–4 filled rows with avatar + name + email, role badge, status badge (Active/Invited/Deactivated), date, and row action menu
- One row shown in hover state with action menu visible
- Pagination: "Showing 1–10 of 248 results", Previous/Next controls

Caption below: "Edge cases live here: empty state, single row, very long names, deactivated accounts"

---

**Bottom of slide — one line**

> The template is the reusable shell. The page is where design meets the real product.

---

### Speaker notes

> The final step is separating template from page — and this distinction is where a lot of screens fall apart in practice.
>
> The template is the layout shell. It defines where each zone lives, how they relate to each other, and what the spacing rules are. It contains no real content — just structure. The same template can power a Members page, a Projects page, an Invoices page. Same zones, different organisms inside.
>
> The page is the template filled with reality. Real column labels, real actions, real data. And this is where the breakdown gets stress-tested.
>
> What happens when there are no rows? The empty state needs to sit inside the same template. What happens with a very long user name? The cell-level molecule needs to handle truncation. What happens on mobile? The template needs a responsive fallback.
>
> If any of those edge cases break the layout, it's usually a signal that the atomic hierarchy needs adjustment — not the edge case. The edge case is just exposing a gap in the structure.
