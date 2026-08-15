# React Fundamentals: Best Practices & Guidelines

## 1. Component Design & Composition

### Keep Components Small and Single-Purpose
A component should ideally do one thing well. If a component grows beyond 100-150 lines or handles multiple UI responsibilities, break it down into smaller subcomponents.

### Prefer Function Components
Always use functional components with modern hooks rather than legacy class components.

---

## 2. Props & State Conventions

### Destructure Props with Default Values
Destructure props in the function signature for immediate readability of required inputs and fallbacks:
```jsx
// Good
function Button({ label, variant = "primary", disabled = false, onClick }) { ... }

// Avoid
function Button(props) {
  const label = props.label;
  const variant = props.variant || "primary";
}
```

### Treat Props as Read-Only
Never attempt to modify `props.value = 10`. Props belong to the parent component and are immutable.

---

## 3. Lists and Keys

### Always Use Stable, Unique IDs for Keys
Use database IDs (`item.id`) or unique identifiers:
```jsx
// Good
{users.map((u) => <UserRow key={u.id} user={u} />)}

// Avoid (causes reordering/rendering glitches)
{users.map((u, index) => <UserRow key={index} user={u} />)}
```

---

## 4. Event Handler Performance

### Avoid Unnecessary Inline Function Reallocations
For static event handlers that don't need arguments, pass the stable function reference:
```jsx
// Good
<button onClick={handleClick}>Save</button>

// Only use arrow wrapper when passing item parameters
<button onClick={() => handleDelete(item.id)}>Delete</button>
```

---

## 5. Clean JSX Formatting

- Use Fragments (`<></>`) instead of redundant `<div>` wrappers to keep DOM tree clean.
- Format multi-line JSX with parentheses `return ( ... );`.
- Keep boolean props concise: `<Modal isOpen />` instead of `<Modal isOpen={true} />`.
