# Best Practices: Control Flow

Follow these professional practices for using JavaScript control flow effectively.

## If/Else Statements

### 1. Use Guard Clauses

**Good:**
```javascript
function process(data) {
  if (!data) return null;
  if (!data.isValid) return null;
  return processData(data);
}
```

**Bad:**
```javascript
function process(data) {
  if (data) {
    if (data.isValid) {
      return processData(data);
    }
  }
  return null;
}
```

**Why:** Guard clauses reduce nesting and improve readability.

### 2. Use Early Returns

**Good:**
```javascript
function validate(user) {
  if (!user) return false;
  if (!user.email) return false;
  if (!user.age) return false;
  return true;
}
```

**Bad:**
```javascript
function validate(user) {
  if (user) {
    if (user.email) {
      if (user.age) {
        return true;
      }
    }
  }
  return false;
}
```

**Why:** Early returns make logic clearer and reduce nesting.

### 3. Handle All Cases

**Good:**
```javascript
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

**Bad:**
```javascript
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
}
// Missing cases
```

**Why:** Handling all cases prevents undefined behavior.

## Switch Statements

### 4. Always Use Break

**Good:**
```javascript
switch (day) {
  case "Monday":
    console.log("Monday");
    break;
  case "Tuesday":
    console.log("Tuesday");
    break;
}
```

**Bad:**
```javascript
switch (day) {
  case "Monday":
    console.log("Monday");
  case "Tuesday":
    console.log("Tuesday");
}
```

**Why:** Prevents accidental fallthrough.

### 5. Use Default Case

**Good:**
```javascript
switch (value) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  default:
    console.log("Unknown");
}
```

**Bad:**
```javascript
switch (value) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
}
```

**Why:** Handles unexpected values gracefully.

### 6. Use Switch for Multiple Value Comparisons

**Good:**
```javascript
switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    return "Weekday";
  case "Saturday":
  case "Sunday":
    return "Weekend";
}
```

**Bad:**
```javascript
if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
  return "Weekday";
}
```

**Why:** Switch is cleaner for multiple value comparisons.

## Ternary Operator

### 7. Use Ternary for Simple Conditions

**Good:**
```javascript
let status = age >= 18 ? "adult" : "minor";
let message = error ? "Error occurred" : "Success";
```

**Bad:**
```javascript
let status;
if (age >= 18) {
  status = "adult";
} else {
  status = "minor";
}
```

**Why:** Ternary is concise for simple if/else.

### 8. Avoid Nested Ternary

**Good:**
```javascript
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else {
  grade = "C";
}
```

**Bad:**
```javascript
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
```

**Why:** Nested ternary is hard to read and debug.

## Short-Circuit Evaluation

### 9. Use && for Conditional Execution

**Good:**
```javascript
user && user.address && console.log(user.address.city);
```

**Bad:**
```javascript
if (user) {
  if (user.address) {
    console.log(user.address.city);
  }
}
```

**Why:** Short-circuit is concise and idiomatic.

### 10. Use ?? for Null/Undefined Defaults

**Good:**
```javascript
let count = items.length ?? 0;
let name = userName ?? "Anonymous";
```

**Bad:**
```javascript
let count = items.length || 0;  // Problem if length is 0
let name = userName || "Anonymous";  // Problem if name is ""
```

**Why:** `??` only triggers on null/undefined, not other falsy values.

## Error Handling

### 11. Always Handle Errors

**Good:**
```javascript
try {
  const result = riskyOperation();
  return result;
} catch (error) {
  console.error("Operation failed:", error);
  return defaultValue;
}
```

**Bad:**
```javascript
try {
  const result = riskyOperation();
  return result;
} catch (error) {
  // Empty catch block
}
```

**Why:** Proper error handling prevents silent failures.

### 12. Use Finally for Cleanup

**Good:**
```javascript
let resource;
try {
  resource = acquireResource();
  processResource(resource);
} catch (error) {
  console.error(error);
} finally {
  releaseResource(resource);
}
```

**Bad:**
```javascript
let resource;
try {
  resource = acquireResource();
  processResource(resource);
} catch (error) {
  console.error(error);
}
// Resource might not be released
```

**Why:** Finally ensures cleanup always happens.

### 13. Throw Error Objects

**Good:**
```javascript
throw new Error("Invalid input");
throw new TypeError("Expected number");
```

**Bad:**
```javascript
throw "Invalid input";
throw 400;
```

**Why:** Error objects provide stack traces and error types.

## Break and Continue

### 14. Use Break for Early Exit

**Good:**
```javascript
for (let i = 0; i < 10; i++) {
  if (found) {
    break;
  }
  // Search logic
}
```

**Bad:**
```javascript
for (let i = 0; i < 10; i++) {
  if (found) {
    // Continue looping unnecessarily
  }
  // Search logic
}
```

**Why:** Break improves efficiency when searching.

### 15. Use Continue for Skipping

**Good:**
```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);  // Only odd numbers
}
```

**Bad:**
```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    // Do nothing
  } else {
    console.log(i);
  }
}
```

**Why:** Continue makes skip logic clearer.

## General Principles

### 16. Use Meaningful Condition Names

**Good:**
```javascript
if (isAuthenticated && hasPermission) {
  // ...
}
```

**Bad:**
```javascript
if (a && b) {
  // ...
}
```

**Why:** Meaningful names make code self-documenting.

### 17. Keep Conditions Simple

**Good:**
```javascript
const isValidUser = user && user.isActive && user.isVerified;
if (isValidUser) {
  // ...
}
```

**Bad:**
```javascript
if (user && user.isActive && user.isVerified && user.hasPermission && user.lastLogin < 30) {
  // ...
}
```

**Why:** Complex conditions are hard to read and debug.

### 18. Validate Input Early

**Good:**
```javascript
function process(data) {
  if (!data) return;
  if (!data.isValid) return;
  // Process valid data
}
```

**Bad:**
```javascript
function process(data) {
  // Process data
  // Might crash if data is invalid
}
```

**Why:** Early validation prevents runtime errors.

### 19. Use Constants for Magic Values

**Good:**
```javascript
const MAX_ATTEMPTS = 3;
const TIMEOUT = 5000;

if (attempts >= MAX_ATTEMPTS) {
  // ...
}
```

**Bad:**
```javascript
if (attempts >= 3) {
  // ...
}
```

**Why:** Constants make code more maintainable.

### 20. Consider Extracting Complex Logic

**Good:**
```javascript
if (isEligibleForDiscount(user, purchase)) {
  applyDiscount(purchase);
}
```

**Bad:**
```javascript
if (user.age >= 65 && user.isMember && purchase.total > 100 && purchase.date < lastYear) {
  applyDiscount(purchase);
}
```

**Why:** Extracted functions are more readable and testable.

## Modern JavaScript

### 21. Use Optional Chaining

**Good:**
```javascript
let city = user?.address?.city;
```

**Bad:**
```javascript
let city = user && user.address && user.address.city;
```

**Why:** Optional chaining is cleaner and safer.

### 22. Use Nullish Coalescing

**Good:**
```javascript
let count = items?.length ?? 0;
```

**Bad:**
```javascript
let count = items && items.length || 0;
```

**Why:** Nullish coalescing handles null/undefined specifically.

## Testing

### 23. Test All Code Paths

**Good:**
```javascript
describe('Grade Calculator', () => {
  it('returns A for 90+', () => {
    expect(calculateGrade(95)).toBe('A');
  });
  it('returns F for below 60', () => {
    expect(calculateGrade(50)).toBe('F');
  });
});
```

**Bad:**
```javascript
// Only testing happy path
```

**Why:** Testing all paths ensures correctness.

## Summary

Following these best practices will help you:
- Write clearer, more readable code
- Avoid common control flow bugs
- Handle errors gracefully
- Write more maintainable code
- Use modern JavaScript features effectively

**Key Principles:**
1. Use guard clauses to reduce nesting
2. Handle all cases
3. Use appropriate structures for the task
4. Handle errors gracefully
5. Keep conditions simple
6. Extract complex logic
7. Test all code paths
8. Use modern features when appropriate

Consistency is key—pick a style and stick with it across your projects!
