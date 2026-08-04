# Common Mistakes: Functions

Learn from these common errors that beginners make with JavaScript functions.

## 1. Forgetting Return Statement

### The Mistake
```javascript
function add(a, b) {
  a + b;  // Forgot return
}
const result = add(5, 3);  // undefined
```

### The Problem
- Functions without return return `undefined`
- Calculation happens but result is lost
- Silent failure makes debugging difficult

### The Fix
```javascript
function add(a, b) {
  return a + b;
}
```

## 2. Confusing Function Declaration with Expression

### The Mistake
```javascript
// Trying to call before expression
greet();  // Error

const greet = function(name) {
  console.log(`Hello, ${name}`);
};
```

### The Problem
- Function expressions are not hoisted
- Cannot call before definition
- Causes ReferenceError

### The Fix
```javascript
// Use declaration if you need to call before definition
function greet(name) {
  console.log(`Hello, ${name}`);
}
greet();  // Works
```

## 3. Using `this` in Arrow Functions

### The Mistake
```javascript
const obj = {
  name: "Alice",
  greet: () => {
    console.log(`Hello, ${this.name}`);  // undefined
  }
};
obj.greet();
```

### The Problem
- Arrow functions don't have their own `this`
- They inherit `this` from surrounding scope
- `this.name` is undefined

### The Fix
```javascript
const obj = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, ${this.name}`);
  }
};
```

## 4. Not Handling All Return Paths

### The Mistake
```javascript
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  // Missing else - returns undefined for scores < 80
}
```

### The Problem
- Some code paths don't return values
- Function returns `undefined` unexpectedly
- Hard to debug

### The Fix
```javascript
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  return "F";  // Default case
}
```

## 5. Modifying Parameters

### The Mistake
```javascript
function processArray(arr) {
  arr.push(4);  // Modifies original array
}
const original = [1, 2, 3];
processArray(original);
console.log(original);  // [1, 2, 3, 4] - Unexpected!
```

### The Problem
- Arrays and objects are passed by reference
- Modifying parameters affects original data
- Can cause side effects

### The Fix
```javascript
function processArray(arr) {
  const copy = [...arr];  // Create a copy
  copy.push(4);
  return copy;
}
```

## 6. Too Many Parameters

### The Mistake
```javascript
function createUser(name, email, age, address, phone, country, ...) {
  // Too many parameters - hard to use
}
```

### The Problem
- Hard to remember parameter order
- Difficult to call correctly
- Hard to maintain

### The Fix
```javascript
function createUser({ name, email, age, address, phone, country }) {
  // Use an object parameter
}
```

## 7. Not Using Default Parameters

### The Mistake
```javascript
function greet(name) {
  name = name || "Guest";  // Old way
  console.log(`Hello, ${name}`);
}
```

### The Problem
- Not using modern syntax
- `||` treats 0, "" as falsy
- Not the intended behavior

### The Fix
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
```

## 8. Creating Functions in Loops

### The Mistake
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);  // All print 3
  }, 100);
}
```

### The Problem
- Functions share the same variable reference
- Common closure issue
- All functions see the final value

### The Fix
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);  // Use arrow function
}
```

## 9. Not Validating Parameters

### The Mistake
```javascript
function divide(a, b) {
  return a / b;  // Might return Infinity
}
```

### The Problem
- No validation of input
- Returns Infinity or NaN for invalid input
- Silent failures

### The Fix
```javascript
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}
```

## 10. Using `var` in Functions

### The Mistake
```javascript
function example() {
  var x = 10;
  if (true) {
    var x = 20;  // Re-declared (confusing)
  }
  console.log(x);  // 20
}
```

### The Problem
- `var` is function-scoped, not block-scoped
- Can be redeclared
- Confusing behavior

### The Fix
```javascript
function example() {
  let x = 10;
  if (true) {
    let x = 20;  // Error: redeclaration
  }
  console.log(x);  // 10
}
```

## How to Avoid These Mistakes

1. **Always use return** when you need a value
2. **Understand hoisting** differences
3. **Use regular functions for methods**
4. **Handle all return paths**
5. **Avoid modifying parameters**
6. **Use object parameters for many arguments**
7. **Use default parameters**
8. **Be careful with closures in loops**
9. **Validate input parameters**
10. **Use let/const instead of var**

## Debugging Tips

1. **Use console.log** to trace function execution
2. **Check return values** explicitly
3. **Validate input** at function start
4. **Use debugger** statement for complex functions
5. **Test edge cases** (null, undefined, 0, "")

## Remember

Functions are powerful but can be tricky. Understanding:
- How return values work
- Scope and closures
- `this` context
- Parameter handling
- Hoisting behavior

will help you write correct, maintainable code!
