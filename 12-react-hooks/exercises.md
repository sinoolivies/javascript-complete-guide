# 12 - React Hooks: Exercises

Practice state, side effects, refs, context, reducers, and custom hooks.

---

## Part 1: Beginner Level (Exercises 1–10)

1. **Toggle Switch**: Build a component that uses `useState` to toggle between ON and OFF states on click.
2. **Character Counter**: Build a textarea that displays live character count using state.
3. **Document Title Sync**: Use `useEffect` to update `document.title` with current count whenever a counter button is pressed.
4. **Input Clear Button**: Build an input field with a reset button that clears state using `useState`.
5. **Window Resize Listener**: Use `useEffect` with cleanups to track and display the current `window.innerWidth`.
6. **Previous Value Tracker**: Use `useRef` to store and display the *previous* value of a counter.
7. **Color Picker State**: Build 3 slider inputs (Red, Green, Blue) using an object state to update a color box.
8. **Simple Timer**: Build a timer component that increments every second when started, and stops when paused.
9. **Password Visibility Toggle**: Use a boolean state to toggle input `type="password"` and `type="text"`.
10. **Focus On Mount**: Use `useRef` and `useEffect` to automatically focus a search input when component mounts.

---

## Part 2: Intermediate Level (Exercises 11–20)

11. **Todo App with LocalStorage**: Build a todo list where items persist in `localStorage` via `useEffect`.
12. **Debounced Search**: Create an input that updates a debounced value 400ms after the user stops typing.
13. **Auth Context Provider**: Create an `AuthContext` providing `user`, `login()`, and `logout()` across multiple child components.
14. **Multi-Step Form with useReducer**: Build a 3-step checkout form managed with `useReducer` actions (`NEXT_STEP`, `PREV_STEP`, `UPDATE_FIELD`).
15. **Fetch With AbortController**: Use `useEffect` with an `AbortController` cleanup to prevent race conditions during data fetching.
16. **Prime Number Calculator with useMemo**: Calculate primes up to N and memoize the calculation with `useMemo`.
17. **Click Outside Handler**: Use `useRef` and `useEffect` to detect clicks outside a dropdown menu and close it.
18. **Custom Hook: useToggle**: Create a reusable custom hook `useToggle(initialValue)` returning `[value, toggle, setTrue, setFalse]`.
19. **Custom Hook: useFetch**: Build a `useFetch(url)` hook returning `{ data, loading, error, refetch }`.
20. **Custom Hook: useInterval**: Implement Dan Abramov's declarative `useInterval(callback, delay)` hook.

---

## Part 3: Advanced Level (Exercises 21–30)

21. **Undo/Redo State History**: Implement state management with undo and redo stacks using `useReducer`.
22. **Infinite Scroll Hook**: Create a `useInfiniteScroll` custom hook using `IntersectionObserver`.
23. **Synchronized Tabs Across Windows**: Sync state between multiple browser tabs using `window.addEventListener('storage')`.
24. **Global Notification Toast System**: Build a context and hook `useToast()` that queues and auto-dismisses alerts.
25. **Custom Hook: useDebouncedCallback**: Create a hook that delays calling a callback function until delay has elapsed.
26. **Optimistic UI Updates**: Build a task completion toggle that updates UI immediately and rolls back if an async error occurs.
27. **Heavy List Virtualizer**: Build a windowing/virtualization component using `useRef` and scroll calculations.
28. **Custom Hook: useMediaQuery**: Build a responsive hook that evaluates media queries like `useMediaQuery('(max-width: 768px)')`.
29. **Form Validation Hook: useForm**: Build a custom form hook with field validation rules, error tracking, and submit handling.
30. **Reactive Audio Player**: Use `useRef` to control an `<audio>` element with play, pause, progress bar, and volume hooks.
