# Theory: Operators

## What are Operators?

Operators are symbols that tell JavaScript to perform specific actions on values (operands). Operators are the building blocks of expressions, which produce a value.

### Why Operators Exist

Operators allow us to:
- Perform mathematical calculations
- Compare values
- Make logical decisions
- Assign and update values
- Manipulate data at the bit level
- Write concise, expressive code

## Arithmetic Operators

Arithmetic operators perform mathematical calculations on numbers.

### Basic Arithmetic

```javascript
let a = 10, b = 3;

a + b;    // 13 (Addition)
a - b;    // 7  (Subtraction)
a * b;    // 30 (Multiplication)
a / b;    // 3.333... (Division)
a % b;    // 1  (Modulus/Remainder)
a ** b;   // 1000 (Exponentiation)
```

### Increment and Decrement

```javascript
let x = 5;

x++;      // 5 (returns 5, then increments to 6)
++x;      // 7 (increments to 7, then returns 7)
x--;      // 7 (returns 7, then decrements to 6)
--x;      // 5 (decrements to 5, then returns 5)
```

**Postfix (x++)**: Returns original value, then increments
**Prefix (++x)**: Increments first, then returns new value

### Unary Plus and Minus

```javascript
let x = "5";
+x;       // 5 (converts string to number)
-x;       // -5 (converts to number and negates)
```

## Comparison Operators

Comparison operators compare two values and return a boolean.

### Strict Equality (Recommended)

```javascript
5 === 5;        // true
5 === "5";      // false (different types)
null === null;  // true
undefined === undefined;  // true
null === undefined;      // false
```

### Loose Equality (Avoid)

```javascript
5 == "5";       // true (type coercion)
null == undefined;  // true (type coercion)
0 == false;      // true (type coercion)
"" == false;     // true (type coercion)
```

### Inequality

```javascript
5 !== 5;        // false
5 !== "5";      // true (different types)
5 != "5";       // false (type coercion)
```

### Relational Operators

```javascript
5 > 3;          // true
5 < 3;          // false
5 >= 5;         // true
5 <= 5;         // true
```

**Type coercion in comparisons**:
```javascript
"5" > 3;        // true (string converted to number)
"5" < 3;        // false
"a" > "b";      // false (lexicographical comparison)
```

## Logical Operators

Logical operators combine or invert boolean values.

### Logical AND (&&)

```javascript
true && true;   // true
true && false;  // false
false && true;  // false
false && false; // false
```

**Short-circuit evaluation**: Returns the first falsy value or last truthy value
```javascript
true && "hello";      // "hello"
false && "hello";     // false
0 && "hello";         // 0
"hello" && "world";   // "world"
```

### Logical OR (||)

```javascript
true || true;   // true
true || false;  // true
false || true;  // true
false || false; // false
```

**Short-circuit evaluation**: Returns the first truthy value or last falsy value
```javascript
true || "hello";      // true
false || "hello";     // "hello"
0 || "hello";         // "hello"
"" || 0;              // 0
```

### Logical NOT (!)

```javascript
!true;          // false
!false;         // true
!0;             // true
!"hello";       // false
```

**Double negation for boolean conversion**:
```javascript
!!"hello";      // true
!!0;            // false
```

### Nullish Coalescing Operator (??)

Returns the right operand only if the left is null or undefined:
```javascript
null ?? "default";      // "default"
undefined ?? "default"; // "default"
0 ?? "default";         // 0
"" ?? "default";        // ""
false ?? "default";     // false
```

## Assignment Operators

Assignment operators assign values to variables.

### Simple Assignment

```javascript
let x = 10;
```

### Compound Assignment

```javascript
let x = 10;

x += 5;    // x = x + 5;  (15)
x -= 5;    // x = x - 5;  (5)
x *= 2;    // x = x * 2;  (20)
x /= 2;    // x = x / 2;  (5)
x %= 3;    // x = x % 3;  (2)
x **= 2;   // x = x ** 2; (100)
```

### Destructuring Assignment

```javascript
// Array destructuring
let [a, b] = [1, 2];

// Object destructuring
let { name, age } = { name: "John", age: 25 };
```

## Bitwise Operators

Bitwise operators work on 32-bit integer representations of numbers.

### Basic Bitwise Operators

```javascript
let a = 5;  // 0101 in binary
let b = 3;  // 0011 in binary

a & b;     // 1  (0101 & 0011 = 0001) - AND
a | b;     // 7  (0101 | 0011 = 0111) - OR
a ^ b;     // 6  (0101 ^ 0011 = 0110) - XOR
~a;        // -6 (0101 -> 1010) - NOT
```

### Bitwise Shift Operators

```javascript
let a = 5;  // 0101

a << 1;     // 10  (0101 << 1 = 1010) - Left shift
a >> 1;     // 2   (0101 >> 1 = 0010) - Right shift
a >>> 1;    // 2   (0101 >>> 1 = 0010) - Unsigned right shift
```

**Note**: Bitwise operators are rarely used in typical JavaScript development but are important for certain algorithms and low-level operations.

## Conditional (Ternary) Operator

The ternary operator is a concise way to write simple if/else statements.

```javascript
condition ? valueIfTrue : valueIfFalse;

let age = 18;
let status = age >= 18 ? "adult" : "minor";
```

**Nested ternary (use sparingly for readability)**:
```javascript
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
```

## Operator Precedence

Operator precedence determines the order in which operators are evaluated.

### Precedence Examples

```javascript
// Multiplication before addition
2 + 3 * 4;    // 14 (not 20)

// Parentheses override precedence
(2 + 3) * 4;  // 20

// Comparison before logical
5 > 3 && 2 < 4;  // true (5 > 3) && (2 < 4)
```

### Precedence Table (Highest to Lowest)

1. Grouping: `( )`
2. Member access: `.`, `[]`
3. Function call: `()`
4. Increment/Decrement: `++`, `--`
5. Unary: `+`, `-`, `!`, `~`, `typeof`
6. Multiplication/Division: `*`, `/`, `%`
7. Addition/Subtraction: `+`, `-`
8. Relational: `<`, `>`, `<=`, `>=`
9. Equality: `==`, `===`, `!=`, `!==`
10. Logical AND: `&&`
11. Logical OR: `||`
12. Conditional: `? :`
13. Assignment: `=`, `+=`, `-=`, etc.

**Always use parentheses when in doubt!**

## Type Coercion in Operations

### String Coercion

```javascript
// + operator with strings
"5" + 5;       // "55" (number converted to string)
"hello" + 5;   // "hello5"
```

### Numeric Coercion

```javascript
// - operator converts to numbers
"5" - 2;       // 3 (string converted to number)
"5" * 2;       // 10
"5" / 2;       // 2.5
```

### Boolean Coercion

```javascript
// Logical operators use boolean coercion
if ("hello") {  // "hello" coerced to true
  console.log("true");
}

if (0) {  // 0 coerced to false
  console.log("true");
}
```

## Common Operator Patterns

### Default Values with OR

```javascript
let name = userName || "Guest";
let count = items.length || 0;
```

### Optional Chaining (Modern)

```javascript
user?.address?.city;  // Safe property access
```

### Nullish Coalescing

```javascript
let count = count ?? 0;  // Only for null/undefined
```

## Best Practices

1. **Use strict equality (`===`)** - avoid type coercion surprises
2. **Use parentheses** - make precedence clear
3. **Avoid nested ternary** - use if/else for complex logic
4. **Use compound assignment** - for cleaner code
5. **Understand short-circuit evaluation** - leverage it intentionally
6. **Avoid loose equality (`==`)** - except when intentional
7. **Use nullish coalescing** - for null/undefined checks
8. **Keep expressions simple** - break down complex ones

## Real-World Usage

Operators are used everywhere in JavaScript:
- Calculations in games and simulations
- Validation in forms
- Conditional logic in applications
- Data processing and transformation
- Mathematical algorithms
- State management in applications

Understanding operators deeply is essential for writing correct, efficient, and maintainable JavaScript code.
