# React Hooks: Quick Reference Cheat-Sheet

## 1. Core Hooks Summary

| Hook | Signature | Primary Use Case |
| :--- | :--- | :--- |
| **`useState`** | `const [state, setState] = useState(init)` | Local component state |
| **`useEffect`** | `useEffect(callback, [deps])` | Side effects, timers, subscriptions |
| **`useContext`**| `const val = useContext(MyContext)` | Reading global tree context |
| **`useRef`**    | `const ref = useRef(init)` | DOM node reference, mutable value |
| **`useReducer`** | `const [state, dispatch] = useReducer(reducer, init)` | Complex state transitions with actions |
| **`useMemo`**   | `const val = useMemo(() => compute(), [deps])` | Expensive calculation caching |
| **`useCallback`**| `const fn = useCallback(() => {}, [deps])` | Memoizing callback function reference |

---

## 2. `useEffect` Dependency Rules

```jsx
// 1. Runs after every render
useEffect(() => { console.log('Rendered'); });

// 2. Runs once on mount (cleanup on unmount)
useEffect(() => {
  console.log('Mounted');
  return () => console.log('Unmounted');
}, []);

// 3. Runs on mount + whenever 'userId' changes
useEffect(() => {
  fetchUser(userId);
}, [userId]);
```

---

## 3. Custom Hook Pattern

```jsx
function useCustomHook(param) {
  const [val, setVal] = useState(param);
  // combine other hooks...
  return val;
}
```
