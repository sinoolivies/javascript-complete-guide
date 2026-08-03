// ========================================
// BEGINNER EXERCISES SOLUTIONS
// ========================================

// Exercise 1: Variable Declaration
console.log("=== Exercise 1 ===");
let myName = "John";
const myAge = 25;
console.log("Name:", myName);
console.log("Age:", myAge);

// Exercise 2: String Variables
console.log("\n=== Exercise 2 ===");
const favoriteColor = "blue";
const favoriteFood = "pizza";
const combined = `My favorite color is ${favoriteColor} and food is ${favoriteFood}`;
console.log(combined);

// Exercise 3: Number Operations
console.log("\n=== Exercise 3 ===");
let num1 = 10;
let num2 = 5;
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// Exercise 4: Boolean Logic
console.log("\n=== Exercise 4 ===");
const isRaining = true;
const hasUmbrella = false;
if (isRaining && hasUmbrella) {
  console.log("Stay dry!");
} else if (isRaining && !hasUmbrella) {
  console.log("You'll get wet!");
} else {
  console.log("Enjoy the weather!");
}

// Exercise 5: Array Creation
console.log("\n=== Exercise 5 ===");
const numbers = [1, 2, 3, 4, 5];
const strings = ["apple", "banana", "orange"];
console.log("Numbers length:", numbers.length);
console.log("Strings length:", strings.length);
console.log("First number:", numbers[0]);
console.log("Last number:", numbers[numbers.length - 1]);
console.log("First string:", strings[0]);
console.log("Last string:", strings[strings.length - 1]);

// Exercise 6: Object Creation
console.log("\n=== Exercise 6 ===");
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020
};
console.log("Make:", car.make);
console.log("Model:", car.model);
console.log("Year:", car.year);
car.color = "red";
console.log("Updated car:", car);

// Exercise 7: Type Checking
console.log("\n=== Exercise 7 ===");
const strVar = "hello";
const numVar = 42;
const boolVar = true;
const objVar = { a: 1 };
const arrVar = [1, 2, 3];
console.log("String:", typeof strVar);
console.log("Number:", typeof numVar);
console.log("Boolean:", typeof boolVar);
console.log("Object:", typeof objVar);
console.log("Array:", typeof arrVar);

// Exercise 8: Undefined vs Null
console.log("\n=== Exercise 8 ===");
let undefinedVar;
let nullVar = null;
console.log("undefined == null:", undefinedVar == null);    // true
console.log("undefined === null:", undefinedVar === null);  // false

// Exercise 9: String to Number
console.log("\n=== Exercise 9 ===");
const strNumber = "42";
const convertedNumber = Number(strNumber);
const parsedInt = parseInt(strNumber);
console.log("Number():", convertedNumber);
console.log("parseInt():", parsedInt);

// Exercise 10: Number to String
console.log("\n=== Exercise 10 ===");
const number = 42;
const stringConversion = String(number);
const toStringConversion = number.toString();
console.log("String():", stringConversion);
console.log("toString():", toStringConversion);

// ========================================
// INTERMEDIATE EXERCISES SOLUTIONS
// ========================================

// Exercise 1: Scope Understanding
console.log("\n=== Intermediate Exercise 1 ===");
let globalVar = "global";
function testScope() {
  let globalVar = "local";
  console.log("Inside function:", globalVar);
}
testScope();
console.log("Outside function:", globalVar);

// Exercise 2: Block Scope
console.log("\n=== Intermediate Exercise 2 ===");
if (true) {
  let letVar = "let scoped";
  var varVar = "var scoped";
}
// console.log(letVar);  // Error: letVar is not defined
console.log("varVar accessible:", varVar);

// Exercise 3: Const with Objects
console.log("\n=== Intermediate Exercise 3 ===");
const constObj = { name: "John", age: 25 };
constObj.name = "Jane";  // Works: modifying property
console.log("Modified property:", constObj);
// constObj = {};  // Error: cannot reassign const

// Exercise 4: Type Coercion
console.log("\n=== Intermediate Exercise 4 ===");
const str = "5";
const num = 5;
console.log("Addition:", str + num);     // "55" (string coercion)
console.log("Multiplication:", str * num); // 25 (number coercion)
console.log("Loose equality:", str == num);   // true
console.log("Strict equality:", str === num); // false

// Exercise 5: Truthy/Falsy
console.log("\n=== Intermediate Exercise 5 ===");
// Falsy values
console.log("false:", Boolean(false));      // false
console.log("0:", Boolean(0));              // false
console.log("'':", Boolean(""));            // false
console.log("null:", Boolean(null));        // false
console.log("undefined:", Boolean(undefined)); // false
console.log("NaN:", Boolean(NaN));          // false

// Truthy values
console.log("true:", Boolean(true));        // true
console.log("1:", Boolean(1));              // true
console.log("'hello':", Boolean("hello"));  // true
console.log("{}:", Boolean({}));            // true
console.log("[]:", Boolean([]));            // true

// Exercise 6: Array Reference
console.log("\n=== Intermediate Exercise 6 ===");
const originalArray = [1, 2, 3];
const referenceArray = originalArray;
referenceArray.push(4);
console.log("Original:", originalArray);  // [1, 2, 3, 4]
console.log("Reference:", referenceArray); // [1, 2, 3, 4]
// Both arrays are modified because they reference the same array

// Exercise 7: Object Reference
console.log("\n=== Intermediate Exercise 7 ===");
const originalObject = { name: "John" };
const referenceObject = originalObject;
referenceObject.name = "Jane";
console.log("Original:", originalObject);  // { name: "Jane" }
console.log("Reference:", referenceObject); // { name: "Jane" }
// Both objects are modified because they reference the same object

// Exercise 8: Type Conversion Challenges
console.log("\n=== Intermediate Exercise 8 ===");
console.log("'hello' to number:", Number("hello"));      // NaN
console.log("'' to number:", Number(""));                // 0
console.log("null to number:", Number(null));            // 0
console.log("undefined to number:", Number(undefined)); // NaN

// Exercise 9: Symbol Usage
console.log("\n=== Intermediate Exercise 9 ===");
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log("Symbols equal:", sym1 === sym2);  // false
const obj = {};
obj[sym1] = "value1";
obj[sym2] = "value2";
console.log("obj[sym1]:", obj[sym1]);  // "value1"
console.log("obj[sym2]:", obj[sym2]);  // "value2"

// Exercise 10: BigInt Operations
console.log("\n=== Intermediate Exercise 10 ===");
const bigIntNum = 9007199254740991n;
const regularNum = 9007199254740991;
// const errorResult = bigIntNum + regularNum;  // Error: can't mix BigInt and Number
const bigIntResult = bigIntNum + 100n;
console.log("BigInt addition:", bigIntResult);

// ========================================
// ADVANCED EXERCISES SOLUTIONS
// ========================================

// Exercise 1: Deep Clone Function
console.log("\n=== Advanced Exercise 1 ===");
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item));
  }
  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}

const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
cloned.b.c = 3;
console.log("Original:", original);  // { a: 1, b: { c: 2 } }
console.log("Cloned:", cloned);      // { a: 1, b: { c: 3 } }

// Exercise 2: Type Checker Function
console.log("\n=== Advanced Exercise 2 ===");
function accurateType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  if (typeof value === 'object') return 'object';
  if (typeof value === 'function') return 'function';
  return typeof value;
}

console.log("accurateType([]):", accurateType([]));           // "array"
console.log("accurateType({}):", accurateType({}));           // "object"
console.log("accurateType(null):", accurateType(null));       // "null"
console.log("accurateType(function):", accurateType(function(){})); // "function"

// Exercise 3: Safe Type Conversion
console.log("\n=== Advanced Exercise 3 ===");
function safeStringToNumber(str) {
  if (str === null || str === undefined) return null;
  if (typeof str !== 'string') return null;
  const trimmed = str.trim();
  if (trimmed === '') return null;
  const num = Number(trimmed);
  return isNaN(num) ? null : num;
}

console.log("safeStringToNumber('42'):", safeStringToNumber('42'));   // 42
console.log("safeStringToNumber('hello'):", safeStringToNumber('hello')); // null
console.log("safeStringToNumber(''):", safeStringToNumber(''));       // null

// Exercise 4: Scope Chain Demonstration
console.log("\n=== Advanced Exercise 4 ===");
function level1() {
  const var1 = "level1";
  function level2() {
    const var2 = "level2";
    function level3() {
      const var3 = "level3";
      console.log("var3:", var3);  // accessible
      console.log("var2:", var2);  // accessible (from outer scope)
      console.log("var1:", var1);  // accessible (from outer scope)
    }
    level3();
    // console.log(var3);  // Error: not accessible
  }
  level2();
}
level1();

// Exercise 5: Hoisting Analysis
console.log("\n=== Advanced Exercise 5 ===");
// var hoisting
console.log("varHoisted:", varHoisted);  // undefined
var varHoisted = "var value";

// let temporal dead zone
// console.log(letHoisted);  // ReferenceError
let letHoisted = "let value";

// function declaration hoisting
hoistedFunc();  // Works
function hoistedFunc() {
  console.log("Function declaration hoisted");
}

// function expression not hoisted
// exprFunc();  // TypeError
const exprFunc = function() {
  console.log("Function expression not hoisted");
};

// Exercise 6: Immutable Object Pattern
console.log("\n=== Advanced Exercise 6 ===");
function createImmutable(obj) {
  return Object.freeze(obj);
}

const immutableObj = createImmutable({ name: "John", age: 25 });
try {
  immutableObj.name = "Jane";
} catch (e) {
  console.log("Cannot modify frozen object");
}
console.log("immutableObj:", immutableObj);

// Exercise 7: Custom Type Coercion
console.log("\n=== Advanced Exercise 7 ===");
const customObj1 = {
  valueOf() {
    return 42;
  }
};

const customObj2 = {
  toString() {
    return "hello";
  }
};

console.log("customObj1 in numeric context:", customObj1 + 10);  // 52
console.log("customObj2 in string context:", "Message: " + customObj2);  // "Message: hello"

// Exercise 8: Memory Management Simulation
console.log("\n=== Advanced Exercise 8 ===");
let largeArray = new Array(1000000).fill("data");
let ref1 = largeArray;
let ref2 = largeArray;

console.log("References created");
ref1 = null;  // Remove one reference
console.log("ref1 removed");
ref2 = null;  // Remove second reference
console.log("ref2 removed - largeArray now eligible for garbage collection");
largeArray = null;  // Remove original reference
console.log("All references removed");

// Exercise 9: Variable Naming Convention
console.log("\n=== Advanced Exercise 9 ===");
// camelCase for variables
let userName = "John";
let isLoggedIn = true;

// PascalCase for constructors
function User(name) {
  this.name = name;
}

// UPPER_CASE for constants
const MAX_USERS = 100;
const API_URL = "https://api.example.com";

// _prefix for "private" variables
let _internalState = "private";

console.log("Conventions demonstrated");

// Exercise 10: Type System Analysis
console.log("\n=== Advanced Exercise 10 ===");
function comprehensiveTypeTest() {
  const results = {
    primitives: {},
    objects: {},
    conversions: {},
    coercion: {}
  };

  // Test primitives
  results.primitives.string = typeof "hello";
  results.primitives.number = typeof 42;
  results.primitives.boolean = typeof true;
  results.primitives.undefined = typeof undefined;
  results.primitives.symbol = typeof Symbol();
  results.primitives.bigint = typeof 42n;

  // Test objects
  results.objects.object = typeof {};
  results.objects.array = typeof [];
  results.objects.function = typeof function(){};
  results.objects.null = typeof null;

  // Test conversions
  results.conversions.stringToNumber = Number("42");
  results.conversions.numberToString = String(42);
  results.conversions.stringToBoolean = Boolean("hello");

  // Test coercion
  results.coercion.stringAddNumber = "5" + 5;
  results.coercion.stringMultiplyNumber = "5" * 5;
  results.coercion.looseEquality = 5 == "5";
  results.coercion.strictEquality = 5 === "5";

  return results;
}

console.log(comprehensiveTypeTest());

// ========================================
// PRACTICAL CHALLENGES SOLUTIONS
// ========================================

// Challenge 1: User Profile System
console.log("\n=== Practical Challenge 1 ===");
const userProfile = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  isActive: true,
  preferences: {
    theme: "dark",
    notifications: true
  }
};

function displayProfile(user) {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Age: ${user.age}`);
  console.log(`Active: ${user.isActive}`);
  console.log(`Theme: ${user.preferences.theme}`);
  console.log(`Notifications: ${user.preferences.notifications}`);
}

function updateUser(user, field, value) {
  if (field.includes('.')) {
    const [parent, child] = field.split('.');
    user[parent][child] = value;
  } else {
    user[field] = value;
  }
}

displayProfile(userProfile);
updateUser(userProfile, "age", 31);
updateUser(userProfile, "preferences.theme", "light");
console.log("\nAfter update:");
displayProfile(userProfile);

// Challenge 2: Product Inventory
console.log("\n=== Practical Challenge 2 ===");
let inventory = [
  { id: 1, name: "Laptop", price: 999.99, quantity: 10, inStock: true, category: "Electronics" },
  { id: 2, name: "Book", price: 19.99, quantity: 50, inStock: true, category: "Books" }
];

function addProduct(products, product) {
  products.push(product);
}

function removeProduct(products, productId) {
  const index = products.findIndex(p => p.id === productId);
  if (index > -1) {
    products.splice(index, 1);
  }
}

function updateQuantity(products, productId, newQuantity) {
  const product = products.find(p => p.id === productId);
  if (product) {
    product.quantity = newQuantity;
    product.inStock = newQuantity > 0;
  }
}

function checkStock(products, productId) {
  const product = products.find(p => p.id === productId);
  return product ? product.inStock : false;
}

addProduct(inventory, { id: 3, name: "Mouse", price: 29.99, quantity: 5, inStock: true, category: "Electronics" });
console.log("After adding product:", inventory);
updateQuantity(inventory, 1, 0);
console.log("After updating quantity:", inventory);
console.log("Product 1 in stock:", checkStock(inventory, 1));

// Challenge 3: Configuration Manager
console.log("\n=== Practical Challenge 3 ===");
const config = {
  apiUrl: "https://api.example.com",
  maxRetries: 3,
  timeout: 5000,
  debugMode: false,
  features: ["authentication", "logging", "caching"]
};

function validateConfig(cfg) {
  return cfg.apiUrl && typeof cfg.maxRetries === 'number' && typeof cfg.timeout === 'number';
}

function getConfig(cfg, key) {
  return cfg[key];
}

console.log("Config valid:", validateConfig(config));
console.log("API URL:", getConfig(config, "apiUrl"));

// Challenge 4: Student Grade System
console.log("\n=== Practical Challenge 4 ===");
const student = {
  id: 1,
  name: "Alice",
  grades: [85, 90, 78, 92, 88],
  gpa: 0,
  isGraduated: false
};

function calculateGPA(grades) {
  if (grades.length === 0) return 0;
  const sum = grades.reduce((total, grade) => total + grade, 0);
  return (sum / grades.length) / 25; // Convert to 4.0 scale
}

function addGrade(student, grade) {
  student.grades.push(grade);
  student.gpa = calculateGPA(student.grades);
  student.isGraduated = student.gpa >= 2.0;
}

function checkGraduation(student) {
  return student.isGraduated;
}

function displayReport(student) {
  console.log(`Student: ${student.name}`);
  console.log(`Grades: ${student.grades.join(', ')}`);
  console.log(`GPA: ${student.gpa.toFixed(2)}`);
  console.log(`Graduated: ${student.isGraduated ? 'Yes' : 'No'}`);
}

addGrade(student, 95);
displayReport(student);

// Challenge 5: Shopping Cart
console.log("\n=== Practical Challenge 5 ===");
let cart = [];

function addItem(cart, item) {
  const existing = cart.find(i => i.productId === item.productId);
  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }
}

function removeItem(cart, productId) {
  const index = cart.findIndex(i => i.productId === productId);
  if (index > -1) {
    cart.splice(index, 1);
  }
}

function updateQuantity(cart, productId, quantity) {
  const item = cart.find(i => i.productId === productId);
  if (item) {
    item.quantity = quantity;
  }
}

function calculateTotal(cart) {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function applyDiscount(cart, discountPercentage) {
  const total = calculateTotal(cart);
  return total * (1 - discountPercentage / 100);
}

addItem(cart, { productId: 1, name: "Laptop", price: 999.99, quantity: 1 });
addItem(cart, { productId: 2, name: "Mouse", price: 29.99, quantity: 2 });
console.log("Cart:", cart);
console.log("Total:", calculateTotal(cart));
console.log("With 10% discount:", applyDiscount(cart, 10));

// Challenge 6: Type-Safe Input Handler
console.log("\n=== Practical Challenge 6 ===");
function processInput(input, expectedType) {
  const actualType = Array.isArray(input) ? 'array' : typeof input;

  if (actualType !== expectedType) {
    try {
      switch (expectedType) {
        case 'string':
          return String(input);
        case 'number':
          const num = Number(input);
          return isNaN(num) ? `Error: Cannot convert to number` : num;
        case 'boolean':
          return Boolean(input);
        case 'array':
          return Array.isArray(input) ? input : `Error: Not an array`;
        case 'object':
          return input === null ? `Error: Cannot convert null to object` : input;
        default:
          return `Error: Unknown type`;
      }
    } catch (e) {
      return `Error: Conversion failed`;
    }
  }

  // Process based on type
  switch (expectedType) {
    case 'string':
      return input.trim();
    case 'number':
      return input;
    case 'boolean':
      return input;
    case 'array':
      return input;
    case 'object':
      return input;
    default:
      return input;
  }
}

console.log(processInput("  hello  ", "string"));    // "hello"
console.log(processInput("42", "number"));           // 42
console.log(processInput("hello", "number"));        // Error message
console.log(processInput([1, 2, 3], "array"));       // [1, 2, 3]

// Challenge 7: State Management
console.log("\n=== Practical Challenge 7 ===");
let appState = {
  isLoading: false,
  error: null,
  data: [],
  user: null
};

function getState() {
  return { ...appState };
}

function setState(newState) {
  appState = { ...appState, ...newState };
}

function resetState() {
  appState = {
    isLoading: false,
    error: null,
    data: [],
    user: null
  };
}

function getValue(key) {
  return appState[key];
}

setState({ isLoading: true });
console.log("State:", getState());
setValue("data", [1, 2, 3]);
console.log("Data:", getValue("data"));

// Challenge 8: Data Sanitizer
console.log("\n=== Practical Challenge 8 ===");
function sanitizeString(str, maxLength = 1000) {
  if (typeof str !== 'string') return str;
  let sanitized = str.replace(/<[^>]*>/g, ''); // Remove HTML tags
  sanitized = sanitized.trim();
  return sanitized.length > maxLength ? sanitized.substring(0, maxLength) : sanitized;
}

function sanitizeNumber(num, min = -Infinity, max = Infinity) {
  if (typeof num !== 'number') return NaN;
  if (isNaN(num)) return NaN;
  return Math.max(min, Math.min(max, num));
}

function sanitizeBoolean(value) {
  return Boolean(value);
}

function sanitizeArray(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.map(item => {
    if (typeof item === 'string') return sanitizeString(item);
    if (typeof item === 'number') return sanitizeNumber(item);
    return item;
  });
}

function sanitizeObject(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;
  const sanitized = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      sanitized[key] = obj[key];
    }
  }
  return sanitized;
}

function sanitize(data, type) {
  switch (type) {
    case 'string': return sanitizeString(data);
    case 'number': return sanitizeNumber(data);
    case 'boolean': return sanitizeBoolean(data);
    case 'array': return sanitizeArray(data);
    case 'object': return sanitizeObject(data);
    default: return data;
  }
}

console.log(sanitize("<script>alert('xss')</script> hello", "string"));
console.log(sanitize(150, "number", 0, 100));

// Challenge 9: Data Cloning Utility
console.log("\n=== Practical Challenge 9 ===");
function clonePrimitive(value) {
  return value;
}

function cloneArray(arr) {
  return arr.map(item => {
    if (typeof item === 'object' && item !== null) {
      return Array.isArray(item) ? cloneArray(item) : cloneObject(item);
    }
    return clonePrimitive(item);
  });
}

function cloneObject(obj) {
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (typeof value === 'object' && value !== null) {
        cloned[key] = Array.isArray(value) ? cloneArray(value) : cloneObject(value);
      } else {
        cloned[key] = clonePrimitive(value);
      }
    }
  }
  return cloned;
}

function deepClone(data) {
  if (data === null || typeof data !== 'object') {
    return clonePrimitive(data);
  }
  if (Array.isArray(data)) {
    return cloneArray(data);
  }
  return cloneObject(data);
}

const originalComplex = { a: 1, b: [2, 3], c: { d: 4 } };
const clonedComplex = deepClone(originalComplex);
clonedComplex.b[0] = 99;
console.log("Original:", originalComplex);
console.log("Cloned:", clonedComplex);

// Challenge 10: Type Conversion Validator
console.log("\n=== Practical Challenge 10 ===");
function safeConvert(value, targetType) {
  const currentType = typeof value;

  if (currentType === targetType) {
    return { success: true, value: value, warning: null };
  }

  try {
    let converted;
    let warning = null;

    switch (targetType) {
      case 'string':
        converted = String(value);
        if (currentType === 'object' && value !== null) {
          warning = "Object converted to string representation";
        }
        break;

      case 'number':
        converted = Number(value);
        if (isNaN(converted)) {
          return { success: false, value: value, error: "Cannot convert to number" };
        }
        if (currentType === 'string' && value.includes('.')) {
          warning = "String with decimal point converted to number";
        }
        break;

      case 'boolean':
        converted = Boolean(value);
        if (currentType === 'string' && value !== 'true' && value !== 'false') {
          warning = "Non-boolean string converted to boolean";
        }
        break;

      default:
        return { success: false, value: value, error: "Unsupported target type" };
    }

    return { success: true, value: converted, warning: warning };

  } catch (e) {
    return { success: false, value: value, error: "Conversion failed: " + e.message };
  }
}

console.log(safeConvert("42", "number"));
console.log(safeConvert("hello", "number"));
console.log(safeConvert(42, "string"));
console.log(safeConvert("true", "boolean"));

console.log("\n=== All solutions completed! ===");
