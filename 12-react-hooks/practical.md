# 12 - React Hooks: Practical Real-World Challenges

---

## Challenge 1: Persistent Task & Sprint Board
Build a complete task manager:
- **Hooks**: `useState`, `useEffect`, `useReducer`, `useLocalStorage`.
- **Features**:
  - Add, edit, delete, and toggle task completion.
  - Category filtering (Frontend, Backend, DevOps, Design).
  - Search tasks with debounced query.
  - Persist all tasks in `localStorage`.

---

## Challenge 2: Interactive Meteorological Weather Station
Build a multi-city weather card:
- **Hooks**: `useState`, `useEffect`, `useMemo`, `useCallback`.
- **Features**:
  - Select city from dropdown with live temperature metrics.
  - Celsius (°C) and Fahrenheit (°F) toggle with memoized calculation.
  - 5-day forecast cards.

---

## Challenge 3: Global Toast Notification System
Create a production-grade toast context:
- **Hooks**: `createContext`, `useContext`, `useReducer`, custom `useNotification` hook.
- **Features**:
  - Floating toast container (Success, Error, Warning, Info).
  - Auto-dismiss after 3500ms.
  - Manual dismiss button.
