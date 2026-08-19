# Day 1: JSX Architecture & Component Basics

## Deep Dive: How JSX Translates to JavaScript

When writing JSX in React:
```jsx
function Greeting({ name }) {
  return (
    <div className="card">
      <h1 title="Welcome">Hello, {name}!</h1>
    </div>
  );
}
```

The build pipeline translates this JSX into function calls:
```javascript
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

function Greeting({ name }) {
  return _jsxs('div', {
    className: 'card',
    children: [
      _jsx('h1', { title: 'Welcome', children: ['Hello, ', name, '!'] })
    ]
  });
}
```

### Key Takeaways for Day 1
1. JSX is not HTML; it is JavaScript with XML syntax.
2. Every tag must be properly closed: `<input />`, `<img />`.
3. Use `className` instead of `class` and `htmlFor` instead of `for`.
4. Wrap siblings in a Fragment `<>...</>` to avoid unnecessary `<div>` wrappers.
