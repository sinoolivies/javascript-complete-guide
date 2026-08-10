# Theory: Objects

Objects are collections of key-value pairs in JavaScript. They are used to represent structured data, implement object-oriented programming, and create complex data structures.

## Creating Objects

### Object Literal
```javascript
const person = {
  name: "John",
  age: 25,
  greet: function() {
    return `Hello, I'm ${this.name}`;
  }
};
```

### Constructor Function
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person = new Person("John", 25);
```

### Object.create
```javascript
const proto = { greet() { return "Hello"; }};
const obj = Object.create(proto);
```

## Accessing Properties

### Dot Notation
```javascript
person.name;
person.age;
```

### Bracket Notation
```javascript
person["name"];
person["age"];
```

### Dynamic Access
```javascript
const key = "name";
person[key];
```

## Modifying Objects

### Adding Properties
```javascript
person.email = "john@example.com";
person["phone"] = "123-456-7890";
```

### Deleting Properties
```javascript
delete person.age;
```

### Updating Properties
```javascript
person.name = "Jane";
```

## Object Methods

### Object.keys
```javascript
const keys = Object.keys(person);
```

### Object.values
```javascript
const values = Object.values(person);
```

### Object.entries
```javascript
const entries = Object.entries(person);
```

### Object.assign
```javascript
const merged = Object.assign({}, obj1, obj2);
```

## The `this` Keyword

`this` refers to the object executing the current function:
```javascript
const person = {
  name: "John",
  greet: function() {
    console.log(`Hello, ${this.name}`);
  }
};
person.greet();  // "Hello, John"
```

## Reference Semantics

Objects are copied by reference:
```javascript
const original = { name: "John" };
const copy = original;
copy.name = "Jane";
console.log(original.name);  // "Jane" - Both modified!
```

Use spread operator to create copies:
```javascript
const copy = { ...original };
```

## Destructuring

### Object Destructuring
```javascript
const { name, age } = person;
const { name: userName, age: userAge } = person;
```

### Default Values
```javascript
const { name = "Guest" } = person;
```

## Spread Operator

### Combining Objects
```javascript
const merged = { ...obj1, ...obj2 };
```

### Adding Properties
```javascript
const updated = { ...person, email: "john@example.com" };
```

## Prototypes (Basics)

Every object has a prototype that provides inherited properties:
```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return `Hello, ${this.name}`;
};
```

Objects are fundamental to JavaScript. Understanding objects, `this`, and prototypes is essential for advanced JavaScript programming.
