# Theory: Functions

Functions are reusable blocks of code that perform specific tasks. They are fundamental to JavaScript programming and essential for writing clean, maintainable, and modular code.

## What are Functions?

Functions are self-contained blocks of code that perform a specific task. They allow you to:
- Reuse code instead of repeating it
- Organize code into logical units
- Abstract complex operations
- Create modular, maintainable applications

## Function Declarations

### Basic Declaration

```javascript
function functionName(parameters) {
  // Code to execute
  return result;
}
```

### Example

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));  // "Hello, Alice!"
```

**Characteristics:**
- Hoisted to the top of their scope
- Can be called before declaration
- Has a name property
- Used for main functions in scripts

## Function Expressions

### Basic Expression

```javascript
const functionName = function(parameters) {
  // Code to execute
  return result;
};
```

### Example

```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};
console.log(greet("Bob"));  // "Hello, Bob!"
```

**Characteristics:**
- Not hoisted
- Can be anonymous or named
- Assigned to variables
- Used for callbacks and higher-order functions

## Arrow Functions

### Basic Arrow Function

```javascript
const functionName = (parameters) => {
  // Code to execute
  return result;
};
```

### Concise Syntax

```javascript
// Single parameter
const greet = name => `Hello, ${name}!`;

// Multiple parameters
const add = (a, b) => a + b;

// Single expression (implicit return)
const square = x => x * x;

// Multiple statements (need braces and explicit return)
const calculate = (a, b) => {
  const sum = a + b;
  return sum * 2;
};
```

**Characteristics:**
- Not hoisted
- Always anonymous
- Lexical `this` binding
- Concise syntax
- Cannot be used as constructors

## Parameters and Arguments

### Parameters

Parameters are the names listed in the function definition.

```javascript
function greet(name, age) {
  // name and age are parameters
}
```

### Arguments

Arguments are the actual values passed to the function.

```javascript
greet("Alice", 25);  // "Alice" and 25 are arguments
```

### Default Parameters

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
greet();  // "Hello, Guest!"
greet("Bob");  // "Hello, Bob!"
```

### Rest Parameters

Collect multiple arguments into an array.

```javascript
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sumAll(1, 2, 3, 4);  // 10
```

## Return Values

### Returning Values

```javascript
function add(a, b) {
  return a + b;
}
```

### No Return (undefined)

```javascript
function log(message) {
  console.log(message);
  // Implicitly returns undefined
}
```

### Early Returns

```javascript
function process(data) {
  if (!data) return null;
  if (!data.isValid) return null;
  return processData(data);
}
```

## Scope and Closures

### Function Scope

Variables declared inside a function are not accessible outside.

```javascript
function example() {
  const local = "local";
  console.log(local);  // Accessible
}
console.log(local);  // Error: not accessible
```

### Lexical Scope

Inner functions have access to outer function variables.

```javascript
function outer() {
  const outerVar = "outer";
  function inner() {
    console.log(outerVar);  // Accessible
  }
  inner();
}
```

### Closures

A closure is a function that remembers the variables from its outer scope even after the outer function has returned.

```javascript
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3
```

## The `this` Keyword

`this` refers to the object executing the current function.

### In Regular Functions

```javascript
const obj = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, ${this.name}`);
  }
};
obj.greet();  // "Hello, Alice"
```

### In Arrow Functions

Arrow functions don't have their own `this`; they inherit it from the surrounding scope.

```javascript
const obj = {
  name: "Alice",
  greet: () => {
    console.log(`Hello, ${this.name}`);  // this.name is undefined
  }
};
```

## Higher-Order Functions

Functions that take functions as arguments or return functions.

### Functions as Arguments

```javascript
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);  // 0, 1, 2
```

### Functions as Return Values

```javascript
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5));  // 10
```

## Callback Functions

Functions passed as arguments to other functions.

```javascript
function fetchData(callback) {
  // Simulate async operation
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData(function(data) {
  console.log(data);
});
```

## Immediately Invoked Function Expressions (IIFE)

Functions that execute immediately after definition.

```javascript
(function() {
  console.log("IIFE executed");
})();

// With parameters
(function(name) {
  console.log(`Hello, ${name}`);
})("Alice");
```

## Best Practices

1. **Use descriptive function names**
2. **Keep functions small and focused**
3. **Use default parameters for flexibility**
4. **Use arrow functions for callbacks**
5. **Use regular functions for methods**
6. **Avoid too many parameters**
7. **Return early for guard clauses**
8. **Document complex functions**

Functions are essential for writing clean, modular JavaScript code. Mastering functions is crucial for advanced JavaScript programming.
