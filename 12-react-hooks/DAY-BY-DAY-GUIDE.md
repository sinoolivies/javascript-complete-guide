# React Mastery: 2-Week Complete Curriculum (Week 2: Hooks & Architecture)

---

## 📅 Week 2 Daily Breakdown (Days 8–14)

### 🗓️ Day 8: Local State Management (`useState`)
- **Concept**: Reactive component state, batching in React 18/19, and state immutability.
- **Deep Dive**: Functional state updaters (`setCount(c => c + 1)`), lazy initialization (`useState(() => init)`), and managing object/array state copies.
- **Reading**: `day-08-state-and-batching.md` & `theory.md` (Sections 1–3).
- **Practical**: Build an interactive Registration Form with validation and real-time state preview.
- **Exercises**: `exercises.md` (1–5).

### 🗓️ Day 9: Side Effects & Subscriptions (`useEffect`)
- **Concept**: Synchronizing components with external systems.
- **Deep Dive**: Dependency array rules, mount/update lifecycle mental model, cleanup teardowns, and handling async race conditions with `AbortController`.
- **Reading**: `day-09-effects-and-cleanups.md` & `theory.md` (Section 4).
- **Practical**: Build an auto-refreshing Live Clock, a Window Viewport Tracker, and an API Data Fetcher with request cancellation.
- **Exercises**: `exercises.md` (6–10).

### 🗓️ Day 10: Persistent References & DOM Access (`useRef`)
- **Concept**: Non-rendering mutable values and direct element access.
- **Deep Dive**: Attaching to DOM nodes, storing interval/timer IDs, and tracking previous state values across renders.
- **Reading**: `day-10-refs-and-dom.md` & `theory.md` (Section 6).
- **Practical**: Build an Auto-Focus search bar, a previous state diff tracker, and a click-outside dropdown listener.
- **Exercises**: `exercises.md` (11–15).

### 🗓️ Day 11: Global Tree State Sharing (`useContext`)
- **Concept**: Eliminating prop drilling across deep component trees.
- **Deep Dive**: Creating contexts, providing values with `<Context.Provider>`, and building custom wrapper hooks (`useTheme()`, `useAuth()`).
- **Reading**: `day-11-context-api.md` & `theory.md` (Section 5).
- **Practical**: Build a complete Dark/Light Theme Switcher and an Authentication Context with mock user sessions.
- **Exercises**: `exercises.md` (16–20).

### 🗓️ Day 12: Predictable State Machines (`useReducer`)
- **Concept**: Managing complex state transitions with Redux-style action dispatchers.
- **Deep Dive**: Pure reducer functions `(state, action) => newState`, multi-step wizard state, and combining Context + Reducer for scalable enterprise state.
- **Reading**: `day-12-reducers-and-state-machines.md` & `theory.md` (Section 7).
- **Practical**: Build a full-featured Shopping Cart with quantity adjustments, discounts, and item removal.
- **Exercises**: `exercises.md` (21–25).

### 🗓️ Day 13: Performance Memoization & Custom Hooks
- **Concept**: Computational caching and reusable stateful logic abstractions.
- **Deep Dive**: `useMemo` for expensive calculations, `useCallback` for stable callback references, `React.memo`, and authoring custom hooks (`useLocalStorage`, `useDebounce`, `useWindowSize`, `useFetch`).
- **Reading**: `day-13-performance-and-custom-hooks.md` & `theory.md` (Sections 8–9).
- **Practical**: Build a debounced search filter with live results and extract custom reusable hooks.
- **Exercises**: `exercises.md` (26–30).

### 🗓️ Day 14: Capstone Architecture, Error Boundaries & Production Polish
- **Concept**: End-to-end integration, error resilience, and code quality.
- **Deep Dive**: `day-14-capstone-architecture-and-best-practices.md`.
- **Capstone Challenges**: Complete the 3 practical real-world challenges in `practical.md`:
  - Challenge 1: Persistent Task Management Dashboard with localStorage.
  - Challenge 2: Multi-City Meteorological Weather Station.
  - Challenge 3: Global Toast Notification Alert System.
- **Final Review**: Review `best-practices.md`, `common-mistakes.md`, and `cheat-sheet.md`.
- **Final Milestone**: Congratulations! You are now equipped with full professional mastery of modern React!
