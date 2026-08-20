# React Hooks: Quick Reference Cheat-Sheet

## 1. Built-in Hooks Reference

| Hook | Signature | Key Rule / Note |
| :--- | :--- | :--- |
| **`useState`** | `const [val, setVal] = useState(init)` | Always use `setVal(prev => ...)` for dependent state |
| **`useEffect`** | `useEffect(callback, [deps])` | Return cleanup function for teardown |
| **`useContext`**| `const ctx = useContext(MyContext)` | Reads nearest `<MyContext.Provider>` value |
| **`useRef`**    | `const ref = useRef(init)` | `ref.current` changes do NOT trigger re-renders |
| **`useReducer`** | `const [state, dispatch] = useReducer(fn, init)` | Pure reducer function `(state, action) => newState` |
| **`useMemo`**   | `const cached = useMemo(() => compute(), [deps])` | Caches calculation result |
| **`useCallback`**| `const fn = useCallback(() => {}, [deps])` | Caches function reference |

---

## 2. `useEffect` Lifecycle Mapping

```jsx
// 1. Every Render:
useEffect(() => { console.log('Rendered'); });

// 2. Mount Only (componentDidMount):
useEffect(() => {
  console.log('Mounted');
  return () => console.log('Unmounted');
}, []);

// 3. Dependent Update (componentDidUpdate):
useEffect(() => {
  console.log('userId changed to:', userId);
}, [userId]);
```
