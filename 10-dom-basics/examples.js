// ==========================================
// DOM Basics - Examples
// ==========================================
// NOTE: This file uses browser APIs (document, window, events) and
// will NOT run in Node.js. Open an HTML page in a browser that
// matches the markup below (or paste the code into the browser
// console while viewing such a page).
//
// Assumed markup for these examples:
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
//     <div class="card">
//       <h2 class="card-title">Card title</h2>
//       <button class="card-btn">Open</button>
//     </div>
//     <div id="greeting"></div>
//     <div id="result-box"></div>
//   </div>
// ==========================================

// ========================================
// EXAMPLE 1: Accessing the document object
// ========================================
console.log(document);           // the root of the DOM tree
console.log(typeof document);    // "object"

// ========================================
// EXAMPLE 2: document.body and document.title
// ========================================
console.log(document.title);              // text inside <title>
console.log(document.body);               // the <body> element
document.title = "My Page - Updated";

// ========================================
// EXAMPLE 3: Selecting by ID
// ========================================
const pageTitle = document.getElementById("page-title");
console.log(pageTitle);                    // the h1 element
const missing = document.getElementById("does-not-exist");
console.log(missing);                      // null

// ========================================
// EXAMPLE 4: Selecting by class
// ========================================
const itemsByClass = document.getElementsByClassName("item");
console.log(itemsByClass.length);          // 3 (live HTMLCollection)
console.log(itemsByClass[0]);              // first item element

// ========================================
// EXAMPLE 5: Selecting by tag name
// ========================================
const buttons = document.getElementsByTagName("button");
console.log(buttons.length);               // count of <button> elements

// ========================================
// EXAMPLE 6: querySelector (first match)
// ========================================
const firstItem = document.querySelector(".item");
console.log(firstItem);                    // first element with class "item"
const title = document.querySelector("#page-title");
const firstButton = document.querySelector("button");

// ========================================
// EXAMPLE 7: querySelectorAll (all matches)
// ========================================
const allItems = document.querySelectorAll(".item");
console.log(allItems.length);              // 3 (static NodeList)
allItems.forEach(item => console.log(item.textContent));

// ========================================
// EXAMPLE 8: NodeList vs HTMLCollection
// ========================================
const staticItems = document.querySelectorAll(".item");  // NodeList: has forEach
const liveItems = document.getElementsByClassName("item"); // HTMLCollection: no forEach
console.log(typeof staticItems.forEach);   // "function"
console.log(typeof liveItems.forEach);     // "undefined"

// Convert either to a real array with spread
const asArray = [...staticItems].map(item => item.textContent);
console.log(asArray);                      // ["Apple", "Banana", "Cherry"]

// ========================================
// EXAMPLE 9: Reading and changing textContent
// ========================================
const message = document.getElementById("message");
console.log(message.textContent);          // "Hello, world!"
message.textContent = "Hello from JavaScript!";

// ========================================
// EXAMPLE 10: textContent vs innerText vs innerHTML
// ========================================
const box = document.getElementById("result-box");
box.textContent = "<strong>Bold?</strong>";   // displayed literally, tags not parsed
console.log(box.textContent);                 // "<strong>Bold?</strong>"
box.innerHTML = "<strong>Bold!</strong>";     // parsed as HTML, renders bold text
box.innerText = "Plain text";                 // rendered text only

// ========================================
// EXAMPLE 11: Changing inline styles
// ========================================
message.style.color = "blue";                 // camelCase property names
message.style.fontSize = "24px";              // include units
message.style.backgroundColor = "#ffe0e0";

// ========================================
// EXAMPLE 12: classList add / remove / toggle / contains
// ========================================
const card = document.querySelector(".card");
card.classList.add("active");                 // add a class
card.classList.remove("active");              // remove it
card.classList.toggle("open");                // add if absent, remove if present
console.log(card.classList.contains("open")); // true
console.log(card.classList.contains("active")); // false

// ========================================
// EXAMPLE 13: Attributes vs properties
// ========================================
const input = document.getElementById("name-input");
console.log(input.getAttribute("placeholder"));  // "Your name"
input.setAttribute("placeholder", "Enter a name");
input.dataset.id = "42";                        // sets data-id attribute
console.log(input.hasAttribute("data-id"));     // true
console.log(input.className === "");            // className is the property name

// ========================================
// EXAMPLE 14: Creating elements with createElement
// ========================================
const li = document.createElement("li");        // exists only in memory
li.textContent = "Grapes";
console.log(li.tagName);                        // "LI"

// ========================================
// EXAMPLE 15: appendChild, append, prepend
// ========================================
const list = document.getElementById("list");
const a = document.createElement("li");
a.textContent = "Grapes";
list.appendChild(a);                            // add to the end

const b = document.createElement("li");
b.textContent = "Figs";
list.prepend(b);                                // add to the beginning

const c = document.createElement("li");
c.textContent = "Dates";
list.append(c, a);                              // append multiple nodes at once

// ========================================
// EXAMPLE 16: insertBefore
// ========================================
const second = list.querySelectorAll("li")[1];
const newLi = document.createElement("li");
newLi.textContent = "Kiwi";
list.insertBefore(newLi, second);               // insert before the second li

// ========================================
// EXAMPLE 17: Removing elements
// ========================================
const lastItem = list.lastElementChild;
list.removeChild(lastItem);                     // classic: parent removes child
const firstOfThree = list.querySelector("li");
firstOfThree.remove();                          // modern: element removes itself

// ========================================
// EXAMPLE 18: Reading input values
// ========================================
console.log(input.value);                       // current text ("" if empty)
input.value = "Sofia";                          // programmatically set a value
console.log(input.value.trim());                // "Sofia"

// ========================================
// EXAMPLE 19: Click events with addEventListener
// ========================================
const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", () => {
  const name = document.getElementById("name-input").value.trim();
  console.log(`Saved name: ${name}`);
});

// ========================================
// EXAMPLE 20: Input events (fires on every keystroke)
// ========================================
const greeting = document.getElementById("greeting");
input.addEventListener("input", (event) => {
  greeting.textContent = `Hello, ${event.target.value.trim() || "stranger"}!`;
});

// ========================================
// EXAMPLE 21: Form submit with preventDefault
// ========================================
const form = document.getElementById("login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();                       // stop the page reload
  const email = document.getElementById("email").value.trim();
  console.log(`Logging in with: ${email}`);
});

// ========================================
// EXAMPLE 22: Keyboard events (keydown)
// ========================================
document.addEventListener("keydown", (event) => {
  console.log(`Pressed: ${event.key}`);
  if (event.key === "Enter") {
    console.log("Enter was pressed");
  }
  if (event.key === "Escape") {
    input.value = "";                           // Escape clears the input
  }
});

// ========================================
// EXAMPLE 23: The event object
// ========================================
saveBtn.addEventListener("click", (event) => {
  console.log(event.type);                      // "click"
  console.log(event.target);                    // the element clicked
  console.log(event.currentTarget === saveBtn); // true (listener is on saveBtn)
  console.log(event.timeStamp);                 // milliseconds since page load
});

// ========================================
// EXAMPLE 24: Event delegation (one listener for many children)
// ========================================
list.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item) return;                            // click was not on an <li>
  console.log(`Clicked item: ${item.textContent}`);
});

// ========================================
// EXAMPLE 25: closest() to find an ancestor
// ========================================
document.querySelector(".card-btn").addEventListener("click", (event) => {
  const closestCard = event.target.closest(".card");
  console.log(closestCard);                     // the whole .card element
  closestCard.querySelector(".card-title").textContent = "Opened!";
});

// ========================================
// EXAMPLE 26: Toggling a dark mode theme
// ========================================
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");       // CSS handles all colors
  themeBtn.textContent = document.body.classList.contains("dark")
    ? "Toggle light mode"
    : "Toggle dark mode";
});

// ========================================
// EXAMPLE 27: Building a simple list appender
// ========================================
const appenderInput = document.getElementById("name-input");
const appenderBtn = document.getElementById("save-btn");

function addItem(text) {
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

appenderBtn.addEventListener("click", () => {
  const value = appenderInput.value.trim();
  if (!value) return;                           // ignore empty input
  addItem(value);
  appenderInput.value = "";
  appenderInput.focus();
});

addItem("Grapes");                              // demonstrate programmatically

// ========================================
// EXAMPLE 28: DOMContentLoaded
// ========================================
// Useful when a <script> sits in the <head>, before the body is parsed.
document.addEventListener("DOMContentLoaded", () => {
  console.log("HTML parsed; safe to query any element now");
});

console.log("\nAll examples completed! Run these against a matching HTML page in the browser.");
