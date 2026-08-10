# Common Mistakes: Objects

## 1. Confusing Dot and Bracket Notation
```javascript
// Mistake
obj.property-name  // Syntax error
// Fix
obj["property-name"]
```

## 2. Not Understanding Reference Semantics
```javascript
// Mistake
const copy = original;
copy.name = "Jane";  // Modifies original
// Fix: const copy = { ...original }
```

## 3. Using `this` in Arrow Methods
```javascript
// Mistake
const obj = {
  name: "John",
  greet: () => console.log(this.name)  // undefined
};
// Fix: Use regular function for methods
```

## 4. Mutating Objects When Copying
```javascript
// Mistake
const copy = original;
copy.nested.prop = 5;  // Modifies original nested
// Fix: Deep clone for nested objects
```

## 5. Forgetting `new` with Constructors
```javascript
// Mistake
const person = Person("John");  // this is undefined
// Fix: const person = new Person("John")
```

## 6. Not Handling Missing Properties
```javascript
// Mistake
const value = obj.nested.prop;  // Might crash
// Fix: const value = obj?.nested?.prop
```

## 7. Modifying Frozen Objects
```javascript
// Mistake
frozen.name = "Jane";  // Fails silently
// Fix: Check if frozen before modifying
```

## 8. Confusing Object.freeze and Object.seal
```javascript
// freeze: Cannot add, delete, or modify
// seal: Cannot add or delete, but can modify
```

## 9. Not Using hasOwnProperty
```javascript
// Mistake
for (let key in obj) { console.log(key); }  // Includes inherited
// Fix: if (obj.hasOwnProperty(key))
```

## 10. Using Objects as Maps
```javascript
// Mistake
const map = {};
map[{}] = "value";  // Keys are stringified
// Fix: Use Map data structure
```

## How to Avoid These Mistakes

1. Use bracket notation for dynamic keys
2. Always create copies when needed
3. Use regular functions for methods
4. Deep clone nested objects
5. Use `new` with constructors
6. Use optional chaining for nested access
7. Check if object is frozen/sealed
8. Filter own properties
9. Use Map for key-value storage
10. Understand reference semantics
