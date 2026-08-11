// ========================================
// EXAMPLE 1: Counting 1 to 10 with a for loop
// ========================================
// Classic for loop: initialization, condition, increment.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// ========================================
// EXAMPLE 2: Counting down from 10 to 1
// ========================================
// The increment can go backwards with --.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// ========================================
// EXAMPLE 3: Even numbers from 0 to 20
// ========================================
// Step by 2 to skip every other number.
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// ========================================
// EXAMPLE 4: Sum of 1 to 100
// ========================================
// Accumulate a running total across iterations.
let total = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
}
console.log("Sum 1..100:", total);

// ========================================
// EXAMPLE 5: Counting with a while loop
// ========================================
// while checks the condition before each iteration.
let count = 1;
while (count <= 10) {
  console.log(count);
  count++;
}

// ========================================
// EXAMPLE 6: do...while runs at least once
// ========================================
// The body runs before the condition is checked.
let attempts = 0;
do {
  console.log("Attempt", attempts);
  attempts++;
} while (attempts < 3);

// ========================================
// EXAMPLE 7: Iterating an array with a for loop
// ========================================
const fruits = ["apple", "banana", "orange", "grape"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i}: ${fruits[i]}`);
}

// ========================================
// EXAMPLE 8: for...of over an array
// ========================================
// for...of gives values directly, no index needed.
for (const fruit of fruits) {
  console.log(fruit);
}

// ========================================
// EXAMPLE 9: for...of over a string
// ========================================
// Strings are iterables; each character is visited.
const word = "hello";
for (const char of word) {
  console.log(char);
}

// ========================================
// EXAMPLE 10: for...of over a Set
// ========================================
// Sets only keep unique values, iteration visits each once.
const unique = new Set([1, 2, 2, 3, 3, 3]);
for (const value of unique) {
  console.log(value);
}

// ========================================
// EXAMPLE 11: for...of over a Map
// ========================================
// A Map yields [key, value] pairs on each iteration.
const scores = new Map([
  ["Alice", 90],
  ["Bob", 85],
  ["Cara", 92]
]);
for (const [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

// ========================================
// EXAMPLE 12: for...of with index via entries
// ========================================
// Array.prototype.entries() yields [index, value] pairs.
for (const [index, fruit] of fruits.entries()) {
  console.log(`${index}: ${fruit}`);
}

// ========================================
// EXAMPLE 13: for...in over an object
// ========================================
// for...in iterates property keys (as strings).
const person = { name: "Alice", age: 30, city: "Paris" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// ========================================
// EXAMPLE 14: Iterating object values with Object.values
// ========================================
// Object.values returns an array, so for...of works on it.
for (const value of Object.values(person)) {
  console.log(value);
}

// ========================================
// EXAMPLE 15: Object.entries with destructuring
// ========================================
// Object.entries gives [key, value] pairs in one pass.
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// ========================================
// EXAMPLE 16: break - first multiple of 7
// ========================================
// break stops the whole loop immediately.
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log("First multiple of 7:", i);
    break;
  }
}

// ========================================
// EXAMPLE 17: continue - skip even numbers
// ========================================
// continue skips the rest of the current iteration only.
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// ========================================
// EXAMPLE 18: Labeled loop (nested break)
// ========================================
// The label lets break exit the outer loop from inside.
outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i * j > 4) {
      break outer;
    }
    console.log(`${i} x ${j}`);
  }
}

// ========================================
// EXAMPLE 19: Nested loops - multiplication table
// ========================================
// The inner loop runs fully for every outer iteration.
for (let i = 1; i <= 5; i++) {
  let row = [];
  for (let j = 1; j <= 5; j++) {
    row.push(i * j);
  }
  console.log(`Row ${i}:`, row.join(" "));
}

// ========================================
// EXAMPLE 20: Summing an array with a loop
// ========================================
// Classic accumulation pattern.
const numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (const num of numbers) {
  sum += num;
}
console.log("Sum:", sum);

// ========================================
// EXAMPLE 21: Reversing a string with a loop
// ========================================
// Build a new string from the last character forward.
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello"));

// ========================================
// EXAMPLE 22: Finding the max in an array
// ========================================
// Track the largest value seen so far.
const grades = [72, 95, 88, 61, 90];
let max = grades[0];
for (let i = 1; i < grades.length; i++) {
  if (grades[i] > max) {
    max = grades[i];
  }
}
console.log("Max:", max);

// ========================================
// EXAMPLE 23: Loop vs array methods
// ========================================
// Same result three ways: manual loop, map, reduce.
const base = [1, 2, 3, 4, 5];
const doubledLoop = [];
for (const num of base) {
  doubledLoop.push(num * 2);
}
const doubledMap = base.map(num => num * 2);
const sumReduce = base.reduce((acc, num) => acc + num, 0);
console.log("Doubled (loop):", doubledLoop);
console.log("Doubled (map):", doubledMap);
console.log("Sum (reduce):", sumReduce);

// ========================================
// EXAMPLE 24: Building a repeat-until loop (do...while)
// ========================================
// A game-style loop: keep rolling until a target is hit.
let roll = 0;
let attemptsTaken = 0;
do {
  roll = Math.ceil(Math.random() * 6);
  attemptsTaken++;
} while (roll !== 6);
console.log(`Rolled a 6 after ${attemptsTaken} attempt(s)`);

// ========================================
// EXAMPLE 25: Looping through DOM-like data (simulated)
// ========================================
// In a browser, querySelectorAll returns a NodeList that for...of handles.
const items = [
  { title: "Task one", completed: true },
  { title: "Task two", completed: false },
  { title: "Task three", completed: true }
];
for (const item of items) {
  const status = item.completed ? "done" : "todo";
  console.log(`[${status}] ${item.title}`);
}

// ========================================
// EXAMPLE 26: Building an array with a loop (squares)
// ========================================
// Preallocate with new Array to avoid resizing cost.
const squares = new Array(10);
for (let i = 0; i < squares.length; i++) {
  squares[i] = (i + 1) ** 2;
}
console.log(squares);

// ========================================
// EXAMPLE 27: Halving a number until zero (while)
// ========================================
// Iteration count depends on the data, so while fits best.
let value = 100;
let steps = 0;
while (value > 0) {
  value = Math.floor(value / 2);
  steps++;
}
console.log(`Reached 0 in ${steps} halvings`);

// ========================================
// EXAMPLE 28: Frequency counter with a loop
// ========================================
// Count how many times each value appears in an array.
const data = ["red", "blue", "red", "green", "blue", "red"];
const counts = {};
for (const color of data) {
  counts[color] = (counts[color] || 0) + 1;
}
console.log(counts);

// ========================================
// EXAMPLE 29: Fibonacci sequence with a loop
// ========================================
// Each term is the sum of the two previous terms.
function fibonacci(count) {
  const seq = [0, 1];
  for (let i = 2; i < count; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, count);
}
console.log(fibonacci(10));

// ========================================
// EXAMPLE 30: Guarded loop (preventing infinite loops)
// ========================================
// A cap on iterations makes a risky loop fail loudly instead of hanging.
function countUntil(condition, maxIterations) {
  let i = 0;
  while (!condition(i)) {
    if (i >= maxIterations) {
      console.log("Loop hit the safety cap; stopping.");
      return i;
    }
    i++;
  }
  return i;
}
console.log("Found at:", countUntil(n => n % 13 === 0, 100));

console.log("\nAll examples completed!");
