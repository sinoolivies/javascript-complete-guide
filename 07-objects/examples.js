// ========================================
// EXAMPLE 1: Object literal
// ========================================
const person = {
  name: "John",
  age: 25,
  city: "Boston"
};
console.log(person);

// ========================================
// EXAMPLE 2: Constructor function
// ========================================
function User(name, email) {
  this.name = name;
  this.email = email;
}
const user = new User("Alice", "alice@example.com");
console.log(user);

// ========================================
// EXAMPLE 3: Object.create
// ========================================
const proto = { greet() { return "Hello"; }};
const obj = Object.create(proto);
console.log(obj.greet());

// ========================================
// EXAMPLE 4: Dot notation access
// ========================================
console.log(person.name);
console.log(person.age);

// ========================================
// EXAMPLE 5: Bracket notation access
// ========================================
console.log(person["name"]);
console.log(person["age"]);

// ========================================
// EXAMPLE 6: Dynamic access
// ========================================
const key = "city";
console.log(person[key]);

// ========================================
// EXAMPLE 7: Adding properties
// ========================================
person.email = "john@example.com";
console.log(person);

// ========================================
// EXAMPLE 8: Bracket notation addition
// ========================================
person["phone"] = "123-456-7890";
console.log(person);

// ========================================
// EXAMPLE 9: Deleting properties
// ========================================
delete person.age;
console.log(person);

// ========================================
// EXAMPLE 10: Updating properties
// ========================================
person.name = "Jane";
console.log(person);

// ========================================
// EXAMPLE 11: Object.keys
// ========================================
const keys = Object.keys(person);
console.log(keys);

// ========================================
// EXAMPLE 12: Object.values
// ========================================
const values = Object.values(person);
console.log(values);

// ========================================
// EXAMPLE 13: Object.entries
// ========================================
const entries = Object.entries(person);
console.log(entries);

// ========================================
// EXAMPLE 14: Object.assign
// ========================================
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged);

// ========================================
// EXAMPLE 15: this in methods
// ========================================
const person2 = {
  name: "John",
  greet: function() {
    console.log(`Hello, ${this.name}`);
  }
};
person2.greet();

// ========================================
// EXAMPLE 16: this in arrow methods
// ========================================
const person3 = {
  name: "John",
  greet: () => {
    console.log(`Hello, ${this.name}`);  // undefined
  }
};
person3.greet();

// ========================================
// EXAMPLE 17: Reference semantics
// ========================================
const original = { name: "John" };
const reference = original;
reference.name = "Jane";
console.log(original.name);  // "Jane"

// ========================================
// EXAMPLE 18: Spread operator copy
// ========================================
const original2 = { name: "John" };
const copy = { ...original2 };
copy.name = "Jane";
console.log(original2.name);  // "John"

// ========================================
// EXAMPLE 19: Destructuring
// ========================================
const { name, city } = person;
console.log(name, city);

// ========================================
// EXAMPLE 20: Destructuring with rename
// ========================================
const { name: userName, city: userCity } = person;
console.log(userName, userCity);

// ========================================
// EXAMPLE 21: Destructuring with default
// ========================================
const { nickname = "Guest" } = person;
console.log(nickname);

// ========================================
// EXAMPLE 22: Spread to combine
// ========================================
const objA = { a: 1, b: 2 };
const objB = { c: 3, d: 4 };
const combined = { ...objA, ...objB };
console.log(combined);

// ========================================
// EXAMPLE 23: Spread to add properties
// ========================================
const base = { a: 1, b: 2 };
const extended = { ...base, c: 3 };
console.log(extended);

// ========================================
// EXAMPLE 24: Spread to override
// ========================================
const base2 = { a: 1, b: 2 };
const override = { ...base2, a: 10 };
console.log(override);

// ========================================
// EXAMPLE 25: Object methods
// ========================================
const data = { name: "John", age: 25, city: "Boston" };
console.log(Object.keys(data));
console.log(Object.values(data));
console.log(Object.entries(data));

// ========================================
// EXAMPLE 26: Object.freeze
// ========================================
const frozen = Object.freeze({ name: "John" });
frozen.name = "Jane";  // Silently fails in strict mode
console.log(frozen.name);

// ========================================
// EXAMPLE 27: Object.seal
// ========================================
const sealed = Object.seal({ name: "John" });
sealed.name = "Jane";  // Silently fails
console.log(sealed.name);

// ========================================
// EXAMPLE 28: Object.getOwnPropertyNames
// ========================================
const props = Object.getOwnPropertyNames(person);
console.log(props);

// ========================================
// EXAMPLE 29: Object.hasOwnProperty
// ========================================
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("toString"));

// ========================================
// EXAMPLE 30: in operator
// ========================================
console.log("name" in person);
console.log("toString" in person);

// ========================================
// EXAMPLE 31: for...in loop
// ========================================
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

// ========================================
// EXAMPLE 32: Object.fromEntries
// ========================================
const entries2 = [["name", "John"], ["age", 25]];
const objFromEntries = Object.fromEntries(entries2);
console.log(objFromEntries);

// ========================================
// EXAMPLE 33: Object.getOwnPropertyDescriptors
// ========================================
const descriptors = Object.getOwnPropertyDescriptors(person);
console.log(descriptors);

// ========================================
// EXAMPLE 34: Object.defineProperty
// ========================================
const obj = {};
Object.defineProperty(obj, "name", {
  value: "John",
  writable: false,
  enumerable: true,
  configurable: true
});
console.log(obj.name);

// ========================================
// EXAMPLE 35: Computed property names
// ========================================
const propName = "dynamic";
const obj2 = {
  [propName]: "value"
};
console.log(obj2.dynamic);

// ========================================
// EXAMPLE 36: Method shorthand
// ========================================
const person4 = {
  name: "John",
  greet() {
    return `Hello, ${this.name}`;
  }
};
console.log(person4.greet());

// ========================================
// EXAMPLE 37: Getter
// ========================================
const person5 = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log(person5.fullName);

// ========================================
// EXAMPLE 38: Setter
// ========================================
const person6 = {
  _age: 25,
  set age(value) {
    if (value >= 0) {
      this._age = value;
    }
  },
  get age() {
    return this._age;
  }
};
person6.age = 30;
console.log(person6.age);

// ========================================
// EXAMPLE 39: Class syntax
// ========================================
class PersonClass {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
}
const person7 = new PersonClass("John");
console.log(person7.greet());

// ========================================
// EXAMPLE 40: Inheritance with classes
// ========================================
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound`;
  }
}
class Dog extends Animal {
  speak() {
    return `${this.name} barks`;
  }
}
const dog = new Dog("Buddy");
console.log(dog.speak());

console.log("\nAll examples completed!");
