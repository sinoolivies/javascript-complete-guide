# Common Mistakes: Loops

## 1. Off-by-One Errors

### The Mistake
```javascript
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i <= fruits.length; i++) {
  console.log(fruits[i]);  // Last line prints undefined
}
```

### The Problem
Using `<=` instead of `<` makes the loop run one extra time. When `i` equals `fruits.length`, `fruits[i]` is `undefined` because the last valid index is `length - 1`. Counting down has the mirror-image bug: `i = length; i > 0` or `i >= 0` starting at the wrong value.

### The Fix
Use `< length` when starting at 0, or `< length - 1` when you compare an element with the next one. Double-check the boundary with a tiny example before trusting the loop.

```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

## 2. Infinite Loops from a Forgotten Increment

### The Mistake
```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  // i is never incremented
}
```

### The Problem
The condition `i < 10` never changes because nothing updates `i`. The loop runs forever, freezing the page or hanging the process.

### The Fix
Always update the variable that the condition depends on, and place the increment where it definitely runs each iteration.

```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

## 3. Using for...in on Arrays

### The Mistake
```javascript
const numbers = [10, 20, 30];
for (const index in numbers) {
  console.log(index);  // "0", "1", "2" — keys as strings
}
```

### The Problem
`for...in` is for object keys. On arrays it yields the indices as strings, includes inherited and non-index enumerable properties if any exist, and does not guarantee numeric order. The moment anything adds properties to the array or its prototype, they leak into your loop.

### The Fix
Use `for...of` for values, an index loop for indices, or `entries()` for both.

```javascript
for (const num of numbers) {
  console.log(num);
}
```

## 4. Modifying an Array's Length Inside a Loop

### The Mistake
```javascript
const nums = [1, 2, 3, 4, 5];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    nums.splice(i, 1);  // Elements shift left
  }
}
console.log(nums);  // Unexpected result: 4 gets skipped
```

### The Problem
When you `splice` out an element, everything after it shifts down one index, but the loop still increments `i`. The loop effectively skips the element that slid into the removed slot. The same issue applies to `nums.length = 0` or any length mutation mid-loop.

### The Fix
Iterate backwards, collect the elements to remove and remove them afterward, or use `filter` to build a new array.

```javascript
const evensRemoved = nums.filter(num => num % 2 !== 0);
console.log(evensRemoved);
```

## 5. Using = Instead of === in Loop Conditions

### The Mistake
```javascript
let input = "";
while (input = getInput()) {
  // ... loop body
}
```

### The Problem
A single `=` assigns, it does not compare. `input = getInput()` always evaluates to the assigned value, so the loop runs whenever that value is truthy and stops when it is falsy — which may be exactly the opposite of what you intended. Worse, it silently changes a variable.

### The Fix
Use strict equality `===` for comparisons, or compare against a boolean explicitly.

```javascript
while (getInput() === expectedValue) {
  // ...
}
```

## 6. Misusing continue and break

### The Mistake
```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;  // exits the loop entirely
  }
  console.log(i);
}
```

### The Problem
`break` stops the whole loop, while `continue` skips only the current iteration. Using one when you meant the other produces loops that end too early or that never reach later logic. `continue` inside a `for` loop still runs the increment; forgetting that can confuse your mental model.

### The Fix
Decide whether you want to skip one iteration (`continue`) or stop looping entirely (`break`), and pick the matching statement.

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;  // skips 3, keeps looping
  }
  console.log(i);
}
```

## 7. var vs let Loop Variable Scoping

### The Mistake
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Prints 3, 3, 3
```

### The Problem
`var` is function-scoped, and a `for` loop is not a function. All three callbacks close over the same `i`, which ends at 3 by the time they run. With `let`, each iteration gets its own fresh binding, so closures capture the correct value.

### The Fix
Declare loop variables with `let` (or `const` for `for...of`), never `var`.

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Prints 0, 1, 2
```

## 8. Forgetting to Break in Loop-Based Searches

### The Mistake
```javascript
let found = null;
for (const item of items) {
  if (item.id === targetId) {
    found = item;
  }
}
```

### The Problem
Without `break`, the loop keeps scanning even after finding the match. For large collections this wastes time, and if a later item also matches, `found` silently ends up with the last match instead of the first.

### The Fix
Exit the loop as soon as the search succeeds.

```javascript
let found = null;
for (const item of items) {
  if (item.id === targetId) {
    found = item;
    break;
  }
}
```

## 9. Iterating and Mutating the Same Array

### The Mistake
```javascript
const tasks = ["write", "review", "ship"];
for (const task of tasks) {
  if (task === "review") {
    tasks.push("publish");  // Grows the array mid-iteration
  }
}
```

### The Problem
Adding or removing elements while iterating changes what the loop visits next. The behavior is confusing: `for...of` visits the newly added elements, index loops skip shifted elements, and the result depends on subtle details of the iterator.

### The Fix
Iterate over a copy, or collect changes first and apply them after the loop.

```javascript
for (const task of [...tasks]) {
  if (task === "review") {
    tasks.push("publish");
  }
}
```

## 10. Using == Instead of === for Loop Comparisons

### The Mistake
```javascript
let value = 0;
while (value != false) {
  value++;
}
```

### The Problem
`==` performs type coercion, so `0 == false`, `"" == 0`, and `null == undefined` are all true. Conditions written with `==` behave in ways that surprise readers and break when data types change.

### The Fix
Always use strict `===` (and `!==`) in loop conditions so the comparison is exact.

```javascript
let value = 0;
while (value !== 10) {
  value++;
}
```

## 11. Starting the Index at the Wrong Value

### The Mistake
```javascript
const scores = [85, 92, 78];
let max = scores[1];  // Skips scores[0]
for (let i = 1; i < scores.length; i++) {
  if (scores[i] > max) max = scores[i];
}
```

### The Problem
Initializing a running value or a search from the wrong index silently excludes data. If the real maximum was in the skipped position, you get the wrong answer with no error to warn you.

### The Fix
Start from index 0, or if you deliberately skip index 0 (for example, seeding `max` with the first element), use `scores[0]`, not `scores[1]`.

```javascript
let max = scores[0];
for (let i = 1; i < scores.length; i++) {
  if (scores[i] > max) max = scores[i];
}
```

## 12. A Loop Condition That Can Never Become False

### The Mistake
```javascript
let total = 10;
while (total > 0) {
  total += 1;  // total only grows
}
```

### The Problem
The loop moves the variable in the wrong direction, so it moves away from the value that ends the loop instead of toward it. The condition is checked every iteration and never fails, so the loop is infinite.

### The Fix
Make sure every update moves the variable toward the terminating value, and sanity-check the direction of the comparison.

```javascript
let total = 10;
while (total > 0) {
  total -= 1;
}
```

## 13. Relying on for...in Property Order

### The Mistake
```javascript
const config = { timeout: 3000, retries: 5, debug: true };
let output = "";
for (const key in config) {
  output += key + ",";
}
```

### The Problem
`for...in` does not guarantee a reliable order, especially for non-numeric keys and inherited properties. Code that depends on the order it happens to produce today can break tomorrow, in another engine, or after a refactor.

### The Fix
Iterate `Object.keys(config)` or `Object.entries(config)` when order matters, and use `Object.hasOwn` when you must exclude inherited properties.

```javascript
for (const [key, value] of Object.entries(config)) {
  console.log(`${key}: ${value}`);
}
```

## How to Avoid These Mistakes

1. Use `< length`, not `<=`, when starting at index 0
2. Always update the loop variable inside `while` loops
3. Use `for...of` for array values and `for...in` only for object keys
4. Do not mutate an array while iterating it
5. Use strict `===` and `!==` everywhere
6. Know the difference between `break` and `continue`
7. Declare loop variables with `let`
8. `break` as soon as a search succeeds
9. Iterate copies when the loop must change the collection
10. Move the loop variable toward the end condition
11. Do not rely on `for...in` ordering
