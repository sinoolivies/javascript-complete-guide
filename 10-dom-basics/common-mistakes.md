# Common Mistakes: DOM Basics

## 1. Running DOM Code Before the Element Exists

### The Mistake
```html
<head>
  <script>
    const title = document.getElementById("page-title");
    title.textContent = "Too early";  // TypeError: Cannot read properties of null
  </script>
</head>
```

### The Problem
The script in `<head>` runs before the body is parsed, so `#page-title` does not exist yet and `getElementById` returns `null`.

### The Fix
Move the `<script>` to the end of `<body>`, or wrap the code in `DOMContentLoaded`:
```javascript
document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("page-title");
  title.textContent = "Now it works";
});
```

## 2. Using innerHTML With User Input (XSS Risk)

### The Mistake
```javascript
output.innerHTML = `Welcome, ${userInput}`;
```

### The Problem
`innerHTML` parses the string as HTML. A user typing `<img src=x onerror="alert('hacked')">` gets code executed — a cross-site scripting (XSS) attack.

### The Fix
Use `textContent` for anything that can come from a user; it treats the value as plain text:
```javascript
output.textContent = `Welcome, ${userInput}`;
```

## 3. Forgetting querySelectorAll Returns a NodeList, Not an Array

### The Mistake
```javascript
const items = document.querySelectorAll(".item");
items.map(item => item.textContent);  // TypeError: items.map is not a function
```

### The Problem
`querySelectorAll` returns a `NodeList`. It has `forEach` but not `map`, `filter`, or `reduce`.

### The Fix
Convert to an array with spread or `Array.from`:
```javascript
const texts = [...document.querySelectorAll(".item")].map(item => item.textContent);
```

## 4. Treating NodeList and HTMLCollection the Same

### The Mistake
```javascript
const live = document.getElementsByClassName("item");
live.forEach(...);  // TypeError: live.forEach is not a function
```

### The Problem
`getElementsByClassName` and `getElementsByTagName` return a **live HTMLCollection**, which has no `forEach` and updates as the DOM changes.

### The Fix
```javascript
[...live].forEach(item => console.log(item));
```
And remember: if you need the current elements after adding new ones, re-query the live collection (or re-run `querySelectorAll`).

## 5. Reading an Input Value Before It Has One

### The Mistake
```javascript
const email = emailInput.value;   // captured once, before the user types
```

### The Problem
Reading `.value` once grabs the value at that moment. Reading it outside an event handler, or reusing a stale variable, gives you the empty string.

### The Fix
Read `.value` inside the handler each time it is needed:
```javascript
saveBtn.addEventListener("click", () => {
  console.log(emailInput.value.trim());
});
```

## 6. Not Calling preventDefault on Form Submit

### The Mistake
```javascript
form.addEventListener("submit", () => {
  console.log(emailInput.value);  // logs, then the page reloads anyway
});
```

### The Problem
A submitted form reloads the page by default, wiping out your handler's work.

### The Fix
```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(emailInput.value);
});
```

## 7. Using onclick Attributes / Assignments Instead of addEventListener

### The Mistake
```javascript
button.onclick = handleClick;
button.onclick = handleOther;   // overwrites the first handler
```

### The Problem
`onclick` can hold only one handler, it does not support `removeEventListener` cleanly, and inline `onclick="..."` attributes mix JavaScript into HTML.

### The Fix
```javascript
button.addEventListener("click", handleClick);
button.addEventListener("click", handleOther);  // both run
```

## 8. Confusing event.target and event.currentTarget

### The Mistake
```javascript
list.addEventListener("click", (event) => {
  event.target.classList.toggle("active");  // toggles whatever child was clicked
});
```

### The Problem
`event.target` is the deepest element actually clicked; `event.currentTarget` is the element the listener is attached to. With nested children they differ, so styling the "wrong" one silently fails.

### The Fix
```javascript
list.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item) return;
  item.classList.toggle("active");
});
```

## 9. Querying the DOM Repeatedly in Loops

### The Mistake
```javascript
for (let i = 0; i < 100; i++) {
  document.getElementById("list").appendChild(makeItem(i));
}
```

### The Problem
Every call to `getElementById` walks the document again, and appending inside the loop triggers a reflow each time — slow for large lists.

### The Fix
Cache the reference once and build off-DOM before a single insert:
```javascript
const list = document.getElementById("list");
for (let i = 0; i < 100; i++) {
  list.appendChild(makeItem(i));
}
```

## 10. Using == Instead of === With Values From the DOM

### The Mistake
```javascript
if (input.value == 5) { ... }  // "5" == 5 is true; surprising bugs
```

### The Problem
DOM values (like `input.value`) are strings. Loose `==` coerces types, silently matching `"5"` and `5`.

### The Fix
Always use strict equality:
```javascript
if (input.value.trim() === "5") { ... }
```

## 11. Forgetting classList Toggles Are Stateful

### The Mistake
```javascript
element.classList.add("open");
// ...later, on a different code path...
element.classList.add("open");   // still open; the class never gets removed
```

### The Problem
`add` only adds and `remove` only removes; neither knows about the other path. State can drift.

### The Fix
Use `toggle` for flip-flop behavior, or read `contains` before deciding:
```javascript
element.classList.toggle("open");
```

## 12. Setting Styles One Property at a Time Instead of Using Classes

### The Mistake
```javascript
modal.style.display = "block";
modal.style.backgroundColor = "rgba(0,0,0,0.5)";
modal.style.position = "fixed";
// ...many more lines, hard to undo
```

### The Problem
Inline styles are scattered across code, hard to reuse, and can only be removed by setting them back — the design logic belongs in CSS.

### The Fix
```javascript
modal.classList.add("open");   // CSS: .modal.open { display: block; ... }
modal.classList.remove("open");
```

## 13. Assuming NodeList/HTMLCollection Updates Are Instant

### The Mistake
```javascript
const items = document.querySelectorAll(".item");
list.appendChild(makeItem());
console.log(items.length);  // still the old count!
```

### The Problem
`querySelectorAll` returns a **static** NodeList — a snapshot. The new item is in the DOM but not in the snapshot.

### The Fix
Re-query after the DOM changes:
```javascript
list.appendChild(makeItem());
console.log(document.querySelectorAll(".item").length);
```
(Note: `getElementsByClassName` is live, so it would include the new item automatically — exactly why static vs live matters.)

## 14. Using innerText When textContent Is What You Meant

### The Mistake
```javascript
const text = hiddenElement.innerText;  // "" because the element is display:none
```

### The Problem
`innerText` returns only *rendered* text and is layout-aware; hidden text is omitted. It is also slower than `textContent`.

### The Fix
```javascript
const text = hiddenElement.textContent;  // gets the text regardless of visibility
```
Use `innerText` only when you specifically need rendered-text behavior.
