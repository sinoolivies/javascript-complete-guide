// ========================================
// BEGINNER EXERCISES SOLUTIONS
// ========================================
const colors = ["red", "green", "blue", "yellow", "purple"];
console.log(colors, colors.length);

const nums = [10, 20, 30, 40, 50];
console.log(nums[0], nums[nums.length - 1], nums[2]);

nums.push(60);
nums.pop();
nums.unshift(0);
nums.shift();
console.log(nums.indexOf(30));
console.log(nums.includes(40));

nums.forEach((n, i) => console.log(`${i}: ${n}`));
const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
const sum = nums.reduce((t, n) => t + n, 0);

// ========================================
// INTERMEDIATE EXERCISES SOLUTIONS
// ========================================
const bigNums = [5, 15, 25, 35];
const found = bigNums.find(n => n > 10);
const sorted = [...bigNums].sort((a, b) => a - b);
const sliced = bigNums.slice(1, 3);
const arr1 = [1, 2], arr2 = [3, 4];
const combined = arr1.concat(arr2);
const allPos = bigNums.every(n => n > 0);
const hasEven = bigNums.some(n => n % 2 === 0);
const nested = [[1, 2], [3, 4]];
const flat = nested.flat();
const reversed = [...bigNums].reverse();
const joined = bigNums.join("-");

// ========================================
// ADVANCED EXERCISES SOLUTIONS
// ========================================
const chained = nums.map(n => n * 2).filter(n => n > 10).reduce((t, n) => t + n, 0);

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function difference(a, b) {
  return a.filter(x => !b.includes(x));
}

function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const k = item[key];
    acc[k] = acc[k] || [];
    acc[k].push(item);
    return acc;
  }, {});
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function partition(arr, predicate) {
  return [arr.filter(predicate), arr.filter(x => !predicate(x))];
}

function pluck(arr, key) {
  return arr.map(item => item[key]);
}

function zip(...arrays) {
  const maxLength = Math.max(...arrays.map(a => a.length));
  return Array.from({ length: maxLength }, (_, i) => arrays.map(a => a[i]));
}

// ========================================
// PRACTICAL CHALLENGES SOLUTIONS
// ========================================
let cart = [];
function addToCart(item) {
  cart.push(item);
}
function removeFromCart(index) {
  cart.splice(index, 1);
}
function updateQuantity(index, qty) {
  cart[index].quantity = qty;
}
function calculateTotal() {
  return cart.reduce((t, i) => t + i.price * i.quantity, 0);
}

let grades = [85, 92, 78, 95, 88];
function addGrade(grade) {
  grades.push(grade);
}
function averageGrade() {
  return grades.reduce((t, g) => t + g, 0) / grades.length;
}
function highestGrade() {
  return Math.max(...grades);
}
function passingGrades() {
  return grades.filter(g => g >= 70);
}

let products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
  { id: 2, name: "Book", price: 19, category: "Books", inStock: true }
];
function filterByCategory(products, category) {
  return products.filter(p => p.category === category);
}
function filterByPrice(products, min, max) {
  return products.filter(p => p.price >= min && p.price <= max);
}

let todos = [];
function addTodo(text) {
  todos.push({ text, completed: false });
}
function completeTodo(index) {
  todos[index].completed = true;
}
function deleteTodo(index) {
  todos.splice(index, 1);
}

let sales = [100, 200, 150, 300, 250];
function totalSales() {
  return sales.reduce((t, s) => t + s, 0);
}
function bestSale() {
  return Math.max(...sales);
}

console.log("\n=== All solutions completed! ===");
