// ============ BEGINNER EXERCISE SOLUTIONS ============

// Exercise 1: Count 1 to 10
console.log("\n=== Exercise 1 ===");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Exercise 2: Countdown from 10 to 1
console.log("\n=== Exercise 2 ===");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Exercise 3: Even numbers 0 to 20
console.log("\n=== Exercise 3 ===");
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// Exercise 4: Sum of 1 to 100
console.log("\n=== Exercise 4 ===");
let sumTo100 = 0;
for (let i = 1; i <= 100; i++) {
  sumTo100 += i;
}
console.log("Sum of 1 to 100:", sumTo100);

// Exercise 5: while loop counting
console.log("\n=== Exercise 5 ===");
let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter++;
}

// Exercise 6: do...while at least once
console.log("\n=== Exercise 6 ===");
let index = 1;
do {
  console.log(index);
  index++;
} while (index <= 5);

// Exercise 7: Iterate an array with for
console.log("\n=== Exercise 7 ===");
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i}: ${fruits[i]}`);
}

// Exercise 8: for...of over an array
console.log("\n=== Exercise 8 ===");
const colors = ["red", "green", "blue", "yellow", "purple"];
for (const color of colors) {
  console.log(color);
}

// Exercise 9: for...of over a string
console.log("\n=== Exercise 9 ===");
const language = "JavaScript";
for (const char of language) {
  console.log(char);
}

// Exercise 10: break to find a multiple
console.log("\n=== Exercise 10 ===");
for (let i = 1; i <= 100; i++) {
  if (i % 13 === 0) {
    console.log("First multiple of 13:", i);
    break;
  }
}

// ============ INTERMEDIATE EXERCISE SOLUTIONS ============

// Exercise 1: continue to skip evens
console.log("\n=== Intermediate Exercise 1 ===");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// Exercise 2: Sum of array elements
console.log("\n=== Intermediate Exercise 2 ===");
const nums = [5, 10, 15, 20, 25];
let arraySum = 0;
for (const num of nums) {
  arraySum += num;
}
console.log("Sum:", arraySum);

// Exercise 3: Find the largest number
console.log("\n=== Intermediate Exercise 3 ===");
const values = [12, 45, 8, 78, 34, 67];
let largest = values[0];
for (let i = 1; i < values.length; i++) {
  if (values[i] > largest) {
    largest = values[i];
  }
}
console.log("Largest:", largest);

// Exercise 4: Count vowels in a string
console.log("\n=== Intermediate Exercise 4 ===");
function countVowels(str) {
  let count = 0;
  for (const char of str.toLowerCase()) {
    if ("aeiou".includes(char)) {
      count++;
    }
  }
  return count;
}
console.log('Vowels in "hello world":', countVowels("hello world"));

// Exercise 5: Reverse a string
console.log("\n=== Intermediate Exercise 5 ===");
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log('Reversed "JavaScript":', reverseString("JavaScript"));

// Exercise 6: Array of squares
console.log("\n=== Intermediate Exercise 6 ===");
const squares = [];
for (let i = 1; i <= 10; i++) {
  squares.push(i * i);
}
console.log("Squares of 1..10:", squares);

// Exercise 7: Iterate object values
console.log("\n=== Intermediate Exercise 7 ===");
const person = { name: "Alice", age: 30, city: "Paris", job: "Engineer" };
for (const value of Object.values(person)) {
  console.log(value);
}

// Exercise 8: Multiplication table (nested loops)
console.log("\n=== Intermediate Exercise 8 ===");
for (let i = 1; i <= 5; i++) {
  let row = [];
  for (let j = 1; j <= 5; j++) {
    row.push(i * j);
  }
  console.log(row.join(" "));
}

// Exercise 9: Halving until zero
console.log("\n=== Intermediate Exercise 9 ===");
let halvingValue = 100;
let halvingSteps = 0;
while (halvingValue > 0) {
  halvingValue = Math.floor(halvingValue / 2);
  halvingSteps++;
}
console.log("Halvings to reach 0:", halvingSteps);

// Exercise 10: for...in over an object
console.log("\n=== Intermediate Exercise 10 ===");
const car = { make: "Toyota", model: "Corolla", year: 2020, color: "silver" };
for (const key in car) {
  console.log(`${key}: ${car[key]}`);
}

// ============ ADVANCED EXERCISE SOLUTIONS ============

// Exercise 1: FizzBuzz
console.log("\n=== Advanced Exercise 1 ===");
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

// Exercise 2: Frequency counter
console.log("\n=== Advanced Exercise 2 ===");
function countFrequencies(arr) {
  const counts = {};
  for (const item of arr) {
    counts[item] = (counts[item] || 0) + 1;
  }
  return counts;
}
console.log(
  countFrequencies(["apple", "banana", "apple", "orange", "banana", "apple"])
);

// Exercise 3: Filter without filter()
console.log("\n=== Advanced Exercise 3 ===");
function filterEvens(arr) {
  const evens = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
console.log(filterEvens([1, 2, 3, 4, 5, 6, 7, 8]));

// Exercise 4: Map without map()
console.log("\n=== Advanced Exercise 4 ===");
function doubleAll(arr) {
  const doubled = [];
  for (const num of arr) {
    doubled.push(num * 2);
  }
  return doubled;
}
console.log(doubleAll([1, 2, 3, 4]));

// Exercise 5: Remove duplicates (no Set)
console.log("\n=== Advanced Exercise 5 ===");
function removeDuplicates(arr) {
  const unique = [];
  for (const item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }
  return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5]));

// Exercise 6: Print a triangle pattern
console.log("\n=== Advanced Exercise 6 ===");
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

// Exercise 7: Sum of a 2D array
console.log("\n=== Advanced Exercise 7 ===");
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let gridTotal = 0;
for (const row of grid) {
  for (const num of row) {
    gridTotal += num;
  }
}
console.log("Total of 2D array:", gridTotal);

// Exercise 8: Check if array is sorted
console.log("\n=== Advanced Exercise 8 ===");
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log("Sorted?", isSorted([1, 2, 3, 4]));
console.log("Sorted?", isSorted([1, 3, 2, 4]));

// Exercise 9: Fibonacci sequence
console.log("\n=== Advanced Exercise 9 ===");
function fibonacci(count) {
  const seq = [0, 1];
  for (let i = 2; i < count; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, count);
}
console.log("First 10 Fibonacci numbers:", fibonacci(10));

// Exercise 10: Prime numbers up to N
console.log("\n=== Advanced Exercise 10 ===");
function printPrimes(limit) {
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    for (let divisor = 2; divisor < num; divisor++) {
      if (num % divisor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(num);
    }
  }
}
printPrimes(30);

// ============ PRACTICAL CHALLENGE SOLUTIONS ============

// Challenge 1: Number guessing game
console.log("\n=== Practical Challenge 1 ===");
function numberGuessingGame() {
  const secret = Math.floor(Math.random() * 100) + 1;
  let guess = 0;
  let attempts = 0;
  do {
    // Simulates a player guessing; replace with real input in a real app.
    guess = Math.floor(Math.random() * 100) + 1;
    attempts++;
    if (guess > secret) {
      console.log(`Guess ${guess} was too high.`);
    } else if (guess < secret) {
      console.log(`Guess ${guess} was too low.`);
    }
  } while (guess !== secret);
  console.log(`Correct! The secret was ${secret}. It took ${attempts} attempts.`);
}
numberGuessingGame();

// Challenge 2: Multiplication table generator
console.log("\n=== Practical Challenge 2 ===");
function multiplicationTable(size) {
  for (let i = 1; i <= size; i++) {
    let row = [];
    for (let j = 1; j <= size; j++) {
      row.push(String(i * j).padStart(3, " "));
    }
    console.log(row.join(" "));
  }
}
multiplicationTable(5);

// Challenge 3: Array statistics
console.log("\n=== Practical Challenge 3 ===");
function arrayStatistics(numbers) {
  let sum = 0;
  let min = numbers[0];
  let max = numbers[0];
  for (const num of numbers) {
    sum += num;
    if (num < min) min = num;
    if (num > max) max = num;
  }
  const average = sum / numbers.length;
  let aboveAverage = 0;
  for (const num of numbers) {
    if (num > average) aboveAverage++;
  }
  console.log(`Data: ${numbers.join(", ")}`);
  console.log(`Sum: ${sum}`);
  console.log(`Average: ${average.toFixed(2)}`);
  console.log(`Min: ${min}`);
  console.log(`Max: ${max}`);
  console.log(`Numbers above average: ${aboveAverage}`);
}
arrayStatistics([12, 45, 8, 78, 34, 67, 20]);

// Challenge 4: Pattern printing
console.log("\n=== Practical Challenge 4 ===");
function printTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}
function printUpsideDownTriangle(rows) {
  for (let i = rows; i >= 1; i--) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}
function printDiamond(size) {
  for (let i = 1; i <= size; i++) {
    let line = " ".repeat(size - i) + "*".repeat(2 * i - 1);
    console.log(line);
  }
  for (let i = size - 1; i >= 1; i--) {
    let line = " ".repeat(size - i) + "*".repeat(2 * i - 1);
    console.log(line);
  }
}
printTriangle(5);
printUpsideDownTriangle(5);
printDiamond(5);

// Challenge 5: Sales report generator
console.log("\n=== Practical Challenge 5 ===");
function salesReport(transactions) {
  const totals = {};
  const counts = {};
  for (const sale of transactions) {
    totals[sale.category] = (totals[sale.category] || 0) + sale.amount;
    counts[sale.category] = (counts[sale.category] || 0) + 1;
  }
  let grandTotal = 0;
  let topCategory = null;
  for (const category in totals) {
    grandTotal += totals[category];
    if (topCategory === null || totals[category] > totals[topCategory]) {
      topCategory = category;
    }
  }
  console.log("Category Report");
  console.log("----------------");
  for (const category in totals) {
    console.log(`${category}: ${counts[category]} sale(s), total ${totals[category]}`);
  }
  console.log("----------------");
  console.log(`Grand total: ${grandTotal}`);
  console.log(`Top category: ${topCategory}`);
}
salesReport([
  { category: "Electronics", amount: 250 },
  { category: "Books", amount: 45 },
  { category: "Electronics", amount: 120 },
  { category: "Food", amount: 30 },
  { category: "Books", amount: 60 }
]);

console.log("\n=== All solutions completed! ===");
