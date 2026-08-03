// ========================================
// EXAMPLE 1: Basic arithmetic operators
// ========================================
let a = 10, b = 3;
console.log("Addition:", a + b);      // 13
console.log("Subtraction:", a - b);   // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);     // 3.333...
console.log("Modulus:", a % b);      // 1
console.log("Exponentiation:", a ** b); // 1000

// ========================================
// EXAMPLE 2: Increment operators
// ========================================
let x = 5;
console.log("Postfix x++:", x++);    // 5 (returns 5, then increments)
console.log("After postfix:", x);    // 6
console.log("Prefix ++x:", ++x);     // 7 (increments first, then returns)
console.log("After prefix:", x);     // 7

// ========================================
// EXAMPLE 3: Decrement operators
// ========================================
let y = 5;
console.log("Postfix y--:", y--);    // 5
console.log("After postfix:", y);    // 4
console.log("Prefix --y:", --y);     // 3
console.log("After prefix:", y);     // 3

// ========================================
// EXAMPLE 4: Unary plus and minus
// ========================================
let str = "5";
console.log("Unary plus:", +str);    // 5 (converts to number)
console.log("Unary minus:", -str);   // -5 (converts and negates)

// ========================================
// EXAMPLE 5: Strict equality
// ========================================
console.log("5 === 5:", 5 === 5);           // true
console.log("5 === '5':", 5 === "5");       // false
console.log("null === null:", null === null); // true
console.log("null === undefined:", null === undefined); // false

// ========================================
// EXAMPLE 6: Loose equality
// ========================================
console.log("5 == '5':", 5 == "5");         // true
console.log("null == undefined:", null == undefined); // true
console.log("0 == false:", 0 == false);     // true
console.log("'' == false:", "" == false);   // true

// ========================================
// EXAMPLE 7: Comparison operators
// ========================================
console.log("5 > 3:", 5 > 3);               // true
console.log("5 < 3:", 5 < 3);               // false
console.log("5 >= 5:", 5 >= 5);             // true
console.log("5 <= 5:", 5 <= 5);             // true

// ========================================
// EXAMPLE 8: String comparison
// ========================================
console.log("'5' > 3:", "5" > 3);           // true (string to number)
console.log("'a' > 'b':", "a" > "b");       // false (lexicographical)
console.log("'apple' > 'banana':", "apple" > "banana"); // false

// ========================================
// EXAMPLE 9: Logical AND
// ========================================
console.log("true && true:", true && true);   // true
console.log("true && false:", true && false); // false
console.log("false && true:", false && true); // false
console.log("false && false:", false && false); // false

// ========================================
// EXAMPLE 10: Logical AND short-circuit
// ========================================
console.log("true && 'hello':", true && "hello");   // "hello"
console.log("false && 'hello':", false && "hello");  // false
console.log("0 && 'hello':", 0 && "hello");          // 0
console.log("'hello' && 'world':", "hello" && "world"); // "world"

// ========================================
// EXAMPLE 11: Logical OR
// ========================================
console.log("true || true:", true || true);   // true
console.log("true || false:", true || false); // true
console.log("false || true:", false || true); // true
console.log("false || false:", false || false); // false

// ========================================
// EXAMPLE 12: Logical OR short-circuit
// ========================================
console.log("true || 'hello':", true || "hello");   // true
console.log("false || 'hello':", false || "hello");  // "hello"
console.log("0 || 'hello':", 0 || "hello");          // "hello"
console.log("'' || 0:", "" || 0);                    // 0

// ========================================
// EXAMPLE 13: Logical NOT
// ========================================
console.log("!true:", !true);           // false
console.log("!false:", !false);         // true
console.log("!0:", !0);                 // true
console.log("! 'hello':", !"hello");    // false

// ========================================
// EXAMPLE 14: Double negation
// ========================================
console.log("!!'hello':", !!'hello');   // true
console.log("!!0:", !!0);               // false
console.log("!!null:", !!null);         // false

// ========================================
// EXAMPLE 15: Nullish coalescing
// ========================================
console.log("null ?? 'default':", null ?? "default");       // "default"
console.log("undefined ?? 'default':", undefined ?? "default"); // "default"
console.log("0 ?? 'default':", 0 ?? "default");             // 0
console.log("'' ?? 'default':", "" ?? "default");           // ""

// ========================================
// EXAMPLE 16: Assignment operators
// ========================================
let num = 10;
num += 5;    console.log("+=:", num);   // 15
num -= 5;    console.log("-=:", num);   // 10
num *= 2;    console.log("*=:", num);   // 20
num /= 2;    console.log("/=:", num);   // 10
num %= 3;    console.log("%=:", num);   // 1
num **= 2;   console.log("**=:", num);  // 1

// ========================================
// EXAMPLE 17: Bitwise AND
// ========================================
let bitA = 5;  // 0101
let bitB = 3;  // 0011
console.log("5 & 3:", bitA & bitB);    // 1 (0001)

// ========================================
// EXAMPLE 18: Bitwise OR
// ========================================
console.log("5 | 3:", bitA | bitB);    // 7 (0111)

// ========================================
// EXAMPLE 19: Bitwise XOR
// ========================================
console.log("5 ^ 3:", bitA ^ bitB);    // 6 (0110)

// ========================================
// EXAMPLE 20: Bitwise NOT
// ========================================
console.log("~5:", ~bitA);              // -6

// ========================================
// EXAMPLE 21: Bitwise left shift
// ========================================
console.log("5 << 1:", bitA << 1);      // 10 (1010)

// ========================================
// EXAMPLE 22: Bitwise right shift
// ========================================
console.log("5 >> 1:", bitA >> 1);      // 2 (0010)

// ========================================
// EXAMPLE 23: Unsigned right shift
// ========================================
console.log("5 >>> 1:", bitA >>> 1);    // 2

// ========================================
// EXAMPLE 24: Ternary operator
// ========================================
let age = 18;
let status = age >= 18 ? "adult" : "minor";
console.log("Status:", status);          // "adult"

// ========================================
// EXAMPLE 25: Nested ternary
// ========================================
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log("Grade:", grade);            // "B"

// ========================================
// EXAMPLE 26: Operator precedence
// ========================================
console.log("2 + 3 * 4:", 2 + 3 * 4);    // 14 (multiplication first)
console.log("(2 + 3) * 4:", (2 + 3) * 4); // 20 (parentheses first)

// ========================================
// EXAMPLE 27: String coercion with +
// ========================================
console.log("'5' + 5:", "5" + 5);        // "55"
console.log("'hello' + 5:", "hello" + 5); // "hello5"

// ========================================
// EXAMPLE 28: Numeric coercion
// ========================================
console.log("'5' - 2:", "5" - 2);        // 3
console.log("'5' * 2:", "5" * 2);        // 10
console.log("'5' / 2:", "5" / 2);        // 2.5

// ========================================
// EXAMPLE 29: Boolean coercion in if
// ========================================
if ("hello") {
  console.log("'hello' is truthy");     // Prints
}
if (0) {
  console.log("0 is truthy");           // Doesn't print
}

// ========================================
// EXAMPLE 30: Default value pattern
// ========================================
let userName = null;
let displayName = userName || "Guest";
console.log("Display name:", displayName); // "Guest"

// ========================================
// EXAMPLE 31: Combining comparison and logical
// ========================================
let temperature = 25;
let isComfortable = temperature >= 20 && temperature <= 30;
console.log("Is comfortable:", isComfortable); // true

// ========================================
// EXAMPLE 32: Complex expression
// ========================================
let price = 100;
let quantity = 5;
let discount = 0.1;
let total = (price * quantity) * (1 - discount);
console.log("Total:", total);            // 450

// ========================================
// EXAMPLE 33: Using typeof with operators
// ========================================
let value = "5";
console.log("typeof +value:", typeof +value); // "number"
console.log("typeof value + 5:", typeof (value + 5)); // "string"

// ========================================
// EXAMPLE 34: Precedence with logical operators
// ========================================
console.log("5 > 3 && 2 < 4:", 5 > 3 && 2 < 4); // true
console.log("5 > 3 || 2 > 4:", 5 > 3 || 2 > 4); // true

// ========================================
// EXAMPLE 35: Chaining comparisons
// ========================================
let num = 10;
let inRange = num >= 5 && num <= 15;
console.log("In range:", inRange);      // true

// ========================================
// EXAMPLE 36: Using operators for validation
// ========================================
function validateAge(age) {
  return typeof age === 'number' && age >= 0 && age <= 120;
}
console.log("Valid age 25:", validateAge(25)); // true
console.log("Valid age -5:", validateAge(-5)); // false

// ========================================
// EXAMPLE 37: Safe property access with &&
// ========================================
let user = { name: "John" };
let city = user && user.address && user.address.city;
console.log("City:", city);              // undefined (safe)

// ========================================
// EXAMPLE 38: Optional chaining (modern)
// ========================================
let city2 = user?.address?.city;
console.log("City with optional chaining:", city2); // undefined

// ========================================
// EXAMPLE 39: Combining multiple conditions
// ========================================
let isLoggedIn = true;
let hasPermission = true;
let isAdmin = false;
let canAccess = isLoggedIn && (hasPermission || isAdmin);
console.log("Can access:", canAccess);   // true

// ========================================
// EXAMPLE 40: Operator in practical calculation
// ========================================
function calculateBMI(weight, height) {
  return weight / (height * height);
}
let bmi = calculateBMI(70, 1.75);
console.log("BMI:", bmi.toFixed(2));    // 22.86

console.log("\nAll examples completed!");
