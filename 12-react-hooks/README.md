# 12 - React Hooks & State Management

## Topic Overview

React Hooks were introduced in React 16.8 and revolutionized the entire frontend landscape. Before hooks, complex state and lifecycle logic required verbose class components with confusing `this` binding and tightly coupled side effects. Hooks allow developers to use state, side effects, context, refs, reducers, and custom abstractions inside clean, pure functional components.

This topic provides an exhaustive, industry-grade guide to mastering all built-in React hooks, understanding their underlying mechanics, and authoring reusable custom hooks.

---

## Learning Objectives

By the end of this topic, you will be able to:

- **Understand the Rules of Hooks**: Why hook order matters and how the internal Fiber linked-list stores hook state.
- **Master Local State with `useState`**: Primitive, object, and array states, lazy initialization, and functional state updaters.
- **Coordinate Side Effects with `useEffect`**: Manage subscriptions, timers, DOM listeners, dependency array rules, and cleanup teardowns.
- **Prevent Asynchronous Race Conditions**: Implement `AbortController` and active mount flags in data fetching effects.
- **Eliminate Prop Drilling with `useContext`**: Build application-wide Theme, Auth, and Notification providers.
- **Persist Mutable Values with `useRef`**: Access real DOM elements and retain values across renders without causing re-renders.
- **Manage Complex State with `useReducer`**: Implement predictable state machines with action dispatchers and pure reducers.
- **Optimize Rendering with `useMemo` and `useCallback`**: Prevent expensive recalculations and preserve function references for `React.memo`.
- **Build Custom Reusable Hooks**: Encapsulate complex stateful logic into custom functions (`useLocalStorage`, `useDebounce`, `useFetch`, `useWindowSize`, `useToggle`, `useEventListener`).

---

## Prerequisites

- **Completion of Topic 11: React Fundamentals** (Components, JSX, Props, Lists & Keys, Synthetic Events).
- **Core JavaScript Concepts**: Closures, Asynchronous Promises / async-await, Array destructuring, and Object spread.

---

## Key Hooks Covered

| Hook | Primary Responsibility | Common Real-World Use Case |
| :--- | :--- | :--- |
| **`useState`** | Local reactive state | Form inputs, modals open/close, counters, active tabs |
| **`useEffect`** | Side effects & lifecycle | API data fetching, event listeners, document title, timers |
| **`useContext`**| Global tree data | Dark/light theme, user authentication session, toasts |
| **`useRef`** | Mutable non-rendering reference | Focusing inputs, measuring DOM geometry, timer IDs |
| **`useReducer`**| Redux-style state machine | Shopping carts, multi-step wizards, complex filter states |
| **`useMemo`** | Caching calculation results | Filtering 10,000 items, expensive algorithmic math |
| **`useCallback`**| Caching function references | Passing event handlers to memoized child components |
| **Custom Hooks**| Packaging stateful logic | `useLocalStorage`, `useDebounce`, `useFetch`, `useMedia` |

---

## Chapter Content Structure

```
12-react-hooks/
├── README.md              # Chapter roadmap and objectives (this file)
├── theory.md              # Deep architectural mechanics of hooks & state
├── examples.jsx           # 25+ runnable, heavily commented code examples
├── exercises.md           # 30 tiered exercises (Beginner, Intermediate, Advanced)
├── practical.md          # 5 real-world state management challenges
├── solutions.jsx          # Complete, production-grade solutions
├── cheat-sheet.md         # Fast reference syntax cards & dependency matrix
├── best-practices.md      # State colocation, effect rules, and memoization guidelines
├── common-mistakes.md     # 12 classic hook traps and debugging fixes
└── summary.md             # Comprehensive recap and self-assessment
```
