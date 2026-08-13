// ==========================================
// DOM Basics - Solutions
// ==========================================
// NOTE: This file uses browser APIs (document, window, events) and
// will NOT run in Node.js. Open an HTML page in a browser that
// matches the markup below (or paste the code into the browser
// console while viewing such a page).
//
// Assumed markup for the exercises:
//   <div id="app">
//     <h1 id="page-title">My Page</h1>
//     <p id="message">Hello, world!</p>
//     <ul id="list">
//       <li class="item">Apple</li>
//       <li class="item">Banana</li>
//       <li class="item">Cherry</li>
//     </ul>
//     <input id="name-input" type="text" placeholder="Your name" />
//     <button id="save-btn">Save</button>
//     <button id="theme-btn">Toggle dark mode</button>
//     <form id="login-form">
//       <input id="email" type="email" placeholder="you@example.com" />
//       <button type="submit">Login</button>
//     </form>
//     <div id="greeting"></div>
//     <div id="output"></div>
//     <ul id="numbers"></ul>
//     <div id="counter">0</div>
//     <button id="inc-btn">+</button>
//     <button id="dec-btn">-</button>
//     <button id="reset-btn">Reset</button>
//     <div id="accordion">
//       <div class="accordion-item">
//         <h3 class="accordion-header">What is the DOM?</h3>
//         <p class="accordion-content">A live tree of nodes.</p>
//       </div>
//     </div>
//   </div>
// ==========================================

// ============ BEGINNER EXERCISE SOLUTIONS ============

// Exercise 1: Access the Document
console.log("=== Exercise 1 ===");
console.log(document);              // the root object of the DOM tree
console.log(document.title);        // text inside <title>
console.log(document.body);         // the <body> element

// Exercise 2: Select by ID
console.log("\n=== Exercise 2 ===");
const message = document.getElementById("message");
message.textContent = "Hello, DOM!";
console.log(message.textContent);   // "Hello, DOM!"

// Exercise 3: Select by Class
console.log("\n=== Exercise 3 ===");
const itemsByClass = document.getElementsByClassName("item");
console.log(itemsByClass.length);           // 3
console.log(itemsByClass[0].textContent);   // "Apple"

// Exercise 4: Select by Tag
console.log("\n=== Exercise 4 ===");
const itemsByTag = document.getElementsByTagName("li");
console.log(itemsByTag.length);             // 3

// Exercise 5: querySelector
console.log("\n=== Exercise 5 ===");
const qTitle = document.querySelector("#page-title");
const qFirstItem = document.querySelector(".item");
const qFirstLi = document.querySelector("li");
console.log(qTitle);                        // the h1
console.log(qFirstItem);                    // first .item
console.log(qFirstLi);                      // first li

// Exercise 6: querySelectorAll
console.log("\n=== Exercise 6 ===");
const allItems = document.querySelectorAll(".item");
console.log(allItems.length);               // 3
allItems.forEach(item => console.log(item.textContent));

// Exercise 7: Change Text Content
console.log("\n=== Exercise 7 ===");
const pageTitle = document.getElementById("page-title");
pageTitle.textContent = "Updated Page";
console.log(pageTitle.textContent);         // "Updated Page"

// Exercise 8: Change Inline Style
console.log("\n=== Exercise 8 ===");
message.style.color = "blue";
message.style.fontSize = "24px";
console.log(message.style.color);           // "blue"

// Exercise 9: classList Add and Remove
console.log("\n=== Exercise 9 ===");
pageTitle.classList.add("highlight");
console.log(pageTitle.className);           // "highlight"
pageTitle.classList.remove("highlight");
console.log(pageTitle.className);           // ""

// Exercise 10: Create and Append
console.log("\n=== Exercise 10 ===");
const list = document.getElementById("list");
const grapes = document.createElement("li");
grapes.textContent = "Grapes";
list.appendChild(grapes);
console.log(list.children.length);          // 4

// ============ INTERMEDIATE EXERCISE SOLUTIONS ============

// Exercise 11: textContent vs innerHTML
console.log("\n=== Exercise 11 ===");
// assumes: <div id="output"></div>
const output = document.getElementById("output");
output.innerHTML = "<strong>Bold</strong>";       // parsed: renders bold text
console.log(output.innerHTML);                    // "<strong>Bold</strong>"
output.textContent = "<strong>Bold</strong>";     // literal: tags shown as text
console.log(output.textContent);                  // "<strong>Bold</strong>"
// innerHTML parses markup; textContent treats everything as plain text.

// Exercise 12: Attributes vs Properties
console.log("\n=== Exercise 12 ===");
const input = document.getElementById("name-input");
console.log(input.getAttribute("placeholder"));   // "Your name"
console.log(input.placeholder);                   // "Your name"
input.setAttribute("data-custom", "hello");
console.log(input.getAttribute("data-custom"));   // "hello"

// Exercise 13: classList Toggle and Contains
console.log("\n=== Exercise 13 ===");
list.classList.toggle("active");
console.log(list.classList.contains("active"));   // true
list.classList.toggle("active");
console.log(list.classList.contains("active"));   // false

// Exercise 14: append and prepend
console.log("\n=== Exercise 14 ===");
const first = document.createElement("li");
first.textContent = "First";
list.prepend(first);
const last = document.createElement("li");
last.textContent = "Last";
list.append(last);
console.log([...list.children].map(li => li.textContent));

// Exercise 15: Removing Elements
console.log("\n=== Exercise 15 ===");
const lastItem = list.lastElementChild;
lastItem.remove();                                // modern
const someItem = list.querySelector(".item");
list.removeChild(someItem);                       // classic
console.log(list.children.length);                // one less than before

// Exercise 16: Create Many Elements in a Loop
console.log("\n=== Exercise 16 ===");
// assumes: <ul id="numbers"></ul>
const numbers = document.getElementById("numbers");
for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = i;
  numbers.appendChild(li);
}
console.log(numbers.children.length);             // 5

// Exercise 17: Read Input Value
console.log("\n=== Exercise 17 ===");
input.value = "  Sofia  ";
console.log(input.value);                         // "  Sofia  "
console.log(input.value.trim());                  // "Sofia"

// Exercise 18: Click Event
console.log("\n=== Exercise 18 ===");
const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) return;                             // ignore empty input
  console.log(`Saved: ${value}`);
});

// Exercise 19: Form Submit
console.log("\n=== Exercise 19 ===");
const form = document.getElementById("login-form");
const email = document.getElementById("email");
form.addEventListener("submit", (event) => {
  event.preventDefault();                         // stop the page reload
  console.log(`Email: ${email.value.trim()}`);
});

// Exercise 20: Input Event
console.log("\n=== Exercise 20 ===");
const greeting = document.getElementById("greeting");
input.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  greeting.textContent = value ? `Hello, ${value}!` : "";
});

// ============ ADVANCED EXERCISE SOLUTIONS ============

// Exercise 21: Event Object
console.log("\n=== Exercise 21 ===");
list.addEventListener("click", (event) => {
  console.log("type:", event.type);               // "click"
  console.log("target:", event.target);           // element actually clicked
  console.log("currentTarget:", event.currentTarget); // the #list element
});

// Exercise 22: Keyboard Events
console.log("\n=== Exercise 22 ===");
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log(`Enter pressed, input is: "${input.value.trim()}"`);
  }
  if (event.key === "Escape") {
    input.value = "";
    console.log("Input cleared");
  }
});

// Exercise 23: Event Delegation
console.log("\n=== Exercise 23 ===");
list.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item) return;
  console.log(`Clicked: ${item.textContent}`);
});
// New items are handled automatically by the same listener:
const autoItem = document.createElement("li");
autoItem.textContent = "Auto-added";
list.appendChild(autoItem);

// Exercise 24: closest()
console.log("\n=== Exercise 24 ===");
// assumes each <li> already contains <button class="remove">x</button>
list.addEventListener("click", (event) => {
  if (!event.target.classList.contains("remove")) return;
  const item = event.target.closest("li");        // walk up to the li
  if (item) item.remove();
});

// Exercise 25: Dark Mode Toggle
console.log("\n=== Exercise 25 ===");
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark")
    ? "Toggle light mode"
    : "Toggle dark mode";
});

// Exercise 26: Todo List Appender
console.log("\n=== Exercise 26 ===");
const todoInput = document.getElementById("name-input");
const todoBtn = document.getElementById("save-btn");
function addTodo(text) {
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}
todoBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (!text) return;
  addTodo(text);
  todoInput.value = "";
  todoInput.focus();
});

// Exercise 27: Accordion
console.log("\n=== Exercise 27 ===");
// assumes markup with several .accordion-item blocks
const accordion = document.getElementById("accordion");
accordion.addEventListener("click", (event) => {
  const header = event.target.closest(".accordion-header");
  if (!header) return;
  header.parentElement.classList.toggle("open");
});

// Exercise 28: Interactive Counter
console.log("\n=== Exercise 28 ===");
let count = 0;
const counterDisplay = document.getElementById("counter");
function renderCounter() {
  counterDisplay.textContent = count;
  counterDisplay.classList.toggle("active", count !== 0);
}
document.getElementById("inc-btn").addEventListener("click", () => {
  count++;
  renderCounter();
});
document.getElementById("dec-btn").addEventListener("click", () => {
  count--;
  renderCounter();
});
document.getElementById("reset-btn").addEventListener("click", () => {
  count = 0;
  renderCounter();
});
renderCounter();

// Exercise 29: Form Validation
console.log("\n=== Exercise 29 ===");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = email.value.trim();
  if (!value || !value.includes("@")) {
    email.classList.add("invalid");
    email.classList.remove("valid");
    greeting.textContent = "Please enter a valid email address";
    return;
  }
  email.classList.add("valid");
  email.classList.remove("invalid");
  greeting.textContent = "";
  console.log("Form valid");
});

// Exercise 30: Dynamic List Rendering
console.log("\n=== Exercise 30 ===");
const products = [
  { name: "Laptop", price: 999 },
  { name: "Headphones", price: 89 },
  { name: "Mouse", price: 25 }
];
list.innerHTML = "";                              // clear existing items
for (const product of products) {
  const li = document.createElement("li");
  li.textContent = `${product.name} - $${product.price}`;
  list.appendChild(li);
}
console.log(list.children.length);                // 3

// ============ PRACTICAL CHALLENGE SOLUTIONS ============

// Challenge 1: Todo App
console.log("\n=== Challenge 1: Todo App ===");
// assumes: <input id="todo-input" /> <button id="add-todo">Add</button>
//          <ul id="todo-list"></ul> <p id="todo-count"></p>
const todoInputEl = document.getElementById("todo-input");
const todoListEl = document.getElementById("todo-list");
const todoCountEl = document.getElementById("todo-count");

function updateTodoCount() {
  const remaining = [...todoListEl.children].filter(
    li => !li.classList.contains("done")
  ).length;
  todoCountEl.textContent = `${remaining} remaining`;
}

document.getElementById("add-todo").addEventListener("click", () => {
  const text = todoInputEl.value.trim();
  if (!text) return;
  const li = document.createElement("li");
  li.textContent = text;
  const del = document.createElement("button");
  del.className = "delete";
  del.textContent = "Delete";
  li.appendChild(del);
  todoListEl.appendChild(li);
  todoInputEl.value = "";
  todoInputEl.focus();
  updateTodoCount();
});

todoListEl.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;
  if (event.target.classList.contains("delete")) {
    li.remove();                                  // delete
  } else {
    li.classList.toggle("done");                  // complete
  }
  updateTodoCount();
});

// Challenge 2: Form Validation
console.log("\n=== Challenge 2: Form Validation ===");
// assumes: <form id="signup"> with #signup-name, #signup-email, #signup-password
//          and one .error element next to each input
const signup = document.getElementById("signup");
signup.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("signup-name");
  const email = document.getElementById("signup-email");
  const password = document.getElementById("signup-password");

  const validations = [
    { field: name, ok: name.value.trim() !== "", message: "Name is required" },
    { field: email, ok: /^\S+@\S+\.\S+$/.test(email.value.trim()), message: "Enter a valid email" },
    { field: password, ok: password.value.length >= 6, message: "Password must be 6+ characters" }
  ];

  let allValid = true;
  for (const { field, ok, message } of validations) {
    field.classList.toggle("invalid", !ok);
    field.classList.toggle("valid", ok);
    field.nextElementSibling.textContent = ok ? "" : message;
    if (!ok) allValid = false;
  }
  if (allValid) console.log("Success");
});

// Challenge 3: Interactive Counter and Accordion
console.log("\n=== Challenge 3: Counter and Accordion ===");
// Counter (reuse #counter, #inc-btn, #dec-btn, #reset-btn from the markup)
count = 0;
function render() {
  counterDisplay.textContent = count;
  counterDisplay.classList.toggle("active", count !== 0);
}
document.getElementById("inc-btn").addEventListener("click", () => { count++; render(); });
document.getElementById("dec-btn").addEventListener("click", () => { count--; render(); });
document.getElementById("reset-btn").addEventListener("click", () => { count = 0; render(); });
render();

// Accordion (only one item open at a time)
const accordionItems = document.querySelectorAll(".accordion-item");
for (const item of accordionItems) {
  item.querySelector(".accordion-header").addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    for (const other of accordionItems) {
      other.classList.remove("open");             // close everyone
    }
    if (!isOpen) item.classList.add("open");      // then reopen clicked one
  });
}

// Challenge 4: Image Gallery Lightbox
console.log("\n=== Challenge 4: Gallery Lightbox ===");
// assumes: <div id="gallery">
//            <img src="thumb1.jpg" data-full="full1.jpg" alt="Photo 1" />
//            ...
//          </div>
const gallery = document.getElementById("gallery");

function closeLightbox() {
  document.querySelector(".lightbox")?.remove();
}

gallery.addEventListener("click", (event) => {
  const img = event.target.closest("img");
  if (!img) return;
  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  const figure = document.createElement("figure");
  const fullImg = document.createElement("img");
  fullImg.src = img.dataset.full;
  fullImg.alt = img.alt;
  const caption = document.createElement("figcaption");
  caption.textContent = img.alt;
  figure.appendChild(fullImg);
  figure.appendChild(caption);
  overlay.appendChild(figure);
  overlay.addEventListener("click", closeLightbox);
  document.body.appendChild(overlay);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

// Challenge 5: Dynamic Product List Rendering
console.log("\n=== Challenge 5: Product List ===");
// assumes: <ul id="product-list"></ul> and filter buttons
//          with data-filter attributes ("all", "Electronics", "Books")
const catalog = [
  { name: "Laptop", price: 999, category: "Electronics" },
  { name: "Novel", price: 15, category: "Books" },
  { name: "Mouse", price: 25, category: "Electronics" },
  { name: "Cookbook", price: 29, category: "Books" }
];
const productList = document.getElementById("product-list");
const filterButtons = document.querySelectorAll("[data-filter]");

function renderProducts(category) {
  productList.innerHTML = "";
  const matching = catalog.filter(
    product => category === "all" || product.category === category
  );
  for (const product of matching) {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
    productList.appendChild(li);
  }
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

renderProducts("all");

console.log("\n=== All solutions completed! Run these against a matching HTML page in the browser. ===");
