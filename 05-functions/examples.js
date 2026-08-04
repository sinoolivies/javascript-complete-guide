// ========================================
// EXAMPLE 1: Function declaration
// ========================================
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// ========================================
// EXAMPLE 2: Function expression
// ========================================
const greet2 = function(name) {
  return `Hello, ${name}!`;
};
console.log(greet2("Bob"));

// ========================================
// EXAMPLE 3: Arrow function
// ========================================
const greet3 = name => `Hello, ${name}!`;
console.log(greet3("Charlie"));

// ========================================
// EXAMPLE 4: Arrow function with multiple parameters
// ========================================
const add = (a, b) => a + b;
console.log(add(5, 3));

// ========================================
// EXAMPLE 5: Arrow function with multiple statements
// ========================================
const calculate = (a, b) => {
  const sum = a + b;
  return sum * 2;
};
console.log(calculate(5, 3));

// ========================================
// EXAMPLE 6: Default parameters
// ========================================
function greetWithDefault(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greetWithDefault());
console.log(greetWithDefault("Alice"));

// ========================================
// EXAMPLE 7: Rest parameters
// ========================================
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));

// ========================================
// EXAMPLE 8: No return value
// ========================================
function log(message) {
  console.log(message);
}
const result = log("Hello");
console.log("Result:", result);  // undefined

// ========================================
// EXAMPLE 9: Early return
// ========================================
function process(data) {
  if (!data) return null;
  if (!data.isValid) return null;
  return "Processed: " + data.value;
}
console.log(process(null));
console.log(process({ isValid: true, value: 42 }));

// ========================================
// EXAMPLE 10: Function scope
// ========================================
function scopeExample() {
  const local = "local variable";
  console.log(local);
}
scopeExample();
// console.log(local);  // Error

// ========================================
// EXAMPLE 11: Lexical scope
// ========================================
function outer() {
  const outerVar = "outer";
  function inner() {
    console.log(outerVar);
  }
  inner();
}
outer();

// ========================================
// EXAMPLE 12: Closure
// ========================================
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// ========================================
// EXAMPLE 13: this in regular function
// ========================================
const obj = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, ${this.name}`);
  }
};
obj.greet();

// ========================================
// EXAMPLE 14: this in arrow function
// ========================================
const obj2 = {
  name: "Bob",
  greet: () => {
    console.log(`Hello, ${this.name}`);  // undefined
  }
};
obj2.greet();

// ========================================
// EXAMPLE 15: Higher-order function
// ========================================
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log);

// ========================================
// EXAMPLE 16: Function returning function
// ========================================
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}
const double = createMultiplier(2);
console.log(double(5));

// ========================================
// EXAMPLE 17: Callback function
// ========================================
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 100);
}
fetchData(console.log);

// ========================================
// EXAMPLE 18: IIFE
// ========================================
(function() {
  console.log("IIFE executed");
})();

// ========================================
// EXAMPLE 19: IIFE with parameters
// ========================================
(function(name) {
  console.log(`Hello, ${name}`);
})("Alice");

// ========================================
// EXAMPLE 20: Destructuring parameters
// ========================================
function greetUser({ name, age }) {
  console.log(`Hello ${name}, you are ${age}`);
}
greetUser({ name: "Alice", age: 25 });

// ========================================
// EXAMPLE 21: Array destructuring parameters
// ========================================
function coordinates([x, y]) {
  console.log(`X: ${x}, Y: ${y}`);
}
coordinates([10, 20]);

// ========================================
// EXAMPLE 22: Function hoisting
// ========================================
hoistedFunction();  // Works
function hoistedFunction() {
  console.log("Hoisted function");
}

// ========================================
// EXAMPLE 23: Function expression not hoisted
// ========================================
// notHoisted();  // Error
const notHoisted = function() {
  console.log("Not hoisted");
};

// ========================================
// EXAMPLE 24: Recursion
// ========================================
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

// ========================================
// EXAMPLE 25: Memoization
// ========================================
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));  // From cache

// ========================================
// EXAMPLE 26: Pure function
// ========================================
function pureAdd(a, b) {
  return a + b;
}
console.log(pureAdd(5, 3));

// ========================================
// EXAMPLE 27: Impure function
// ========================================
let counter = 0;
function impureIncrement() {
  counter++;
  return counter;
}
console.log(impureIncrement());
console.log(impureIncrement());

// ========================================
// EXAMPLE 28: Function as object method
// ========================================
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};
console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));

// ========================================
// EXAMPLE 29: Arrow function as method
// ========================================
const calculator2 = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};
console.log(calculator2.add(5, 3));

// ========================================
// EXAMPLE 30: Function constructor
// ========================================
function Person(name) {
  this.name = name;
}
const person = new Person("Alice");
console.log(person.name);

// ========================================
// EXAMPLE 31: Call method
// ========================================
function greet3(greeting) {
  console.log(`${greeting}, ${this.name}`);
}
const person2 = { name: "Alice" };
greet3.call(person2, "Hello");

// ========================================
// EXAMPLE 32: Apply method
// ========================================
function sum4(a, b) {
  return a + b;
}
console.log(sum4.apply(null, [5, 3]));

// ========================================
// EXAMPLE 33: Bind method
// ========================================
const person3 = { name: "Alice" };
const boundGreet = greet3.bind(person3);
boundGreet("Hi");

// ========================================
// EXAMPLE 34: Generator function
// ========================================
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}
const generator = generateNumbers();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// ========================================
// EXAMPLE 35: Async function
// ========================================
async function asyncGreet(name) {
  return `Hello, ${name}!`;
}
asyncGreet("Alice").then(console.log);

// ========================================
// EXAMPLE 36: Function with multiple returns
// ========================================
function getStatus(score) {
  if (score >= 90) return "Excellent";
  if (score >= 70) return "Good";
  if (score >= 50) return "Average";
  return "Poor";
}
console.log(getStatus(85));

// ========================================
// EXAMPLE 37: Validation function
// ========================================
function validateEmail(email) {
  if (!email) return false;
  if (!email.includes("@")) return false;
  if (!email.includes(".")) return false;
  return true;
}
console.log(validateEmail("test@example.com"));
console.log(validateEmail("invalid"));

// ========================================
// EXAMPLE 38: Currying
// ========================================
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}
const add5 = curriedAdd(5);
console.log(add5(3));

// ========================================
// EXAMPLE 39: Composition
// ========================================
function compose(...functions) {
  return function(value) {
    return functions.reduceRight((acc, fn) => fn(acc), value);
  };
}

const double = x => x * 2;
const square = x => x * x;
const composed = compose(square, double);
console.log(composed(5));  // ((5 * 2) * 2) = 100

// ========================================
// EXAMPLE 40: Practical example: Calculator
// ========================================
function createCalculator() {
  let result = 0;
  return {
    add: function(num) {
      result += num;
      return this;
    },
    subtract: function(num) {
      result -= num;
      return this;
    },
    multiply: function(num) {
      result *= num;
      return this;
    },
    getResult: function() {
      return result;
    }
  };
}

const calc = createCalculator();
console.log(calc.add(5).subtract(2).multiply(3).getResult());

console.log("\nAll examples completed!");
