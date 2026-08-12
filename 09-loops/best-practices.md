# Best Practices: Loops

## 1. Prefer for...of When the Index Is Unused
```javascript
const items = ["a", "b", "c"];
for (const item of items) {
  console.log(item);
}
```
An index loop adds `i`, `i < length`, and `i++` that nobody reads. `for...of` expresses "give me each value" directly.

## 2. Use Array Methods When the Semantics Fit
```javascript
const doubled = items.map(x => x * 2);        // transform
const evens = items.filter(x => x % 2 === 0);  // select
const total = items.reduce((acc, x) => acc + x, 0);  // aggregate
```
`map`, `filter`, and `reduce` describe intent in one word. Prefer them over a manual loop when they map cleanly onto the operation.

## 3. Do Not Mutate a Collection While Iterating It
```javascript
// Avoid: removing items while walking the array
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) arr.splice(i, 1);
}
// Prefer: build a new collection
const cleaned = arr.filter(x => x >= 0);
```
Changing the collection mid-loop shifts indices and produces skipped or repeated elements. Build a new result instead.

## 4. Use const for Loop Variables
```javascript
for (const item of items) {
  // item cannot be reassigned; safe and clear
}
```
In `for...of` (and `for...in`), the loop variable never needs to change, so `const` is the honest choice and prevents accidental reassignment.

## 5. Avoid Nested Loops Where Possible
```javascript
// Avoid: O(n*m) nested search
for (const a of listA) {
  for (const b of listB) {
    if (a.id === b.id) { /* ... */ }
  }
}
// Prefer: one pass with a Set for lookups
const ids = new Set(listB.map(b => b.id));
for (const a of listA) {
  if (ids.has(a.id)) { /* ... */ }
}
```
Each nesting multiplies the work. For membership checks, switch to a `Set` or `Map` to make lookups constant-time.

## 6. Keep Heavy Work Out of the Loop Body
```javascript
const threshold = computeExpensiveThreshold();  // run once
for (const item of items) {
  if (item.value > threshold) { /* ... */ }
}
```
Anything inside the body runs on every iteration. Compute values once before the loop and avoid DOM queries and network calls inside it.

## 7. Exit Early with break
```javascript
function findById(id, items) {
  for (const item of items) {
    if (item.id === id) {
      return item;  // stops scanning immediately
    }
  }
  return null;
}
```
For searches, stop the moment you succeed. Early `return` inside a helper is even clearer than `break` because it ends the whole function.

## 8. Prefer for...of Over forEach When You Need to Break
```javascript
// forEach cannot break
items.forEach(item => {
  if (item.id === id) return;  // only skips this callback run
});
// for...of can
for (const item of items) {
  if (item.id === id) break;
}
```
`return` inside a `forEach` callback does not stop the loop; it only skips one callback. When early exit matters, use `for...of`.

## 9. Keep Loops Small and Readable
```javascript
for (const sale of sales) {
  total += sale.amount;
  count++;
  runningAverage = total / count;
}
```
A loop that does three unrelated things is hard to test and debug. If a body grows, extract the body into a named function, or split the loop into separate passes.

## 10. Name Loop Variables Meaningfully
```javascript
for (const student of students) {
  // vs for (const x of xs)
}
```
`i` and `j` are fine for simple counting and matrix indices, but for collections use the singular of the collection's name. It reads like a sentence: "for each student in students."

## 11. Prefer while for Unknown Iteration Counts
```javascript
let remaining = totalSeconds;
while (remaining > 0) {
  remaining--;
}
```
When you cannot know how many iterations will run, a `while` loop is more honest than a `for` loop pretending to know a count.

## 12. Use do...while When the Body Must Run First
```javascript
let input;
do {
  input = prompt("Enter a number");
} while (input === null || input === "");
```
If the condition cannot be evaluated until the body has run once, `do...while` is the correct construct and documents that intent.

## 13. Guard Against Infinite Loops
```javascript
let attempts = 0;
while (!condition() && attempts < MAX_ATTEMPTS) {
  attempts++;
}
```
When a loop depends on external input or risky logic, add a maximum-iteration cap so a bug fails loudly instead of hanging the program.

## 14. Iterate Object.entries for Key-Value Work
```javascript
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}
```
Instead of `for...in` plus manual `obj[key]` lookups and inheritance checks, `Object.entries` gives clean, owned `[key, value]` pairs in one line.
