# Cheat Sheet: Objects

## Creation
```js
const obj = { name: "John" };         // Object literal
const obj2 = new Object();            // Empty via constructor
const obj3 = Object.create(proto);    // Object with custom prototype
const obj4 = new User("John");        // Constructor function or class
```

## Property Access
```js
obj.name                 // Dot notation
obj["name"]              // Bracket notation
obj[key]                 // Dynamic key
obj.address?.city        // Safe nested access
```

## Add / Update / Delete
```js
obj.email = "a@b.com";   // Add or update (dot)
obj["phone"] = "123";    // Add or update (bracket)
delete obj.age;          // Remove a property
```

## Shorthand Properties
```js
const name = "John";
const obj = { name };    // Same as { name: name }
```

## Computed Keys
```js
const key = "dynamic";
const obj = { [key]: "value" };   // Key evaluated at runtime
```

## Methods
```js
const obj = {
  greet() { return "Hello"; }   // Method shorthand
};
obj.greet();
```

## Destructuring
```js
const { name, age } = obj;        // Extract properties
const { name: userName } = obj;   // Rename on extract
const { email = "none" } = obj;   // Default value
const { name, ...rest } = obj;    // Rest gathers the rest
```

## Object Methods
```js
Object.keys(obj)          // Array of keys
Object.values(obj)        // Array of values
Object.entries(obj)       // Array of [key, value] pairs
Object.assign({}, a, b)   // Copy/merge into target
Object.freeze(obj)        // Prevent all changes
Object.seal(obj)          // Prevent add/delete only
obj.hasOwnProperty(k)     // Is k an own property?
Object.fromEntries(arr)   // Build object from entry pairs
```

## this Keyword
```js
const obj = {
  name: "John",
  greet() { return `Hi, ${this.name}`; }  // this = obj
};
obj.greet();
```

## Spread and Rest
```js
const copy = { ...obj };          // Shallow copy
const merged = { ...a, ...b };    // Merge, b wins conflicts
const { name, ...rest } = obj;    // Rest in destructuring
```

## Optional Chaining
```js
const city = user?.address?.city;  // undefined instead of crashing
```

## Nullish Coalescing
```js
const count = obj.count ?? 0;      // Fallback only for null/undefined
```

## Quick Reference

| Task | Syntax |
|------|--------|
| Create object | `{}` |
| Access property | `obj.key` |
| Dynamic access | `obj[key]` |
| Safe access | `obj?.key` |
| Add / update | `obj.key = value` |
| Delete | `delete obj.key` |
| Extract props | `const { a, b } = obj` |
| Copy | `{ ...obj }` |
| Merge | `{ ...a, ...b }` |
| List keys | `Object.keys(obj)` |
| Fallback value | `obj.key ?? default` |
