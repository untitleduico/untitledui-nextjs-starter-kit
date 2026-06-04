# Atomic Design Breakdown

## Two ways to apply Atomic Design

Atomic Design is typically applied **bottom-up**: you inventory atoms, compose them into molecules and organisms, then assemble templates and pages. This works well when building a component library from scratch.

When rebuilding an existing screen, a **top-down approach** is more effective. Instead of asking "what building blocks do I need?", you ask "what can the user *do* on this screen, and at what scale?" Then you determine which atomic level each capability belongs to.

The two approaches complement each other. Bottom-up gives you the component inventory. Top-down gives you the structure and the relationships between components.

---

## Scope-first breakdown

The key insight of the top-down approach is that user actions can be grouped by their **scope of control** — the scale at which they operate:

- A **page-level** action affects the entire dataset or navigates away from the current context.
- A **table-level** action affects how the dataset is presented — filtering, sorting, or paginating the whole table.
- A **column-level** action affects one column — sorting or filtering by a specific attribute.
- A **row-level** action affects a single record — selecting, editing, or deleting it.
- A **cell-level** action affects a single element — a tooltip, an inline edit, a status change.

This scope hierarchy maps directly onto Atomic Design levels, making the decomposition both systematic and user-centered.

---

## Scope → Atomic level mapping

| Scope of control | Examples | Atomic level |
|---|---|---|
| Page scope | Add, Import, page title | Template / Page (4–5) |
| Navigation scope | Tabs between subpages | Template (4) |
| Table scope | Search, filters, pagination | Template / Organism (3–4) |
| Column scope | Sort, column filter | Organism (3) |
| Row scope | Select row, edit, delete, bulk actions | Organism (3) |
| Cell scope | Tooltips, inline actions, status indicators | Atom / Molecule (1–2) |

---

## Level by level

### Page scope — Template and Page (levels 4–5)

Page-level actions define the primary intent of the screen. They are positioned in the page header and represent what the user can initiate from this context.

**Examples:** Add member, Import CSV, page title, breadcrumbs.

These actions may be specific to a particular page or defined by a generic template rule applied across multiple pages. The template determines their position and visual weight. The page provides the specific labels and targets.

---

### Navigation scope — Template (level 4)

Navigation between subpages sits at the template level because it controls which section of the layout is active — not a component within the layout.

**Examples:** Primary tabs, secondary tabs, segment controls that switch between views.

Navigation components are organisms in isolation. At this scope, they are coordinated by the template, which determines which tab is active and what content is rendered beneath it.

---

### Table scope — Template / Organism (levels 3–4)

Table-level actions — search, filters, pagination — are technically independent organisms. Each component has its own logic and can exist independently. However, they are connected by shared business logic: filtering and search affect the same dataset that pagination navigates.

This shared state is template-owned. The template coordinates these components even though each is independently defined.

**Implication for design:** When designing a table screen, the relationship between search, filters, and pagination must be defined at the template level, not within each component individually.

---

### Column scope — Organism (level 3)

Column-level actions operate across multiple rows within a single column. They affect the structure and order of the data, not a specific record.

**Examples:** Column header with sort control, column-level filter, column visibility toggle.

These are organisms: they combine multiple atoms (label, sort icon, filter trigger) and carry behavior that affects the entire column.

---

### Row scope — Organism (level 3)

Row-level actions operate on a single record. They are contextual — appearing on hover, on selection, or in an actions menu.

**Examples:** Row selection checkbox, inline edit trigger, row action menu (Edit, Delete, Duplicate), bulk action toolbar (appears when rows are selected).

The bulk action toolbar is a special case: it is triggered by row-level selections but operates on multiple rows simultaneously. It belongs to the row scope because its trigger is at the row level, even though its effect is broader.

---

### Cell scope — Atom / Molecule (levels 1–2)

Cell-level interactions are the smallest unit of user action. They affect a single element within a single cell.

**Examples:** Status badge with tooltip, inline editable field, avatar with popover, copy-to-clipboard icon.

Atoms at this level: icon, badge, tooltip trigger, text.

Molecules: avatar + name + email group, status badge + label, editable cell with save/cancel controls.

---

## Template and Page

### Template (level 4)

The template defines the layout shell shared across all instances of this screen type. It does not contain real content — it contains structure.

The template for a resource list screen defines:

- Page header zone (title + page-level actions)
- Navigation zone (tabs)
- Toolbar zone (search + filters)
- Table zone (column headers + rows)
- Pagination zone
- Spacing and alignment rules between zones

The template is reusable. A Members page, a Projects page, and an Invoices page can all use the same template with different organisms and content inside.

### Page (level 5)

The page is the template filled with real content: actual column definitions, real data, specific action labels, empty states, error states.

The page is where design meets product. It is where edge cases become visible — what happens with 0 rows, with 1000 rows, with very long names, with missing data.

---

## Stress testing the breakdown

After mapping the breakdown, validate it against edge cases before building:

- **Empty state:** Does the table scope still make sense when there are no rows? Is the Add action still accessible?
- **Single row:** Do row-level actions still work correctly with only one record?
- **Long content:** Do cell-level molecules handle truncation? Do column headers handle long labels?
- **Many columns:** Does the template handle horizontal overflow gracefully?
- **Mobile viewport:** Which organisms collapse or reorder? Does the template define a responsive fallback?

Edge cases stress-test the atomic hierarchy. If an edge case breaks the structure, the breakdown needs adjustment — not the edge case.
