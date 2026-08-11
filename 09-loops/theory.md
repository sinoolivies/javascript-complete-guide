# Theory: Loops

Loops let a program repeat an operation without writing that operation multiple times. They are one of the most powerful ideas in programming: instead of writing one hundred `console.log` statements, you write one loop that runs one hundred times.

## What Loops Are and Why They Exist

Consider this code without a loop:

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

This works, but it is tedious, repetitive, and impossible to scale. What if you needed to print numbers 1 to 1000? Or print the contents of an array you only receive at runtime?

A loop solves both problems:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

This one loop handles any range, and it works with data you did not even have when you wrote the code. Loops exist because of three fundamental needs:

1. **Avoid repetition**: Write logic once, run it many times.
2. **Process collections**: Arrays, objects, strings, and other data structures are collections of many values. Loops are the mechanism for visiting each value.
3. **Handle unknown sizes**: Data read from a file, a form, or a network request has a length you cannot know in advance. Loops adapt to whatever the size turns out to be.

## The for Loop

The `for` loop is the most flexible and common loop in JavaScript. It has three parts, separated by semicolons, plus a body:

```javascript
for (initialization; condition; increment) {
  // body
}
```

### Anatomy

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

- **Initialization** (`let i = 0`): Runs exactly once, before the loop starts. It usually declares a counter variable. Variables declared here with `let` are scoped to the loop.
- **Condition** (`i < 5`): Checked before each iteration. If it is truthy, the body runs. If it is falsy, the loop stops.
- **Increment** (`i++`): Runs after the body, at the end of each iteration. It updates the counter so the loop makes progress.
- **Body** (`{ console.log(i); }`): The statements that run on every iteration.

### How the Engine Evaluates It

The engine does not simply run the loop body N times. It follows a strict sequence:

1. Run the initialization expression once.
2. Evaluate the condition.
   - If truthy, continue to step 3.
   - If falsy, skip the body and move on to whatever comes after the loop.
3. Run the body.
4. Run the increment expression.
5. Go back to step 2.

This means the condition is checked at the **start** of every iteration, and the increment runs at the **end**. A common beginner mistake is to think the increment runs before the body; it does not.

### Iterating Backwards

The loop is not limited to counting up. Counting down is equally natural:

```javascript
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```

The three parts are just expressions; you control the direction and step size. A step of 2 gives you every other number:

```javascript
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
```

## The while Loop

A `while` loop runs as long as a condition is true:

```javascript
while (condition) {
  // body
}
```

```javascript
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
```

The `while` loop has only a condition and a body. There is no built-in initialization or increment, so you manage them yourself. The variable used in the condition must be updated somewhere inside the body, or the loop will never end.

### When to Use while Instead of for

Use `while` when you do not know in advance how many times the loop should run. Common examples:

- Reading input until the user quits.
- Reducing a number until it reaches zero.
- Waiting until a condition that depends on external data becomes true.
- Processing nodes in a linked structure.

```javascript
let number = 100;
while (number > 0) {
  number = Math.floor(number / 2);
}
```

The number of iterations depends on the data, not on a simple counter, so `while` is the honest choice. If you already know the count, a `for` loop communicates that intent better.

The main difference from `for` is structural: `for` keeps the initialization, condition, and increment all on one line, which makes the loop's lifecycle easy to read. `while` is more free-form, which is useful when the loop's progression is not a simple counter.

## The do...while Loop

A `do...while` loop is like a `while` loop, but the condition is checked **after** the body runs:

```javascript
do {
  // body
} while (condition);
```

```javascript
let attempts = 0;
do {
  console.log("Attempt", attempts);
  attempts++;
} while (attempts < 3);
```

### Why It Runs at Least Once

The body always executes at least once because the condition is not evaluated until the first iteration has already completed. This makes `do...while` perfect for scenarios where the loop body must happen before you can meaningfully test the condition.

The classic example is a menu or a guess. You must show the menu (or take a guess) before you can decide whether to repeat:

```javascript
let guess = 0;
const secret = 42;
do {
  guess = getNextGuess();  // hypothetical input function
} while (guess !== secret);
```

You cannot test the guess until the player has made one, so the first guess is taken unconditionally. Note the trailing semicolon after the `while (condition)` — it is required, unlike in a plain `while` loop.

## for...of: Iterating Values

The `for...of` loop iterates over the **values** of any iterable: arrays, strings, sets, maps, NodeLists, generators, and more.

```javascript
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}
```

### Iterating a String

Strings are iterables, so `for...of` visits each character:

```javascript
const word = "hello";
for (const char of word) {
  console.log(char);
}
```

### Iterating a Set

```javascript
const unique = new Set([1, 2, 2, 3]);
for (const value of unique) {
  console.log(value);
}
```

### Iterating a Map

A map yields `[key, value]` pairs, which you can destructure directly:

```javascript
const scores = new Map([
  ["Alice", 90],
  ["Bob", 85]
]);
for (const [name, score] of scores) {
  console.log(`${name}: ${score}`);
}
```

### Iterating a NodeList (browser)

```javascript
const buttons = document.querySelectorAll("button");
for (const button of buttons) {
  button.addEventListener("click", handler);
}
```

### Why for...of Is Preferred Over Index Loops

In modern JavaScript, `for...of` is usually the better choice for iterating a collection:

1. **No off-by-one errors**: You never write `i < arr.length` or `i <= arr.length`; the loop simply visits every value.
2. **You do not need the index**: When the index is irrelevant, an index loop adds noise. `for (const item of items)` states exactly what you care about.
3. **It works on any iterable**: Arrays, strings, sets, maps, and DOM collections all behave the same way. An index loop only works on arrays and array-likes.
4. **No length caching needed**: Because you never reference `.length`, the length-caching concern disappears.

Use an index loop when you genuinely need the index to compute something (for example, positioning items in a grid). Otherwise, prefer `for...of`.

## for...in: Iterating Keys

The `for...in` loop iterates over the **keys** (property names) of an object:

```javascript
const person = { name: "Alice", age: 30, city: "Paris" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

Note that you must use bracket notation (`person[key]`) because `key` is a variable holding the property name. `person.key` would look for a property literally named "key".

### Important Caveats

1. **It iterates inherited properties too**: `for...in` walks the prototype chain. Properties inherited from an object's prototype will appear. Use `Object.hasOwn(person, key)` to skip them:

   ```javascript
   for (const key in person) {
     if (Object.hasOwn(person, key)) {
       console.log(person[key]);
     }
   }
   ```

2. **Do not use it on arrays**: `for...in` gives you the indices as strings, and it can include non-index properties, array method properties added by libraries, and inherited enumerable properties. The order is not guaranteed to be numeric. Use `for...of` or an index loop for arrays.

3. **Key order is not guaranteed**: For integer-like keys, JavaScript engines generally visit them in numeric order, but for symbol and string keys the order follows insertion rules. Do not rely on `for...in` order for anything important.

When you need object keys in modern JavaScript, `Object.keys(obj)` returns an array you can combine with `for...of`, or you can iterate `Object.values(obj)` and `Object.entries(obj)` for values and pairs:

```javascript
for (const value of Object.values(person)) {
  console.log(value);
}

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
```

## break, continue, and Labeled Statements

### break

`break` stops the loop immediately. The condition is ignored; execution jumps to the first statement after the loop.

```javascript
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log("First multiple of 7:", i);
    break;
  }
}
```

### continue

`continue` skips the rest of the current iteration and jumps to the next one. The increment still runs, so the loop progresses normally.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
```

This prints only the odd numbers. The key difference: `break` exits the whole loop, `continue` only skips one iteration.

### Labeled Statements (advanced)

A label gives a name to a loop so you can `break` or `continue` an outer loop from inside a nested one. Plain `break` only exits the innermost loop.

```javascript
outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i * j > 4) {
      break outer;
    }
    console.log(i, j);
  }
}
```

Labels are rarely needed and can make code hard to follow. If you find yourself reaching for them, consider extracting the nested loops into a function and using `return` instead.

## Nested Loops

A loop inside a loop is called a nested loop. The inner loop runs to completion for every iteration of the outer loop.

```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
```

The total number of iterations is the product of the loop sizes: 3 x 3 = 9 here. Nested loops are the natural way to work with two-dimensional data (tables, matrices, grids) and to generate patterns.

### When to Avoid Them

Nested loops are expensive. If each loop runs N times, the total work is N squared (or worse with more nesting). This is called quadratic time complexity. For a small, fixed grid this is fine, but for large collections it can make a program unusably slow.

Before nesting loops, ask: can this be done with a single pass over a hash map or object? For example, checking whether two arrays share an element is O(N*M) with nested loops but O(N) with a `Set`. Reach for the data-structure solution when the collections are large.

## Infinite Loops

An infinite loop is a loop whose condition never becomes false. It will run forever (until the browser freezes or the process is killed).

```javascript
// Dangerous: i is never incremented
let i = 0;
while (i < 10) {
  console.log(i);
  // missing i++;
}
```

### Common Causes

1. **Forgetting to increment**: The loop variable never changes, so the condition stays true.
2. **Wrong condition**: Using `i > 0` when counting up, or `i >= 0` with `i++` (which only grows).
3. **Updating the wrong variable**: Incrementing `j` while the condition checks `i`.
4. **A condition that can never be false**: Something like `while (true)` where no `break` exists, or a condition based on a value that never changes.

### Prevention

- Always make sure the loop variable moves toward the value that makes the condition false.
- Review the condition: does it compare in the correct direction?
- When you intentionally write `while (true)`, make sure there is a `break` inside.
- In tests, add a guard that caps the number of iterations to fail loudly instead of hanging.

## Loop Performance Basics (advanced)

For most code, loop performance is not worth worrying about. Modern engines optimize loops aggressively, and clarity matters far more than squeezing out nanoseconds. Still, a few habits are worth knowing:

1. **Avoid heavy work inside loops**: Anything inside the body runs every iteration. If you can compute a value once before the loop, do it. Do not call functions that do expensive work or query the DOM repeatedly.

   ```javascript
   const length = items.length;  // hoist repeated lookups when relevant
   for (let i = 0; i < length; i++) { ... }
   ```

   In practice, modern engines handle `items.length` on each check just fine, so only bother caching when you have measured a real problem.

2. **Prefer array methods where clearer**: `map`, `filter`, `reduce`, and `forEach` are loops under the hood, implemented and optimized by the engine. They are often as fast as a hand-written loop and far more readable. The choice between them and a manual loop should be about clarity, not speed.

3. **Know the differences from loops**: Array methods always iterate the whole collection; they cannot be stopped mid-way with `break` (except `forEach`-like behavior via exceptions, which is ugly). A `for...of` loop with `break` is the right tool when you need early exit. `reduce` cannot skip elements with `continue`; a loop can.

4. **Watch out for accidental quadratic behavior**: A loop that calls `.splice` or `.shift` on an array repeatedly can be O(N squared) because each removal shifts the remaining elements. Prefer building a new array or iterating backwards.

## Real-World Usage Examples

Loops appear everywhere in real applications:

- **Rendering lists**: Building a list of items in a UI by looping over data and creating one element per item.
- **Validation**: Checking every field in a form; stopping at the first invalid field with `break`.
- **Aggregation**: Summing order totals, averaging grades, counting occurrences.
- **Search**: Finding the first matching record, often exiting early with `break`.
- **Retry logic**: Trying an operation up to N times with a `while` loop.
- **Pagination**: Looping over pages of data fetched from an API.
- **Report generation**: Walking a collection of transactions and accumulating per-category totals.

## How the Engine Handles Loops Internally

When the engine runs a loop, it does the following:

1. The initialization runs once, creating the loop's scoped variables.
2. Each iteration begins by evaluating the condition.
3. If the condition is truthy, the body executes; if falsy, control jumps past the loop.
4. `break` jumps directly out of the loop without re-evaluating the condition.
5. `continue` jumps to the increment (in a `for` loop) or back to the condition check (in a `while`/`do...while` loop), skipping the rest of the body.
6. Loop variables declared with `let` are freshly scoped per iteration, so closures created inside the body capture the correct value for each iteration.

Because the condition is re-evaluated on every iteration, the loop reflects changes to variables it references. If the body modifies a variable used in the condition, the loop sees it immediately — which is both the power of loops and the source of infinite loops.

## Summary

- `for` is the classic loop: initialization, condition, increment.
- `while` runs while a condition is true; use it when you do not know the iteration count.
- `do...while` runs at least once; use it when the body must execute before testing.
- `for...of` iterates values of iterables; prefer it for collections.
- `for...in` iterates object keys; avoid it on arrays and beware inherited properties.
- `break` exits a loop, `continue` skips an iteration.
- Nested loops multiply work; use them for grids but avoid them on large collections.
- Infinite loops come from conditions that never become false; always make progress toward the end.
- Modern engines optimize loops well; choose between loops and array methods based on clarity.

Loops are the bridge between raw data and the logic that transforms it. Master them, and every collection in JavaScript becomes something you can bend to your will.
