// ========================================
// BEGINNER EXERCISES SOLUTIONS
// ========================================
const book = { title: "1984", author: "George Orwell", year: 1949 };
console.log(book);

const person = { name: "John", address: { city: "Boston", zip: "02101" } };
console.log(person.address.city);
console.log(person["address"]["zip"]);

person.email = "john@example.com";
person["phone"] = "555-1234";
console.log(person);

delete person.email;
console.log(person);

console.log(Object.keys(person));
console.log(Object.values(person));
Object.entries(person).forEach(([k, v]) => console.log(`${k}: ${v}`));

const obj1 = { a: 1 }, obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged);

const { name, address } = person;
const { name: userName, address: userAddress } = person;
const { nickname = "Guest" } = person;

const original = { name: "John" };
const copy = { ...original };
const combined = { ...obj1, ...obj2 };

// ========================================
// INTERMEDIATE EXERCISES SOLUTIONS
// ========================================
const person2 = {
  name: "John",
  greet() {
    return `Hello, ${this.name}`;
  }
};
console.log(person2.greet());

const person3 = {
  _age: 25,
  set age(val) {
    if (val >= 0) this._age = val;
  },
  get age() {
    return this._age;
  }
};
person3.age = 30;
console.log(person3.age);

const frozen = Object.freeze({ name: "John" });
console.log(Object.isFrozen(frozen));

const sealed = Object.seal({ name: "John" });
console.log(Object.isSealed(sealed));

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}

console.log(person.hasOwnProperty("name"));
console.log("toString" in person);

const entries2 = [["a", 1], ["b", 2]];
const objFromEntries = Object.fromEntries(entries2);

const propName = "dynamic";
const obj2 = { [propName]: "value" };

const person4 = {
  name: "John",
  greet() {
    return `Hello, ${this.name}`;
  }
};

class PersonClass {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
}
const person5 = new PersonClass("Alice");
console.log(person5.greet());

// ========================================
// ADVANCED EXERCISES SOLUTIONS
// ========================================
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (Array.isArray(obj)) return obj.map(deepClone);
  const clone = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

function validateObj(obj, schema) {
  const errors = [];
  for (const key in schema) {
    if (!obj[key]) errors.push(`${key} is required`);
  }
  return errors.length === 0 ? { valid: true } : { valid: false, errors };
}

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function getValue(obj, path) {
  return path.split('.').reduce((o, k) => o?.[k], obj);
}

function setValue(obj, path, value) {
  const keys = path.split('.');
  const last = keys.pop();
  const target = keys.reduce((o, k) => o[k] = o[k] || {}, obj);
  target[last] = value;
}

// ========================================
// PRACTICAL CHALLENGES SOLUTIONS
// ========================================
const userProfile = {
  name: "John",
  email: "john@example.com",
  age: 25,
  update(field, value) {
    this[field] = value;
  },
  validate() {
    return this.name && this.email && this.age >= 18;
  },
  toJSON() {
    return JSON.stringify(this);
  }
};

const cart = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  removeItem(index) {
    this.items.splice(index, 1);
  },
  total() {
    return this.items.reduce((t, i) => t + i.price * i.quantity, 0);
  }
};

const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  get(key) {
    return this[key];
  },
  set(key, value) {
    this[key] = value;
  }
};

class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.xp = 0;
    this.inventory = [];
  }
  gainXp(amount) {
    this.xp += amount;
    if (this.xp >= this.level * 100) {
      this.level++;
      this.xp = 0;
    }
  }
}

console.log("\n=== All solutions completed! ===");
