# Exercises: Variables and Data Types

Complete these exercises to practice variables and data types. Try to solve them without looking at the solutions first.

## Beginner Exercises

1. **Variable Declaration**
   - Declare a variable using `let` with your name
   - Declare a constant using `const` with your age
   - Print both values

2. **String Variables**
   - Create a string variable with your favorite color
   - Create another string with your favorite food
   - Combine them using template literals
   - Print the result

3. **Number Operations**
   - Create two number variables
   - Perform addition, subtraction, multiplication, and division
   - Store each result in a separate variable
   - Print all results

4. **Boolean Logic**
   - Create a boolean variable for whether it's raining
   - Create another for whether you have an umbrella
   - Print a message based on the combination (e.g., "Stay dry!")

5. **Array Creation**
   - Create an array of 5 numbers
   - Create an array of 3 strings
   - Print the length of each array
   - Print the first and last element of each

6. **Object Creation**
   - Create an object representing a car with make, model, and year
   - Print each property separately
   - Add a new property (color)
   - Print the updated object

7. **Type Checking**
   - Create variables of different types (string, number, boolean, object, array)
   - Use `typeof` to check each type
   - Print the type of each variable

8. **Undefined vs Null**
   - Create an undefined variable
   - Create a null variable
   - Compare them with `==` and `===`
   - Print the results

9. **String to Number**
   - Create a string variable with a number
   - Convert it to a number using `Number()`
   - Convert it using `parseInt()`
   - Print both results

10. **Number to String**
    - Create a number variable
    - Convert it to a string using `String()`
    - Convert it using `.toString()`
    - Print both results

## Intermediate Exercises

1. **Scope Understanding**
   - Create a global variable
   - Create a function with a local variable of the same name
   - Print both inside and outside the function
   - Explain the results

2. **Block Scope**
   - Create a variable with `let` inside an if block
   - Try to access it outside the block
   - Do the same with `var`
   - Explain the difference

3. **Const with Objects**
   - Create a const object
   - Modify one of its properties
   - Try to reassign the entire object
   - Explain which operations work and why

4. **Type Coercion**
   - Create a string "5" and a number 5
   - Add them together
   - Multiply them together
   - Compare them with `==` and `===`
   - Explain each result

5. **Truthy/Falsy**
   - Test each falsy value in an if statement
   - Test each truthy value in an if statement
   - Document which values are truthy and which are falsy

6. **Array Reference**
   - Create an array
   - Assign it to another variable
   - Modify the array through the second variable
   - Check the original array
   - Explain what happened

7. **Object Reference**
   - Create an object
   - Assign it to another variable
   - Modify the object through the second variable
   - Check the original object
   - Explain what happened

8. **Type Conversion Challenges**
   - Convert "hello" to a number
   - Convert an empty string to a number
   - Convert null to a number
   - Convert undefined to a number
   - Print and explain each result

9. **Symbol Usage**
   - Create two symbols with the same description
   - Compare them with `===`
   - Use a symbol as an object property key
   - Access the property using the symbol

10. **BigInt Operations**
    - Create a BigInt number
    - Add a regular number to it (this will cause an error)
    - Add another BigInt to it
    - Print the results

## Advanced Exercises

1. **Deep Clone Function**
   - Write a function that deep clones an object
   - The function should handle nested objects
   - Test it with a nested object
   - Verify that modifying the clone doesn't affect the original

2. **Type Checker Function**
   - Write a function that accurately checks types
   - It should distinguish between:
     - Objects and arrays
     - Null and objects
     - Functions and objects
   - Return the specific type as a string

3. **Safe Type Conversion**
   - Write a function that safely converts strings to numbers
   - Return the number if conversion succeeds
   - Return null if conversion fails
   - Handle edge cases (empty string, null, undefined)

4. **Scope Chain Demonstration**
   - Create nested functions (at least 3 levels)
   - Each function should have its own variable
   - Inner functions should access outer variables
   - Demonstrate the scope chain in action

5. **Hoisting Analysis**
   - Create examples of hoisting with:
     - var variables
     - let variables
     - Function declarations
     - Function expressions
   - Document the behavior of each

6. **Immutable Object Pattern**
   - Create a function that returns an immutable object
   - Use Object.freeze() or custom implementation
   - Try to modify the returned object
   - Handle the modification attempt gracefully

7. **Custom Type Coercion**
   - Create an object with a valueOf() method
   - Create an object with a toString() method
   - Test them in numeric and string contexts
   - Explain the coercion behavior

8. **Memory Management Simulation**
   - Create a large array
   - Create references to it
   - Remove references one by one
   - Demonstrate when the array becomes eligible for garbage collection

9. **Variable Naming Convention**
   - Create a set of variables following different conventions:
     - camelCase for variables
     - PascalCase for constructors
     - UPPER_CASE for constants
     - _prefix for "private" variables
   - Document when to use each convention

10. **Type System Analysis**
    - Create a comprehensive type test suite
    - Test all primitive types
    - Test all object types
    - Test type conversions
    - Test type coercion
    - Document any unexpected behaviors

---

**Note**: Solutions are available in `solutions.js`. Try to solve each exercise before checking the solutions!
