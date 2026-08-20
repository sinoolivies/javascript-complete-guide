# React Hooks: 12 Common Mistakes & Fixes

## 1. Infinite Render Loop with `useEffect`
```jsx
// ❌ WRONG: Missing dependency array triggers infinite render loop!
useEffect(() => {
  setCount(count + 1);
});

// ✅ CORRECT: Add dependency array or functional updater
useEffect(() => {
  setCount((c) => c + 1);
}, []);
```

---

## 2. Mutating State Directly
```jsx
// ❌ WRONG: Mutating array in place does not trigger re-render
items.push(newItem);
setItems(items);

// ✅ CORRECT: Create new array copy
setItems((prev) => [...prev, newItem]);
```

---

## 3. Stale Closures in `setInterval`
```jsx
// ❌ WRONG: 'count' is captured as initial value 0 forever
useEffect(() => {
  const timer = setInterval(() => setCount(count + 1), 1000);
  return () => clearInterval(timer);
}, []);

// ✅ CORRECT: Use functional updater
useEffect(() => {
  const timer = setInterval(() => setCount((c) => c + 1), 1000);
  return () => clearInterval(timer);
}, []);
```
