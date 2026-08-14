# React Fundamentals: Comprehensive Theory

## 1. What is React?

React is an open-source JavaScript library developed by Facebook (Meta) in 2013 for building user interfaces, especially single-page applications (SPAs).

### Core Philosophy
1. **Declarative**: You describe *what* the UI should look like for a given state, and React handles updating the DOM to match.
2. **Component-Based**: UIs are broken down into self-contained, reusable building blocks (components).
3. **Unidirectional Data Flow**: Data flows strictly downwards from parent to child via `props`.
4. **Learn Once, Write Anywhere**: The same component concepts apply to web (React DOM), mobile (React Native), and server-side rendering.

---

## 2. The Virtual DOM & Reconciliation

In vanilla JavaScript, modifying the DOM directly (e.g., `document.getElementById().appendChild()`) can be slow when performed frequently because browsers must recalculate styles, reflow the layout, and repaint pixels.

### How React Solves This
1. **Virtual DOM (VDOM)**: React keeps a lightweight JavaScript representation of the actual DOM in memory.
2. **Diffing**: When state or props change, React creates a new Virtual DOM tree and compares it with the previous one (a process called *Reconciliation*).
3. **Batching & Patching**: React calculates the minimal set of changes needed and updates only the altered elements in the real DOM in a single efficient batch.

---

## 3. Understanding JSX (JavaScript XML)

JSX is a syntax extension for JavaScript that looks similar to HTML. It is compiled by tools like Babel or Vite into standard JavaScript function calls (`React.createElement` or the JSX runtime `_jsx`).

### JSX Rules
- **Single Root Element**: Adjacent JSX elements must be wrapped in an enclosing tag or a Fragment: `<>...</>`.
- **Close All Tags**: Self-closing tags must end with a slash: `<img />`, `<input />`, `<br />`.
- **camelCase Properties**: HTML attributes become camelCase in JSX:
  - `class` → `className`
  - `for` → `htmlFor`
  - `tabindex` → `tabIndex`
  - `onclick` → `onClick`
- **Embedding JavaScript Expressions**: Any valid JavaScript expression can be placed inside curly braces `{...}`.

```jsx
const userName = "Alice";
const unreadCount = 5;

const element = (
  <div className="user-banner">
    <h1>Welcome, {userName.toUpperCase()}!</h1>
    <p>You have {unreadCount * 2} pending notifications.</p>
  </div>
);
```

---

## 4. Components: The Building Blocks

A React component is a JavaScript function that returns JSX. Component names **must start with a capital letter** (e.g., `UserProfile`, not `userProfile`) so React distinguishes them from native HTML elements.

```jsx
function Header() {
  return (
    <header className="app-header">
      <h2>My Portfolio</h2>
    </header>
  );
}

export default Header;
```

---

## 5. Props (Properties)

Props are read-only inputs passed from a parent component to a child component, similar to function arguments.

### Props Rules
1. **Props are Immutable**: A component must never modify its own props. Pure functions must not alter their inputs.
2. **Destructuring Props**: Props can be destructured directly in the function signature for clarity.
3. **Default Props**: Default parameter values can be specified in the function signature.

```jsx
function UserCard({ name, role = "Developer", isOnline = false }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <span>Status: {isOnline ? "🟢 Online" : "⚪ Offline"}</span>
    </div>
  );
}
```

---

## 6. Conditional Rendering

React provides multiple ways to render content conditionally:

### 1. Ternary Operator (`condition ? a : b`)
Useful for choosing between two elements:
```jsx
function AuthButton({ isLoggedIn }) {
  return (
    <button>{isLoggedIn ? "Log Out" : "Log In"}</button>
  );
}
```

### 2. Logical AND (`condition && element`)
Useful for rendering an element only when a condition is true:
```jsx
function NotificationBadge({ count }) {
  return (
    <div>
      <span>Messages</span>
      {count > 0 && <span className="badge">{count}</span>}
    </div>
  );
}
```

### 3. Early Return
Useful for preventing rendering altogether or showing loading states:
```jsx
function Profile({ user, isLoading }) {
  if (isLoading) return <div>Loading profile...</div>;
  if (!user) return <div>No user found.</div>;

  return <div><h1>{user.name}</h1></div>;
}
```

---

## 7. Rendering Lists & The Importance of Keys

To render an array of items, use the JavaScript `map()` method inside JSX.

### Why Keys Matter
React requires each item in a list to have a unique and stable `key` prop. Keys allow React's diffing algorithm to identify which items have been added, removed, or reordered without re-rendering the entire list.

```jsx
function CourseList({ courses }) {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          <strong>{course.title}</strong> — {course.duration} hrs
        </li>
      ))}
    </ul>
  );
}
```

> **Important**: Avoid using the array index (`key={index}`) if items can be sorted, filtered, or deleted, as this can cause rendering bugs and state leakage.

---

## 8. Event Handling in React

React wraps native browser events in a cross-browser wrapper called **SyntheticEvent**.

### Key Differences from HTML
1. Event names are camelCase (`onClick`, `onChange`, `onSubmit`, `onKeyDown`).
2. Pass a function reference, not a string: `onClick={handleClick}`.
3. Call `e.preventDefault()` explicitly to prevent default browser behavior.

```jsx
function FormSubmit() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted safely without page reload!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter name" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 9. Component Composition & `props.children`

Components can accept nested JSX elements through the special `children` prop. This pattern is essential for building layout wrappers, dialogs, cards, and modal components.

```jsx
function CardContainer({ title, children }) {
  return (
    <div className="card-box">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}
```
