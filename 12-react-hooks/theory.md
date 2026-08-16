# React Hooks: In-Depth Theory & Mechanics

## 1. The Rules of Hooks

React relies on the call order of hooks during each component render to keep track of state and effects. Therefore, you must follow two fundamental rules:

1. **Only Call Hooks at the Top Level**: Do not call hooks inside loops, conditions, or nested functions.
2. **Only Call Hooks from React Functions**: Call hooks from React functional components or custom hooks.

---

## 2. `useState`: Stateful Variables

`useState` declares a state variable that persists between renders.

```jsx
const [count, setCount] = useState(0);
```

### Functional State Updates
When calculating next state based on the previous state, always pass an updater function to prevent race conditions:
```jsx
// Correct
setCount((prev) => prev + 1);

// Risky in async batches:
setCount(count + 1);
```

### State Immutability
React relies on Object.is comparison. Never mutate state directly; always produce a new copy:
```jsx
// Correct array update:
setItems((prev) => [...prev, newItem]);

// Correct object update:
setUser((prev) => ({ ...prev, name: 'Alice' }));
```

---

## 3. `useEffect`: Managing Side Effects

`useEffect` lets you synchronize a component with external systems (network requests, browser APIs, intervals, subscriptions).

### The Dependency Array
- **No array**: Runs after *every* render.
- **Empty array `[]`**: Runs once after initial mount.
- **Dependencies array `[id, filter]`**: Runs after mount and whenever `id` or `filter` changes.

### The Cleanup Function
Return a cleanup function to cancel subscriptions, clear intervals, or abort network requests before the component unmounts or before the effect re-runs:
```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => clearInterval(timer); // Cleanup on unmount
}, []);
```

---

## 4. `useContext`: Avoiding Prop Drilling

`useContext` allows components at any depth in the tree to read context values provided by a `<Context.Provider value={...}>`.

```jsx
const ThemeContext = createContext('light');

function Display() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Active Theme: {theme}</div>;
}
```

---

## 5. `useRef`: Mutable References & DOM Nodes

`useRef(initialValue)` returns a mutable object `{ current: initialValue }` that persists for the lifetime of the component.
- Modifying `ref.current` **does not** trigger a component re-render.
- Perfect for storing DOM references (`inputRef.current.focus()`) or tracking timers and previous values.

---

## 6. `useReducer`: Predictable Complex State

When state logic involves multiple sub-values or complex transitions, `useReducer` provides a structured pattern with actions and reducers.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

---

## 7. Performance Optimization: `useMemo` & `useCallback`

- **`useMemo(() => computeValue(a, b), [a, b])`**: Caches the result of an expensive calculation.
- **`useCallback(fn, [deps])`**: Caches a function definition between renders so child components wrapped in `React.memo` don't re-render unnecessarily.

---

## 8. Custom Hooks

A custom hook is a JavaScript function whose name starts with `use` and that can call other hooks. Custom hooks allow you to package and share reusable logic.

```jsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
```
