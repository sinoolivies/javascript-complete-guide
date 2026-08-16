# 12 - React Hooks: Practical Challenges

---

## Challenge 1: Persistent Task Management Dashboard
Build a complete task manager:
- **Hooks**: `useState`, `useEffect`, `useReducer`, `useLocalStorage`.
- **Features**:
  - Add, edit, delete, toggle completion of tasks.
  - Filter by category (All, Work, Personal, Urgent).
  - Search tasks with debounced input.
  - Persist all state in `localStorage`.

---

## Challenge 2: Multi-City Live Weather Widget
Build an interactive weather dashboard:
- **Hooks**: `useState`, `useEffect`, `useMemo`, `useCallback`.
- **Features**:
  - City dropdown with temperature metrics.
  - Celsius / Fahrenheit toggle with memoized temperature conversion.
  - Simulated 5-day forecast.

---

## Challenge 3: Global Notification Toast Context
Create a production-grade toast notification system:
- **Hooks**: `useContext`, `useReducer`, custom `useNotification` hook.
- **Features**:
  - Floating container rendering toasts (Success, Error, Warning, Info).
  - Auto-dismiss after 3000ms.
  - Manual dismiss button.
