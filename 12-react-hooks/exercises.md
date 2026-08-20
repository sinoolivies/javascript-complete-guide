# 12 - React Hooks: 30 Structured Exercises

---

## Part 1: Beginner Level (Exercises 1–10)

1. **Boolean State Switch**: Create `ToggleLamp` using `useState` to switch a light bulb icon between ON (💡) and OFF (⚪).
2. **Live Word Count**: Build a textarea component that displays current character count and word count in real time.
3. **Document Title Counter**: Create a component with a button that updates `document.title = `Count: ${count}`` using `useEffect`.
4. **State Reset Button**: Build an input field with a "Clear" button that resets state to an empty string.
5. **Window Resize Tracker**: Use `useEffect` with event listener cleanups to display the current `window.innerWidth`.
6. **Previous Count Tracker**: Use `useRef` to store and render the *previous* state value alongside the current value.
7. **RGB Color Mixer**: Create an RGB slider component using an object state `{ r: 255, g: 0, b: 0 }` to dynamically update a background color block.
8. **Digital Stopwatch**: Build a stopwatch that increments tenths of seconds using `setInterval` inside `useEffect` with start, pause, and reset controls.
9. **Password Visibility Toggle**: Use a boolean state to toggle input `type="password"` and `type="text"` with an eye icon.
10. **Auto Focus Input**: Use `useRef` and `useEffect` to automatically focus a search input as soon as the page loads.

---

## Part 2: Intermediate Level (Exercises 11–20)

11. **Persistent Note Pad**: Build a note taker where notes are automatically saved to and loaded from `localStorage` via `useEffect`.
12. **Debounced Search Query**: Create a search input that updates a debounced state 400ms after user typing ceases.
13. **User Session Context**: Implement an `AuthContext` with a provider supplying `currentUser`, `login()`, and `logout()` methods.
14. **Multi-Step Checkout Form**: Build a 3-step checkout wizard managed by `useReducer` actions (`NEXT`, `PREV`, `SET_DATA`).
15. **Fetch With AbortController**: Build an API user card with `useEffect` and `AbortController` cleanup to prevent race conditions.
16. **Prime Number Calculator with useMemo**: Calculate primes up to (N) and memoize the calculation using `useMemo`.
17. **Click Outside Dropdown**: Use `useRef` and a `mousedown` document event listener to close a dropdown menu when clicking outside.
18. **Custom Hook: useToggle**: Create `useToggle(initialState)` returning `[value, toggle, setTrue, setFalse]`.
19. **Custom Hook: useFetch**: Build a `useFetch(url)` hook returning `{ data, loading, error, refetch }`.
20. **Custom Hook: useInterval**: Implement a declarative `useInterval(callback, delay)` hook with dynamic pause support.

---

## Part 3: Advanced Level (Exercises 21–30)

21. **State Undo / Redo History**: Build a canvas or text editor state manager with Undo/Redo stacks using `useReducer`.
22. **Infinite Scroll Hook**: Create a `useInfiniteScroll` custom hook wrapping the browser's `IntersectionObserver` API.
23. **Cross-Tab State Synchronization**: Synchronize state across multiple open browser tabs using `window.addEventListener('storage')`.
24. **Global Toast Notification System**: Build a context and `useNotification()` hook that manages an alert queue with auto-dismissal.
25. **Custom Hook: useDebouncedCallback**: Create a hook that delays execution of a callback function until delay milliseconds have elapsed.
26. **Optimistic UI Updates**: Build a task completion toggle that updates the UI immediately and rolls back if an API promise rejects.
27. **Virtualized List Scroller**: Build a list windowing component using `useRef` and scroll offset mathematics.
28. **Custom Hook: useMediaQuery**: Build a responsive hook that evaluates media queries like `useMediaQuery('(max-width: 768px)')`.
29. **Form Validation Hook: useForm**: Build a custom form management hook with validation rules, error tracking, and submit handlers.
30. **Audio Player Controller**: Use `useRef` to control an `<audio>` element with play, pause, progress bar, and volume controls.
