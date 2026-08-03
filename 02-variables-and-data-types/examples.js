// ========================================
// EXAMPLE 1: let declaration and reassignment
// ========================================
let score = 10;
console.log("Initial score:", score);
score = 20;
console.log("Updated score:", score);

// ========================================
// EXAMPLE 2: const declaration
// ========================================
const PI = 3.14159;
console.log("PI:", PI);
// PI = 3.14;  // This would cause an error

// ========================================
// EXAMPLE 3: const with objects (properties can change)
// ========================================
const person = { name: "John", age: 25 };
console.log("Original:", person);
person.name = "Jane";
person.age = 26;
console.log("Modified:", person);
// person = {};  // This would cause an error

// ========================================
// EXAMPLE 4: var and its problems (function scope)
// ========================================
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log("x accessible outside if block:", x);  // 10
}
testVar();

// ========================================
// EXAMPLE 5: let block scope
// ========================================
function testLet() {
  if (true) {
    let y = 10;
  }
  // console.log(y);  // This would cause an error
}
testLet();

// ========================================
// EXAMPLE 6: String data type
// ========================================
let singleQuote = 'Hello';
let doubleQuote = "World";
let template = `Template literals`;
console.log(singleQuote, doubleQuote, template);

// ========================================
// EXAMPLE 7: Number data type
// ========================================
let integer = 42;
let floating = 3.14;
let negative = -10;
let scientific = 1.5e10;
console.log(integer, floating, negative, scientific);

// ========================================
// EXAMPLE 8: Special number values
// ========================================
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;
console.log(positiveInfinity, negativeInfinity, notANumber);

// ========================================
// EXAMPLE 9: Boolean data type
// ========================================
let isTrue = true;
let isFalse = false;
console.log(isTrue, isFalse);

// ========================================
// EXAMPLE 10: Undefined vs null
// ========================================
let undefinedVar;
let nullVar = null;
console.log("undefined:", undefinedVar);
console.log("null:", nullVar);
console.log("undefined === null:", undefinedVar === null);  // false
console.log("undefined == null:", undefinedVar == null);    // true (type coercion)

// ========================================
// EXAMPLE 11: Symbol data type
// ========================================
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log("sym1 === sym2:", sym1 === sym2);  // false

// ========================================
// EXAMPLE 12: BigInt data type
// ========================================
let bigNumber = 9007199254740991n;
let regularNumber = 9007199254740991;
console.log("BigInt:", bigNumber);
console.log("Regular:", regularNumber);
console.log("BigInt == Number:", bigNumber == regularNumber);  // true
console.log("BigInt === Number:", bigNumber === regularNumber);  // false

// ========================================
// EXAMPLE 13: Object data type
// ========================================
let user = {
  name: "John",
  age: 25,
  isAdmin: true
};
console.log(user);

// ========================================
// EXAMPLE 14: Array data type
// ========================================
let colors = ["red", "green", "blue"];
let mixed = [1, "hello", true, null];
console.log(colors, mixed);

// ========================================
// EXAMPLE 15: Function as data type
// ========================================
let greet = function(name) {
  return `Hello, ${name}`;
};
console.log(greet("Alice"));

// ========================================
// EXAMPLE 16: typeof operator
// ========================================
console.log(typeof "hello");      // "string"
console.log(typeof 42);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (known quirk)
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"

// ========================================
// EXAMPLE 17: Checking for null specifically
// ========================================
let value = null;
console.log("Is null:", value === null);
console.log("Is undefined:", value === undefined);

// ========================================
// EXAMPLE 18: Checking for array
// ========================================
let arr = [1, 2, 3];
let obj = { a: 1 };
console.log("Is array:", Array.isArray(arr));
console.log("Is array:", Array.isArray(obj));

// ========================================
// EXAMPLE 19: Explicit string conversion
// ========================================
let num = 42;
let bool = true;
console.log(String(num));        // "42"
console.log(String(bool));       // "true"
console.log(num.toString());    // "42"

// ========================================
// EXAMPLE 20: Explicit number conversion
// ========================================
let strNum = "42";
let strHello = "hello";
console.log(Number(strNum));     // 42
console.log(Number(strHello));  // NaN
console.log(parseInt("42px"));   // 42
console.log(parseFloat("3.14")); // 3.14

// ========================================
// EXAMPLE 21: Explicit boolean conversion
// ========================================
console.log(Boolean(""));         // false
console.log(Boolean("hello"));    // true
console.log(Boolean(0));          // false
console.log(Boolean(1));          // true
console.log(Boolean(null));       // false
console.log(Boolean({}));         // true
console.log(Boolean([]));         // true

// ========================================
// EXAMPLE 22: Implicit string coercion
// ========================================
let age = 25;
let message = "Age: " + age;
console.log(message);  // "Age: 25"

// ========================================
// EXAMPLE 23: Implicit numeric coercion
// ========================================
let str = "42";
let result = str * 2;
console.log(result);  // 84

// ========================================
// EXAMPLE 24: Falsy values in if statements
// ========================================
if (false) console.log("false");
if (0) console.log("0");
if ("") console.log("empty string");
if (null) console.log("null");
if (undefined) console.log("undefined");
if (NaN) console.log("NaN");
// None of these will print

// ========================================
// EXAMPLE 25: Truthy values in if statements
// ========================================
if (true) console.log("true");              // Prints
if (1) console.log("1");                    // Prints
if ("hello") console.log("hello");          // Prints
if ({}) console.log("empty object");        // Prints
if ([]) console.log("empty array");         // Prints

// ========================================
// EXAMPLE 26: Global scope
// ========================================
let globalVar = "I'm global";
function accessGlobal() {
  console.log(globalVar);  // Accessible
}
accessGlobal();

// ========================================
// EXAMPLE 27: Function scope
// ========================================
function testFunctionScope() {
  let functionVar = "I'm local";
  console.log(functionVar);  // Accessible
}
testFunctionScope();
// console.log(functionVar);  // Error: not accessible

// ========================================
// EXAMPLE 28: Block scope with let
// ========================================
if (true) {
  let blockVar = "I'm block-scoped";
  console.log(blockVar);  // Accessible
}
// console.log(blockVar);  // Error: not accessible

// ========================================
// EXAMPLE 29: var vs let in blocks
// ========================================
if (true) {
  var varScoped = "var is function-scoped";
  let letScoped = "let is block-scoped";
}
console.log(varScoped);  // Accessible
// console.log(letScoped);  // Error: not accessible

// ========================================
// EXAMPLE 30: Lexical scope
// ========================================
function outer() {
  let outerVar = "outer";
  function inner() {
    let innerVar = "inner";
    console.log(outerVar);  // Accessible
    console.log(innerVar);  // Accessible
  }
  inner();
  // console.log(innerVar);  // Error: not accessible
}
outer();

// ========================================
// EXAMPLE 31: var hoisting
// ========================================
console.log(hoistedVar);  // undefined (not an error)
var hoistedVar = "I'm hoisted";

// ========================================
// EXAMPLE 32: let temporal dead zone
// ========================================
// console.log(hoistedLet);  // ReferenceError
let hoistedLet = "I'm hoisted with TDZ";

// ========================================
// EXAMPLE 33: Function declaration hoisting
// ========================================
hoistedFunction();  // Works!
function hoistedFunction() {
  console.log("Function declaration is hoisted");
}

// ========================================
// EXAMPLE 34: Function expression not hoisted
// ========================================
// notHoisted();  // TypeError
const notHoisted = function() {
  console.log("Function expression is not hoisted");
};

// ========================================
// EXAMPLE 35: Primitive values are copied
// ========================================
let a = 10;
let b = a;
b = 20;
console.log("a:", a);  // 10 (unchanged)
console.log("b:", b);  // 20

// ========================================
// EXAMPLE 36: Object references are copied
// ========================================
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Jane";
console.log("obj1.name:", obj1.name);  // "Jane" (changed!)
console.log("obj2.name:", obj2.name);  // "Jane"

// ========================================
// EXAMPLE 37: Array references are copied
// ========================================
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("arr1:", arr1);  // [1, 2, 3, 4]
console.log("arr2:", arr2);  // [1, 2, 3, 4]

// ========================================
// EXAMPLE 38: Cloning objects to avoid reference issues
// ========================================
let original = { name: "John" };
let clone = { ...original };
clone.name = "Jane";
console.log("original.name:", original.name);  // "John"
console.log("clone.name:", clone.name);        // "Jane"

// ========================================
// EXAMPLE 39: Cloning arrays to avoid reference issues
// ========================================
let originalArr = [1, 2, 3];
let cloneArr = [...originalArr];
cloneArr.push(4);
console.log("originalArr:", originalArr);  // [1, 2, 3]
console.log("cloneArr:", cloneArr);        // [1, 2, 3, 4]

// ========================================
// EXAMPLE 40: Choosing the right data type
// ========================================
// Configuration object
const config = {
  apiUrl: "https://api.example.com",
  maxRetries: 3,
  timeout: 5000,
  debug: true
};

// User data
let currentUser = {
  id: 1,
  name: "John",
  email: "john@example.com",
  isActive: true
};

// State management
let appState = {
  isLoading: false,
  error: null,
  data: []
};

console.log("Config:", config);
console.log("User:", currentUser);
console.log("State:", appState);

console.log("\nAll examples completed!");
