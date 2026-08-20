# React Hooks: 7-Day Masterclass Study Plan

A comprehensive, step-by-step path to mastering modern state management and lifecycle hooks in React.

---

## 📅 Day 1: Local State Architecture (`useState`)
- **Focus**: Reactive state, immutability, and batching.
- **Theory**: `theory.md` (Sections 1–3)
- **Key Concepts**:
  - The Rules of Hooks & Fiber linked-list execution order.
  - Primitive vs Object/Array state handling.
  - Functional state updaters (`setCount(c => c + 1)`) to avoid race conditions.
  - Lazy initial state (`useState(() => compute())`).
- **Drills**: Build a Counter with async delayed increments and a multi-field user registration form.
- **Exercises**: Exercises 1–6 in `exercises.md`.

---

## 📅 Day 2: Side Effects & Subscriptions (`useEffect`)
- **Focus**: Synchronizing components with external systems.
- **Theory**: `theory.md` (Section 4)
- **Key Concepts**:
  - The `useEffect` mental model: synchronization over lifecycle.
  - Dependency array rules: Mount only (`[]`), every render, or watched variables.
  - Cleanup functions: Clearing intervals, removing DOM event listeners.
  - Data fetching: Preventing race conditions with `AbortController`.
- **Drills**: Build a live window dimensions tracker and an API data fetcher with cancellation.
- **Exercises**: Exercises 7–12 in `exercises.md`.

---

## 📅 Day 3: Persistent References & DOM Access (`useRef`)
- **Focus**: Non-rendering mutable state and direct element interaction.
- **Theory**: `theory.md` (Section 6)
- **Key Concepts**:
  - Accessing and manipulating DOM nodes (focus, scroll, measurements).
  - Storing values across renders without triggering a re-render.
  - Storing interval/timer IDs and tracking previous state values.
- **Drills**: Build an Auto-Focus search bar, a previous value counter, and a click-outside menu.
- **Exercises**: Exercises 13–17 in `exercises.md`.

---

## 📅 Day 4: Global State Sharing (`useContext`)
- **Focus**: Eliminating prop drilling across deep component trees.
- **Theory**: `theory.md` (Section 5)
- **Key Concepts**:
  - Creating context with `React.createContext()`.
  - Providing values via `<Context.Provider value={...}>`.
  - Consuming context cleanly with custom wrapper hooks (`useTheme()`, `useAuth()`).
- **Drills**: Build a global Theme switcher (Light/Dark mode) and an Authentication provider.
- **Exercises**: Exercises 18–20 in `exercises.md`.

---

## 📅 Day 5: Predictable Complex State (`useReducer`)
- **Focus**: Structured state machines for complex logic.
- **Theory**: `theory.md` (Section 7)
- **Key Concepts**:
  - Redux-style action dispatchers and pure reducer functions.
  - Handling multi-step checkout forms and shopping cart operations.
  - Combining `useReducer` with `useContext` for scalable enterprise state.
- **Drills**: Build a full Todo board with filters and a shopping cart with price math.
- **Exercises**: Exercises 21–25 in `exercises.md`.

---

## 📅 Day 6: Performance Optimization & Custom Hooks
- **Focus**: Memoization and reusable stateful logic abstractions.
- **Theory**: `theory.md` (Sections 8 & 9)
- **Key Concepts**:
  - `useMemo`: Caching expensive calculations.
  - `useCallback`: Preserving function references for `React.memo` children.
  - Designing Custom Hooks: `useLocalStorage`, `useDebounce`, `useFetch`, `useWindowSize`.
- **Drills**: Build a debounced search filter and write reusable custom utility hooks.
- **Exercises**: Exercises 26–30 in `exercises.md`.

---

## 📅 Day 7: Real-World Capstone Projects & Mastery Checklist
- **Focus**: End-to-end integration and best practices.
- **Challenges**: Practical Challenges 1, 2, & 3 in `practical.md`.
  - Challenge 1: Persistent Task & Sprint Board with search & localStorage.
  - Challenge 2: Multi-City Meteorological Weather Station.
  - Challenge 3: Global Toast Notification Alert System.
- **Review**: `best-practices.md` & `common-mistakes.md`.
