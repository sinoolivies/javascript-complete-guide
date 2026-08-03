# Common Mistakes: Control Flow

Learn from these common errors that beginners make with JavaScript control flow.

## 1. Confusing Assignment (=) with Comparison (===)

### The Mistake
```javascript
if (age = 18) {
  console.log("This always runs!");
}
```

### The Problem
- `=` assigns a value, it doesn't compare
- The assignment always returns a truthy value
- The condition is always true

### The Fix
```javascript
if (age === 18) {
  console.log("Age is exactly 18");
}
```

## 2. Forgetting Break in Switch

### The Mistake
```javascript
switch (day) {
  case "Monday":
    console.log("Monday");
  case "Tuesday":
    console.log("Tuesday");
}
```

### The Problem
- Without break, execution "falls through" to next case
- Both Monday and Tuesday will print
- Can cause unexpected behavior

### The Fix
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

## 3. Not Handling All Cases

### The Mistake
```javascript
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
}
// What about scores below 80?
```

### The Problem
- Not all possible conditions are handled
- Variables might be undefined
- Unpredictable behavior

### The Fix
```javascript
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else {
  grade = "F";  // Default case
}
```

## 4. Deep Nesting

### The Mistake
```javascript
if (user) {
  if (user.isActive) {
    if (user.hasPermission) {
      if (user.isVerified) {
        // Process user
      }
    }
  }
}
```

### The Problem
- Hard to read and understand
- Difficult to debug
- Hard to maintain

### The Fix
```javascript
if (!user) return;
if (!user.isActive) return;
if (!user.hasPermission) return;
if (!user.isVerified) return;
// Process user
```

## 5. Using Ternary for Complex Logic

### The Mistake
```javascript
let result = condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value4;
```

### The Problem
- Very hard to read
- Easy to make precedence errors
- Difficult to debug

### The Fix
```javascript
let result;
if (condition1) {
  result = value1;
} else if (condition2) {
  result = value2;
} else if (condition3) {
  result = value3;
} else {
  result = value4;
}
```

## 6. Not Using Guard Clauses

### The Mistake
```javascript
function process(data) {
  if (data) {
    if (data.isValid) {
      if (data.hasPermission) {
        // Process data
      }
    }
  }
}
```

### The Problem
- Deep nesting makes code hard to read
- Multiple levels of indentation
- Hard to follow the logic

### The Fix
```javascript
function process(data) {
  if (!data) return;
  if (!data.isValid) return;
  if (!data.hasPermission) return;
  // Process data
}
```

## 7. Swallowing Errors

### The Mistake
```javascript
try {
  riskyOperation();
} catch (error) {
  // Empty catch block
}
```

### The Problem
- Errors are silently ignored
- Hard to debug issues
- No error recovery

### The Fix
```javascript
try {
  riskyOperation();
} catch (error) {
  console.error("Operation failed:", error);
  // Handle error appropriately
}
```

## 8. Not Using Finally for Cleanup

### The Mistake
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

### The Problem
- Resources might not be cleaned up
- Memory leaks
- Resource exhaustion

### The Fix
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

## 9. Using == Instead of === in Conditions

### The Mistake
```javascript
if (age == 18) {
  console.log("You're 18");  // Could be "18" string
}
```

### The Problem
- Type coercion can cause unexpected behavior
- Hard to predict behavior
- Can lead to bugs

### The Fix
```javascript
if (age === 18) {
  console.log("You're exactly 18");
}
```

## 10. Not Handling Null/Undefined in Conditions

### The Mistake
```javascript
if (user.name) {
  console.log(user.name);
}
```

### The Problem
- Will crash if user is null/undefined
- No null checking
- Runtime error

### The Fix
```javascript
if (user && user.name) {
  console.log(user.name);
}
```

## 11. Confusing || with ??

### The Mistake
```javascript
let count = items.length || 0;  // Problem if length is 0
```

### The Problem
- `||` treats 0, "", false as falsy
- Might use default when value is valid
- Not what you want for numbers

### The Fix
```javascript
let count = items.length ?? 0;  // Only null/undefined trigger default
```

## 12. Using Switch for Complex Conditions

### The Mistake
```javascript
switch (true) {
  case condition1 && condition2:
    // Complex logic
    break;
}
```

### The Problem
- Switch is meant for value comparison
- Complex conditions are hard to read
- If/else is more appropriate

### The Fix
```javascript
if (condition1 && condition2) {
  // Complex logic
}
```

## 13. Not Using Default in Switch

### The Mistake
```javascript
switch (value) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
}
// What about other values?
```

### The Problem
- Some cases might not be handled
- Silent failures
- Unpredictable behavior

### The Fix
```javascript
switch (value) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  default:
    console.log("Unknown value");
}
```

## 14. Using Break Outside Loops

### The Mistake
```javascript
if (condition) {
  break;  // Syntax error
}
```

### The Problem
- Break only works in loops and switch
- Syntax error
- Doesn't make sense outside those contexts

### The Fix
```javascript
if (condition) {
  return;  // or use appropriate control flow
}
```

## 15. Not Understanding Switch Fallthrough

### The Mistake
```javascript
switch (value) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
    break;
}
```

### The Problem
- Intentional fallthrough is rare
- Often a missing break
- Confusing behavior

### The Fix
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

## 16. Throwing Strings Instead of Errors

### The Mistake
```javascript
throw "Something went wrong";
```

### The Problem
- Not an Error object
- Missing stack trace
- Hard to debug

### The Fix
```javascript
throw new Error("Something went wrong");
```

## 17. Not Validating Before Throwing

### The Mistake
```javascript
function divide(a, b) {
  return a / b;  // Returns Infinity if b is 0
}
```

### The Problem
- Doesn't validate input
- Returns Infinity instead of error
- Silent failure

### The Fix
```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}
```

## 18. Using Else When Not Needed

### The Mistake
```javascript
if (condition) {
  return value;
} else {
  return defaultValue;
}
```

### The Problem
- Unnecessary else after return
- Adds indentation
- Less readable

### The Fix
```javascript
if (condition) {
  return value;
}
return defaultValue;
```

## 19. Not Combining Related Conditions

### The Mistake
```javascript
if (x > 5) {
  if (x < 10) {
    // Code
  }
}
```

### The Problem
- Unnecessary nesting
- Can be combined
- Less readable

### The Fix
```javascript
if (x > 5 && x < 10) {
  // Code
}
```

## 20. Using Continue Outside Loops

### The Mistake
```javascript
if (condition) {
  continue;  // Syntax error
}
```

### The Problem
- Continue only works in loops
- Syntax error
- Doesn't make sense outside loops

### The Fix
```javascript
for (let i = 0; i < 10; i++) {
  if (condition) {
    continue;
  }
}
```

## How to Avoid These Mistakes

1. **Always use === for comparison**
2. **Always use break in switch cases**
3. **Handle all cases (use default)**
4. **Use guard clauses to avoid nesting**
5. **Avoid ternary for complex logic**
6. **Handle errors appropriately**
7. **Use finally for cleanup**
8. **Check for null/undefined**
9. **Use ?? for null/undefined defaults**
10. **Throw Error objects, not strings**

## Debugging Tips

1. **Use console.log to trace execution**
2. **Check all conditions are covered**
3. **Test edge cases (null, undefined, 0, "")**
4. **Use debugger statement for complex logic**
5. **Validate input before processing**
6. **Handle errors gracefully**

## Remember

Control flow is the logic that makes programs dynamic. Understanding:
- How each control structure works
- When to use each structure
- How to handle all cases
- How to avoid common pitfalls

will help you write correct, maintainable, and robust code!
