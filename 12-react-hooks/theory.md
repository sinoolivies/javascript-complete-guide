# React Hooks: Deep Theoretical Mechanics

## 1. Why Hooks Were Created

Before React 16.8 (2019), stateful logic was restricted to ES6 Class Components:
```jsx
// The Old Way (Class Components)
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}
```

### Problems with Class Components
1. **Confusing `this` Keyword**: Binding event handlers in constructors led to frequent bugs.
2. **Scattered Side Effect Logic**: Subscriptions had to be started in `componentDidMount`, updated in `componentDidUpdate`, and cleaned up in `componentWillUnmount`, splitting related code across three methods.
3. **Difficult Logic Reuse**: Sharing stateful logic required complex patterns like Higher-Order Components (HOCs) or Render Props ("wrapper hell").

### The Functional Solution: Hooks
Hooks allow you to attach state and lifecycle behaviors directly into pure JavaScript functions without classes.

---

## 2. The Two Fundamental Rules of Hooks

React does not inspect hook names or ASTs at runtime. Instead, React relies on the **exact call order** of hooks during every render.

1. **Only Call Hooks at the Top Level**:
   - ❌ Never call hooks inside `if` conditions, `for` loops, or nested functions.
   - ✅ Always call hooks at the beginning of your component body before any early returns.
2. **Only Call Hooks from React Functions**:
   - Call hooks from React functional components or custom hooks (functions starting with `use`).

### Under the Hood: The Fiber Linked List
When React renders a component, it maintains a linked list of "hook cells" on the component's internal Fiber node:

```
Fiber Node
    └── Hook 1 (useState: count) ──► Hook 2 (useEffect: timer) ──► Hook 3 (useRef: inputRef)
```
If a hook is placed inside an `if (condition)`, the order of the linked list is corrupted on the next render, leading to React reading the wrong state.

---

## 3. `useState`: State Management in Depth

```jsx
const [state, setState] = useState(initialState);
```

### 1. Functional State Updates (Crucial for Dependent State)
State updates in React 18/19 are batched. If you calculate new state from current state, **always use the updater callback form**:
```jsx
// ❌ Dangerous: 'count' might be stale in asynchronous batches
setCount(count + 1);

// ✅ Safe: Always receives the freshest committed state
setCount((prevCount) => prevCount + 1);
```

### 2. Lazy State Initialization
If computing the initial state is computationally expensive (e.g. reading from `localStorage` or parsing JSON), pass a function to `useState`. React will execute it **only once on initial mount**:
```jsx
// ❌ Runs JSON.parse on EVERY re-render:
const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

// ✅ Executes JSON.parse ONLY on mount:
const [user, setUser] = useState(() => {
  const saved = localStorage.getItem('user');
  return saved ? JSON.parse(saved) : null;
});
```

### 3. State Immutability
React compares previous and next states using `Object.is()`. Never mutate arrays or objects directly; always create a new copy:
```jsx
// Array insertion:
setItems((prev) => [...prev, newItem]);

// Array deletion:
setItems((prev) => prev.filter((item) => item.id !== idToRemove));

// Object update:
setUser((prev) => ({ ...prev, email: newEmail }));
```

---

## 4. `useEffect`: Synchronization & Side Effects

`useEffect` is the mental model for **synchronizing your component with external systems** (APIs, WebSockets, DOM subscriptions, timers).

```jsx
useEffect(() => {
  // Effect logic here...

  return () => {
    // Optional cleanup teardown...
  };
}, [dependency1, dependency2]);
```

### Dependency Array Breakdown
- **No Dependency Array**: Runs after *every single render*. (Rarely desired).
- **Empty Array `[]`**: Runs *once* after the initial mount, and cleanup runs on unmount.
- **Populated Array `[userId, status]`**: Runs on mount, and re-runs whenever `userId` or `status` changes.

### Handling Network Race Conditions with AbortController
```jsx
useEffect(() => {
  const controller = new AbortController();

  async function fetchProfile() {
    try {
      const res = await fetch(`/api/users/${userId}`, { signal: controller.signal });
      const data = await res.json();
      setUser(data);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
      }
    }
  }

  fetchProfile();

  return () => controller.abort(); // Cancel request if userId changes before response arrives!
}, [userId]);
```

---

## 5. `useContext`: Global Tree Data Sharing

Context provides a way to pass data through the component tree without having to pass props down manually at every level (eliminating "prop drilling").

```
       [ThemeProvider (Context.Provider)]
                     │
         ┌───────────┴───────────┐
         ▼                       ▼
   [Navbar]                  [MainContent]
         │                       │
   [ThemeToggle]             [UserProfile]
   (useContext)              (useContext)
```

```jsx
// 1. Create Context
const ThemeContext = React.createContext('light');

// 2. Provide Value
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Consume Value
export function DisplayButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return <button onClick={() => setTheme('light')}>Theme: {theme}</button>;
}
```

---

## 6. `useRef`: Mutable References & DOM Access

`useRef` returns a plain JavaScript object `{ current: initialValue }` with two distinct superpowers:
1. **Direct DOM Node Reference**: Attach to any JSX element via `<input ref={myRef} />`.
2. **Mutable Persistent Variable**: Holds values across renders **without triggering a re-render** when modified (ideal for interval IDs, previous values, render counters).

```jsx
function Timer() {
  const intervalRef = useRef(null);

  const start = () => {
    intervalRef.current = setInterval(() => console.log('Tick'), 1000);
  };
  const stop = () => {
    clearInterval(intervalRef.current);
  };
}
```

---

## 7. `useReducer`: Predictable Complex State

For components with complex state interactions, multiple sub-values, or when the next state depends on multiple previous values, `useReducer` provides a structured pattern:

```jsx
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const [state, dispatch] = useReducer(cartReducer, { items: [] });
```

---

## 8. Performance Optimization: `useMemo` & `useCallback`

- **`useMemo(() => fn(), [deps])`**: Caches the **result** of a calculation.
- **`useCallback(fn, [deps])`**: Caches a **function reference** between renders so child components wrapped in `React.memo` do not re-render unnecessarily.

> **Pro-Tip**: Do not overuse `useMemo` or `useCallback` for trivial operations. The cost of maintaining the dependency array and closure memory can exceed the re-render cost for simple components.
