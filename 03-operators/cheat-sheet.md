# Cheat Sheet: Operators

Quick reference for JavaScript operators.

## Arithmetic Operators

```javascript
a + b     // Addition
a - b     // Subtraction
a * b     // Multiplication
a / b     // Division
a % b     // Modulus (remainder)
a ** b    // Exponentiation
```

### Increment/Decrement

```javascript
x++       // Postfix: returns x, then increments
++x       // Prefix: increments, then returns x
x--       // Postfix: returns x, then decrements
--x       // Prefix: decrements, then returns x
```

### Unary Operators

```javascript
+a        // Unary plus (converts to number)
-a        // Unary minus (converts and negates)
```

## Comparison Operators

### Strict Equality (Recommended)

```javascript
a === b   // Strict equality
a !== b   // Strict inequality
```

### Loose Equality (Avoid)

```javascript
a == b    // Loose equality (with coercion)
a != b    // Loose inequality (with coercion)
```

### Relational

```javascript
a > b     // Greater than
a < b     // Less than
a >= b    // Greater than or equal
a <= b    // Less than or equal
```

## Logical Operators

```javascript
a && b    // Logical AND
a || b    // Logical OR
!a        // Logical NOT
a ?? b    // Nullish coalescing (null/undefined only)
```

### Short-Circuit Behavior

```javascript
true && "hello"    // "hello" (returns last truthy)
false && "hello"   // false (returns first falsy)
true || "hello"    // true (returns first truthy)
false || "hello"   // "hello" (returns last falsy)
null ?? "default"  // "default"
0 ?? "default"     // 0 (only null/undefined trigger)
```

## Assignment Operators

```javascript
a = b      // Simple assignment
a += b     // a = a + b
a -= b     // a = a - b
a *= b     // a = a * b
a /= b     // a = a / b
a %= b     // a = a % b
a **= b    // a = a ** b
```

### Destructuring Assignment

```javascript
// Array
let [a, b] = [1, 2];

// Object
let { name, age } = user;
```

## Bitwise Operators

```javascript
a & b     // Bitwise AND
a | b     // Bitwise OR
a ^ b     // Bitwise XOR
~a        // Bitwise NOT
a << b    // Left shift
a >> b    // Right shift
a >>> b   // Unsigned right shift
```

## Conditional (Ternary) Operator

```javascript
condition ? valueIfTrue : valueIfFalse

let status = age >= 18 ? "adult" : "minor";
```

## Operator Precedence (Highest to Lowest)

1. `()` - Grouping
2. `.`, `[]` - Member access
3. `()` - Function call
4. `++`, `--` - Increment/Decrement
5. `!`, `~`, `+`, `-`, `typeof` - Unary
6. `*`, `/`, `%` - Multiplication
7. `+`, `-` - Addition
8. `<`, `>`, `<=`, `>=` - Relational
9. `==`, `===`, `!=`, `!==` - Equality
10. `&&` - Logical AND
11. `||` - Logical OR
12. `? :` - Conditional
13. `=`, `+=`, etc. - Assignment

## Type Coercion Rules

### String Coercion

```javascript
"5" + 5    // "55" (number to string)
"hello" + 5 // "hello5"
```

### Numeric Coercion

```javascript
"5" - 2    // 3 (string to number)
"5" * 2    // 10
"5" / 2    // 2.5
```

### Boolean Coercion

```javascript
if ("hello") {}    // true (truthy)
if (0) {}          // false (falsy)
```

## Falsy Values

```javascript
false, 0, -0, "", null, undefined, NaN
```

## Truthy Values

```javascript
true, 1, "hello", {}, [], function(){}
```

## Common Patterns

### Default Values

```javascript
let name = userName || "Guest";
let count = items.length || 0;
let value = input ?? 0;  // Only for null/undefined
```

### Safe Property Access

```javascript
let city = user && user.address && user.address.city;
let city = user?.address?.city;  // Modern optional chaining
```

### Range Check

```javascript
let inRange = num >= min && num <= max;
```

### Even/Odd Check

```javascript
let isEven = num % 2 === 0;
let isOdd = num % 2 !== 0;
```

### Power of Two Check

```javascript
let isPowerOfTwo = (num & (num - 1)) === 0;
```

## Special Values

```javascript
Infinity     // Result of division by zero
-Infinity    // Negative infinity
NaN          // Not a Number (invalid math)
```

## Quick Reference Table

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `+` | Addition | 5 + 3 | 8 |
| `-` | Subtraction | 5 - 3 | 2 |
| `*` | Multiplication | 5 * 3 | 15 |
| `/` | Division | 6 / 3 | 2 |
| `%` | Modulus | 5 % 3 | 2 |
| `**` | Exponentiation | 2 ** 3 | 8 |
| `===` | Strict equality | 5 === "5" | false |
| `==` | Loose equality | 5 == "5" | true |
| `!==` | Strict inequality | 5 !== "5" | true |
| `!=` | Loose inequality | 5 != "5" | false |
| `>` | Greater than | 5 > 3 | true |
| `<` | Less than | 5 < 3 | false |
| `>=` | Greater or equal | 5 >= 5 | true |
| `<=` | Less or equal | 5 <= 5 | true |
| `&&` | Logical AND | true && false | false |
| `\|\|` | Logical OR | true \|\| false | true |
| `!` | Logical NOT | !true | false |
| `??` | Nullish coalescing | null ?? "x" | "x" |
| `? :` | Ternary | true ? 1 : 2 | 1 |

## Best Practices Quick Checklist

- [ ] Use `===` instead of `==`
- [ ] Use parentheses for clarity
- [ ] Handle division by zero
- [ ] Use `??` for null/undefined defaults
- [ ] Convert types explicitly
- [ ] Handle NaN explicitly
- [ ] Avoid nested ternary
- [ ] Use compound assignment
- [ ] Test edge cases
- [ ] Understand type coercion

---

**Tip**: Bookmark this page for quick reference while learning!
