# Best Practices: Introduction to JavaScript

Follow these professional coding practices to write clean, maintainable, and efficient JavaScript code.

## Code Style and Formatting

### 1. Use Consistent Indentation

**Good:**
```javascript
function calculateTotal(price, quantity) {
  const subtotal = price * quantity;
  const tax = subtotal * 0.1;
  return subtotal + tax;
}
```

**Bad:**
```javascript
function calculateTotal(price, quantity) {
const subtotal = price * quantity;
  const tax = subtotal * 0.1;
return subtotal + tax;
}
```

### 2. Use Meaningful Variable Names

**Good:**
```javascript
const userAge = 25;
const totalPrice = 99.99;
const isAuthenticated = true;
```

**Bad:**
```javascript
const x = 25;
const y = 99.99;
const z = true;
```

### 3. Use Descriptive Function Names

**Good:**
```javascript
function calculateArea(length, width) {
  return length * width;
}

function validateEmail(email) {
  return email.includes('@');
}
```

**Bad:**
```javascript
function calc(l, w) {
  return l * w;
}

function check(e) {
  return e.includes('@');
}
```

### 4. Add Comments for Complex Logic

**Good:**
```javascript
// Calculate compound interest using the formula:
// A = P(1 + r/n)^(nt)
// where P = principal, r = rate, n = times compounded, t = time
function calculateCompoundInterest(principal, rate, timesCompounded, years) {
  return principal * Math.pow((1 + rate / timesCompounded), timesCompounded * years);
}
```

**Bad:**
```javascript
function calc(p, r, n, t) {
  return p * Math.pow((1 + r / n), n * t);
}
```

## Variable Declaration

### 5. Use `const` by Default, `let` When Needed

**Good:**
```javascript
const PI = 3.14159;
const API_URL = "https://api.example.com";
let counter = 0;  // Will change
```

**Bad:**
```javascript
var PI = 3.14159;
var API_URL = "https://api.example.com";
var counter = 0;
```

### 6. Declare Variables at the Top of Their Scope

**Good:**
```javascript
function processUserData(user) {
  const userId = user.id;
  const userName = user.name;
  const userEmail = user.email;

  // Rest of the function
}
```

**Bad:**
```javascript
function processUserData(user) {
  // Some code
  const userId = user.id;
  // More code
  const userName = user.name;
  // Even more code
  const userEmail = user.email;
}
```

## Functions

### 7. Keep Functions Small and Focused

**Good:**
```javascript
function validateEmail(email) {
  return email.includes('@') && email.includes('.');
}

function validatePassword(password) {
  return password.length >= 8;
}

function validateUser(email, password) {
  return validateEmail(email) && validatePassword(password);
}
```

**Bad:**
```javascript
function validateUser(email, password) {
  // Email validation
  if (!email.includes('@')) return false;
  if (!email.includes('.')) return false;

  // Password validation
  if (password.length < 8) return false;

  return true;
}
```

### 8. Use Arrow Functions for Callbacks

**Good:**
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);
```

**Bad:**
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
  return num * 2;
});
```

### 9. Use Default Parameters

**Good:**
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
```

**Bad:**
```javascript
function greet(name) {
  if (!name) {
    name = "Guest";
  }
  console.log(`Hello, ${name}!`);
}
```

## Strings

### 10. Use Template Literals for String Interpolation

**Good:**
```javascript
const name = "John";
const age = 25;
const message = `My name is ${name} and I'm ${age} years old`;
```

**Bad:**
```javascript
const name = "John";
const age = 25;
const message = "My name is " + name + " and I'm " + age + " years old";
```

### 11. Use Template Literals for Multi-line Strings

**Good:**
```javascript
const html = `
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
`;
```

**Bad:**
```javascript
const html = "<div>\n" +
  "  <h1>Title</h1>\n" +
  "  <p>Content</p>\n" +
  "</div>";
```

## Arrays and Objects

### 12. Use Destructuring for Clean Code

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

### 13. Use Array Methods Instead of For Loops

**Good:**
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((total, num) => total + num, 0);
```

**Bad:**
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
```

### 14. Use Spread Operator for Array/Object Operations

**Good:**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
```

**Bad:**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = Object.assign({}, obj1, obj2);
```

## Comparison and Logic

### 15. Always Use Strict Equality (`===`)

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

### 16. Use Short-Circuit Evaluation for Default Values

**Good:**
```javascript
const name = userName || "Guest";
const count = items.length || 0;
```

**Bad:**
```javascript
let name;
if (userName) {
  name = userName;
} else {
  name = "Guest";
}
```

### 17. Use Ternary Operator for Simple Conditions

**Good:**
```javascript
const status = age >= 18 ? "adult" : "minor";
const message = isLoggedIn ? "Welcome" : "Please login";
```

**Bad:**
```javascript
let status;
if (age >= 18) {
  status = "adult";
} else {
  status = "minor";
}
```

## Error Handling

### 18. Handle Errors Gracefully

**Good:**
```javascript
function divide(a, b) {
  if (b === 0) {
    console.error("Cannot divide by zero");
    return null;
  }
  return a / b;
}
```

**Bad:**
```javascript
function divide(a, b) {
  return a / b;  // Will return Infinity if b is 0
}
```

### 19. Validate Input

**Good:**
```javascript
function processUser(user) {
  if (!user || !user.name) {
    console.error("Invalid user data");
    return;
  }
  // Process user
}
```

**Bad:**
```javascript
function processUser(user) {
  console.log(user.name);  // Might crash if user is null
}
```

## Code Organization

### 20. Group Related Code

**Good:**
```javascript
// Constants
const API_URL = "https://api.example.com";
const MAX_RETRIES = 3;

// Helper functions
function formatDate(date) {
  return date.toISOString();
}

function validateEmail(email) {
  return email.includes('@');
}

// Main functions
function fetchUserData(userId) {
  // Implementation
}

function processData(data) {
  // Implementation
}
```

**Bad:**
```javascript
const API_URL = "https://api.example.com";
function formatDate(date) {
  return date.toISOString();
}
function fetchUserData(userId) {
  // Implementation
}
const MAX_RETRIES = 3;
function validateEmail(email) {
  return email.includes('@');
}
function processData(data) {
  // Implementation
}
```

## Performance

### 21. Avoid Unnecessary Computations in Loops

**Good:**
```javascript
const len = array.length;
for (let i = 0; i < len; i++) {
  // Process array[i]
}
```

**Bad:**
```javascript
for (let i = 0; i < array.length; i++) {
  // array.length is calculated every iteration
}
```

### 22. Use Appropriate Data Structures

**Good:**
```javascript
// Use object for key-value lookups
const userMap = {
  "user1": { name: "John" },
  "user2": { name: "Jane" }
};
const user = userMap["user1"];  // O(1) lookup
```

**Bad:**
```javascript
// Using array for lookups
const users = [
  { id: "user1", name: "John" },
  { id: "user2", name: "Jane" }
];
const user = users.find(u => u.id === "user1");  // O(n) lookup
```

## Security

### 23. Never Hardcode Sensitive Data

**Good:**
```javascript
const API_KEY = process.env.API_KEY;
const DB_PASSWORD = process.env.DB_PASSWORD;
```

**Bad:**
```javascript
const API_KEY = "sk-1234567890abcdef";
const DB_PASSWORD = "password123";
```

### 24. Sanitize User Input

**Good:**
```javascript
function sanitizeInput(input) {
  return input.trim().replace(/[<>]/g, '');
}

const userInput = sanitizeInput(userInput);
```

**Bad:**
```javascript
// Direct use of user input without sanitization
document.getElementById('output').innerHTML = userInput;
```

## Testing

### 25. Write Testable Code

**Good:**
```javascript
function calculateTax(amount, rate) {
  return amount * (rate / 100);
}

// Easy to test
console.log(calculateTax(100, 10) === 10);  // true
```

**Bad:**
```javascript
function processAndDisplay() {
  const amount = getAmountFromUI();
  const tax = amount * 0.1;
  displayResult(tax);
}

// Hard to test - depends on UI
```

## Documentation

### 26. Document Your Functions

**Good:**
```javascript
/**
 * Calculates the area of a rectangle
 * @param {number} length - The length of the rectangle
 * @param {number} width - The width of the rectangle
 * @returns {number} The area of the rectangle
 */
function calculateArea(length, width) {
  return length * width;
}
```

**Bad:**
```javascript
function calculateArea(length, width) {
  return length * width;
}
```

## Modern JavaScript

### 27. Use Modern Array Methods

**Good:**
```javascript
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 }
];

const names = users.map(user => user.name);
const adults = users.filter(user => user.age >= 18);
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
```

**Bad:**
```javascript
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 }
];

const names = [];
for (let i = 0; i < users.length; i++) {
  names.push(users[i].name);
}
```

### 28. Use Object Shorthand

**Good:**
```javascript
const name = "John";
const age = 25;
const user = { name, age };
```

**Bad:**
```javascript
const name = "John";
const age = 25;
const user = { name: name, age: age };
```

## General Principles

### 29. Follow DRY (Don't Repeat Yourself)

**Good:**
```javascript
function calculateDiscount(price, discountPercentage) {
  return price * (discountPercentage / 100);
}

const price1 = calculateDiscount(100, 10);
const price2 = calculateDiscount(200, 15);
```

**Bad:**
```javascript
const price1 = 100 * (10 / 100);
const price2 = 200 * (15 / 100);
```

### 30. Keep Code Simple and Readable

**Good:**
```javascript
function isAdult(age) {
  return age >= 18;
}
```

**Bad:**
```javascript
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
```

## Tools and Linting

### 31. Use a Linter

Install and configure ESLint to catch common errors and enforce consistent style:

```bash
npm install --save-dev eslint
```

### 32. Use a Code Formatter

Install Prettier for consistent formatting:

```bash
npm install --save-dev prettier
```

### 33. Use Version Control

Always use Git for version control:

```bash
git init
git add .
git commit -m "Initial commit"
```

## Summary

Following these best practices will help you:
- Write cleaner, more maintainable code
- Avoid common bugs and errors
- Improve code readability for yourself and others
- Write more efficient and performant code
- Build better habits as you grow as a developer

Remember: Consistency is key. Pick a style and stick with it across your projects.
