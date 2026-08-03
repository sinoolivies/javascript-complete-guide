# Cheat Sheet: Variables and Data Types

Quick reference for JavaScript variables and data types.

## Variable Declaration

### `const` (Use by Default)
```javascript
const PI = 3.14159;
const API_URL = "https://api.example.com";
const user = { name: "John" };
// Cannot reassign, but object properties can change
```

### `let` (When Reassignment Needed)
```javascript
let counter = 0;
counter++;
let result;
if (condition) {
  result = calculate();
}
```

### `var` (Avoid in Modern Code)
```javascript
var oldWay = "Don't use this";
// Function-scoped, can be redeclared, confusing hoisting
```

## Naming Conventions

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

## Primitive Types

### String
```javascript
let str = "Hello";
let template = `Hello ${name}`;
```

### Number
```javascript
let integer = 42;
let floating = 3.14;
let scientific = 1.5e10;
let infinity = Infinity;
let nan = NaN;
```

### Boolean
```javascript
let isTrue = true;
let isFalse = false;
```

### Undefined
```javascript
let undefinedVar;
// Variable declared but not assigned
```

### Null
```javascript
let nullVar = null;
// Intentionally empty value
```

### Symbol
```javascript
let sym = Symbol('description');
// Unique identifier
```

### BigInt
```javascript
let big = 9007199254740991n;
// Very large integers
```

## Reference Types

### Object
```javascript
let obj = {
  key: "value",
  method() {
    return "result";
  }
};
```

### Array
```javascript
let arr = [1, 2, 3];
let mixed = [1, "hello", true];
```

### Function
```javascript
function name() {}
const arrow = () => {};
const expression = function() {};
```

### Special Objects
```javascript
let date = new Date();
let regex = /pattern/;
let map = new Map();
let set = new Set();
```

## Type Checking

### `typeof` Operator
```javascript
typeof "hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (known quirk)
typeof {}           // "object"
typeof []           // "object"
typeof function(){} // "function"
typeof Symbol()     // "symbol"
typeof 42n          // "bigint"
```

### Specific Type Checks
```javascript
// Check for null
value === null

// Check for array
Array.isArray(value)

// Check for object (excluding null and arrays)
typeof value === 'object' && value !== null && !Array.isArray(value)

// Check for function
typeof value === 'function'
```

## Type Conversion

### To String
```javascript
String(42);          // "42"
String(true);        // "true"
String(null);        // "null"
(42).toString();     // "42"
```

### To Number
```javascript
Number("42");        // 42
Number("hello");     // NaN
Number(true);        // 1
Number(false);       // 0
Number(null);        // 0
Number(undefined);   // NaN

parseInt("42");      // 42
parseInt("42px");    // 42
parseFloat("3.14");  // 3.14
```

### To Boolean
```javascript
Boolean("");         // false
Boolean("hello");    // true
Boolean(0);          // false
Boolean(1);          // true
Boolean(null);       // false
Boolean(undefined);  // false
Boolean({});         // true
Boolean([]);         // true
```

## Falsy and Truthy Values

### Falsy (coerce to false)
```javascript
false, 0, -0, "", null, undefined, NaN
```

### Truthy (coerce to true)
```javascript
true, 1, "hello", {}, [], function(){}
```

## Scope

### Global Scope
```javascript
let globalVar = "global";
function test() {
  console.log(globalVar);  // Accessible
}
```

### Function Scope
```javascript
function test() {
  let functionVar = "local";
  console.log(functionVar);  // Accessible
}
// console.log(functionVar);  // Error
```

### Block Scope (let/const)
```javascript
if (true) {
  let blockVar = "block";
  console.log(blockVar);  // Accessible
}
// console.log(blockVar);  // Error
```

## Hoisting

### `var` Hoisting
```javascript
console.log(hoistedVar);  // undefined
var hoistedVar = "value";
```

### `let`/`const` Temporal Dead Zone
```javascript
// console.log(hoistedLet);  // ReferenceError
let hoistedLet = "value";
```

### Function Declaration Hoisting
```javascript
hoistedFunction();  // Works
function hoistedFunction() {}
```

### Function Expression (Not Hoisted)
```javascript
// notHoisted();  // TypeError
const notHoisted = function() {};
```

## Primitive vs Reference

### Primitives (Stored by Value)
```javascript
let a = 10;
let b = a;
b = 20;
console.log(a);  // 10 (unchanged)
```

### References (Stored by Reference)
```javascript
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Jane";
console.log(obj1.name);  // "Jane" (changed)
```

## Cloning

### Shallow Clone
```javascript
// Array
let clone = [...original];

// Object
let clone = { ...original };
```

### Deep Clone
```javascript
// Simple method
let clone = JSON.parse(JSON.stringify(original));

// For complex objects, use a deep clone function
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (Array.isArray(obj)) return obj.map(deepClone);
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
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

## Spread and Rest

### Spread Operator
```javascript
// Arrays
let combined = [...arr1, ...arr2];

// Objects
let merged = { ...obj1, ...obj2 };
```

### Rest Parameters
```javascript
function sumAll(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}
```

## Comparison

### Strict Equality (Recommended)
```javascript
5 === 5;        // true
5 === "5";      // false
null === null;  // true
undefined === undefined;  // true
null === undefined;      // false
```

### Loose Equality (Avoid)
```javascript
5 == "5";       // true
null == undefined;  // true
```

## Common Patterns

### Default Values
```javascript
const name = userName || "Guest";
const count = items.length || 0;
```

### Type Checking Function
```javascript
function getType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}
```

### Safe Number Conversion
```javascript
function safeToNumber(str) {
  const num = Number(str);
  return isNaN(num) ? null : num;
}
```

### Immutable Update
```javascript
const user = { name: "John", age: 25 };
const updated = { ...user, age: 26 };
```

## Quick Reference Table

| Concept | Syntax | Notes |
|---------|--------|-------|
| Constant | `const x = 5;` | Cannot reassign |
| Variable | `let x = 5;` | Can reassign |
| Old variable | `var x = 5;` | Avoid using |
| String | `"hello"` | Text data |
| Number | `42` | Numeric data |
| Boolean | `true` | Logical value |
| Null | `null` | Intentionally empty |
| Undefined | `undefined` | Not assigned |
| Object | `{ key: value }` | Key-value pairs |
| Array | `[1, 2, 3]` | Ordered list |
| Type check | `typeof x` | Returns type string |
| Strict equality | `===` | No type coercion |
| Loose equality | `==` | With type coercion |
| Template literal | `` `Hello ${name}` `` | String interpolation |
| Destructuring | `const { a } = obj` | Extract values |
| Spread | `...arr` | Expand array/object |
| Rest | `...args` | Collect arguments |

## Best Practices Quick Checklist

- [ ] Use `const` by default
- [ ] Use `let` only when reassigning
- [ ] Never use `var` in new code
- [ ] Use meaningful variable names
- [ ] Use strict equality (`===`)
- [ ] Check types before operations
- [ ] Handle null/undefined explicitly
- [ ] Create copies when modifying objects/arrays
- [ ] Use appropriate data types
- [ ] Document complex types

---

**Tip**: Bookmark this page for quick reference while learning!
