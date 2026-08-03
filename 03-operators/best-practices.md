# Best Practices: Operators

Follow these professional practices for using JavaScript operators effectively.

## Arithmetic Operators

### 1. Use Parentheses for Clarity

**Good:**
```javascript
let result = (2 + 3) * 4;
let complex = (a + b) * (c - d) / (e + f);
```

**Bad:**
```javascript
let result = 2 + 3 * 4;
let complex = a + b * c - d / e + f;
```

**Why:** Parentheses make intent clear and prevent precedence errors.

### 2. Handle Division by Zero

**Good:**
```javascript
function safeDivide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}
```

**Bad:**
```javascript
function divide(a, b) {
  return a / b;  // Returns Infinity
}
```

**Why:** Explicit error handling prevents silent failures.

### 3. Be Explicit with Increment/Decrement

**Good:**
```javascript
counter += 1;  // Clear intent
index -= 1;
```

**Bad:**
```javascript
counter++;  // Can be confusing in expressions
index--;
```

**Why:** Compound assignment is clearer in most cases.

## Comparison Operators

### 4. Always Use Strict Equality

**Good:**
```javascript
if (age === 18) {
  console.log("Exactly 18");
}
```

**Bad:**
```javascript
if (age == 18) {
  console.log("Could be 18 or '18'");
}
```

**Why:** Strict equality prevents type coercion surprises.

### 5. Check for Null/Undefined Explicitly

**Good:**
```javascript
if (value === null || value === undefined) {
  console.log("No value");
}
```

**Bad:**
```javascript
if (value == null) {
  console.log("No value");  // Also catches undefined
}
```

**Why:** Explicit checks make intent clear.

### 6. Use Appropriate Comparison for Ranges

**Good:**
```javascript
if (age >= 18 && age <= 65) {
  console.log("Working age");
}
```

**Bad:**
```javascript
if (age > 17 && age < 66) {
  console.log("Working age");
}
```

**Why:** `>=` and `<=` are more readable for inclusive ranges.

## Logical Operators

### 7. Use Nullish Coalescing for Defaults

**Good:**
```javascript
let count = items.length ?? 0;
let name = userName ?? "Anonymous";
```

**Bad:**
```javascript
let count = items.length || 0;  // Problem if length is 0
let name = userName || "Anonymous";  // Problem if name is ""
```

**Why:** `??` only triggers on null/undefined, not other falsy values.

### 8. Leverage Short-Circuit Evaluation Intentionally

**Good:**
```javascript
let city = user && user.address && user.address.city;
let result = getData() || getDefault();
```

**Bad:**
```javascript
let city;
if (user) {
  if (user.address) {
    city = user.address.city;
  }
}
```

**Why:** Short-circuit evaluation is concise and idiomatic.

### 9. Avoid Double Negation for Clarity

**Good:**
```javascript
let isValid = value !== null && value !== undefined;
```

**Bad:**
```javascript
let isValid = !!value;
```

**Why:** Explicit checks are clearer than double negation.

## Assignment Operators

### 10. Use Compound Assignment for Clarity

**Good:**
```javascript
total += price;
count += 1;
price *= discount;
```

**Bad:**
```javascript
total = total + price;
count = count + 1;
price = price * discount;
```

**Why:** Compound assignment is more concise and readable.

### 11. Destructure for Clean Assignment

**Good:**
```javascript
const { name, age } = user;
const [first, second] = array;
```

**Bad:**
```javascript
const name = user.name;
const age = user.age;
const first = array[0];
const second = array[1];
```

**Why:** Destructuring is more concise and expressive.

## Conditional Operator

### 12. Use Ternary for Simple Conditions

**Good:**
```javascript
let status = age >= 18 ? "adult" : "minor";
let message = error ? "Error occurred" : "Success";
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

**Why:** Ternary is concise for simple if/else.

### 13. Avoid Nested Ternary for Complex Logic

**Good:**
```javascript
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}
```

**Bad:**
```javascript
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
```

**Why:** Complex logic is more readable with if/else.

## Type Coercion

### 14. Convert Types Explicitly

**Good:**
```javascript
let num = Number(str);
let str = String(num);
let bool = Boolean(value);
```

**Bad:**
```javascript
let num = str * 1;
let str = num + "";
let bool = !!value;
```

**Why:** Explicit conversion is clearer and more intentional.

### 15. Handle NaN Explicitly

**Good:**
```javascript
function safeParseInt(str) {
  const num = parseInt(str, 10);
  return isNaN(num) ? 0 : num;
}
```

**Bad:**
```javascript
function parseInt(str) {
  return parseInt(str, 10);  // Might return NaN
}
```

**Why:** Explicit NaN handling prevents silent failures.

## Floating Point

### 16. Handle Floating Point Precision

**Good:**
```javascript
let result = (0.1 + 0.2).toFixed(2);
let sum = Math.round((0.1 + 0.2) * 100) / 100;
```

**Bad:**
```javascript
let result = 0.1 + 0.2;  // 0.30000000000000004
```

**Why:** Floating point arithmetic has precision issues.

### 17. Use Epsilon for Comparison

**Good:**
```javascript
function approxEqual(a, b, epsilon = 0.0001) {
  return Math.abs(a - b) < epsilon;
}
```

**Bad:**
```javascript
if (a === b) {  // Might fail for floating point
  // ...
}
```

**Why:** Direct equality often fails for floating point numbers.

## Bitwise Operators

### 18. Use Bitwise Operators Sparingly

**Good:**
```javascript
// Only use when specifically needed
let isEven = (num & 1) === 0;
```

**Bad:**
```javascript
// Don't use for normal arithmetic
let result = a & b;  // Confusing for most developers
```

**Why:** Bitwise operators are specialized and less readable.

## Error Handling

### 19. Validate Before Operations

**Good:**
```javascript
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError("Both arguments must be numbers");
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

**Why:** Input validation prevents unexpected behavior.

### 20. Handle Edge Cases

**Good:**
```javascript
function calculatePercentage(part, total) {
  if (total === 0) {
    throw new Error("Total cannot be zero");
  }
  return (part / total) * 100;
}
```

**Bad:**
```javascript
function calculatePercentage(part, total) {
  return (part / total) * 100;  // Returns Infinity if total is 0
}
```

**Why:** Edge case handling makes code more robust.

## Performance

### 21. Avoid Unnecessary Calculations

**Good:**
```javascript
const len = array.length;
for (let i = 0; i < len; i++) {
  // ...
}
```

**Bad:**
```javascript
for (let i = 0; i < array.length; i++) {
  // length calculated every iteration
}
```

**Why:** Caching repeated calculations improves performance.

### 22. Use Appropriate Operators for the Task

**Good:**
```javascript
let isEven = num % 2 === 0;
let isPowerOfTwo = (num & (num - 1)) === 0;
```

**Bad:**
```javascript
let isEven = Math.floor(num / 2) * 2 === num;
let isPowerOfTwo = Math.log2(num) % 1 === 0;
```

**Why:** Using the right operator is more efficient and readable.

## Readability

### 23. Break Complex Expressions

**Good:**
```javascript
let subtotal = price * quantity;
let discount = subtotal * discountRate;
let tax = (subtotal - discount) * taxRate;
let total = subtotal - discount + tax;
```

**Bad:**
```javascript
let total = price * quantity - price * quantity * discountRate + (price * quantity - price * quantity * discountRate) * taxRate;
```

**Why:** Breaking down complex expressions improves readability.

### 24. Use Meaningful Variable Names

**Good:**
```javascript
let area = length * width;
let perimeter = 2 * (length + width);
```

**Bad:**
```javascript
let x = a * b;
let y = 2 * (a + b);
```

**Why:** Meaningful names make code self-documenting.

## Modern JavaScript

### 25. Use Optional Chaining

**Good:**
```javascript
let city = user?.address?.city;
```

**Bad:**
```javascript
let city = user && user.address && user.address.city;
```

**Why:** Optional chaining is cleaner and safer.

### 26. Use Nullish Coalescing

**Good:**
```javascript
let count = items?.length ?? 0;
```

**Bad:**
```javascript
let count = items && items.length || 0;
```

**Why:** Nullish coalescing handles null/undefined specifically.

## Testing

### 27. Test Operator Behavior

**Good:**
```javascript
describe('Arithmetic', () => {
  it('handles division by zero', () => {
    expect(() => safeDivide(10, 0)).toThrow();
  });

  it('handles floating point precision', () => {
    expect(addFloats(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
```

**Bad:**
```javascript
// No testing of edge cases
```

**Why:** Testing ensures operators behave as expected.

## Summary

Following these best practices will help you:
- Write clearer, more readable code
- Avoid common operator-related bugs
- Handle edge cases appropriately
- Write more efficient code
- Use modern JavaScript features effectively

**Key Principles:**
1. Use strict equality
2. Be explicit with type conversions
3. Handle edge cases
4. Use parentheses for clarity
5. Leverage modern operators
6. Test operator behavior
7. Prioritize readability over cleverness

Consistency is key—pick a style and stick with it across your projects!
