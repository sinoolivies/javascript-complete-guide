# Theory: Control Flow

Control flow determines the order in which JavaScript code statements are executed. Without control flow, code executes linearly from top to bottom. Control flow structures allow programs to make decisions, repeat actions, and handle different scenarios.

## If/Else Statements

The if/else statement is the most basic control flow structure, allowing code to execute conditionally.

### Basic If Statement

```javascript
if (condition) {
  // Code to execute if condition is true
}
```

### If/Else Statement

```javascript
if (condition) {
  // Code if condition is true
} else {
  // Code if condition is false
}
```

### Else If Chains

```javascript
if (condition1) {
  // Code if condition1 is true
} else if (condition2) {
  // Code if condition2 is true
} else {
  // Code if all conditions are false
}
```

### Nested If Statements

```javascript
if (outerCondition) {
  if (innerCondition) {
    // Code if both conditions are true
  }
}
```

**Example:**
```javascript
let age = 18;

if (age >= 18) {
  console.log("You're an adult");
} else if (age >= 13) {
  console.log("You're a teenager");
} else {
  console.log("You're a child");
}
```

## Switch Statements

Switch statements provide a cleaner way to handle multiple conditions comparing the same value.

### Basic Switch

```javascript
switch (expression) {
  case value1:
    // Code for value1
    break;
  case value2:
    // Code for value2
    break;
  default:
    // Code if no case matches
}
```

### Switch Without Break (Fallthrough)

```javascript
switch (expression) {
  case value1:
  case value2:
    // Code for both value1 and value2
    break;
  default:
    // Code if no case matches
}
```

**Example:**
```javascript
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
```

**When to use switch vs if/else:**
- Use switch when comparing one value against multiple specific values
- Use if/else for complex conditions or ranges

## Ternary Operator

The ternary operator is a concise way to write simple if/else statements.

### Syntax

```javascript
condition ? valueIfTrue : valueIfFalse
```

### Basic Usage

```javascript
let age = 18;
let status = age >= 18 ? "adult" : "minor";
```

### Nested Ternary (Use Sparingly)

```javascript
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
```

**When to use ternary:**
- Simple conditional assignments
- Quick conditional returns
- When the logic is straightforward

**When to avoid ternary:**
- Complex nested conditions
- When if/else is more readable
- Multiple statements in each branch

## Short-Circuit Evaluation

Logical operators use short-circuit evaluation, which can be used for control flow.

### Logical AND (&&)

```javascript
condition && executeIfTrue();

// Equivalent to:
if (condition) {
  executeIfTrue();
}
```

### Logical OR (||)

```javascript
value || defaultValue;

// Equivalent to:
if (!value) {
  value = defaultValue;
}
```

### Nullish Coalescing (??)

```javascript
value ?? defaultValue;

// Only uses default if value is null or undefined
```

**Example:**
```javascript
let user = { name: "John" };
let city = user && user.address && user.address.city;
let displayName = userName || "Guest";
let count = items ?? 0;
```

## Error Handling

Errors can occur during program execution. Error handling allows graceful recovery.

### Try/Catch/Finally

```javascript
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that always executes
}
```

### Try/Catch

```javascript
try {
  let result = riskyOperation();
} catch (error) {
  console.error("An error occurred:", error.message);
}
```

### Try/Catch/Finally

```javascript
try {
  let result = riskyOperation();
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("Cleanup code");
}
```

### Throwing Errors

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}
```

**Error types:**
- `Error`: Generic error
- `TypeError`: Type-related error
- `ReferenceError`: Variable not found
- `SyntaxError`: Syntax error
- Custom errors can extend Error

## Break and Continue

These statements control loop execution.

### Break

Exits the current loop or switch statement.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;  // Exit loop when i is 5
  }
  console.log(i);
}
```

### Continue

Skips the current iteration and continues with the next.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;  // Skip even numbers
  }
  console.log(i);
}
```

### Break in Switch

```javascript
switch (value) {
  case 1:
    console.log("One");
    break;  // Prevent fallthrough
  case 2:
    console.log("Two");
    break;
}
```

## Control Flow Best Practices

### 1. Use Meaningful Conditions

```javascript
// Good
if (user.isLoggedIn && user.hasPermission) {
  // ...
}

// Bad
if (a && b) {
  // ...
}
```

### 2. Handle All Cases

```javascript
// Good
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";  // Default case
}
```

### 3. Avoid Deep Nesting

```javascript
// Good
if (!user) {
  return;
}
if (!user.isActive) {
  return;
}
// Process user

// Bad
if (user) {
  if (user.isActive) {
    if (user.hasPermission) {
      // Process user
    }
  }
}
```

### 4. Use Early Returns

```javascript
// Good
function processUser(user) {
  if (!user) return null;
  if (!user.isActive) return null;
  return processData(user);
}

// Bad
function processUser(user) {
  if (user) {
    if (user.isActive) {
      return processData(user);
    }
  }
  return null;
}
```

### 5. Handle Errors Gracefully

```javascript
// Good
try {
  const result = riskyOperation();
  return result;
} catch (error) {
  console.error("Operation failed:", error);
  return defaultValue;
}
```

## Common Patterns

### Guard Clauses

```javascript
function process(data) {
  if (!data) return;
  if (!data.isValid) return;
  // Process valid data
}
```

### Default Parameters

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
```

### Validation Chains

```javascript
function validateForm(formData) {
  if (!formData.name) return "Name required";
  if (!formData.email) return "Email required";
  if (!formData.email.includes("@")) return "Invalid email";
  return "Valid";
}
```

## Real-World Usage

Control flow is used everywhere:
- Form validation
- User authentication
- Game logic
- Data processing
- API response handling
- Error recovery

Understanding control flow deeply is essential for writing dynamic, robust JavaScript applications.
