# Common Mistakes: Operators

Learn from these common errors that beginners make with JavaScript operators.

## 1. Using `==` Instead of `===`

### The Mistake
```javascript
if (age == 18) {
  console.log("You're 18");  // Might be "18" string
}
```

### The Problem
- `==` performs type coercion
- Can lead to unexpected equality checks
- Makes code harder to reason about

### The Fix
```javascript
if (age === 18) {
  console.log("You're exactly 18");
}
```

## 2. Confusing Assignment (=) with Comparison (===)

### The Mistake
```javascript
if (age = 18) {
  console.log("This always runs!");
}
```

### The Problem
- `=` assigns a value, it doesn't compare
- `age = 18` sets age to 18 and returns 18 (truthy)
- The condition is always true

### The Fix
```javascript
if (age === 18) {
  console.log("Age is exactly 18");
}
```

## 3. Not Understanding Operator Precedence

### The Mistake
```javascript
let result = 2 + 3 * 4;  // Expects 20, gets 14
```

### The Problem
- Multiplication happens before addition
- Not using parentheses when unsure
- Leads to incorrect calculations

### The Fix
```javascript
let result = (2 + 3) * 4;  // 20
```

## 4. String Coercion with + Operator

### The Mistake
```javascript
let result = "5" + 5;  // Expects 10, gets "55"
```

### The Problem
- `+` operator converts numbers to strings when one operand is a string
- Different from other arithmetic operators
- Causes unexpected type coercion

### The Fix
```javascript
let result = Number("5") + 5;  // 10
// or
let result = "5" - 0 + 5;      // 10
```

## 5. Division by Zero

### The Mistake
```javascript
let result = 10 / 0;  // Expects error, gets Infinity
```

### The Problem
- JavaScript returns `Infinity` instead of throwing an error
- Can cause silent failures in calculations
- Need explicit checking

### The Fix
```javascript
function safeDivide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}
```

## 6. Confusing Increment/Decrement Position

### The Mistake
```javascript
let x = 5;
let y = x++ + 5;  // Expects y = 11, gets y = 10
```

### The Problem
- Postfix `x++` returns original value, then increments
- Prefix `++x` increments first, then returns new value
- Easy to confuse the two

### The Fix
```javascript
let x = 5;
let y = ++x + 5;  // y = 11
// or be explicit
let x = 5;
x = x + 1;
let y = x + 5;
```

## 7. Misunderstanding Short-Circuit Evaluation

### The Mistake
```javascript
let value = 0 || "default";  // Expects 0, gets "default"
```

### The Problem
- `||` returns the first truthy value
- `0` is falsy, so it returns "default"
- Need to understand falsy values

### The Fix
```javascript
let value = 0 ?? "default";  // 0 (nullish coalescing)
// or
let value = value !== undefined ? value : "default";
```

## 8. Using Bitwise Operators Incorrectly

### The Mistake
```javascript
let result = 5 & 3;  // Expects 8, gets 1
```

### The Problem
- Bitwise operators work on binary representations
- `&` is AND, not addition
- Need to understand binary operations

### The Fix
```javascript
let result = 5 & 3;  // 1 (0101 & 0011 = 0001)
let sum = 5 + 3;      // 8
```

## 9. Modulo with Negative Numbers

### The Mistake
```javascript
let result = -5 % 3;  // Expects 2, gets -2
```

### The Problem
- JavaScript's modulo result sign follows the dividend
- Different from some other languages
- Can cause unexpected negative results

### The Fix
```javascript
function mod(n, m) {
  return ((n % m) + m) % m;
}
let result = mod(-5, 3);  // 1
```

## 10. Not Handling NaN

### The Mistake
```javascript
let result = "hello" * 5;
console.log(result + 10);  // NaN
```

### The Problem
- `NaN` is contagious in operations
- Hard to debug because no error is thrown
- Need explicit checking

### The Fix
```javascript
let result = "hello" * 5;
if (isNaN(result)) {
  console.log("Invalid calculation");
} else {
  console.log(result + 10);
}
```

## 11. Compound Assignment with Wrong Types

### The Mistake
```javascript
let str = "5";
str += 5;  // "55"
str -= 5;  // Error or unexpected result
```

### The Problem
- `+=` works with strings (concatenation)
- Other compound operators may not work as expected
- Type coercion issues

### The Fix
```javascript
let str = "5";
str += 5;    // "55" (string concatenation)
let num = Number(str);
num -= 5;    // 50
```

## 12. Nested Ternary Without Parentheses

### The Mistake
```javascript
let result = condition1 ? value1 : condition2 ? value2 : value3;
```

### The Problem
- Hard to read and understand
- Easy to make precedence errors
- Difficult to debug

### The Fix
```javascript
let result;
if (condition1) {
  result = value1;
} else if (condition2) {
  result = value2;
} else {
  result = value3;
}
```

## 13. Not Using Nullish Coalescing

### The Mistake
```javascript
let count = items.length || 0;  // Problem if length is 0
```

### The Problem
- `||` treats `0` as falsy
- `0` might be a valid value
- Need to distinguish between falsy and null/undefined

### The Fix
```javascript
let count = items.length ?? 0;  // Only null/undefined trigger default
```

## 14. Floating Point Precision

### The Mistake
```javascript
let result = 0.1 + 0.2;  // Expects 0.3, gets 0.30000000000000004
```

### The Problem
- JavaScript uses floating-point arithmetic
- Precision errors are common
- Can cause equality checks to fail

### The Fix
```javascript
let result = (0.1 + 0.2).toFixed(2);  // "0.30"
// or use a small epsilon for comparison
function approxEqual(a, b, epsilon = 0.0001) {
  return Math.abs(a - b) < epsilon;
}
```

## 15. Exponentiation Operator Precedence

### The Mistake
```javascript
let result = -2 ** 2;  // Expects 4, gets error
```

### The Problem
- `**` has higher precedence than unary minus
- Need parentheses for negative bases
- Syntax error in some cases

### The Fix
```javascript
let result = (-2) ** 2;  // 4
```

## 16. Logical NOT with Non-Boolean Values

### The Mistake
```javascript
if (!value) {
  // Treats 0, "", null, undefined, NaN as false
}
```

### The Problem
- `!` converts to boolean then negates
- Many values are falsy
- Might not be the intended behavior

### The Fix
```javascript
if (value === null || value === undefined) {
  // Only checks for null/undefined
}
```

## 17. Assignment in Conditional

### The Mistake
```javascript
if (user = getUser()) {
  // Always assigns and checks truthiness
}
```

### The Problem
- Assignment instead of comparison
- Always evaluates to truth of assigned value
- Easy typo to make

### The Fix
```javascript
if (user === getUser()) {
  // Comparison
}
// or if intentional assignment
if ((user = getUser())) {
  // Explicit grouping shows intent
}
```

## 18. Comma Operator Misuse

### The Mistake
```javascript
let result = (a + b, c + d);  // Only returns c + d
```

### The Problem
- Comma operator evaluates all expressions but returns last
- Easy to misunderstand
- Rarely needed in normal code

### The Fix
```javascript
let result1 = a + b;
let result2 = c + d;
```

## 19. Typeof with Null

### The Mistake
```javascript
if (typeof value === 'object') {
  // Treats null as object
}
```

### The Problem
- `typeof null` returns `"object"` (historical bug)
- Need special handling for null
- Can cause type checking errors

### The Fix
```javascript
if (typeof value === 'object' && value !== null) {
  // Excludes null
}
```

## 20. Not Handling Undefined in Operations

### The Mistake
```javascript
let result = undefined + 5;  // NaN
```

### The Problem
- Operations with undefined often result in NaN
- No error is thrown
- Silent failures

### The Fix
```javascript
function safeAdd(a, b) {
  if (a === undefined || b === undefined) {
    throw new Error("Undefined value");
  }
  return a + b;
}
```

## How to Avoid These Mistakes

1. **Always use strict equality (`===`)**
2. **Use parentheses when unsure of precedence**
3. **Understand type coercion rules**
4. **Check for NaN and Infinity**
5. **Handle null and undefined explicitly**
6. **Use nullish coalescing (`??`) for null/undefined checks**
7. **Avoid nested ternary operators**
8. **Be explicit with increment/decrement**
9. **Test edge cases (0, negative numbers, null, undefined)**
10. **Use meaningful variable names to avoid confusion**

## Debugging Tips

1. **Use parentheses** to make precedence clear
2. **Test with different data types**
3. **Check typeof before operations**
4. **Handle edge cases explicitly**
5. **Use console.log to inspect intermediate values**
6. **Understand short-circuit evaluation**
7. **Be aware of type coercion rules**

## Remember

Operators are powerful but can be tricky. Understanding:
- How each operator works
- Operator precedence
- Type coercion behavior
- Edge cases and special values

will help you write correct, predictable, and maintainable code!
