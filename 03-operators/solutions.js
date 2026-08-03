// ========================================
// BEGINNER EXERCISES SOLUTIONS
// ========================================

// Exercise 1: Basic Arithmetic
console.log("=== Exercise 1 ===");
let num1 = 10, num2 = 3;
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);

// Exercise 2: Increment/Decrement
console.log("\n=== Exercise 2 ===");
let counter = 5;
console.log("Postfix:", counter++);  // 5
console.log("After:", counter);       // 6
console.log("Prefix:", ++counter);   // 7
console.log("After:", counter);       // 7
console.log("Postfix decrement:", counter--);  // 7
console.log("After:", counter);       // 6
console.log("Prefix decrement:", --counter);   // 5
console.log("After:", counter);       // 5

// Exercise 3: Comparison Practice
console.log("\n=== Exercise 3 ===");
console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);
console.log("5 >= 5:", 5 >= 5);
console.log("5 <= 5:", 5 <= 5);
console.log("5 === 3:", 5 === 3);
console.log("5 !== 3:", 5 !== 3);
console.log("5 == '5':", 5 == "5");
console.log("5 === '5':", 5 === "5");

// Exercise 4: Logical Operators
console.log("\n=== Exercise 4 ===");
console.log("true && true:", true && true);
console.log("true && false:", true && false);
console.log("false && true:", false && true);
console.log("false && false:", false && false);
console.log("true || true:", true || true);
console.log("true || false:", true || false);
console.log("false || true:", false || true);
console.log("false || false:", false || false);
console.log("!true:", !true);
console.log("!false:", !false);

// Exercise 5: Assignment Operators
console.log("\n=== Exercise 5 ===");
let value = 10;
value += 5;    console.log("+=:", value);
value -= 5;    console.log("-=:", value);
value *= 2;    console.log("*=:", value);
value /= 2;    console.log("/=:", value);
value %= 3;    console.log("%=:", value);
value **= 2;   console.log("**=:", value);

// Exercise 6: Ternary Operator
console.log("\n=== Exercise 6 ===");
let age = 18;
let status = age >= 18 ? "adult" : "minor";
console.log("Status:", status);

// Exercise 7: String vs Number Addition
console.log("\n=== Exercise 7 ===");
console.log("'5' + 5:", "5" + 5);        // "55" (string coercion)
console.log("'hello' + 'world':", "hello" + "world"); // "helloworld"

// Exercise 8: Type Coercion
console.log("\n=== Exercise 8 ===");
console.log("10 - '5':", 10 - "5");      // 5 (numeric coercion)
console.log("'3' * 4:", "3" * 4);        // 12
console.log("'10' / 2:", "10" / 2);      // 5

// Exercise 9: Default Values
console.log("\n=== Exercise 9 ===");
let userName = null;
let displayName = userName || "Guest";
console.log("With null:", displayName);  // "Guest"
userName = "John";
displayName = userName || "Guest";
console.log("With value:", displayName);  // "John"

// Exercise 10: Simple Expression
console.log("\n=== Exercise 10 ===");
console.log("(5 + 3) * 2:", (5 + 3) * 2);  // 16 (parentheses first)
console.log("5 + 3 * 2:", 5 + 3 * 2);      // 11 (multiplication first)

// ========================================
// INTERMEDIATE EXERCISES SOLUTIONS
// ========================================

// Exercise 1: Complex Arithmetic
console.log("\n=== Intermediate Exercise 1 ===");
function rectangleArea(length, width) {
  return length * width;
}
function circleArea(radius) {
  return Math.PI * radius * radius;
}
function hypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}
console.log("Rectangle area:", rectangleArea(5, 3));
console.log("Circle area:", circleArea(5).toFixed(2));
console.log("Hypotenuse:", hypotenuse(3, 4));

// Exercise 2: BMI Calculator
console.log("\n=== Intermediate Exercise 2 ===");
function calculateBMI(weight, height) {
  return weight / (height * height);
}
function getBMICategory(bmi) {
  if (bmi < 18.5) return "underweight";
  if (bmi < 25) return "normal";
  if (bmi < 30) return "overweight";
  return "obese";
}
let bmi = calculateBMI(70, 1.75);
console.log("BMI:", bmi.toFixed(2));
console.log("Category:", getBMICategory(bmi));

// Exercise 3: Grade Calculator
console.log("\n=== Intermediate Exercise 3 ===");
function getLetterGrade(score) {
  if (typeof score !== 'number' || score < 0 || score > 100) {
    return "Invalid score";
  }
  return score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
}
console.log("Grade 85:", getLetterGrade(85));
console.log("Grade 95:", getLetterGrade(95));
console.log("Grade -5:", getLetterGrade(-5));

// Exercise 4: Age Validator
console.log("\n=== Intermediate Exercise 4 ===");
function validateAge(age) {
  return typeof age === 'number' && age >= 0 && age <= 120;
}
console.log("Valid 25:", validateAge(25));
console.log("Valid -5:", validateAge(-5));
console.log("Valid 150:", validateAge(150));

// Exercise 5: Temperature Conversion
console.log("\n=== Intermediate Exercise 5 ===");
function celsiusToFahrenheit(c) {
  return (c * 9/5) + 32;
}
function fahrenheitToCelsius(f) {
  return (f - 32) * 5/9;
}
console.log("0°C to F:", celsiusToFahrenheit(0));
console.log("32°F to C:", fahrenheitToCelsius(32));

// Exercise 6: Leap Year Checker
console.log("\n=== Intermediate Exercise 6 ===");
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("2000 leap year:", isLeapYear(2000));
console.log("1900 leap year:", isLeapYear(1900));
console.log("2024 leap year:", isLeapYear(2024));

// Exercise 7: Discount Calculator
console.log("\n=== Intermediate Exercise 7 ===");
function calculateDiscountedPrice(price, discountPercent) {
  if (price < 0 || discountPercent < 0 || discountPercent > 100) {
    return null;
  }
  return price * (1 - discountPercent / 100);
}
console.log("Discount 100 by 10%:", calculateDiscountedPrice(100, 10));
console.log("Discount 100 by 110%:", calculateDiscountedPrice(100, 110));

// Exercise 8: Range Checker
console.log("\n=== Intermediate Exercise 8 ===");
function inRange(num, min, max) {
  return num >= min && num <= max;
}
console.log("10 in 5-15:", inRange(10, 5, 15));
console.log("20 in 5-15:", inRange(20, 5, 15));

// Exercise 9: Even/Odd Checker
console.log("\n=== Intermediate Exercise 9 ===");
function evenOrOdd(num) {
  return num % 2 === 0 ? "even" : "odd";
}
console.log("4:", evenOrOdd(4));
console.log("7:", evenOrOdd(7));

// Exercise 10: Complex Boolean Expression
console.log("\n=== Intermediate Exercise 10 ===");
function canAccess(isLoggedIn, hasPermission, isAdmin) {
  return isLoggedIn && (hasPermission || isAdmin);
}
console.log("Access true,true,false:", canAccess(true, true, false));
console.log("Access true,false,true:", canAccess(true, false, true));
console.log("Access false,true,true:", canAccess(false, true, true));

// ========================================
// ADVANCED EXERCISES SOLUTIONS
// ========================================

// Exercise 1: Bit Manipulation
console.log("\n=== Advanced Exercise 1 ===");
function isEvenBitwise(num) {
  return (num & 1) === 0;
}
function swapXOR(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return [a, b];
}
function isPowerOfTwo(num) {
  return num > 0 && (num & (num - 1)) === 0;
}
console.log("4 even bitwise:", isEvenBitwise(4));
console.log("Swap 5,3:", swapXOR(5, 3));
console.log("8 power of 2:", isPowerOfTwo(8));
console.log("6 power of 2:", isPowerOfTwo(6));

// Exercise 2: Operator Precedence
console.log("\n=== Advanced Exercise 2 ===");
let complexExpr = 2 + 3 * 4 ** 2 / 8 - 1;
console.log("2 + 3 * 4 ** 2 / 8 - 1:", complexExpr);
// Evaluation: 4 ** 2 = 16, 3 * 16 = 48, 48 / 8 = 6, 2 + 6 = 8, 8 - 1 = 7

// Exercise 3: Custom Comparison
console.log("\n=== Advanced Exercise 3 ===");
function compareByProperty(a, b, prop) {
  if (a[prop] < b[prop]) return -1;
  if (a[prop] > b[prop]) return 1;
  return 0;
}
let obj1 = { name: "Alice", age: 25 };
let obj2 = { name: "Bob", age: 30 };
console.log("Compare by age:", compareByProperty(obj1, obj2, "age"));

// Exercise 4: Expression Parser
console.log("\n=== Advanced Exercise 4 ===");
function evaluateSimpleExpression(expr) {
  try {
    return eval(expr);
  } catch (e) {
    return "Invalid expression";
  }
}
console.log("Evaluate '2 + 3 * 4':", evaluateSimpleExpression("2 + 3 * 4"));
console.log("Evaluate '(2 + 3) * 4':", evaluateSimpleExpression("(2 + 3) * 4"));

// Exercise 5: Safe Division
console.log("\n=== Advanced Exercise 5 ===");
function safeDivide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return { error: "Both arguments must be numbers" };
  }
  if (b === 0) {
    return { error: "Division by zero" };
  }
  return { result: a / b };
}
console.log("Safe divide 10/2:", safeDivide(10, 2));
console.log("Safe divide 10/0:", safeDivide(10, 0));
console.log("Safe divide '10'/2:", safeDivide("10", 2));

// Exercise 6: Compound Interest Calculator
console.log("\n=== Advanced Exercise 6 ===");
function calculateCompoundInterest(principal, rate, time, compounds) {
  if (principal <= 0 || rate < 0 || time <= 0 || compounds <= 0) {
    return null;
  }
  return principal * Math.pow((1 + rate / 100 / compounds), compounds * time);
}
console.log("Compound interest:", calculateCompoundInterest(1000, 5, 10, 12).toFixed(2));

// Exercise 7: Quadratic Equation Solver
console.log("\n=== Advanced Exercise 7 ===");
function solveQuadratic(a, b, c) {
  if (a === 0) {
    return { error: "Coefficient 'a' cannot be zero" };
  }
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return { error: "No real solutions" };
  }
  const sqrtDiscriminant = Math.sqrt(discriminant);
  const x1 = (-b + sqrtDiscriminant) / (2 * a);
  const x2 = (-b - sqrtDiscriminant) / (2 * a);
  return { x1, x2 };
}
console.log("Solve x² - 5x + 6 = 0:", solveQuadratic(1, -5, 6));

// Exercise 8: Complex Validation
console.log("\n=== Advanced Exercise 8 ===");
function validatePassword(password) {
  const errors = [];
  if (password.length < 8) errors.push("Must be 8+ characters");
  if (!/[A-Z]/.test(password)) errors.push("Must have uppercase");
  if (!/[a-z]/.test(password)) errors.push("Must have lowercase");
  if (!/\d/.test(password)) errors.push("Must have number");
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push("Must have special char");
  return errors.length === 0 ? { valid: true } : { valid: false, errors };
}
console.log("Validate 'Pass123!':", validatePassword("Pass123!"));
console.log("Validate 'pass':", validatePassword("pass"));

// Exercise 9: Time Calculator
console.log("\n=== Advanced Exercise 9 ===");
function formatTimeDifference(ms1, ms2) {
  const diff = Math.abs(ms2 - ms1);
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  return `${days}d ${hours % 24}h ${minutes % 60}m ${seconds % 60}s`;
}
console.log("Time difference:", formatTimeDifference(Date.now(), Date.now() + 90061000));

// Exercise 10: Expression Optimizer
console.log("\n=== Advanced Exercise 10 ===");
function optimizeExpression(expr) {
  try {
    const result = eval(expr);
    return result;
  } catch (e) {
    return expr;
  }
}
console.log("Optimize '2 + 3 * 4':", optimizeExpression("2 + 3 * 4"));
console.log("Optimize '5 + 5':", optimizeExpression("5 + 5"));

// ========================================
// PRACTICAL CHALLENGES SOLUTIONS
// ========================================

// Challenge 1: Shopping Cart Calculator
console.log("\n=== Practical Challenge 1 ===");
function calculateSubtotal(cart) {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}
function applyDiscount(subtotal, threshold, discount) {
  return subtotal >= threshold ? subtotal * (1 - discount / 100) : subtotal;
}
function addTax(amount, taxRate) {
  return amount * (1 + taxRate / 100);
}
function calculateTotal(cart, threshold = 100, discount = 10, taxRate = 8) {
  const subtotal = calculateSubtotal(cart);
  const discounted = applyDiscount(subtotal, threshold, discount);
  const total = addTax(discounted, taxRate);
  return total.toFixed(2);
}
const cart = [
  { price: 50, quantity: 2 },
  { price: 30, quantity: 1 }
];
console.log("Cart total:", calculateTotal(cart));

// Challenge 2: Temperature Converter
console.log("\n=== Practical Challenge 2 ===");
function cToF(c) { return (c * 9/5) + 32; }
function fToC(f) { return (f - 32) * 5/9; }
function cToK(c) { return c + 273.15; }
function kToC(k) { return k - 273.15; }
function convertTemperature(value, from, to) {
  const conversions = {
    'C': { 'F': cToF, 'K': cToK },
    'F': { 'C': fToC, 'K': (f) => cToK(fToC(f)) },
    'K': { 'C': kToC, 'F': (k) => cToF(kToC(k)) }
  };
  if (from === to) return value;
  if (!conversions[from] || !conversions[from][to]) {
    return "Invalid conversion";
  }
  return conversions[from][to](value).toFixed(2);
}
console.log("0°C to F:", convertTemperature(0, 'C', 'F'));
console.log("32°F to C:", convertTemperature(32, 'F', 'C'));

// Challenge 3: Loan Calculator
console.log("\n=== Practical Challenge 3 ===");
function calculateMonthlyPayment(principal, annualRate, years) {
  if (principal <= 0 || years <= 0) return null;
  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;
  if (monthlyRate === 0) return principal / months;
  return principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
}
function calculateTotalPayment(monthlyPayment, months) {
  return monthlyPayment * months;
}
function calculateTotalInterest(totalPayment, principal) {
  return totalPayment - principal;
}
function generateLoanReport(principal, annualRate, years) {
  const monthlyPayment = calculateMonthlyPayment(principal, annualRate, years);
  const months = years * 12;
  const totalPayment = calculateTotalPayment(monthlyPayment, months);
  const totalInterest = calculateTotalInterest(totalPayment, principal);
  return { monthlyPayment, totalPayment, totalInterest };
}
console.log("Loan report:", generateLoanReport(100000, 5, 30));

// Challenge 4: Game Score Calculator
console.log("\n=== Practical Challenge 4 ===");
function calculateBaseScore(achievements) {
  return achievements.reduce((total, ach) => total + ach.points, 0);
}
function applyDifficultyMultiplier(score, difficulty) {
  const multipliers = { easy: 1, normal: 1.5, hard: 2 };
  return score * (multipliers[difficulty] || 1);
}
function calculateTimeBonus(baseTime, actualTime) {
  if (actualTime >= baseTime) return 0;
  return Math.floor((baseTime - actualTime) / 10) * 100;
}
function applyPenalties(score, mistakes) {
  return score - (mistakes * 50);
}
function calculateFinalScore(gameData) {
  let score = calculateBaseScore(gameData.achievements);
  score = applyDifficultyMultiplier(score, gameData.difficulty);
  score += calculateTimeBonus(gameData.baseTime, gameData.actualTime);
  score = applyPenalties(score, gameData.mistakes);
  return Math.max(0, score);
}
function determineRank(score) {
  if (score >= 1000) return "S";
  if (score >= 800) return "A";
  if (score >= 600) return "B";
  if (score >= 400) return "C";
  return "D";
}
const gameData = {
  achievements: [{ points: 100 }, { points: 200 }],
  difficulty: "normal",
  baseTime: 60,
  actualTime: 45,
  mistakes: 1
};
const finalScore = calculateFinalScore(gameData);
console.log("Final score:", finalScore);
console.log("Rank:", determineRank(finalScore));

// Challenge 5: Data Validation System
console.log("\n=== Practical Challenge 5 ===");
function validateAge(age) {
  return typeof age === 'number' && age >= 0 && age <= 120;
}
function validateEmail(email) {
  return typeof email === 'string' && email.includes('@') && email.includes('.');
}
function validatePhone(phone) {
  return typeof phone === 'string' && phone.replace(/\D/g, '').length === 10;
}
function validatePassword(password) {
  return typeof password === 'string' && password.length >= 8 &&
         /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);
}
function validateAll(userData) {
  return {
    age: validateAge(userData.age),
    email: validateEmail(userData.email),
    phone: validatePhone(userData.phone),
    password: validatePassword(userData.password)
  };
}
console.log("Validation:", validateAll({
  age: 25,
  email: "test@example.com",
  phone: "1234567890",
  password: "Password123"
}));

// Challenge 6: Scientific Calculator
console.log("\n=== Practical Challenge 6 ===");
function calculate(operation, a, b) {
  const operations = {
    '+': () => a + b,
    '-': () => a - b,
    '*': () => a * b,
    '/': () => b !== 0 ? a / b : 'Division by zero',
    '%': () => a % b,
    '**': () => Math.pow(a, b),
    'sqrt': () => Math.sqrt(a),
    'sin': () => Math.sin(a),
    'cos': () => Math.cos(a),
    'tan': () => Math.tan(a),
    'log': () => Math.log(a),
    'log10': () => Math.log10(a)
  };
  if (!operations[operation]) return 'Invalid operation';
  return operations[operation]();
}
console.log("Calculate 5 + 3:", calculate('+', 5, 3));
console.log("Calculate sqrt 16:", calculate('sqrt', 16));

// Challenge 7: Speed Calculator
console.log("\n=== Practical Challenge 7 ===");
function calculateSpeed(distance, time) {
  return time !== 0 ? distance / time : 'Time cannot be zero';
}
function calculateTime(distance, speed) {
  return speed !== 0 ? distance / speed : 'Speed cannot be zero';
}
function calculateDistance(speed, time) {
  return speed * time;
}
function convertSpeed(value, from, to) {
  const conversions = {
    'mph': { 'kph': (v) => v * 1.60934, 'mps': (v) => v * 0.44704 },
    'kph': { 'mph': (v) => v / 1.60934, 'mps': (v) => v * 0.27778 },
    'mps': { 'mph': (v) => v / 0.44704, 'kph': (v) => v / 0.27778 }
  };
  if (from === to) return value;
  return conversions[from][to](value).toFixed(2);
}
console.log("Speed 100km in 2h:", calculateSpeed(100, 2));
console.log("Convert 60 mph to kph:", convertSpeed(60, 'mph', 'kph'));

// Challenge 8: Percentage Calculator
console.log("\n=== Practical Challenge 8 ===");
function percentageOf(percent, total) {
  return total !== 0 ? (percent / 100) * total : 'Total cannot be zero';
}
function whatPercentage(part, total) {
  return total !== 0 ? (part / total) * 100 : 'Total cannot be zero';
}
function percentageChange(original, newValue) {
  return original !== 0 ? ((newValue - original) / original) * 100 : 'Original cannot be zero';
}
function percentageDifference(value1, value2) {
  const avg = (value1 + value2) / 2;
  return avg !== 0 ? (Math.abs(value1 - value2) / avg) * 100 : 'Average cannot be zero';
}
function percentageCalculator(type, value1, value2) {
  const operations = {
    'of': percentageOf,
    'what': whatPercentage,
    'change': percentageChange,
    'difference': percentageDifference
  };
  return operations[type](value1, value2);
}
console.log("20% of 100:", percentageCalculator('of', 20, 100));
console.log("What % is 25 of 100:", percentageCalculator('what', 25, 100));

// Challenge 9: Investment Calculator
console.log("\n=== Practical Challenge 9 ===");
function calculateFutureValue(principal, rate, time, compounds) {
  return principal * Math.pow((1 + rate / 100 / compounds), compounds * time);
}
function calculateRequiredInvestment(goal, rate, time, compounds) {
  return goal / Math.pow((1 + rate / 100 / compounds), compounds * time);
}
function calculateTimeToGoal(principal, goal, rate, compounds) {
  return Math.log(goal / principal) / (compounds * Math.log(1 + rate / 100 / compounds));
}
function compareInvestments(scenarios) {
  return scenarios.map(scenario => ({
    ...scenario,
    futureValue: calculateFutureValue(scenario.principal, scenario.rate, scenario.time, scenario.compounds)
  }));
}
console.log("Future value:", calculateFutureValue(1000, 5, 10, 12).toFixed(2));
console.log("Required investment:", calculateRequiredInvestment(10000, 5, 10, 12).toFixed(2));

// Challenge 10: Expression Evaluator
console.log("\n=== Practical Challenge 10 ===");
function validateExpression(expr) {
  const allowedChars = /^[0-9+\-*/%().\s**]+$/;
  return allowedChars.test(expr);
}
function evaluateExpression(expr) {
  if (!validateExpression(expr)) {
    return 'Invalid characters in expression';
  }
  try {
    return eval(expr);
  } catch (e) {
    return 'Invalid expression';
  }
}
console.log("Evaluate '2 + 3 * 4':", evaluateExpression("2 + 3 * 4"));
console.log("Evaluate '(2 + 3) * 4':", evaluateExpression("(2 + 3) * 4"));
console.log("Evaluate '2 + abc':", evaluateExpression("2 + abc"));

console.log("\n=== All solutions completed! ===");
