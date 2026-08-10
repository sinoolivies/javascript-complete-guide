# Best Practices: Objects

## 1. Use Object Literals for Simple Data
```js
const person = {
  name: "John",
  age: 25,
  city: "Boston"
};
```
Object literals are the clearest way to create plain data objects. They are easy to read, easy to copy, and perfect for storing structured values that do not need shared behavior.

## 2. Choose Factories or Classes for Reusable Blueprints
```js
function createUser(name, email) {
  return { name, email };
}
const user = createUser("Alice", "alice@example.com");

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
const user2 = new User("Bob", "bob@example.com");
```
Use a factory function when you just need to build objects with slightly different data. Use a class when you need shared methods and inheritance. Repeating the same object literal in many places is a sign that you need a blueprint.

## 3. Prefer Dot Notation for Known Keys
```js
console.log(person.name);
console.log(person.age);
```
Dot notation is shorter and easier to read. Because the key is fixed in code, typos and invalid property names are caught early instead of failing silently at runtime.

## 4. Use Bracket Notation for Dynamic Keys
```js
const key = "city";
console.log(person[key]);
```
Bracket notation accepts any string, so it is the only option when the key comes from a variable, a loop, or user input. Use it only when the key is truly dynamic.

## 5. Guard Against Missing Properties
```js
const city = user?.address?.city ?? "Unknown";
```
Optional chaining (`?.`) returns `undefined` instead of throwing when a nested property does not exist. Nullish coalescing (`??`) then supplies a fallback only when the value is `null` or `undefined`, so valid values like `0` and `""` are preserved.

## 6. Provide Defaults When Destructuring
```js
const { nickname = "Guest" } = person;
console.log(nickname);
```
Default values in destructuring keep code robust when a property is missing. The default applies only when the value is `undefined`, so real values are never silently replaced.

## 7. Avoid Shared Mutable State
```js
const original = { settings: { theme: "dark" } };
const copy = { ...original, settings: { ...original.settings } };
copy.settings.theme = "light";
console.log(original.settings.theme);  // "dark"
```
Assignments copy references, not data. When two places share one object, a mutation in one place surprises the other. Copy before you mutate, and remember that spread is shallow, so nested objects need their own copies.

## 8. Use Object.freeze for Real Constants
```js
const DEFAULT_CONFIG = Object.freeze({
  apiUrl: "https://api.example.com",
  timeout: 5000
});
```
Freezing a constant prevents accidental modification and documents that the value must never change. It only protects the top level, so nested objects still need their own `freeze` or careful handling.

## 9. Follow Consistent Naming Conventions
```js
const userProfile = { firstName: "John", lastName: "Doe" };  // camelCase
class UserProfile { /* ... */ }                               // PascalCase
const isActive = userProfile.isActive;                        // is/has/can prefixes
```
Use `camelCase` for properties and variables, `PascalCase` for classes and constructor functions, and `is`/`has`/`can` prefixes for booleans. Consistent names make objects self-documenting and easier to search.

## 10. Keep Methods Short and Focused
```js
const cart = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  total() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
};
```
A method should do one thing well. Short methods with descriptive names are easier to test, reuse, and maintain, and they keep the `this` context predictable.

## 11. Use Destructuring to Reduce Repetition
```js
function formatUser({ name, age }) {
  return `${name} is ${age} years old`;
}
const user = { name: "John", age: 25, city: "Boston" };
console.log(formatUser(user));
```
Destructuring extracts exactly the properties you need and removes repeated `user.` prefixes. Destructuring the parameter also documents which properties a function actually uses.

## 12. Avoid Deep Nesting
```js
const flat = {
  orderId: 101,
  customerName: "John",
  customerEmail: "john@example.com",
  shipCity: "Boston"
};

const city = user?.address?.shipping?.city ?? "Unknown";
```
Deeply nested objects are hard to read, painful to copy, and crash easily when a level is missing. Prefer flat structures when possible, and always use optional chaining when nesting is unavoidable.

## 13. Copy Objects with Spread
```js
const updated = { ...person, age: 26 };      // Copy, then override
const merged = { ...defaults, ...user };     // Merge, user wins
```
Spread creates a fresh shallow copy, so the original is never mutated and overrides are explicit. Place later objects last so they win when keys overlap.

## 14. Iterate with Object.entries
```js
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
```
`Object.entries` returns own enumerable key-value pairs and pairs perfectly with destructuring. Prefer it over `for...in`, which also walks inherited properties and needs a `hasOwnProperty` check. Keep in mind that integer-like keys are always ordered first during iteration.
