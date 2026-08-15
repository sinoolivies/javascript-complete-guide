# React Fundamentals: Common Mistakes & Pitfalls

## 1. Calling Event Handlers Immediately

### The Bug
```jsx
// ❌ Bug: Function executes immediately during render!
<button onClick={handleClick()}>Click Me</button>
```

### The Fix
Pass the function reference or wrap in an arrow function:
```jsx
// ✅ Correct: Function is passed as a callback
<button onClick={handleClick}>Click Me</button>

// ✅ Correct when passing arguments:
<button onClick={() => handleClick(id)}>Click Me</button>
```

---

## 2. Using Array Index as List Key

### The Bug
```jsx
// ❌ Bug: Reordering or deleting list items causes stale input state
{todos.map((todo, index) => (
  <TodoItem key={index} todo={todo} />
))}
```

### The Fix
Use stable, unique item IDs:
```jsx
// ✅ Correct
{todos.map((todo) => (
  <TodoItem key={todo.id} todo={todo} />
))}
```

---

## 3. Rendering 0 in Logical && Conditions

### The Bug
```jsx
// ❌ Bug: If unreadCount is 0, React renders "0" on the screen!
<div>
  {unreadCount && <Badge count={unreadCount} />}
</div>
```

### The Fix
Explicitly convert to boolean:
```jsx
// ✅ Correct
<div>
  {unreadCount > 0 && <Badge count={unreadCount} />}
  {/* Or */}
  {Boolean(unreadCount) && <Badge count={unreadCount} />}
</div>
```

---

## 4. Missing Single Root Element in JSX

### The Bug
```jsx
// ❌ Syntax Error: Adjacent JSX elements must be wrapped
return (
  <h1>Title</h1>
  <p>Description</p>
);
```

### The Fix
Wrap with a Fragment:
```jsx
// ✅ Correct
return (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);
```
