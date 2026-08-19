# React Fundamentals: 7-Day Structured Study Plan

A day-by-day pedagogical curriculum designed to take you from Vanilla JavaScript to a confident React engineer.

---

## 📅 Day 1: The React Mental Model & JSX Architecture
- **Focus**: Understanding declarative UI and the Virtual DOM.
- **Theory**: `theory.md` (Sections 1 & 2)
- **Topics**:
  - Imperative DOM manipulation vs Declarative state-driven UI.
  - How the Virtual DOM works and how reconciliation diffs trees in memory.
  - JSX compilation: How JSX transforms into `_jsx` / `React.createElement`.
  - JSX syntax rules: Single root element, Fragments (`<></>`), self-closing tags.
  - Attribute translation: `class` → `className`, `for` → `htmlFor`, camelCase naming.
- **Practical Goal**: Write your first 5 functional components rendering dynamic text and calculations.
- **Exercises**: Exercises 1–7 in `exercises.md`.

---

## 📅 Day 2: Functional Components, Props & Composition
- **Focus**: Modular component hierarchy and data flow.
- **Theory**: `theory.md` (Sections 3 & 4)
- **Topics**:
  - Creating clean functional components.
  - Props as read-only inputs (immutability).
  - Destructuring props with default fallback values.
  - The special `children` prop and building container wrappers.
  - Component composition vs inheritance.
- **Practical Goal**: Build a reusable Card and Modal component system using `props.children`.
- **Exercises**: Exercises 8–15 in `exercises.md`.

---

## 📅 Day 3: Conditional Rendering & Edge Cases
- **Focus**: Rendering dynamic interfaces cleanly.
- **Theory**: `theory.md` (Section 5)
- **Topics**:
  - Ternary operator for binary choices (`isOnline ? <Badge /> : <Offline />`).
  - Short-circuit logical AND (`hasUnread && <Dot />`).
  - The "zero rendering bug": Why `count && <Badge />` renders `0` and how to fix it.
  - Early returns for loading, error, and empty states.
- **Practical Goal**: Build a User Dashboard Header with dynamic auth, badge, and maintenance banners.
- **Exercises**: Exercises 16–22 in `exercises.md`.

---

## 📅 Day 4: Dynamic Lists & Key Reconciliation
- **Focus**: Iterating collections efficiently.
- **Theory**: `theory.md` (Section 6)
- **Topics**:
  - Rendering arrays with `Array.prototype.map()`.
  - The vital role of the `key` prop in React reconciliation.
  - Why using array index as key creates state leakage and UI bugs in dynamic lists.
  - Filtering and sorting arrays before rendering.
- **Practical Goal**: Build a filterable Developer Course Catalog with category pills and instant search.
- **Exercises**: Exercises 23–27 in `exercises.md`.

---

## 📅 Day 5: Synthetic Events & Form Handling
- **Focus**: User interaction and cross-browser event normalization.
- **Theory**: `theory.md` (Section 7)
- **Topics**:
  - React's `SyntheticEvent` wrapper and root event delegation.
  - Passing callbacks and arguments to event handlers.
  - Preventing default browser actions with `e.preventDefault()`.
  - Controlled inputs and form submission flows.
- **Practical Goal**: Build an interactive search filter form and action button toolbar.
- **Exercises**: Exercises 28–30 in `exercises.md`.

---

## 📅 Day 6: Real-World Portfolio & Showcase Challenges
- **Focus**: Applying fundamentals to production-grade interfaces.
- **Challenges**: Practical Challenges 1 & 2 in `practical.md`.
  - Challenge 1: Developer Portfolio Card with dynamic badges, skills, and social links.
  - Challenge 2: E-Commerce Product Showcase Card with discount and stock calculations.
- **Review**: Check implementations against `solutions.jsx`.

---

## 📅 Day 7: Best Practices, Common Pitfalls & Mastery Assessment
- **Focus**: Code quality, architectural patterns, and review.
- **Guides**: `best-practices.md` & `common-mistakes.md`.
- **Review**: Complete the `summary.md` checklist.
- **Milestone Check**: Ensure you can build clean, prop-driven component trees before starting React Hooks.
