// ========================================
// EXAMPLE 1: Array creation
// ========================================
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, null, undefined];

// ========================================
// EXAMPLE 2: Accessing elements
// ========================================
console.log(fruits[0]);       // "apple"
console.log(fruits[1]);       // "banana"
console.log(fruits[fruits.length - 1]);  // "orange"

// ========================================
// EXAMPLE 3: push and pop
// ========================================
fruits.push("grape");
console.log(fruits);  // ["apple", "banana", "orange", "grape"]
fruits.pop();
console.log(fruits);  // ["apple", "banana", "orange"]

// ========================================
// EXAMPLE 4: shift and unshift
// ========================================
fruits.unshift("pear");
console.log(fruits);  // ["pear", "apple", "banana", "orange"]
fruits.shift();
console.log(fruits);  // ["apple", "banana", "orange"]

// ========================================
// EXAMPLE 5: indexOf and includes
// ========================================
console.log(fruits.indexOf("banana"));   // 1
console.log(fruits.indexOf("grape"));    // -1
console.log(fruits.includes("orange"));  // true

// ========================================
// EXAMPLE 6: find
// ========================================
const found = numbers.find(num => num > 3);
console.log(found);  // 4

// ========================================
// EXAMPLE 7: forEach
// ========================================
numbers.forEach((num, index) => {
  console.log(`${index}: ${num}`);
});

// ========================================
// EXAMPLE 8: map
// ========================================
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// ========================================
// EXAMPLE 9: filter
// ========================================
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4]

// ========================================
// EXAMPLE 10: reduce
// ========================================
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  // 15

// ========================================
// EXAMPLE 11: sort
// ========================================
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
const sorted = [...unsorted].sort((a, b) => a - b);
console.log(sorted);  // [1, 1, 2, 3, 4, 5, 6, 9]

// ========================================
// EXAMPLE 12: slice
// ========================================
const sliced = numbers.slice(1, 4);
console.log(sliced);  // [2, 3, 4]

// ========================================
// EXAMPLE 13: splice
// ========================================
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);  // Remove 1 element at index 2
console.log(arr);  // [1, 2, 4, 5]

// ========================================
// EXAMPLE 14: concat
// ========================================
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined);  // [1, 2, 3, 4]

// ========================================
// EXAMPLE 15: join
// ========================================
const joined = fruits.join(", ");
console.log(joined);  // "apple, banana, orange"

// ========================================
// EXAMPLE 16: reverse
// ========================================
const reversed = [...numbers].reverse();
console.log(reversed);  // [5, 4, 3, 2, 1]

// ========================================
// EXAMPLE 17: every
// ========================================
const allPositive = numbers.every(num => num > 0);
console.log(allPositive);  // true

// ========================================
// EXAMPLE 18: some
// ========================================
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);  // true

// ========================================
// EXAMPLE 19: flat
// ========================================
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.flat();
console.log(flattened);  // [1, 2, 3, 4, 5, 6]

// ========================================
// EXAMPLE 20: flatMap
// ========================================
const flatMapped = numbers.map(num => [num, num * 2]).flat();
console.log(flatMapped);  // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// ========================================
// EXAMPLE 21: Array from
// ========================================
const fromArr = Array.from("hello");
console.log(fromArr);  // ["h", "e", "l", "l", "o"]

// ========================================
// EXAMPLE 22: Array of
// ========================================
const ofArr = Array.of(1, 2, 3);
console.log(ofArr);  // [1, 2, 3]

// ========================================
// EXAMPLE 23: fill
// ========================================
const filled = new Array(5).fill(0);
console.log(filled);  // [0, 0, 0, 0, 0]

// ========================================
// EXAMPLE 24: copyWithin
// ========================================
const copyArr = [1, 2, 3, 4, 5];
copyArr.copyWithin(0, 3, 5);
console.log(copyArr);  // [4, 5, 3, 4, 5]

// ========================================
// EXAMPLE 25: entries
// ========================================
const entries = fruits.entries();
for (const [index, fruit] of entries) {
  console.log(`${index}: ${fruit}`);
}

// ========================================
// EXAMPLE 26: keys
// ========================================
const keys = fruits.keys();
for (const key of keys) {
  console.log(key);
}

// ========================================
// EXAMPLE 27: values
// ========================================
const values = fruits.values();
for (const value of values) {
  console.log(value);
}

// ========================================
// EXAMPLE 28: Reference semantics
// ========================================
const original = [1, 2, 3];
const reference = original;
reference.push(4);
console.log(original);  // [1, 2, 3, 4] - Modified!

// ========================================
// EXAMPLE 29: Spread operator copy
// ========================================
const original2 = [1, 2, 3];
const copy = [...original2];
copy.push(4);
console.log(original2);  // [1, 2, 3] - Unchanged

// ========================================
// EXAMPLE 30: Multidimensional array
// ========================================
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[0][0]);  // 1
console.log(matrix[1][2]);  // 6

// ========================================
// EXAMPLE 31: findIndex
// ========================================
const index = numbers.findIndex(num => num > 3);
console.log(index);  // 3

// ========================================
// EXAMPLE 32: lastIndexOf
// ========================================
const lastIdx = [1, 2, 3, 2, 1].lastIndexOf(2);
console.log(lastIdx);  // 3

// ========================================
// EXAMPLE 33: isArray
// ========================================
console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray("hello"));  // false

// ========================================
// EXAMPLE 34: toString
// ========================================
console.log(numbers.toString());  // "1,2,3,4,5"

// ========================================
// EXAMPLE 35: toLocaleString
// ========================================
console.log(numbers.toLocaleString());  // "1,2,3,4,5"

// ========================================
// EXAMPLE 36: at (modern)
// ========================================
console.log(fruits.at(0));    // "apple"
console.log(fruits.at(-1));   // "orange"

// ========================================
// EXAMPLE 37: with method
// ========================================
const withArr = [1, 2, 3];
const withCopy = withArr.with(1, 99);
console.log(withCopy);  // [1, 99, 3]

// ========================================
// EXAMPLE 38: toSorted (modern)
// ========================================
const toSorted = numbers.toSorted((a, b) => a - b);
console.log(toSorted);  // [1, 2, 3, 4, 5]

// ========================================
// EXAMPLE 39: toReversed (modern)
// ========================================
const toReversed = numbers.toReversed();
console.log(toReversed);  // [5, 4, 3, 2, 1]

// ========================================
// EXAMPLE 40: toSpliced (modern)
// ========================================
const toSpliced = numbers.toSpliced(2, 1);
console.log(toSpliced);  // [1, 2, 4, 5]

console.log("\nAll examples completed!");
