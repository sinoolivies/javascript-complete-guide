# React Mastery: 2-Week Complete Curriculum (Week 1: Fundamentals)

A comprehensive 14-day pedagogical blueprint designed to take learners from JavaScript fundamentals to senior-level React architectural mastery.

---

## 🗓️ Master Timeline Overview

- **Week 1 (Days 1–7)**: **React Fundamentals & Component Architecture** (`11-react-fundamentals`)
- **Week 2 (Days 8–14)**: **Hooks, State Machines & Production Patterns** (`12-react-hooks`)

---

## 📅 Week 1 Daily Breakdown (Days 1–7)

### 🗓️ Day 1: The React Mental Model & Virtual DOM
- **Concept**: Declarative UI paradigm vs imperative DOM manipulation.
- **Deep Dive**: Virtual DOM representation, reconciliation, and batching.
- **Reading**: `day-01-mental-model-and-vdom.md` & `theory.md` (Section 1–2).
- **Practical**: Inspect browser performance differences between direct DOM rewrites and React rendering.
- **Exercises**: `exercises.md` (1–4).

### 🗓️ Day 2: JSX Architecture & Expressions
- **Concept**: JSX syntax extension, under-the-hood compilation, and embedded expressions.
- **Deep Dive**: `_jsx` runtime calls, Fragments (`<></>`), and attribute mapping (`className`, `htmlFor`).
- **Reading**: `day-02-jsx-and-expressions.md` & `theory.md` (Section 3).
- **Practical**: Write components rendering mathematical computations, template strings, and nested layouts.
- **Exercises**: `exercises.md` (5–8).

### 🗓️ Day 3: Functional Components, Props & Immutability
- **Concept**: Pure components, unidirectional data flow, and read-only props.
- **Deep Dive**: Destructuring with default fallbacks, prop contracts, and component hierarchy.
- **Reading**: `day-03-components-and-props.md` & `theory.md` (Section 4–5).
- **Practical**: Build reusable `Badge`, `Avatar`, and `PriceTag` components.
- **Exercises**: `exercises.md` (9–13).

### 🗓️ Day 4: Component Composition & `props.children`
- **Concept**: Inversion of control and container design patterns.
- **Deep Dive**: Using `props.children` to build reusable UI shells without prop drilling.
- **Reading**: `day-04-composition-and-children.md`.
- **Practical**: Build an accessible `ModalDialog` and a flexible `CardContainer` component.
- **Exercises**: `exercises.md` (14–17).

### 🗓️ Day 5: Conditional Rendering & Edge-Case Traps
- **Concept**: Dynamic interface switching with clean guard clauses.
- **Deep Dive**: Ternary operators, short-circuit `&&`, early returns, and preventing the "Zero Rendering Bug".
- **Reading**: `day-05-conditional-rendering.md`.
- **Practical**: Build an authentication banner with guest, member, and admin states.
- **Exercises**: `exercises.md` (18–22).

### 🗓️ Day 6: Dynamic Lists, Keys & Reconciliation Mechanics
- **Concept**: Iterating collections with `Array.prototype.map()`.
- **Deep Dive**: How React diffs keyed lists in Fiber, and why index keys cause state leakage and visual bugs.
- **Reading**: `day-06-lists-keys-and-reconciliation.md`.
- **Practical**: Build a searchable and filterable Developer Course Catalog with category chips.
- **Exercises**: `exercises.md` (23–27).

### 🗓️ Day 7: Synthetic Events, Form Handling & Week 1 Capstone
- **Concept**: Cross-browser SyntheticEvent normalization and delegated event dispatching.
- **Deep Dive**: Event listeners on `#root`, preventing default actions (`e.preventDefault()`), passing arguments.
- **Reading**: `day-07-events-and-forms.md`.
- **Capstone Challenge**: Build the complete Developer Portfolio Card and E-Commerce Product Card from `practical.md`.
- **Exercises**: `exercises.md` (28–30).
- **Checkpoint**: Ensure all Week 1 exercises pass and review `best-practices.md` before starting Week 2.
