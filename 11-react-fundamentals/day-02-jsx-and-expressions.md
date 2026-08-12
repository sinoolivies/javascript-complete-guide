# Day 2: JSX Architecture & Expressions

## How JSX Compiles to Pure JavaScript

JSX is a syntactic sugar over JavaScript function calls.

```jsx
// Your Code:
const element = (
  <nav className="navbar" id="main-nav">
    <h1 title="Brand">React Suite</h1>
    <span>v19.0</span>
  </nav>
);
```

Compiles to:
```javascript
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

const element = _jsxs('nav', {
  className: 'navbar',
  id: 'main-nav',
  children: [
    _jsx('h1', { title: 'Brand', children: 'React Suite' }),
    _jsx('span', { children: 'v19.0' })
  ]
});
```

### JSX Expression Rules:
- Any JavaScript expression can be placed inside `{...}`.
- Statements (`if`, `for`, `while`) cannot be placed directly inside `{...}`; use ternary expressions or array methods instead.
