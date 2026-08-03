# Cheat Sheet: Control Flow

Quick reference for JavaScript control flow.

## If/Else Statements

```javascript
// Basic if
if (condition) {
  // code
}

// If/else
if (condition) {
  // code if true
} else {
  // code if false
}

// Else if chain
if (condition1) {
  // code
} else if (condition2) {
  // code
} else {
  // default code
}

// Nested if
if (outer) {
  if (inner) {
    // code
  }
}
```

## Switch Statements

```javascript
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // default code
}

// Fallthrough
switch (expression) {
  case value1:
  case value2:
    // code for both
    break;
}
```

## Ternary Operator

```javascript
condition ? valueIfTrue : valueIfFalse

let status = age >= 18 ? "adult" : "minor";
```

## Short-Circuit Evaluation

```javascript
// Logical AND
condition && executeIfTrue();

// Logical OR
value || defaultValue;

// Nullish coalescing
value ?? defaultValue;  // Only null/undefined
```

## Error Handling

```javascript
// Try/catch
try {
  // code that might throw
} catch (error) {
  // handle error
}

// Try/catch/finally
try {
  // code that might throw
} catch (error) {
  // handle error
} finally {
  // always executes
}

// Throwing errors
throw new Error("Message");
throw new TypeError("Expected number");
```

## Break and Continue

```javascript
// Break in loop
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
}

// Continue in loop
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
}

// Break in switch
switch (value) {
  case 1:
    // code
    break;
}
```

## Common Patterns

### Guard Clause
```javascript
function process(data) {
  if (!data) return;
  if (!data.isValid) return;
  // process valid data
}
```

### Early Return
```javascript
function validate(user) {
  if (!user) return false;
  if (!user.email) return false;
  return true;
}
```

### Default Values
```javascript
let name = userName || "Guest";
let count = items ?? 0;
```

### Safe Property Access
```javascript
let city = user?.address?.city;
```

### Validation Chain
```javascript
if (!value) return "Required";
if (value < 0) return "Must be positive";
if (value > 100) return "Must be <= 100";
return "Valid";
```

## Quick Decision Guide

| Situation | Best Choice |
|-----------|-------------|
| Simple true/false | if/else or ternary |
| Multiple same-value comparisons | switch |
| Simple conditional assignment | ternary |
| Complex logic | if/else with guard clauses |
| Default value for null/undefined | ?? |
| Default value for falsy | \|\| |
| Error-prone code | try/catch |
| Exit loop early | break |
| Skip iteration | continue |

## Best Practices Quick Checklist

- [ ] Use guard clauses to reduce nesting
- [ ] Handle all cases (use default)
- [ ] Use break in switch cases
- [ ] Use early returns
- [ ] Handle errors gracefully
- [ ] Use ?? for null/undefined defaults
- [ ] Avoid nested ternary
- [ ] Validate input early
- [ ] Use meaningful condition names
- [ ] Test all code paths

---

**Tip**: Bookmark this page for quick reference while learning!
