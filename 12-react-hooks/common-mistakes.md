# React Hooks: Common Mistakes & Pitfalls

## 1. Infinite Render Loop in `useEffect`

### The Bug
```jsx
// ❌ Bug: setState triggers re-render -> effect runs -> triggers re-render infinitely
useEffect(() => {
  setCount(count + 1);
});
```

### The Fix
Add appropriate dependencies or use an empty array:
```jsx
// ✅ Correct
useEffect(() => {
  setCount((c) => c + 1);
}, []); // Runs once on mount
```

---

## 2. Mutating State Objects or Arrays

### The Bug
```jsx
// ❌ Bug: React will not detect changes because array reference didn't change!
items.push(newItem);
setItems(items);
```

### The Fix
Return a new array copy:
```jsx
// ✅ Correct
setItems((prev) => [...prev, newItem]);
```

---

## 3. Stale Closures in `useEffect` or `setInterval`

### The Bug
```jsx
// ❌ Bug: 'count' inside closure is captured as initial value 0 forever!
useEffect(() => {
  const timer = setInterval(() => {
    setCount(count + 1);
  }, 1000);
  return () => clearInterval(timer);
}, []);
```

### The Fix
Use the functional updater form:
```jsx
// ✅ Correct
useEffect(() => {
  const timer = setInterval(() => {
    setCount((prev) => prev + 1);
  }, 1000);
  return () => clearInterval(timer);
}, []);
```
