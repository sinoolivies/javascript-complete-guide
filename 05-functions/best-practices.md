# Best Practices: Functions

Follow these professional practices for using JavaScript functions effectively.

## Function Definition

### 1. Use Descriptive Names

**Good:**
```javascript
function calculateTotalPrice(items, taxRate) {}
function validateEmailAddress(email) {}
```

**Bad:**
```javascript
function calc(x, y) {}
function check(e) {}
```

**Why:** Descriptive names make code self-documenting.

### 2. Keep Functions Small

**Good:**
```javascript
function validateEmail(email) {
  if (!email) return false;
  if (!email.includes("@")) return false;
  return true;
}
```

**Bad:**
```javascript
function processUserData(data) {
  // 100 lines of code doing multiple things
}
```

**Why:** Small functions are easier to test, understand, and maintain.

### 3. Single Responsibility

**Good:**
```javascript
function validateEmail(email) {}
function formatEmail(email) {}
function saveEmail(email) {}
```

**Bad:**
```javascript
function handleEmail(email) {
  // Validates, formats, and saves
}
```

**Why:** Each function should do one thing well.

## Parameters

### 4. Use Object Parameters for Many Arguments

**Good:**
```javascript
function createUser({ name, email, age, address }) {}
```

**Bad:**
```javascript
function createUser(name, email, age, address, phone, country) {}
```

**Why:** Object parameters are self-documenting and order-independent.

### 5. Use Default Parameters

**Good:**
```javascript
function greet(name = "Guest", time = "day") {}
```

**Bad:**
```javascript
function greet(name, time) {
  name = name || "Guest";
  time = time || "day";
}
```

**Why:** Default parameters are cleaner and more explicit.

### 6. Destructure Parameters

**Good:**
```javascript
function processUser({ name, age, email }) {}
```

**Bad:**
```javascript
function processUser(user) {
  const name = user.name;
  const age = user.age;
  const email = user.email;
}
```

**Why:** Destructuring is more concise and readable.

## Return Values

### 7. Always Return Explicitly

**Good:**
```javascript
function add(a, b) {
  return a + b;
}
```

**Bad:**
```javascript
function add(a, b) {
  a + b;  // Returns undefined
}
```

**Why:** Explicit returns make intent clear.

### 8. Handle All Return Paths

**Good:**
```javascript
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  return "F";  // Default case
}
```

**Bad:**
```javascript
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  // Missing return for other cases
}
```

**Why:** Ensures consistent behavior.

### 9. Use Early Returns

**Good:**
```javascript
function process(data) {
  if (!data) return null;
  if (!data.isValid) return null;
  return processData(data);
}
```

**Bad:**
```javascript
function process(data) {
  if (data) {
    if (data.isValid) {
      return processData(data);
    }
  }
  return null;
}
```

**Why:** Early returns reduce nesting and improve readability.

## Arrow Functions

### 10. Use Arrow Functions for Callbacks

**Good:**
```javascript
numbers.map(num => num * 2);
numbers.filter(num => num > 5);
```

**Bad:**
```javascript
numbers.map(function(num) { return num * 2; });
```

**Why:** Arrow functions are concise for callbacks.

### 11. Use Regular Functions for Methods

**Good:**
```javascript
const obj = {
  method: function() {
    console.log(this.name);
  }
};
```

**Bad:**
```javascript
const obj = {
  method: () => {
    console.log(this.name);  // undefined
  }
};
```

**Why:** Regular functions have correct `this` binding for methods.

### 12. Avoid Arrow Functions for Constructors

**Good:**
```javascript
function Person(name) {
  this.name = name;
}
```

**Bad:**
```javascript
const Person = (name) => {
  this.name = name;  // Error
};
```

**Why:** Arrow functions cannot be used as constructors.

## Closures

### 13. Use Closures Intentionally

**Good:**
```javascript
function createCounter() {
  let count = 0;
  return () => ++count;
}
```

**Bad:**
```javascript
// Accidentally creating closures
function process() {
  const data = getData();
  setTimeout(() => {
    console.log(data);  // Unnecessary closure
  }, 100);
}
```

**Why:** Closures can cause memory leaks if not used carefully.

### 14. Be Aware of Memory Leaks

**Good:**
```javascript
function handler() {
  // Process event
}
element.addEventListener('click', handler);
// Later: element.removeEventListener('click', handler);
```

**Bad:**
```javascript
function init() {
  element.addEventListener('click', () => {
    // Closure keeps references
  });
}
```

**Why:** Closures can prevent garbage collection.

## Higher-Order Functions

### 15. Use Higher-Order Functions for Reusability

**Good:**
```javascript
function withLogging(fn) {
  return function(...args) {
    console.log('Calling with:', args);
    return fn(...args);
  };
}
```

**Bad:**
```javascript
// Adding logging manually in every function
function processData(data) {
  console.log('Processing:', data);
  // Process data
}
```

**Why:** Higher-order functions promote code reuse.

### 16. Compose Functions for Complex Operations

**Good:**
```javascript
const composed = compose(transform, validate, save);
```

**Bad:**
```javascript
// Manual composition
function process(data) {
  const validated = validate(data);
  const transformed = transform(validated);
  return save(transformed);
}
```

**Why:** Composition is more declarative and flexible.

## Error Handling

### 17. Validate Input Early

**Good:**
```javascript
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Numbers required');
  }
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}
```

**Bad:**
```javascript
function divide(a, b) {
  return a / b;  // Might return Infinity
}
```

**Why:** Early validation prevents confusing errors.

### 18. Throw Appropriate Error Types

**Good:**
```javascript
throw new TypeError('Expected number');
throw new RangeError('Value out of range');
throw new Error('Generic error');
```

**Bad:**
```javascript
throw "Error message";
throw 400;
```

**Why:** Error objects provide stack traces and error types.

## Documentation

### 19. Document Complex Functions

**Good:**
```javascript
/**
 * Calculates compound interest
 * @param {number} principal - Initial amount
 * @param {number} rate - Annual interest rate (as decimal)
 * @param {number} years - Number of years
 * @param {number} compounds - Times compounded per year
 * @returns {number} Final amount
 */
function calculateCompoundInterest(principal, rate, years, compounds) {
  return principal * Math.pow((1 + rate / compounds), compounds * years);
}
```

**Bad:**
```javascript
function calculateCompoundInterest(p, r, y, c) {
  return p * Math.pow((1 + r / c), c * y);
}
```

**Why:** Documentation makes functions easier to use.

## Testing

### 20. Write Testable Functions

**Good:**
```javascript
function add(a, b) {
  return a + b;
}
// Easy to test
```

**Bad:**
```javascript
function processAndDisplay() {
  const data = fetchData();  // Side effect
  console.log(data);  // Side effect
}
```

**Why:** Pure functions are easier to test.

## Modern JavaScript

### 21. Use Modern Syntax

**Good:**
```javascript
const greet = (name = "Guest") => `Hello, ${name}`;
```

**Bad:**
```javascript
function greet(name) {
  name = name || "Guest";
  return "Hello, " + name;
}
```

**Why:** Modern syntax is more concise and readable.

### 22. Use Optional Chaining in Functions

**Good:**
```javascript
function getAddress(user) {
  return user?.address?.city;
}
```

**Bad:**
```javascript
function getAddress(user) {
  if (user && user.address) {
    return user.address.city;
  }
}
```

**Why:** Optional chaining is cleaner and safer.

## Summary

Following these best practices will help you:
- Write cleaner, more maintainable code
- Avoid common function-related bugs
- Write more testable code
- Use modern JavaScript features effectively
- Create reusable, modular code

**Key Principles:**
1. Keep functions small and focused
2. Use descriptive names
3. Handle all return paths
4. Validate input early
5. Use appropriate function types
6. Document complex functions
7. Write testable, pure functions
8. Use modern JavaScript features

Consistency is key—pick a style and stick with it across your projects!
