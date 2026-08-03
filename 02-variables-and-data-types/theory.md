# Theory: Variables and Data Types

## What are Variables?

Variables are containers for storing data values. In JavaScript, you can think of variables as labeled boxes where you can store information and retrieve it later using the label (variable name).

### Why Variables Exist

Variables allow us to:
- Store data for later use
- Give meaningful names to values
- Reuse values throughout our code
- Manipulate data by changing what's stored in variables
- Pass data between different parts of our programs

Without variables, we'd have to hard-code every value, making our programs inflexible and impossible to maintain.

## Variable Declarations in JavaScript

JavaScript has three ways to declare variables: `let`, `const`, and `var`. Understanding the differences is crucial for writing modern, bug-free code.

### `let` - Reassignable Variables

`let` declares a variable that can be reassigned later.

```javascript
let age = 25;
age = 26;  // Valid: can reassign
```

**Characteristics:**
- Block-scoped (only accessible within the block it's declared)
- Can be reassigned but not redeclared in the same scope
- Has the Temporal Dead Zone (TDZ) - cannot be used before declaration
- Preferred when you need to reassign a variable

**When to use `let`:**
- Counter variables in loops
- Values that change over time
- Conditional assignments

### `const` - Constants

`const` declares a variable that cannot be reassigned.

```javascript
const PI = 3.14159;
PI = 3.14;  // Error: cannot reassign
```

**Characteristics:**
- Block-scoped
- Cannot be reassigned
- Must be initialized when declared
- However, for objects and arrays, the contents can still be modified

**Important Note about `const` and Objects:**
```javascript
const person = { name: "John" };
person.name = "Jane";  // Valid: modifying object property
person = {};            // Error: cannot reassign the variable
```

**When to use `const`:**
- By default for all variables
- Configuration values
- Function references
- Values that shouldn't change

### `var` - The Old Way (Avoid Using)

`var` is the old way of declaring variables. It's still supported for backward compatibility but should be avoided in modern code.

**Characteristics:**
- Function-scoped (not block-scoped)
- Can be redeclared in the same scope
- Hoisted to the top of its scope
- No Temporal Dead Zone

**Why avoid `var`:**
```javascript
// Problem 1: Function scope leaks outside blocks
if (true) {
  var x = 5;
}
console.log(x);  // 5 (accessible outside the if block!)

// Problem 2: Can be redeclared
var y = 10;
var y = 20;  // No error, but confusing

// Problem 3: Hoisting causes confusing behavior
console.log(z);  // undefined (not an error!)
var z = 30;
```

**Modern JavaScript Practice:**
- Use `const` by default
- Use `let` when you need to reassign
- Never use `var` in new code

## Variable Naming Rules

### Valid Names
- Can contain letters, digits, underscores, and dollar signs
- Must start with a letter, underscore, or dollar sign
- Cannot start with a digit
- Cannot be a reserved word

```javascript
let userName = "John";        // Valid
let _private = "value";       // Valid
let $special = "value";       // Valid
let user2 = "Jane";           // Valid
// let 2user = "Bob";         // Invalid: starts with digit
// let let = "value";         // Invalid: reserved word
```

### Naming Conventions
- **camelCase**: For variables and functions (`userName`, `calculateTotal`)
- **PascalCase**: For classes and constructors (`User`, `Calculator`)
- **UPPER_CASE**: For constants (`MAX_USERS`, `API_URL`)
- **_leadingUnderscore**: Convention for private properties (not enforced)

```javascript
const MAX_USERS = 100;
let currentUser = "John";
function calculateTotal() {}
class User {}
let _privateVar = "internal";
```

### Best Practices for Naming
- Use descriptive, meaningful names
- Avoid abbreviations unless widely understood
- Be consistent in your naming
- Avoid single-letter names except for loop counters

```javascript
// Good
let userAge = 25;
let totalPrice = 99.99;
let isAuthenticated = true;

// Bad
let x = 25;
let y = 99.99;
let z = true;
```

## JavaScript Data Types

JavaScript has two categories of data types:

1. **Primitive Types**: Immutable, stored by value
2. **Reference Types (Objects)**: Mutable, stored by reference

### Primitive Types

Primitives are the most basic data types. They are immutable (cannot be changed after creation) and are stored by value.

#### 1. String
Text data, enclosed in quotes.

```javascript
let single = 'Single quotes';
let double = "Double quotes";
let template = `Template literals`;
```

#### 2. Number
Numeric data, both integers and floating-point.

```javascript
let integer = 42;
let floating = 3.14;
let negative = -10;
let scientific = 1.5e10;  // 15000000000
```

**Special Number Values:**
- `Infinity`: Larger than any number
- `-Infinity`: Smaller than any number
- `NaN`: Not a Number (result of invalid math operations)

```javascript
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;  // e.g., "hello" * 5
```

#### 3. Boolean
Logical values: true or false.

```javascript
let isTrue = true;
let isFalse = false;
```

#### 4. Undefined
A variable that has been declared but not assigned a value.

```javascript
let undefinedVar;
console.log(undefinedVar);  // undefined
```

**Important:** `undefined` is not the same as `null`.

#### 5. Null
Represents the intentional absence of any object value.

```javascript
let nullVar = null;
console.log(nullVar);  // null
```

**Important:** `null` is not the same as `undefined`.

#### 6. Symbol
A unique and immutable primitive value, often used as object property keys.

```javascript
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2);  // false (each Symbol is unique)
```

#### 7. BigInt
For integers larger than the Number type can safely represent.

```javascript
let bigNumber = 9007199254740991n;  // Note the 'n' suffix
let anotherBig = BigInt(9007199254740991);
```

### Reference Types (Objects)

Objects are collections of data and functionality. They are stored by reference, meaning multiple variables can point to the same object.

#### 1. Object
Key-value pairs for structured data.

```javascript
let person = {
  name: "John",
  age: 25,
  greet: function() {
    console.log("Hello!");
  }
};
```

#### 2. Array
Ordered list of values.

```javascript
let colors = ["red", "green", "blue"];
let mixed = [1, "hello", true, null];
```

#### 3. Function
Reusable blocks of code.

```javascript
function greet(name) {
  return `Hello, ${name}`;
}
```

#### 4. Other Special Objects
- `Date`: For dates and times
- `RegExp`: For regular expressions
- `Map`: For key-value pairs with any keys
- `Set`: For unique values

```javascript
let date = new Date();
let regex = /pattern/;
let map = new Map();
let set = new Set();
```

## Type Checking

### Using `typeof`

The `typeof` operator returns the type of a value.

```javascript
typeof "hello";      // "string"
typeof 42;           // "number"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof null;         // "object" (known JavaScript quirk)
typeof Symbol();     // "symbol"
typeof 42n;          // "bigint"
typeof {};           // "object"
typeof [];           // "object"
typeof function(){}; // "function"
```

**Important Note:** `typeof null` returns `"object"` due to a historical bug in JavaScript that's maintained for backward compatibility.

### Checking for Specific Types

```javascript
// Check for null specifically
value === null

// Check for array
Array.isArray(value)

// Check for object (excluding null and arrays)
typeof value === 'object' && value !== null && !Array.isArray(value)

// Check for function
typeof value === 'function'
```

## Type Conversion

### Explicit Conversion

Converting types intentionally using built-in functions.

#### To String
```javascript
String(42);          // "42"
String(true);        // "true"
String(null);        // "null"
String(undefined);   // "undefined"
(42).toString();     // "42"
```

#### To Number
```javascript
Number("42");        // 42
Number("hello");     // NaN
Number(true);        // 1
Number(false);       // 0
Number(null);        // 0
Number(undefined);   // NaN

parseInt("42");      // 42
parseInt("42px");    // 42 (stops at non-digit)
parseFloat("3.14");  // 3.14
```

#### To Boolean
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

### Implicit Conversion (Type Coercion)

JavaScript automatically converts types in certain contexts.

#### String Coercion
```javascript
let num = 42;
let str = "The number is " + num;  // "The number is 42"
```

#### Numeric Coercion
```javascript
let str = "42";
let result = str * 2;  // 84 (string converted to number)
```

#### Boolean Coercion
```javascript
if ("hello") {  // string coerced to true
  console.log("This runs");
}

if (0) {  // 0 coerced to false
  console.log("This doesn't run");
}
```

### Falsy and Truthy Values

**Falsy values** (coerce to false):
- `false`
- `0` and `-0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

**Truthy values** (everything else):
- `true`
- Non-zero numbers
- Non-empty strings
- Objects (including empty objects `{}`)
- Arrays (including empty arrays `[]`)
- Functions

```javascript
Boolean(false);      // false
Boolean(0);          // false
Boolean("");         // false
Boolean(null);       // false
Boolean(undefined);  // false
Boolean(NaN);        // false

Boolean(true);       // true
Boolean(1);          // true
Boolean("hello");    // true
Boolean({});         // true
Boolean([]);         // true
Boolean(function(){});
```

## Scope

Scope determines the accessibility of variables in different parts of your code.

### Global Scope
Variables declared outside any function are in the global scope.

```javascript
let globalVar = "I'm global";

function test() {
  console.log(globalVar);  // Accessible
}
```

### Function Scope
Variables declared inside a function are only accessible within that function.

```javascript
function test() {
  let functionVar = "I'm local";
  console.log(functionVar);  // Accessible
}
console.log(functionVar);  // Error: not accessible
```

### Block Scope
Variables declared with `let` and `const` inside a block (`{}`) are only accessible within that block.

```javascript
if (true) {
  let blockVar = "I'm block-scoped";
  console.log(blockVar);  // Accessible
}
console.log(blockVar);  // Error: not accessible
```

**Important:** `var` is function-scoped, not block-scoped.

```javascript
if (true) {
  var varScoped = "I'm function-scoped";
}
console.log(varScoped);  // Accessible (this is why var is problematic)
```

### Lexical Scope

JavaScript uses lexical scoping, meaning inner functions have access to variables in their outer functions.

```javascript
function outer() {
  let outerVar = "outer";

  function inner() {
    let innerVar = "inner";
    console.log(outerVar);  // Accessible
    console.log(innerVar);  // Accessible
  }

  inner();
  console.log(innerVar);  // Error: not accessible
}
```

## Hoisting

Hoisting is JavaScript's behavior of moving declarations to the top of their scope.

### `var` Hoisting
```javascript
console.log(hoistedVar);  // undefined (not an error)
var hoistedVar = "I'm hoisted";
```

This is equivalent to:
```javascript
var hoistedVar;  // Declaration moved to top
console.log(hoistedVar);  // undefined
hoistedVar = "I'm hoisted";
```

### `let` and `const` Hoisting (Temporal Dead Zone)
```javascript
console.log(hoistedLet);  // ReferenceError
let hoistedLet = "I'm hoisted";
```

`let` and `const` are hoisted but not initialized. Accessing them before declaration throws an error (Temporal Dead Zone).

### Function Hoisting
Function declarations are hoisted entirely.

```javascript
hoistedFunction();  // Works! Function is hoisted

function hoistedFunction() {
  console.log("I'm hoisted");
}
```

Function expressions are not hoisted.

```javascript
notHoisted();  // TypeError: notHoisted is not a function

const notHoisted = function() {
  console.log("I'm not hoisted");
};
```

## Primitive vs Reference Types

### Stored by Value (Primitives)
Primitives are stored directly in the variable.

```javascript
let a = 10;
let b = a;
b = 20;
console.log(a);  // 10 (unchanged)
console.log(b);  // 20
```

### Stored by Reference (Objects)
Objects are stored as references to memory locations.

```javascript
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Jane";
console.log(obj1.name);  // "Jane" (changed!)
console.log(obj2.name);  // "Jane"
```

This is why modifying an object through one reference affects all references to that object.

## Choosing the Right Data Type

### Use String for:
- Text data
- User input
- Display purposes

### Use Number for:
- Mathematical calculations
- Counting
- Measurements

### Use Boolean for:
- Flags and state
- Conditional logic
- Switches

### Use Null for:
- Intentionally empty object references
- Resetting object variables

### Use Undefined for:
- Uninitialized variables
- Missing object properties
- Function return values without explicit return

### Use Object for:
- Structured data
- Key-value pairs
- Complex data structures

### Use Array for:
- Ordered lists
- Collections of similar items
- Sequences

### Use Symbol for:
- Unique property keys
- Special identifiers
- Avoiding property name collisions

### Use BigInt for:
- Very large integers
- Cryptographic operations
- Precision-critical calculations

## Memory Management Basics

JavaScript automatically manages memory through garbage collection.

### Garbage Collection
JavaScript automatically frees memory when values are no longer reachable.

```javascript
let data = { name: "John" };
data = null;  // Original object is now eligible for garbage collection
```

### Memory Leaks
Common causes of memory leaks:
- Global variables that keep growing
- Event listeners not removed
- Closures that retain large objects
- Forgotten timers

## Real-World Usage

### Configuration
```javascript
const CONFIG = {
  API_URL: "https://api.example.com",
  MAX_RETRIES: 3,
  TIMEOUT: 5000
};
```

### User Data
```javascript
let currentUser = {
  id: 1,
  name: "John",
  email: "john@example.com",
  preferences: {
    theme: "dark",
    notifications: true
  }
};
```

### State Management
```javascript
let state = {
  isLoading: false,
  error: null,
  data: []
};
```

## Summary

Understanding variables and data types is fundamental to JavaScript programming:

1. **Use `const` by default, `let` when needed, never `var`**
2. **Choose appropriate data types for your data**
3. **Understand scope to avoid accidental variable access**
4. **Be aware of type coercion to prevent unexpected behavior**
5. **Understand the difference between primitive and reference types**
6. **Use meaningful variable names for readable code**
7. **Test types explicitly when necessary**

These concepts form the foundation for all JavaScript programming and will help you write cleaner, more maintainable code.
