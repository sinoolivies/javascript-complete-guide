# React Fundamentals: Quick Reference Cheat-Sheet

## 1. JSX vs HTML Reference

| HTML Attribute | JSX Equivalent | Explanation |
| :--- | :--- | :--- |
| `class="container"` | `className="container"` | `class` is a JavaScript keyword |
| `for="emailInput"` | `htmlFor="emailInput"` | `for` is a JavaScript loop keyword |
| `tabindex="0"` | `tabIndex={0}` | camelCase attribute naming |
| `style="color: red;"` | `style={{ color: 'red' }}` | Pass style as JavaScript object |
| `<input>` | `<input />` | Mandatory self-closing tags |
| `<!-- comment -->` | `{/* comment */}` | JavaScript comment syntax in JSX |

---

## 2. Component Declaration Cheat-Sheet

```jsx
// Functional Component with Props Destructuring & Defaults
export function UserBadge({ name, role = "User", unread = 0 }) {
  return (
    <div className="badge">
      <span>{name} ({role})</span>
      {unread > 0 && <span className="dot">{unread}</span>}
    </div>
  );
}
```

---

## 3. Conditional Rendering Matrix

```jsx
// 1. Ternary Operator (Either / Or)
{isLoggedIn ? <UserDashboard /> : <LoginPrompt />}

// 2. Short-Circuit AND (Show / Hide)
{hasUnread && <NotificationBadge count={count} />}

// 3. Early Return (Guard Clauses)
if (isLoading) return <LoadingSpinner />;
if (error) return <ErrorMessage text={error} />;
return <MainContent />;
```

---

## 4. List Rendering Rule of Thumb

```jsx
<ul>
  {items.map((item) => (
    <li key={item.id}>{item.title}</li>
  ))}
</ul>
```
