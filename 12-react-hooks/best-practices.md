# React Hooks: Best Practices & Guidelines

## 1. State Management Rules

### Keep State Local When Possible
Do not put state in global context if only a single component or small subtree needs it. Colocate state as close to where it is used as possible.

### Always Use Functional State Updates for Dependent State
```jsx
// Good
setCount((prev) => prev + 1);

// Avoid
setCount(count + 1);
```

---

## 2. Effect Guidelines

### Always Specify All Dependencies
Never lie to the dependency array. If an effect uses a variable or function from component scope, include it in the dependency array or wrap the function in `useCallback`.

### Always Clean Up Subscriptions & Event Listeners
```jsx
useEffect(() => {
  window.addEventListener('resize', onResize);
  return () => window.removeEventListener('resize', onResize);
}, [onResize]);
```

---

## 3. Performance Memoization

- Do not wrap every function in `useCallback` or every calculation in `useMemo` prematurely. Use them when passing callbacks to `React.memo` child components or when calculations are measurably slow.
