# React Fundamentals: Quick Reference Cheat-Sheet

## 1. JSX Syntax & Attributes

| HTML | JSX Equivalent | Notes |
| :--- | :--- | :--- |
| `class="btn"` | `className="btn"` | `class` is a reserved keyword in JS |
| `for="email"` | `htmlFor="email"` | `for` is a reserved keyword in JS |
| `onclick="run()"` | `onClick={run}` | camelCase, pass function reference |
| `style="color: red;"` | `style={{ color: 'red' }}` | Pass a JavaScript style object |
| `<input>` | `<input />` | Self-closing tags are mandatory |

---

## 2. Component Declaration

```jsx
// Standard Functional Component
function Greeting({ name, greeting = "Hello" }) {
  return <h1>{greeting}, {name}!</h1>;
}

// Arrow Function Component
const UserCard = ({ user }) => (
  <div className="card">
    <h3>{user.name}</h3>
  </div>
);
```

---

## 3. Conditional Rendering Patterns

```jsx
// 1. Ternary Operator
<div>{isLoggedIn ? <UserDashboard /> : <LoginForm />}</div>

// 2. Short-Circuit AND (&&)
<div>{hasNotifications && <NotificationDot />}</div>

// 3. Early Return in Function Body
if (isLoading) return <Spinner />;
return <MainContent />;
```

---

## 4. List Rendering with Keys

```jsx
<ul>
  {items.map((item) => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>
```

---

## 5. Event Handling Syntax

```jsx
// Simple Event Reference
<button onClick={handleClick}>Click Me</button>

// Event with Parameters (Inline Arrow Function)
<button onClick={() => handleDelete(item.id)}>Delete</button>

// Event Object Usage
function handleChange(e) {
  console.log("New value:", e.target.value);
}
<input onChange={handleChange} />
```
