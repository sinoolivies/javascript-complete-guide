// ========================================
// BEGINNER EXERCISES SOLUTIONS
// ========================================

// Exercise 1: Hello Your Name
console.log("=== Exercise 1 ===");
const myName = "John";
console.log(`Hello, ${myName}!`);

// Exercise 2: Age Calculator
console.log("\n=== Exercise 2 ===");
const birthYear = 1995;
const currentYear = 2026;
const age = currentYear - birthYear;
console.log(`You are ${age} years old`);

// Exercise 3: Simple Math
console.log("\n=== Exercise 3 ===");
const num1 = 10;
const num2 = 5;
console.log(`Addition: ${num1 + num2}`);
console.log(`Subtraction: ${num1 - num2}`);
console.log(`Multiplication: ${num1 * num2}`);
console.log(`Division: ${num1 / num2}`);

// Exercise 4: String Practice
console.log("\n=== Exercise 4 ===");
const favoriteFood = "Pizza";
console.log(favoriteFood.toUpperCase());
console.log(favoriteFood.toLowerCase());
console.log(favoriteFood.length);

// Exercise 5: Boolean Values
console.log("\n=== Exercise 5 ===");
const likesJavaScript = true;
const knowsPython = false;
console.log(`Likes JavaScript: ${likesJavaScript}`);
console.log(`Knows Python: ${knowsPython}`);

// Exercise 6: Array Creation
console.log("\n=== Exercise 6 ===");
const colors = ["red", "green", "blue", "yellow", "purple"];
console.log(`First color: ${colors[0]}`);
console.log(`Last color: ${colors[colors.length - 1]}`);
console.log(`Array length: ${colors.length}`);

// Exercise 7: Object Creation
console.log("\n=== Exercise 7 ===");
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925
};
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);
console.log(`Year: ${book.year}`);

// Exercise 8: Simple Function
console.log("\n=== Exercise 8 ===");
function printHello() {
  console.log("Hello, World!");
}
printHello();

// Exercise 9: Function with Parameter
console.log("\n=== Exercise 9 ===");
function greetName(name) {
  console.log(`Hello, ${name}!`);
}
greetName("Alice");

// Exercise 10: Function with Return
console.log("\n=== Exercise 10 ===");
function addNumbers(a, b) {
  return a + b;
}
const sumResult = addNumbers(7, 8);
console.log(`Sum: ${sumResult}`);

// ========================================
// INTERMEDIATE EXERCISES SOLUTIONS
// ========================================

// Exercise 1: Age Check
console.log("\n=== Intermediate Exercise 1 ===");
function checkAge(age) {
  return age >= 18 ? "adult" : "minor";
}
console.log(checkAge(20));  // adult
console.log(checkAge(15));  // minor

// Exercise 2: String Manipulation
console.log("\n=== Intermediate Exercise 2 ===");
const textWithSpaces = "  Hello World  ";
const trimmedText = textWithSpaces.trim().toUpperCase();
console.log(trimmedText);

// Exercise 3: Array Operations
console.log("\n=== Intermediate Exercise 3 ===");
const numsArray = [1, 2, 3, 4, 5];
const doubledArray = numsArray.map(num => num * 2);
const evenArray = numsArray.filter(num => num % 2 === 0);
console.log(`Doubled: ${doubledArray}`);
console.log(`Evens: ${evenArray}`);

// Exercise 4: Object Destructuring
console.log("\n=== Intermediate Exercise 4 ===");
const person = { name: "Alice", age: 30, city: "Boston", country: "USA" };
const { name, city } = person;
console.log(`Name: ${name}, City: ${city}`);

// Exercise 5: Array Destructuring
console.log("\n=== Intermediate Exercise 5 ===");
const movies = ["Inception", "The Matrix", "Interstellar"];
const [firstMovie, , lastMovie] = movies;
console.log(`First: ${firstMovie}, Last: ${lastMovie}`);

// Exercise 6: Default Parameters
console.log("\n=== Intermediate Exercise 6 ===");
function greetDefault(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greetDefault();
greetDefault("Bob");

// Exercise 7: Spread Operator
console.log("\n=== Intermediate Exercise 7 ===");
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];
const combinedArray = [...arrA, ...arrB];
console.log(combinedArray);

// Exercise 8: Rest Parameters
console.log("\n=== Intermediate Exercise 8 ===");
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3));      // 6
console.log(sumAll(1, 2, 3, 4, 5)); // 15

// Exercise 9: Type Conversion
console.log("\n=== Intermediate Exercise 9 ===");
const strNum = "42";
const convertedNum = Number(strNum);
const finalResult = convertedNum + 10;
console.log(finalResult);  // 52

// Exercise 10: Logical Operators
console.log("\n=== Intermediate Exercise 10 ===");
const bool1 = true;
const bool2 = false;
console.log(`AND: ${bool1 && bool2}`);  // false
console.log(`OR: ${bool1 || bool2}`);   // true
console.log(`NOT bool1: ${!bool1}`);    // false

// ========================================
// ADVANCED EXERCISES SOLUTIONS
// ========================================

// Exercise 1: Greeting Generator
console.log("\n=== Advanced Exercise 1 ===");
function generateGreeting(name, timeOfDay) {
  const defaultTime = "day";
  const time = timeOfDay || defaultTime;

  if (time === "morning") return `Good morning, ${name}!`;
  if (time === "afternoon") return `Good afternoon, ${name}!`;
  if (time === "evening") return `Good evening, ${name}!`;
  return `Hello, ${name}!`;
}
console.log(generateGreeting("Alice", "morning"));
console.log(generateGreeting("Bob"));

// Exercise 2: Array Transformation Pipeline
console.log("\n=== Advanced Exercise 2 ===");
const startArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pipelineResult = startArray
  .filter(num => num > 5)
  .map(num => num * num)
  .reduce((total, num) => total + num, 0);
console.log(pipelineResult);  // 6² + 7² + 8² + 9² + 10² = 36+49+64+81+100 = 330

// Exercise 3: Object Manipulation
console.log("\n=== Advanced Exercise 3 ===");
const personObj = { name: "Alice", age: 30 };
personObj.city = "Boston";           // Dot notation
personObj["country"] = "USA";        // Bracket notation
delete personObj.age;
console.log(personObj);

// Exercise 4: Function Composition
console.log("\n=== Advanced Exercise 4 ===");
const double = x => x * 2;
const addTen = x => x + 10;
const square = x => x * x;

function compose(...functions) {
  return x => functions.reduceRight((acc, fn) => fn(acc), x);
}

const composedFunction = compose(square, addTen, double);
console.log(composedFunction(5));  // ((5 * 2) + 10)² = (10 + 10)² = 400

// Exercise 5: Array Flattening
console.log("\n=== Advanced Exercise 5 ===");
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);
console.log(flattenedArray);

// Exercise 6: String Analysis
console.log("\n=== Advanced Exercise 6 ===");
function analyzeString(str, charToCheck) {
  const vowels = "aeiouAEIOU";
  const vowelCount = str.split('').filter(char => vowels.includes(char)).length;

  return {
    length: str.length,
    vowelCount: vowelCount,
    containsChar: str.includes(charToCheck)
  };
}
console.log(analyzeString("Hello World", "o"));

// Exercise 7: Conditional Logic Challenge
console.log("\n=== Advanced Exercise 7 ===");
function classifyNumber(num) {
  if (num === 0) return "zero";
  if (num < 0) return "negative";
  if (num % 2 === 0) return "positive even";
  return "positive odd";
}
console.log(classifyNumber(8));   // positive even
console.log(classifyNumber(7));   // positive odd
console.log(classifyNumber(-5));  // negative
console.log(classifyNumber(0));   // zero

// Exercise 8: Array Sorting
console.log("\n=== Advanced Exercise 8 ===");
const randomNumbers = [3, 1, 4, 1, 5, 9, 2, 6];
const ascending = [...randomNumbers].sort((a, b) => a - b);
const descending = [...randomNumbers].sort((a, b) => b - a);
console.log(`Ascending: ${ascending}`);
console.log(`Descending: ${descending}`);

// Exercise 9: Object from Arrays
console.log("\n=== Advanced Exercise 9 ===");
const names = ["Alice", "Bob", "Charlie"];
const ages = [25, 30, 35];
const peopleObjects = names.map((name, index) => ({
  name: name,
  age: ages[index]
}));
console.log(peopleObjects);

// Exercise 10: Memoization
console.log("\n=== Advanced Exercise 10 ===");
function squareNumber(num) {
  return num * num;
}

function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("Returning cached result");
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const memoizedSquare = memoize(squareNumber);
console.log(memoizedSquare(5));  // Calculates
console.log(memoizedSquare(5));  // Returns cached
console.log(memoizedSquare(7));  // Calculates
console.log(memoizedSquare(7));  // Returns cached

// ========================================
// PRACTICAL CHALLENGES SOLUTIONS
// ========================================

// Challenge 1: Personal Information Card
console.log("\n=== Practical Challenge 1 ===");
const personalInfo = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  city: "New York"
};

function displayInfo() {
  console.log(`Name: ${personalInfo.name}`);
  console.log(`Age: ${personalInfo.age}`);
  console.log(`Email: ${personalInfo.email}`);
  console.log(`City: ${personalInfo.city}`);
}

function updateField(field, value) {
  personalInfo[field] = value;
}

displayInfo();
updateField("age", 31);
console.log("\nAfter update:");
displayInfo();

// Challenge 2: Simple Calculator
console.log("\n=== Practical Challenge 2 ===");
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) return "Error: Division by zero";
  return a / b;
}

function calculate(operation, num1, num2) {
  switch (operation) {
    case 'add': return add(num1, num2);
    case 'subtract': return subtract(num1, num2);
    case 'multiply': return multiply(num1, num2);
    case 'divide': return divide(num1, num2);
    default: return "Error: Invalid operation";
  }
}

console.log(calculate('add', 10, 5));      // 15
console.log(calculate('divide', 10, 0));   // Error message

// Challenge 3: Shopping List Manager
console.log("\n=== Practical Challenge 3 ===");
let shoppingList = [];

function addItem(item) {
  shoppingList.push(item);
  console.log(`Added: ${item}`);
}

function removeItem(item) {
  const index = shoppingList.indexOf(item);
  if (index > -1) {
    shoppingList.splice(index, 1);
    console.log(`Removed: ${item}`);
  } else {
    console.log(`${item} not found`);
  }
}

function displayItems() {
  console.log("Shopping List:", shoppingList);
}

function findItem(item) {
  const found = shoppingList.includes(item);
  console.log(`${item} is ${found ? '' : 'not '}in the list`);
  return found;
}

addItem("Milk");
addItem("Bread");
addItem("Eggs");
displayItems();
findItem("Bread");
removeItem("Bread");
displayItems();

// Challenge 4: Temperature Converter
console.log("\n=== Practical Challenge 4 ===");
function celsiusToFahrenheit(celsius) {
  return ((celsius * 9/5) + 32).toFixed(2);
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5/9).toFixed(2);
}

console.log("Celsius to Fahrenheit:");
for (let c = 0; c <= 100; c += 10) {
  console.log(`${c}°C = ${celsiusToFahrenheit(c)}°F`);
}

// Challenge 5: Grade Calculator
console.log("\n=== Practical Challenge 5 ===");
function getLetterGrade(score) {
  if (typeof score !== 'number' || score < 0 || score > 100) {
    return "Error: Invalid score";
  }
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

console.log(getLetterGrade(95));  // A
console.log(getLetterGrade(85));  // B
console.log(getLetterGrade(55));  // F
console.log(getLetterGrade(-5));  // Error

// Challenge 6: Word Counter
console.log("\n=== Practical Challenge 6 ===");
function countWords(text) {
  if (!text || text.trim() === "") return 0;
  return text.trim().split(/\s+/).length;
}

console.log(countWords("Hello World"));           // 2
console.log(countWords("  Hello   World  "));     // 2
console.log(countWords(""));                      // 0
console.log(countWords("Single"));                // 1

// Challenge 7: Array Statistics
console.log("\n=== Practical Challenge 7 ===");
function sum(numbers) {
  if (numbers.length === 0) return "Array is empty";
  return numbers.reduce((total, num) => total + num, 0);
}

function average(numbers) {
  if (numbers.length === 0) return "Array is empty";
  return sum(numbers) / numbers.length;
}

function min(numbers) {
  if (numbers.length === 0) return "Array is empty";
  return Math.min(...numbers);
}

function max(numbers) {
  if (numbers.length === 0) return "Array is empty";
  return Math.max(...numbers);
}

const testArray = [4, 8, 15, 16, 23, 42];
console.log(`Sum: ${sum(testArray)}`);
console.log(`Average: ${average(testArray)}`);
console.log(`Min: ${min(testArray)}`);
console.log(`Max: ${max(testArray)}`);

// Challenge 8: Password Strength Checker
console.log("\n=== Practical Challenge 8 ===");
function checkPasswordStrength(password) {
  if (!password || password.length < 8) return "Weak";

  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length >= 12 && hasNumber && hasSpecial) return "Very Strong";
  if (password.length >= 8 && hasNumber) return "Strong";
  if (password.length >= 8) return "Medium";

  return "Weak";
}

console.log(checkPasswordStrength("pass"));           // Weak
console.log(checkPasswordStrength("password"));       // Medium
console.log(checkPasswordStrength("password123"));    // Strong
console.log(checkPasswordStrength("Password123!"));   // Very Strong

// Challenge 9: Phone Number Formatter
console.log("\n=== Practical Challenge 9 ===");
function formatPhoneNumber(phone) {
  const digits = phone.replace(/\D/g, '');

  if (digits.length !== 10) {
    return "Error: Phone number must have 10 digits";
  }

  const areaCode = digits.slice(0, 3);
  const prefix = digits.slice(3, 6);
  const lineNumber = digits.slice(6);

  return `(${areaCode}) ${prefix}-${lineNumber}`;
}

console.log(formatPhoneNumber("1234567890"));        // (123) 456-7890
console.log(formatPhoneNumber("123-456-7890"));       // (123) 456-7890
console.log(formatPhoneNumber("(123) 456-7890"));     // (123) 456-7890
console.log(formatPhoneNumber("123 456 7890"));      // (123) 456-7890
console.log(formatPhoneNumber("12345"));             // Error

// Challenge 10: Simple Login System
console.log("\n=== Practical Challenge 10 ===");
const userCredentials = {
  username: "admin",
  password: "secret123"
};

function login(username, password) {
  if (username === userCredentials.username && password === userCredentials.password) {
    return "Login successful!";
  }
  return "Login failed: Invalid credentials";
}

console.log(login("admin", "secret123"));  // Success
console.log(login("Admin", "secret123"));  // Failed (case sensitive)
console.log(login("admin", "wrong"));     // Failed

console.log("\n=== All solutions completed! ===");
