# Best Practices: DOM Basics

## 1. Cache DOM References in Variables
```javascript
const list = document.getElementById("list");
list.addEventListener("click", handler);
list.appendChild(item);
```
Querying the DOM is relatively expensive. Select once, reuse the reference. Never call `getElementById` in a loop.

## 2. Use addEventListener, Not Inline Handlers
```javascript
button.addEventListener("click", handleClick);
// NOT: <button onclick="handleClick()"> or button.onclick = ...
```
Multiple handlers, clean removal, and no JavaScript inside HTML.

## 3. Use Event Delegation for Many or Dynamic Elements
```javascript
list.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item) return;
  item.classList.toggle("done");
});
```
One listener on the parent handles current and future children — no per-item listeners, no re-wiring after additions.

## 4. Prefer classList and Classes Over Inline Styles
```javascript
item.classList.toggle("done");          // design stays in CSS
// Avoid: item.style.textDecoration = "line-through"
```
Classes are reusable, declarative, easy to undo, and cascade correctly. Use `element.style` only for genuinely dynamic one-off values.

## 5. Sanitize Before Injecting With innerHTML (Prefer textContent)
```javascript
item.textContent = userInput;  // safe
// Avoid: item.innerHTML = `<span>${userInput}</span>`  // XSS risk
```
`innerHTML` parses markup; any string containing user input can execute scripts. Use `textContent` for user-provided data, and keep `innerHTML` for markup you fully control (or use `createElement`).

## 6. Guard Against Null When an Element May Not Exist
```javascript
const title = document.getElementById("page-title");
title?.textContent = "Fallback";   // safe if null
// or
if (title) title.textContent = "Fallback";
```
Selectors return `null` when nothing matches. Optional chaining and explicit checks prevent silent crashes — essential for scripts that may run on unexpected pages.

## 7. Build DOM With createElement/append or Escaped Template Literals
```javascript
const li = document.createElement("li");
li.textContent = product.name;
list.appendChild(li);
```
Build nodes programmatically when data is involved. If you use template literals for markup, only interpolate values that are known-safe or escaped.

## 8. Keep Handlers Small and Name Them for Removal
```javascript
function handleClick(event) { ... }
button.addEventListener("click", handleClick);
// later:
button.removeEventListener("click", handleClick);
```
Named handlers make cleanup possible, code readable, and duplication obvious. If a handler is more than a few lines, extract it.

## 9. Listen for DOMContentLoaded Only When Needed
```javascript
document.addEventListener("DOMContentLoaded", () => {
  init();
});
```
A script at the end of `<body>` sees the parsed DOM and needs no wrapper. Reach for `DOMContentLoaded` when the script must live in `<head>` or be deferred.

## 10. Use Semantic, Specific Selectors
```javascript
document.getElementById("save-btn");        // fastest for unique elements
document.querySelector("#list .item");      // precise CSS selectors
```
Prefer IDs for unique elements, and meaningful classes for groups. Avoid tag-only selectors like `getElementsByTagName("div")` which catch unrelated elements.

## 11. Read Values Inside the Handler, Not Before
```javascript
button.addEventListener("click", () => {
  const text = input.value.trim();  // current value, not stale
});
```
Storing `input.value` in a variable outside the handler captures it once — before the user types. Read it where it is used.

## 12. Batch DOM Changes to Avoid Reflows
```javascript
const fragment = document.createDocumentFragment();
for (const product of products) {
  fragment.appendChild(makeItem(product));
}
list.appendChild(fragment);  // one insert, one reflow
```
Each DOM write can trigger layout work. Building off-page and inserting once is noticeably faster for large lists.

## 13. Separate Data From the DOM
```javascript
let todos = [{ text: "Learn DOM", done: false }];
function render() { /* clear list, rebuild from todos */ }
```
Keep your source of truth in data (arrays/objects), not in the rendered HTML. Render is a function of state — this makes features like filtering and persistence straightforward.

## 14. Remove Listeners You No Longer Need
```javascript
function destroy() {
  button.removeEventListener("click", handleClick);
}
```
Listeners on removed elements are garbage-collected in modern browsers, but for long-lived single-page-style apps, explicitly removing listeners on unmounted UI prevents leaks and double-firing.

## 15. Name the target: prefer closest() Over Blind event.target
```javascript
list.addEventListener("click", (event) => {
  const item = event.target.closest(".item");
  if (!item) return;
  // ... item is a real item, even if a child was clicked
});
```
Relying on `event.target` alone breaks when clicks land on nested elements (text nodes, icons, buttons). `closest` normalizes the hit.
