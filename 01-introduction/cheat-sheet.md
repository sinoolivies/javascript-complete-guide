# Cheat Sheet: Introduction to JavaScript

Quick reference guide for JavaScript fundamentals.

## Running JavaScript

### Browser Console
```javascript
// Open Developer Tools (F12), go to Console
console.log("Hello, World!");
```

### External File
```html
<script src="script.js"></script>
```

### Node.js
```bash
node script.js
```

## Basic Syntax

### Comments
```javascript
// Single-line comment

/*
  Multi-line comment
*/

/**
 * Documentation comment
 */
```

### Statements
```javascript
let x = 5;        // Declaration
console.log(x);   // Function call
```

## Variables

### Declaration
```javascript
const PI = 3.14159;  // Cannot reassign
let age = 25;         // Can reassign
// var: Avoid using (function scope)
```

### Naming Rules
- Case-sensitive
- Start with letter, $, or _
- Cannot use reserved words
- Use camelCase for variables

```javascript
let userName = "John";
let _private = "value";
let $special = "value";
```

## Data Types

### Primitive Types
```javascript
let string = "Hello";
let number = 42;
let boolean = true;
let undefinedValue = undefined;
let nullValue = null;
let symbol = Symbol('id');
let bigint = 9007199254740991n;
```

### Type Checking
```javascript
typeof "hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (known quirk)
```

## Strings

### Creation
```javascript
let str1 = "Double quotes";
let str2 = 'Single quotes';
let str3 = `Template literals`;
```

### Template Literals
```javascript
let name = "John";
let age = 25;
let message = `My name is ${name} and I'm ${age}`;
```

### Common Methods
```javascript
let text = "Hello World";
text.toUpperCase();      // "HELLO WORLD"
text.toLowerCase();      // "hello world"
text.length;             // 11
text.includes("World");   // true
text.trim();             // Remove whitespace
text.split(" ");         // ["Hello", "World"]
```

## Numbers

### Arithmetic
```javascript
let a = 10, b = 3;
a + b;    // 13 (addition)
a - b;    // 7 (subtraction)
a * b;    // 30 (multiplication)
a / b;    // 3.333... (division)
a % b;    // 1 (remainder)
a ** b;   // 1000 (exponentiation)
```

### Math Methods
```javascript
Math.round(4.7);    // 5
Math.floor(4.7);    // 4
Math.ceil(4.2);     // 5
Math.abs(-5);       // 5
Math.max(1, 2, 3);  // 3
Math.min(1, 2, 3);  // 1
Math.random();      // Random 0-1
```

## Booleans

### Values
```javascript
let isTrue = true;
let isFalse = false;
```

### Falsy Values
```javascript
false, 0, "", null, undefined, NaN
```

### Truthy Values
```javascript
true, 1, "hello", [], {}, function(){}
```

## Arrays

### Creation
```javascript
let arr1 = [1, 2, 3];
let arr2 = new Array(1, 2, 3);
```

### Access
```javascript
let fruits = ["apple", "banana", "orange"];
fruits[0];           // "apple"
fruits[fruits.length - 1];  // "orange"
fruits.length;       // 3
```

### Common Methods
```javascript
let arr = [1, 2, 3];
arr.push(4);         // Add to end
arr.pop();           // Remove from end
arr.unshift(0);       // Add to beginning
arr.shift();         // Remove from beginning
arr.includes(2);     // true
arr.indexOf(2);      // 1
arr.splice(1, 1);    // Remove at index
arr.slice(1, 2);     // Extract portion
```

### Array Methods (Functional)
```javascript
let numbers = [1, 2, 3, 4, 5];

// Transform each element
numbers.map(n => n * 2);           // [2, 4, 6, 8, 10]

// Filter elements
numbers.filter(n => n % 2 === 0);   // [2, 4]

// Reduce to single value
numbers.reduce((sum, n) => sum + n, 0);  // 15

// Find element
numbers.find(n => n > 3);          // 4

// Check condition
numbers.every(n => n > 0);         // true
numbers.some(n => n > 3);          // true
```

## Objects

### Creation
```javascript
let obj = {
  name: "John",
  age: 25,
  greet: function() {
    console.log("Hello");
  }
};
```

### Access
```javascript
obj.name;         // "John"
obj["name"];      // "John"
obj.greet();      // "Hello"
```

### Object Methods
```javascript
Object.keys(obj);      // ["name", "age", "greet"]
Object.values(obj);    // ["John", 25, function]
Object.entries(obj);   // [["name", "John"], ...]
```

### Destructuring
```javascript
let { name, age } = obj;
```

## Operators

### Comparison
```javascript
5 === 5;    // true (strict equality)
5 == "5";   // true (loose equality)
5 !== 5;    // false (strict inequality)
5 != "5";   // false (loose inequality)
5 > 3;      // true
5 < 3;      // false
5 >= 5;     // true
5 <= 5;     // true
```

### Logical
```javascript
true && false;   // false (AND)
true || false;   // true (OR)
!true;           // false (NOT)
```

### Assignment
```javascript
let x = 5;
x += 5;    // x = x + 5
x -= 5;    // x = x - 5
x *= 5;    // x = x * 5
x /= 5;    // x = x / 5
x %= 5;    // x = x % 5
```

## Control Flow

### If/Else
```javascript
if (condition) {
  // code
} else if (anotherCondition) {
  // code
} else {
  // code
}
```

### Ternary Operator
```javascript
let result = condition ? valueIfTrue : valueIfFalse;
```

### Switch
```javascript
switch (value) {
  case 1:
    // code
    break;
  case 2:
    // code
    break;
  default:
    // code
}
```

### Short-Circuit
```javascript
let name = userName || "Guest";
let value = object && object.property;
```

## Functions

### Declaration
```javascript
function greet(name) {
  return `Hello, ${name}`;
}
```

### Expression
```javascript
const greet = function(name) {
  return `Hello, ${name}`;
};
```

### Arrow Function
```javascript
const greet = (name) => `Hello, ${name}`;
const add = (a, b) => a + b;
const multiLine = (a, b) => {
  return a + b;
};
```

### Default Parameters
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
```

### Rest Parameters
```javascript
function sumAll(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}
```

## Loops

### For Loop
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### While Loop
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### For...of (Arrays)
```javascript
let arr = [1, 2, 3];
for (let item of arr) {
  console.log(item);
}
```

### For...in (Objects)
```javascript
let obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log(key, obj[key]);
}
```

### Array.forEach
```javascript
let arr = [1, 2, 3];
arr.forEach((item, index) => {
  console.log(item, index);
});
```

## Spread and Rest

### Spread (Arrays)
```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];  // [1, 2, 3, 4]
```

### Spread (Objects)
```javascript
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let merged = { ...obj1, ...obj2 };  // { a: 1, b: 2 }
```

### Rest (Parameters)
```javascript
function func(a, b, ...rest) {
  console.log(rest);  // Array of remaining arguments
}
```

## Destructuring

### Array Destructuring
```javascript
let arr = [1, 2, 3];
let [first, second, third] = arr;
let [first, , third] = arr;  // Skip second
```

### Object Destructuring
```javascript
let obj = { name: "John", age: 25 };
let { name, age } = obj;
let { name: userName, age: userAge } = obj;  // Rename
```

## Type Conversion

### To String
```javascript
String(42);        // "42"
(42).toString();  // "42"
```

### To Number
```javascript
Number("42");      // 42
parseInt("42");    // 42
parseFloat("3.14"); // 3.14
```

### To Boolean
```javascript
Boolean(1);        // true
Boolean(0);        // false
```

## Useful Console Methods

```javascript
console.log("Message");           // Log message
console.error("Error");          // Error message
console.warn("Warning");         // Warning message
console.table([1, 2, 3]);        // Table format
console.group("Group");          // Group messages
console.groupEnd();              // End group
console.time("timer");           // Start timer
console.timeEnd("timer");        // End timer
```

## Common Patterns

### Check if Variable Exists
```javascript
if (typeof variable !== 'undefined') {
  // Variable exists
}
```

### Check if Array
```javascript
Array.isArray(value);
```

### Check if Object
```javascript
typeof value === 'object' && value !== null;
```

### Deep Clone Object
```javascript
let clone = JSON.parse(JSON.stringify(obj));
```

### Merge Objects
```javascript
let merged = { ...obj1, ...obj2 };
```

## Debugging Tips

1. **Use console.log** to check values
2. **Use debugger** statement to pause execution
3. **Check console** for error messages
4. **Use typeof** to check variable types
5. **Test incrementally** - don't write all code at once

## Quick Reference Card

| Concept | Syntax |
|---------|--------|
| Variable | `let x = 5;` |
| Constant | `const PI = 3.14;` |
| Function | `function name() {}` |
| Arrow Function | `const name = () => {}` |
| If Statement | `if (condition) {}` |
| For Loop | `for (let i = 0; i < 5; i++) {}` |
| Array | `let arr = [1, 2, 3];` |
| Object | `let obj = { key: value };` |
| Template Literal | `` `Hello ${name}` `` |
| Destructuring | `let { name } = obj;` |
| Spread | `let newArr = [...arr];` |
| Map | `arr.map(x => x * 2)` |
| Filter | `arr.filter(x => x > 5)` |
| Reduce | `arr.reduce((a, b) => a + b, 0)` |

---

**Tip**: Bookmark this page for quick reference while learning!
