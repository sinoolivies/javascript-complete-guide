# Best Practices: Variables and Data Types

Follow these professional practices for working with variables and data types in JavaScript.

## Variable Declaration

### 1. Use `const` by Default

**Good:**
```javascript
const API_URL = "https://api.example.com";
const MAX_RETRIES = 3;
const config = { debug: true };
```

**Bad:**
```javascript
var API_URL = "https://api.example.com";
let MAX_RETRIES = 3;
```

**Why:** `const` prevents accidental reassignment and makes code intent clear.

### 2. Use `let` Only When Reassignment is Needed

**Good:**
```javascript
let counter = 0;
counter++;  // Reassignment needed

let result;
if (condition) {
  result = calculate();
}
```

**Bad:**
```javascript
let API_URL = "https://api.example.com";  // Never reassigned
let name = "John";  // Never reassigned
```

**Why:** Only use `let` when you genuinely need to reassign the variable.

### 3. Never Use `var` in Modern Code

**Good:**
```javascript
const name = "John";
let age = 25;
```

**Bad:**
```javascript
var name = "John";
var age = 25;
```

**Why:** `var` has function scope, can be redeclared, and has confusing hoisting behavior.

## Variable Naming

### 4. Use Descriptive, Meaningful Names

**Good:**
```javascript
const userAge = 25;
const totalPrice = 99.99;
const isAuthenticated = true;
const maxLength = 100;
```

**Bad:**
```javascript
const x = 25;
const y = 99.99;
const z = true;
const n = 100;
```

**Why:** Meaningful names make code self-documenting and easier to understand.

### 5. Follow Naming Conventions

**Good:**
```javascript
// camelCase for variables and functions
let userName = "John";
function calculateTotal() {}

// PascalCase for classes and constructors
class User {}
function User(name) {}

// UPPER_CASE for constants
const MAX_USERS = 100;
const API_KEY = "secret";

// _prefix for private properties (convention)
let _internalState = "private";
```

**Bad:**
```javascript
let user_name = "John";  // snake_case (not standard in JS)
let UserName = "John";   // PascalCase for variable
const max_users = 100;   // snake_case for constant
```

**Why:** Consistent conventions make code easier to read and maintain.

### 6. Avoid Single-Letter Names (Except Loop Counters)

**Good:**
```javascript
for (let i = 0; i < 10; i++) {
  // 'i' is acceptable for loop counters
}

let index = 0;
let key = "name";
let value = 42;
```

**Bad:**
```javascript
let x = 10;
let y = 20;
let z = x + y;
```

**Why:** Single-letter names (except for loops) don't convey meaning.

## Data Type Selection

### 7. Choose Appropriate Data Types

**Good:**
```javascript
const price = 99.99;        // Number for calculations
const name = "John";        // String for text
const isActive = true;      // Boolean for flags
const user = { name: "John" }; // Object for structured data
const tags = ["js", "web"]; // Array for lists
```

**Bad:**
```javascript
const price = "99.99";      // String for numeric data
const isActive = "true";    // String for boolean
const user = "John,25";     // String for structured data
```

**Why:** Using appropriate types prevents type coercion issues and makes code clearer.

### 8. Use Objects for Structured Data

**Good:**
```javascript
const user = {
  id: 1,
  name: "John",
  email: "john@example.com",
  age: 25
};
```

**Bad:**
```javascript
const userId = 1;
const userName = "John";
const userEmail = "john@example.com";
const userAge = 25;
```

**Why:** Objects group related data and make it easier to pass around.

### 9. Use Arrays for Ordered Collections

**Good:**
```javascript
const colors = ["red", "green", "blue"];
const numbers = [1, 2, 3, 4, 5];
```

**Bad:**
```javascript
const colors = {
  0: "red",
  1: "green",
  2: "blue"
};
```

**Why:** Arrays are designed for ordered lists and have many helpful methods.

## Type Safety

### 10. Use Strict Equality (`===`)

**Good:**
```javascript
if (age === 18) {
  console.log("Exactly 18");
}

if (type === "number") {
  console.log("It's a number");
}
```

**Bad:**
```javascript
if (age == 18) {
  console.log("Could be 18 or '18'");
}

if (type == "number") {
  console.log("Type coercion might happen");
}
```

**Why:** Strict equality prevents type coercion surprises.

### 11. Check Types Before Operations

**Good:**
```javascript
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Both arguments must be numbers");
  }
  return a + b;
}
```

**Bad:**
```javascript
function add(a, b) {
  return a + b;  // Might concatenate strings
}
```

**Why:** Type checking prevents unexpected behavior and makes errors explicit.

### 12. Handle Null and Undefined Explicitly

**Good:**
```javascript
function processUser(user) {
  if (user === null || user === undefined) {
    throw new Error("User is required");
  }
  // Process user
}
```

**Bad:**
```javascript
function processUser(user) {
  console.log(user.name);  // Might crash
}
```

**Why:** Explicit null/undefined handling prevents runtime errors.

## Object and Array Handling

### 13. Create Copies When Modifying is Needed

**Good:**
```javascript
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
// original remains [1, 2, 3]
```

**Bad:**
```javascript
const original = [1, 2, 3];
const copy = original;
copy.push(4);
// original becomes [1, 2, 3, 4]
```

**Why:** Creating copies prevents unintended side effects.

### 14. Use Immutable Patterns When Possible

**Good:**
```javascript
const user = { name: "John", age: 25 };
const updatedUser = { ...user, age: 26 };
// original user remains unchanged
```

**Bad:**
```javascript
const user = { name: "John", age: 25 };
user.age = 26;
// original user is modified
```

**Why:** Immutability makes code easier to reason about and debug.

### 15. Use Destructuring for Clean Code

**Good:**
```javascript
const user = { name: "John", age: 25, city: "Boston" };
const { name, age } = user;

const colors = ["red", "green", "blue"];
const [first, second] = colors;
```

**Bad:**
```javascript
const user = { name: "John", age: 25, city: "Boston" };
const name = user.name;
const age = user.age;

const colors = ["red", "green", "blue"];
const first = colors[0];
const second = colors[1];
```

**Why:** Destructuring is more concise and readable.

## Constants and Configuration

### 16. Group Related Constants

**Good:**
```javascript
const CONFIG = {
  API_URL: "https://api.example.com",
  MAX_RETRIES: 3,
  TIMEOUT: 5000,
  DEBUG: true
};
```

**Bad:**
```javascript
const API_URL = "https://api.example.com";
const MAX_RETRIES = 3;
const TIMEOUT = 5000;
const DEBUG = true;
```

**Why:** Grouping related constants makes them easier to manage and pass around.

### 17. Use Enums for Fixed Sets of Values

**Good:**
```javascript
const STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PENDING: 'pending'
};

const userStatus = STATUS.ACTIVE;
```

**Bad:**
```javascript
const userStatus = "active";  // Magic string
```

**Why:** Enums prevent typos and make code more maintainable.

## Type Conversion

### 18. Convert Types Explicitly

**Good:**
```javascript
const str = "42";
const num = Number(str);
const bool = Boolean(str);
```

**Bad:**
```javascript
const str = "42";
const num = str * 1;  // Implicit conversion
const bool = !!str;   // Implicit conversion
```

**Why:** Explicit conversion is clearer and easier to understand.

### 19. Validate Conversions

**Good:**
```javascript
function safeStringToNumber(str) {
  const num = Number(str);
  if (isNaN(num)) {
    throw new Error("Invalid number");
  }
  return num;
}
```

**Bad:**
```javascript
function stringToNumber(str) {
  return Number(str);  // Might return NaN
}
```

**Why:** Validation prevents silent failures.

## Scope and Hoisting

### 20. Declare Variables at the Top of Their Scope

**Good:**
```javascript
function process() {
  const data = fetchData();
  const result = processData(data);
  return result;
}
```

**Bad:**
```javascript
function process() {
  const data = fetchData();
  // ... lots of code ...
  const result = processData(data);
  // ... more code ...
  return result;
}
```

**Why:** Declaring at the top makes scope clear and prevents hoisting confusion.

### 21. Keep Scopes Small

**Good:**
```javascript
function process() {
  const data = fetchData();
  const result = processData(data);
  return result;
}
```

**Bad:**
```javascript
let data;
let result;
let temp1;
let temp2;
let temp3;

function process() {
  data = fetchData();
  temp1 = helper1(data);
  temp2 = helper2(temp1);
  result = helper3(temp2);
  return result;
}
```

**Why:** Smaller scopes reduce variable pollution and make code easier to understand.

## Documentation

### 22. Document Complex Types

**Good:**
```javascript
/**
 * @typedef {Object} User
 * @property {number} id - User ID
 * @property {string} name - User name
 * @property {string} email - User email
 * @property {boolean} isActive - Whether user is active
 */

/**
 * @param {User} user - The user to process
 * @returns {boolean} Whether processing was successful
 */
function processUser(user) {
  // Implementation
}
```

**Bad:**
```javascript
function processUser(user) {
  // No documentation about user structure
}
```

**Why:** Documentation makes complex types easier to understand and use.

## Performance

### 23. Avoid Unnecessary Type Conversions

**Good:**
```javascript
let count = 0;
count++;  // Stays as number
```

**Bad:**
```javascript
let count = 0;
count = String(count);  // Unnecessary conversion
count = Number(count);  // Unnecessary conversion back
```

**Why:** Unnecessary conversions waste performance and can introduce bugs.

### 24. Use Appropriate Types for Performance

**Good:**
```javascript
const flags = 0b1010;  // Use bits for boolean flags
const count = 1000;    // Use number for counting
```

**Bad:**
```javascript
const flags = [true, false, true, false];  // Array for flags
const count = "1000";                      // String for counting
```

**Why:** Appropriate types are more efficient and use less memory.

## Error Handling

### 25. Validate Input Types

**Good:**
```javascript
function process(data) {
  if (typeof data !== 'object' || data === null) {
    throw new TypeError("Expected object");
  }
  // Process data
}
```

**Bad:**
```javascript
function process(data) {
  // Assumes data is an object
  console.log(data.property);  // Might crash
}
```

**Why:** Input validation prevents runtime errors and makes debugging easier.

## Modern JavaScript

### 26. Use Modern Syntax

**Good:**
```javascript
const name = "John";
const age = 25;
const message = `Name: ${name}, Age: ${age}`;
const { prop1, prop2 } = object;
const arr = [1, 2, 3];
const [first, second] = arr;
```

**Bad:**
```javascript
var name = "John";
var age = 25;
var message = "Name: " + name + ", Age: " + age;
var prop1 = object.prop1;
var prop2 = object.prop2;
var arr = [1, 2, 3];
var first = arr[0];
var second = arr[1];
```

**Why:** Modern syntax is more concise, readable, and less error-prone.

## Testing

### 27. Test Type-Related Edge Cases

**Good:**
```javascript
describe('Type handling', () => {
  it('handles null', () => {
    expect(process(null)).toBe('default');
  });

  it('handles undefined', () => {
    expect(process(undefined)).toBe('default');
  });

  it('handles empty string', () => {
    expect(process('')).toBe('default');
  });

  it('handles zero', () => {
    expect(process(0)).toBe('default');
  });
});
```

**Bad:**
```javascript
describe('Type handling', () => {
  it('works with normal input', () => {
    expect(process('valid')).toBe('result');
  });
  // No edge case testing
});
```

**Why:** Testing edge cases catches type-related bugs early.

## Summary

Following these best practices will help you:
- Write cleaner, more maintainable code
- Avoid common type-related bugs
- Make code easier to understand and debug
- Use modern JavaScript features effectively
- Write more performant code

**Key Principles:**
1. Use `const` by default, `let` when needed
2. Choose appropriate data types
3. Use meaningful names
4. Handle types explicitly
5. Create copies when needed
6. Validate input types
7. Document complex types
8. Test edge cases

Consistency is key—pick a style and stick with it across your projects!
