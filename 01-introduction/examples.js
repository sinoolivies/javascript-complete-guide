// ========================================
// EXAMPLE 1: Your First JavaScript Program
// ========================================
console.log("Hello, World!");
// This is the traditional first program in any language
// console.log() outputs text to the console

// ========================================
// EXAMPLE 2: Multiple console.log statements
// ========================================
console.log("This is the first line");
console.log("This is the second line");
console.log("This is the third line");
// Each statement runs on a new line

// ========================================
// EXAMPLE 3: Using single and double quotes
// ========================================
console.log('Hello with single quotes');
console.log("Hello with double quotes");
// Both work the same way in JavaScript

// ========================================
// EXAMPLE 4: Template literals (backticks)
// ========================================
let name = "Alice";
console.log(`Hello, ${name}!`);
// Template literals allow embedding variables using ${}
// They also allow multi-line strings

// ========================================
// EXAMPLE 5: Multi-line template literal
// ========================================
let message = `
This is a multi-line string.
It can span multiple lines.
Very useful for long text.
`;
console.log(message);

// ========================================
// EXAMPLE 6: Comments in code
// ========================================
// This is a single-line comment

/*
  This is a multi-line comment.
  It can span multiple lines.
  Useful for longer explanations.
*/

/**
 * This is a documentation comment.
 * Often used to describe functions.
 * @param {string} name - The name to greet
 */
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// ========================================
// EXAMPLE 7: Case sensitivity
// ========================================
let firstName = "John";
let FirstName = "Jane";
let FIRSTNAME = "Bob";

console.log(firstName);  // John
console.log(FirstName);  // Jane
console.log(FIRSTNAME);  // Bob
// These are three different variables

// ========================================
// EXAMPLE 8: Basic arithmetic
// ========================================
console.log(5 + 3);      // Addition: 8
console.log(10 - 4);     // Subtraction: 6
console.log(6 * 7);      // Multiplication: 42
console.log(20 / 4);     // Division: 5
console.log(10 % 3);     // Modulus (remainder): 1

// ========================================
// EXAMPLE 9: Order of operations
// ========================================
console.log(5 + 3 * 2);   // 11 (multiplication first)
console.log((5 + 3) * 2); // 16 (parentheses first)
// Follows standard mathematical order of operations

// ========================================
// EXAMPLE 10: String concatenation
// ========================================
let greeting = "Hello";
let target = "World";
console.log(greeting + " " + target);  // Hello World
// The + operator joins strings together

// ========================================
// EXAMPLE 11: Using variables
// ========================================
let age = 25;
let city = "New York";
console.log(`I am ${age} years old and live in ${city}`);

// ========================================
// EXAMPLE 12: Reassigning variables (let)
// ========================================
let score = 10;
console.log(score);  // 10
score = 20;
console.log(score);  // 20
// let allows reassignment

// ========================================
// EXAMPLE 13: Constants (const)
// ========================================
const pi = 3.14159;
console.log(pi);
// pi = 3.14;  // This would cause an error
// const cannot be reassigned

// ========================================
// EXAMPLE 14: Boolean values
// ========================================
let isStudent = true;
let isTeacher = false;
console.log(isStudent);   // true
console.log(isTeacher);   // false
// Booleans represent true/false values

// ========================================
// EXAMPLE 15: Undefined and null
// ========================================
let undefinedVariable;
console.log(undefinedVariable);  // undefined
let nullVariable = null;
console.log(nullVariable);       // null
// undefined means not assigned
// null means intentionally empty

// ========================================
// EXAMPLE 16: Basic function
// ========================================
function sayHello() {
  console.log("Hello from a function!");
}
sayHello();  // Call the function to execute it

// ========================================
// EXAMPLE 17: Function with parameters
// ========================================
function greetPerson(name, age) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}
greetPerson("Alice", 30);
greetPerson("Bob", 25);

// ========================================
// EXAMPLE 18: Function with return value
// ========================================
function add(a, b) {
  return a + b;
}
let result = add(5, 3);
console.log(result);  // 8
// return sends a value back to the caller

// ========================================
// EXAMPLE 19: Arrow function (modern syntax)
// ========================================
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));  // 20
// Arrow functions are a shorter way to write functions

// ========================================
// EXAMPLE 20: Array basics
// ========================================
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);       // apple (first item)
console.log(fruits[1]);       // banana (second item)
console.log(fruits.length);   // 3 (number of items)
// Arrays store ordered lists of values

// ========================================
// EXAMPLE 21: Object basics
// ========================================
let person = {
  name: "Alice",
  age: 30,
  city: "Boston"
};
console.log(person.name);     // Alice
console.log(person.age);      // 30
console.log(person.city);     // Boston
// Objects store key-value pairs

// ========================================
// EXAMPLE 22: If statement
// ========================================
let temperature = 25;
if (temperature > 20) {
  console.log("It's warm!");
} else {
  console.log("It's cold!");
}
// if/else makes decisions based on conditions

// ========================================
// EXAMPLE 23: For loop
// ========================================
for (let i = 0; i < 5; i++) {
  console.log(`Count: ${i}`);
}
// Loops repeat code multiple times

// ========================================
// EXAMPLE 24: While loop
// ========================================
let count = 0;
while (count < 3) {
  console.log(`While count: ${count}`);
  count++;
}
// While loops continue while a condition is true

// ========================================
// EXAMPLE 25: String methods
// ========================================
let text = "Hello World";
console.log(text.toUpperCase());      // HELLO WORLD
console.log(text.toLowerCase());      // hello world
console.log(text.length);            // 11
console.log(text.includes("World")); // true
// Strings have built-in methods for manipulation

// ========================================
// EXAMPLE 26: Array methods
// ========================================
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.push(6));        // Adds 6, returns new length
console.log(numbers.pop());          // Removes last element
console.log(numbers.length);         // Current length
// Arrays have methods to add, remove, and manipulate items

// ========================================
// EXAMPLE 27: Type checking
// ========================================
console.log(typeof 42);              // number
console.log(typeof "hello");         // string
console.log(typeof true);            // boolean
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object (known JavaScript quirk)
// typeof operator tells you the type of a value

// ========================================
// EXAMPLE 28: Type conversion
// ========================================
let strNumber = "42";
let numFromStr = Number(strNumber);
console.log(numFromStr);             // 42
console.log(typeof numFromStr);      // number

let numToString = String(42);
console.log(numToString);            // "42"
console.log(typeof numToString);     // string
// You can convert between types explicitly

// ========================================
// EXAMPLE 29: Comparison operators
// ========================================
console.log(5 == 5);     // true (equality)
console.log(5 === 5);    // true (strict equality)
console.log(5 == "5");   // true (loose equality)
console.log(5 === "5");  // false (strict, different types)
console.log(5 > 3);      // true
console.log(5 < 3);      // false
// Use === for strict comparison (recommended)

// ========================================
// EXAMPLE 30: Logical operators
// ========================================
let a = true;
let b = false;
console.log(a && b);     // false (AND)
console.log(a || b);     // true (OR)
console.log(!a);         // false (NOT)
// Logical operators combine boolean values

// ========================================
// EXAMPLE 31: Ternary operator
// ========================================
let age = 18;
let status = age >= 18 ? "adult" : "minor";
console.log(status);     // adult
// Ternary is a concise if/else

// ========================================
// EXAMPLE 32: Short-circuit evaluation
// ========================================
let name = null;
let displayName = name || "Anonymous";
console.log(displayName);  // Anonymous
// Uses the first truthy value

// ========================================
// EXAMPLE 33: Destructuring arrays
// ========================================
let colors = ["red", "green", "blue"];
let [first, second, third] = colors;
console.log(first);   // red
console.log(second);  // green
console.log(third);   // blue
// Destructuring extracts values from arrays

// ========================================
// EXAMPLE 34: Destructuring objects
// ========================================
let user = { username: "alice", email: "alice@example.com" };
let { username, email } = user;
console.log(username);  // alice
console.log(email);     // alice@example.com
// Destructuring extracts values from objects

// ========================================
// EXAMPLE 35: Spread operator with arrays
// ========================================
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];
console.log(combined);  // [1, 2, 3, 4]
// Spread operator expands arrays

// ========================================
// EXAMPLE 36: Rest parameters
// ========================================
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4));  // 10
// Rest parameters collect arguments into an array

// ========================================
// EXAMPLE 37: Default parameters
// ========================================
function greetWithDefault(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greetWithDefault();        // Hello, Guest!
greetWithDefault("Alice"); // Hello, Alice!
// Default parameters provide fallback values

// ========================================
// EXAMPLE 38: Array map method
// ========================================
let nums = [1, 2, 3, 4];
let doubled = nums.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8]
// map creates a new array by transforming each element

// ========================================
// EXAMPLE 39: Array filter method
// ========================================
let numbers = [1, 2, 3, 4, 5, 6];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4, 6]
// filter creates a new array with elements that pass a test

// ========================================
// EXAMPLE 40: Array reduce method
// ========================================
let values = [1, 2, 3, 4];
let sum = values.reduce((total, num) => total + num, 0);
console.log(sum);  // 10
// reduce combines array elements into a single value

console.log("All examples completed!");
