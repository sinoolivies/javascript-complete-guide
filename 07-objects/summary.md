# Summary: Objects

## Key Concepts Learned

### 1. Object Creation
- Object literals for simple structured data
- Constructor functions with `new` for reusable blueprints
- `Object.create` for objects with a custom prototype
- Class syntax and inheritance with `extends`

### 2. Property Access
- Dot notation for known keys
- Bracket notation for dynamic keys and invalid identifiers
- Adding, updating, and deleting properties

### 3. Object Methods
- keys, values, entries for inspecting objects
- assign for merging objects
- freeze and seal for restricting changes
- hasOwnProperty and the `in` operator for membership checks
- fromEntries to build objects from entry arrays
- getOwnPropertyDescriptors and defineProperty for property details

### 4. Reference Semantics
- Objects are stored and copied by reference
- Assigning one variable to another shares the same data
- Spread creates a shallow copy, not a deep one

### 5. Destructuring
- Extract properties into variables in one line
- Rename properties and provide default values
- Rest to gather all remaining properties

### 6. Spread Operator
- Copying, merging, and overriding properties
- Later objects win when keys overlap
- Use for immutable-style updates

### 7. The this Keyword
- Refers to the object executing the method
- Regular functions bind `this` to the caller
- Arrow methods do not have their own `this`

### 8. Getters and Setters
- Computed properties with `get`
- Validated writes with `set`

### 9. Prototypes and Inheritance (Basics)
- Every object has a prototype that provides inherited properties
- Prototype methods are shared across instances
- Classes use `extends` and can override parent methods

### 10. Iteration
- for...in walks inherited keys as well as own keys
- Object.entries with destructuring is the cleanest iteration
- hasOwnProperty filters out inherited properties

## Important Takeaways

### Object Best Practices
1. **Use object literals** for simple data
2. **Choose factories or classes** for reusable blueprints
3. **Use dot notation** for known keys, brackets for dynamic keys
4. **Guard access** with optional chaining and nullish coalescing
5. **Copy with spread** instead of mutating
6. **Freeze constants** to prevent accidental changes
7. **Destructure** to reduce repetition
8. **Keep methods short** and focused

### Common Pitfalls
1. **Reference semantics** - copies share the same data
2. **Arrow methods** - no own `this`
3. **Missing properties** - nested access crashes
4. **Shallow copies** - nested objects stay shared
5. **for...in without hasOwnProperty** - inherited keys leak in

## What You Should Know Before Moving Forward

Objects are the backbone of JavaScript data. By now you should be comfortable creating objects, reading and writing properties, copying without mutating the original, extracting values with destructuring, and understanding how `this` behaves inside methods. Prototypes and classes are the foundation of inheritance, which you will rely on heavily as you build larger applications.

## Next Topic

**08 - Strings**: Working with text and string manipulation in JavaScript.
