# Cheat Sheet: Functions

Quick reference for JavaScript functions.

## Function Definitions

```javascript
// Declaration
function name(params) {
  // code
  return result;
}

// Expression
const name = function(params) {
  // code
  return result;
};

// Arrow
const name = (params) => {
  // code
  return result;
};

// Concise arrow
const name = param => result;
```

## Parameters

```javascript
// Multiple parameters
function add(a, b) {}

// Default parameters
function greet(name = "Guest") {}

// Rest parameters
function sumAll(...numbers) {}

// Destructuring
function greetUser({ name, age }) {}
```

## Return Values

```javascript
// Explicit return
function add(a, b) {
  return a + b;
}

// Early return
function process(data) {
  if (!data) return null;
  return processData(data);
}

// No return (undefined)
function log(msg) {
  console.log(msg);
}
```

## Arrow Functions

```javascript
// No parameters
const fn = () => {};

// Single parameter
const fn = x => x * 2;

// Multiple parameters
const fn = (a, b) => a + b;

// Multiple statements
const fn = (a, b) => {
  const sum = a + b;
  return sum * 2;
};
```

## Scope and Closures

```javascript
// Function scope
function outer() {
  const x = 10;
  function inner() {
    console.log(x);  // Accessible
  }
}

// Closure
function createCounter() {
  let count = 0;
  return () => ++count;
}
```

## The `this` Keyword

```javascript
// Regular function
const obj = {
  method: function() {
    console.log(this.name);
  }
};

// Arrow function (lexical this)
const obj2 = {
  method: () => {
    console.log(this.name);  // undefined
  }
};
```

## Higher-Order Functions

```javascript
// Function as argument
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// Function as return value
function createMultiplier(multiplier) {
  return (number) => number * multiplier;
}
```

## Callbacks

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data");
  }, 100);
}
```

## IIFE

```javascript
(function() {
  // code
})();

(function(name) {
  console.log(name);
})("Alice");
```

## Common Patterns

### Guard Clause
```javascript
function process(data) {
  if (!data) return;
  if (!data.isValid) return;
  // Process valid data
}
```

### Memoization
```javascript
function memoize(fn) {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
```

### Currying
```javascript
function curriedAdd(a) {
  return (b) => a + b;
}
```

### Composition
```javascript
function compose(...fns) {
  return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
}
```

## Quick Decision Guide

| Situation | Best Choice |
|-----------|-------------|
| Main function | Declaration |
| Callback | Arrow function |
| Object method | Regular function |
| Need `this` | Regular function |
| Simple one-liner | Arrow function |
| Constructor | Regular function |

## Best Practices Quick Checklist

- [ ] Use descriptive function names
- [ ] Keep functions small and focused
- [ ] Use default parameters
- [ ] Handle all return paths
- [ ] Validate input early
- [ ] Use arrow functions for callbacks
- [ ] Use regular functions for methods
- [ ] Document complex functions
- [ ] Write testable functions
- [ ] Avoid too many parameters

---

**Tip**: Bookmark this page for quick reference while learning!
