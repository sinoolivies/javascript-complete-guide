# React Fundamentals: 12 Common Mistakes & Bug Fixes

## 1. Invoking Event Handlers Immediately
```jsx
// ❌ WRONG: Executes immediately on render!
<button onClick={handleDelete(user.id)}>Delete</button>

// ✅ CORRECT: Passed as a callback
<button onClick={() => handleDelete(user.id)}>Delete</button>
```

---

## 2. Rendering `0` with Logical `&&`
```jsx
// ❌ WRONG: Renders "0" on screen when array is empty!
<div>{items.length && <List items={items} />}</div>

// ✅ CORRECT: Explicit boolean comparison
<div>{items.length > 0 && <List items={items} />}</div>
```

---

## 3. Using Array Index as List Keys
```jsx
// ❌ WRONG: Causes state leakage when reordering
{todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}

// ✅ CORRECT: Stable unique identifier
{todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
```

---

## 4. Mutating Props Directly
```jsx
// ❌ WRONG: Props are strictly immutable!
function Header(props) {
  props.title = props.title.toUpperCase();
}

// ✅ CORRECT: Create a local variable
function Header({ title }) {
  const formattedTitle = title.toUpperCase();
  return <h1>{formattedTitle}</h1>;
}
```
