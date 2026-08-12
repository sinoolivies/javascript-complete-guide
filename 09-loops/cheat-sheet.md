# Cheat Sheet: Loops

## for Loop Anatomy
```javascript
for (init; condition; increment) {
  // body
}
// Example: counts 0..4
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
Initialization runs once; condition is checked before each iteration; increment runs after each body.

## while Loop
```javascript
while (condition) {
  // body
}
// Example: runs while count < 5
let count = 0;
while (count < 5) {
  count++;
}
```
Runs while condition is true. The variable in the condition must be updated inside the body.

## do...while Loop
```javascript
do {
  // body
} while (condition);
// Example: always runs at least once
let n = 0;
do {
  n++;
} while (n < 3);
```
Body runs once before the condition is checked. Note the required trailing semicolon.

## for...of (values of iterables)
```javascript
for (const value of iterable) {
  // body
}
// Arrays
for (const fruit of ["apple", "banana"]) { ... }
// Strings
for (const char of "hello") { ... }
// Set
for (const item of new Set([1, 2, 3])) { ... }
// Map (destructured pairs)
for (const [key, value] of map) { ... }
// Array with index
for (const [index, value] of array.entries()) { ... }
```
Visits each value of any iterable. Use `const` for the loop variable.

## for...in (keys of objects)
```javascript
for (const key in object) {
  // key is a property name (string)
}
// With inheritance filter
for (const key in obj) {
  if (Object.hasOwn(obj, key)) { ... }
}
```
Iterates enumerable keys, including inherited ones. Do not use on arrays. Prefer `Object.keys`, `Object.values`, or `Object.entries`.

## break
```javascript
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    break;  // exit loop immediately
  }
}
```
Stops the loop entirely, ignoring the condition.

## continue
```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;  // skip rest of this iteration
  }
  console.log(i);
}
```
Skips the rest of the current iteration and moves to the next one.

## Labeled Loops (advanced)
```javascript
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i * j > 4) break outer;  // exit outer loop
  }
}
```
Gives a name to a loop so `break`/`continue` can target an outer loop. Rarely needed; prefer extracting a function.

## Array Method Alternatives
```javascript
arr.forEach(x => ...)       // iterate (no break/continue)
arr.map(x => x * 2)         // transform each value, returns new array
arr.filter(x => x > 10)     // keep matching values, returns new array
arr.reduce((acc, x) => acc + x, 0)  // aggregate to one value
arr.find(x => x > 10)       // first matching value
arr.some(x => x > 10)       // does any value match? true/false
arr.every(x => x > 0)       // do all values match? true/false
```
Array methods are loops under the hood. They cannot `break` or `continue`; use `for...of` for early exit.

## Common Loop Patterns

### Reverse
```javascript
const str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
```

### Accumulate (sum)
```javascript
const nums = [1, 2, 3, 4, 5];
let sum = 0;
for (const num of nums) sum += num;
```

### Find (with early exit)
```javascript
let target = null;
for (const item of items) {
  if (item.id === id) {
    target = item;
    break;
  }
}
```

### Count occurrences
```javascript
const counts = {};
for (const item of items) {
  counts[item] = (counts[item] || 0) + 1;
}
```

### Loop over range (modern)
```javascript
const range = Array.from({ length: 10 }, (_, i) => i);  // [0..9]
```

### Build a string/pattern
```javascript
for (let row = 1; row <= 5; row++) {
  console.log("*".repeat(row));  // triangle
}
```

## Quick Reference

| Task | Construct |
|------|-----------|
| Count known number of times | `for` |
| Run while a condition holds | `while` |
| Run at least once, then check | `do...while` |
| Iterate values of a collection | `for...of` |
| Iterate object keys | `for...in` or `Object.keys` |
| Get index + value | `for...of` over `.entries()` |
| Exit a loop early | `break` |
| Skip one iteration | `continue` |
| Transform a collection | `map` |
| Filter a collection | `filter` |
| Aggregate a collection | `reduce` |
