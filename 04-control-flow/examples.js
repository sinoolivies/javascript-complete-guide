// ========================================
// EXAMPLE 1: Basic if statement
// ========================================
let age = 18;
if (age >= 18) {
  console.log("You're an adult");
}

// ========================================
// EXAMPLE 2: If/else statement
// ========================================
let score = 75;
if (score >= 60) {
  console.log("Passed");
} else {
  console.log("Failed");
}

// ========================================
// EXAMPLE 3: Else if chain
// ========================================
let temperature = 25;
if (temperature > 30) {
  console.log("Hot");
} else if (temperature > 20) {
  console.log("Warm");
} else if (temperature > 10) {
  console.log("Cool");
} else {
  console.log("Cold");
}

// ========================================
// EXAMPLE 4: Nested if statements
// ========================================
let isLoggedIn = true;
let hasPermission = false;
if (isLoggedIn) {
  if (hasPermission) {
    console.log("Access granted");
  } else {
    console.log("Access denied: No permission");
  }
} else {
  console.log("Access denied: Not logged in");
}

// ========================================
// EXAMPLE 5: Basic switch statement
// ========================================
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("Midweek");
}

// ========================================
// EXAMPLE 6: Switch with fallthrough
// ========================================
let num = 2;
switch (num) {
  case 1:
  case 2:
  case 3:
    console.log("Small number");
    break;
  case 4:
  case 5:
    console.log("Medium number");
    break;
  default:
    console.log("Large number");
}

// ========================================
// EXAMPLE 7: Switch with default
// ========================================
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("It's an apple");
    break;
  case "banana":
    console.log("It's a banana");
    break;
  default:
    console.log("Unknown fruit");
}

// ========================================
// EXAMPLE 8: Basic ternary operator
// ========================================
let age2 = 20;
let status = age2 >= 18 ? "adult" : "minor";
console.log(status);

// ========================================
// EXAMPLE 9: Ternary for default values
// ========================================
let userName = null;
let displayName = userName || "Guest";
console.log(displayName);

// ========================================
// EXAMPLE 10: Nested ternary
// ========================================
let score2 = 85;
let grade = score2 >= 90 ? "A" : score2 >= 80 ? "B" : score2 >= 70 ? "C" : "F";
console.log(grade);

// ========================================
// EXAMPLE 11: Short-circuit AND
// ========================================
let user = { name: "John" };
let city = user && user.address && user.address.city;
console.log(city);  // undefined (safe)

// ========================================
// EXAMPLE 12: Short-circuit OR
// ========================================
let input = "";
let value = input || "default";
console.log(value);  // "default"

// ========================================
// EXAMPLE 13: Nullish coalescing
// ========================================
let count = null;
let itemCount = count ?? 0;
console.log(itemCount);  // 0

let count2 = 0;
let itemCount2 = count2 ?? 0;
console.log(itemCount2);  // 0 (only null/undefined trigger)

// ========================================
// EXAMPLE 14: Try/catch for error handling
// ========================================
try {
  let result = JSON.parse("{ invalid json }");
} catch (error) {
  console.error("Parse error:", error.message);
}

// ========================================
// EXAMPLE 15: Try/catch/finally
// ========================================
let resource;
try {
  resource = acquireResource();
  console.log("Resource acquired");
} catch (error) {
  console.error("Failed to acquire resource");
} finally {
  console.log("Cleanup code");
}

// ========================================
// EXAMPLE 16: Throwing errors
// ========================================
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);
}

// ========================================
// EXAMPLE 17: Break in loop
// ========================================
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// ========================================
// EXAMPLE 18: Continue in loop
// ========================================
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// ========================================
// EXAMPLE 19: Guard clause
// ========================================
function processUser(user) {
  if (!user) return null;
  if (!user.isActive) return null;
  return "Processing " + user.name;
}

console.log(processUser(null));
console.log(processUser({ isActive: false, name: "John" }));
console.log(processUser({ isActive: true, name: "Jane" }));

// ========================================
// EXAMPLE 20: Early return pattern
// ========================================
function calculateDiscount(price, isMember) {
  if (!isMember) return price;
  if (price > 100) return price * 0.9;
  return price * 0.95;
}

console.log(calculateDiscount(50, false));
console.log(calculateDiscount(50, true));
console.log(calculateDiscount(150, true));

// ========================================
// EXAMPLE 21: Validation chain
// ========================================
function validateEmail(email) {
  if (!email) return "Email required";
  if (!email.includes("@")) return "Invalid email";
  if (!email.includes(".")) return "Invalid email";
  return "Valid";
}

console.log(validateEmail(""));
console.log(validateEmail("invalid"));
console.log(validateEmail("test@example.com"));

// ========================================
// EXAMPLE 22: Multiple conditions
// ========================================
let x = 10, y = 20;
if (x > 5 && y > 15) {
  console.log("Both conditions true");
}

if (x > 15 || y > 15) {
  console.log("At least one condition true");
}

// ========================================
// EXAMPLE 23: Switch with string comparison
// ========================================
let role = "admin";
switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "user":
    console.log("Limited access");
    break;
  case "guest":
    console.log("Read-only access");
    break;
  default:
    console.log("No access");
}

// ========================================
// EXAMPLE 24: Complex conditional logic
// ========================================
function canPurchase(age, hasCard, balance) {
  if (age < 18) {
    return "Too young";
  }
  if (!hasCard) {
    return "No card";
  }
  if (balance < 0) {
    return "Insufficient funds";
  }
  return "Approved";
}

console.log(canPurchase(16, true, 100));
console.log(canPurchase(20, false, 100));
console.log(canPurchase(20, true, -50));
console.log(canPurchase(20, true, 100));

// ========================================
// EXAMPLE 25: Error handling with fallback
// ========================================
function safeParseJSON(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return null;
  }
}

console.log(safeParseJSON('{"name": "John"}'));
console.log(safeParseJSON("{ invalid }"));

// ========================================
// EXAMPLE 26: Using logical operators for defaults
// ========================================
function greet(name) {
  name = name || "Guest";
  console.log(`Hello, ${name}`);
}

greet();
greet("Alice");

// ========================================
// EXAMPLE 27: Conditional property access
// ========================================
let obj = { nested: { value: 42 } };
let value = obj && obj.nested && obj.nested.value;
console.log(value);

let obj2 = { nested: null };
let value2 = obj2 && obj2.nested && obj2.nested.value;
console.log(value2);

// ========================================
// EXAMPLE 28: Switch with expressions
// ========================================
function getDayType(day) {
  switch (day) {
    case "Saturday":
    case "Sunday":
      return "Weekend";
    default:
      return "Weekday";
  }
}

console.log(getDayType("Saturday"));
console.log(getDayType("Monday"));

// ========================================
// EXAMPLE 29: Multiple error types
// ========================================
try {
  let result = null.toString();
} catch (error) {
  if (error instanceof TypeError) {
    console.error("Type error:", error.message);
  } else {
    console.error("Other error:", error.message);
  }
}

// ========================================
// EXAMPLE 30: Conditional execution with &&
// ========================================
let isValid = true;
isValid && console.log("This will print");

isValid = false;
isValid && console.log("This won't print");

// ========================================
// EXAMPLE 31: Setting defaults with ||
// ========================================
let config = {};
let timeout = config.timeout || 5000;
console.log(timeout);

// ========================================
// EXAMPLE 32: Setting defaults with ??
// ========================================
let config2 = { timeout: 0 };
let timeout2 = config2.timeout ?? 5000;
console.log(timeout2);  // 0 (only null/undefined trigger default)

// ========================================
// EXAMPLE 33: Break in nested loops
// ========================================
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outer;
    }
    console.log(`${i}, ${j}`);
  }
}

// ========================================
// EXAMPLE 34: Continue in nested loops
// ========================================
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === j) {
      continue;
    }
    console.log(`${i}, ${j}`);
  }
}

// ========================================
// EXAMPLE 35: Switch with computed cases
// ========================================
let value = 5;
switch (true) {
  case value < 0:
    console.log("Negative");
    break;
  case value === 0:
    console.log("Zero");
    break;
  case value > 0:
    console.log("Positive");
    break;
}

// ========================================
// EXAMPLE 36: Early return for validation
// ========================================
function processOrder(order) {
  if (!order) return { error: "No order" };
  if (!order.items) return { error: "No items" };
  if (order.items.length === 0) return { error: "Empty order" };
  return { success: true, total: calculateTotal(order.items) };
}

function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

console.log(processOrder(null));
console.log(processOrder({}));
console.log(processOrder({ items: [] }));
console.log(processOrder({ items: [{ price: 10 }, { price: 20 }] }));

// ========================================
// EXAMPLE 37: Try/catch with async operations
// ========================================
function fetchData() {
  throw new Error("Network error");
}

try {
  let data = fetchData();
  console.log(data);
} catch (error) {
  console.error("Failed to fetch data:", error.message);
}

// ========================================
// EXAMPLE 38: Conditional object property
// ========================================
let isAdmin = true;
let userConfig = {
  name: "John",
  ...(isAdmin && { admin: true })
};
console.log(userConfig);

// ========================================
// EXAMPLE 39: Switch returning values
// ========================================
function getOperatorSymbol(operator) {
  switch (operator) {
    case "add": return "+";
    case "subtract": return "-";
    case "multiply": return "*";
    case "divide": return "/";
    default: return "?";
  }
}

console.log(getOperatorSymbol("add"));
console.log(getOperatorSymbol("unknown"));

// ========================================
// EXAMPLE 40: Complex decision tree
// ========================================
function determinePlan(score, income) {
  if (score < 600) {
    return "Basic Plan";
  }
  if (score >= 600 && score < 700) {
    return income > 50000 ? "Standard Plan" : "Basic Plan";
  }
  if (score >= 700) {
    return income > 100000 ? "Premium Plan" : "Standard Plan";
  }
  return "Basic Plan";
}

console.log(determinePlan(550, 60000));
console.log(determinePlan(650, 40000));
console.log(determinePlan(650, 60000));
console.log(determinePlan(750, 120000));

console.log("\nAll examples completed!");
