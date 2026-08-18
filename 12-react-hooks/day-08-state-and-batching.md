# Day 8: State Management & Batching (useState)

## The Mechanics of State in React 18/19

React batches multiple state updates into a single re-render to optimize performance.

```jsx
// Multiple state updates in one handler are automatically batched
function handleBatchExample() {
  setCount((c) => c + 1);
  setFlag((f) => !f);
  setUser((u) => ({ ...u, active: true }));
  // Triggers ONLY ONE re-render!
}
```

### Lazy Initialization for Expensive Setup:
```jsx
// Executes JSON.parse ONLY ONCE on mount:
const [settings, setSettings] = useState(() => {
  const saved = localStorage.getItem('app-settings');
  return saved ? JSON.parse(saved) : { theme: 'dark', notifications: true };
});
```
