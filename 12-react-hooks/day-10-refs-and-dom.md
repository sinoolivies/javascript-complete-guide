# Day 10: Persistent Refs & DOM Access (useRef)

## Two Primary Use Cases for useRef

1. **Direct DOM Interaction**:
```jsx
const inputRef = useRef(null);
const focusInput = () => inputRef.current?.focus();
return <input ref={inputRef} />;
```

2. **Storing Mutable Values Without Re-rendering**:
```jsx
const renderCount = useRef(0);
useEffect(() => {
  renderCount.current += 1;
  console.log(`Component has rendered ${renderCount.current} times`);
});
```
