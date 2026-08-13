# Theory: DOM Basics

The Document Object Model (DOM) is the bridge between your HTML and your JavaScript. When the browser loads a page, it reads your HTML, parses it into a structured tree of objects called **nodes**, and exposes that tree to JavaScript through a global object named `document`. Everything you see on a web page is represented in this tree, and every change you make with JavaScript goes through it.

This theory guide covers the DOM from the ground up: what it is, how it works internally, how to select and read elements, how to create and modify them, and how to make them respond to events.

## What the DOM Is

The DOM is a **programmatic representation of a web page**. Think of it as a family tree:

- The `document` node is the root.
- `<html>` is the trunk.
- `<head>` and `<body>` are the main branches.
- Every tag, text snippet, and attribute is a node further down.

For this HTML:

```html
<ul id="list">
  <li class="item">Apple</li>
  <li class="item">Banana</li>
</ul>
```

The DOM looks like:

```
document
 └── html
     └── body
         └── ul#list
             ├── li.item ("Apple")
             └── li.item ("Banana")
```

Why does the DOM exist? HTML describes *what* is on the page; JavaScript needs a structured, object-based way to *read and change* it. The DOM is that API. It lets code ask "give me the element with id `list`", change its contents, add a new `<li>`, or react when a user clicks it.

## How the DOM Works Internally

### Parsing HTML Into a Node Tree

When the browser receives an HTML file, it runs an HTML parser that reads the markup character by character and builds the node tree. Every element becomes an **element node**, text between tags becomes **text nodes**, and attributes are stored on their element. This is a one-way process from your source HTML: by the time JavaScript runs, the DOM is the source of truth, not your `.html` file.

### The DOM Is Live

This is the single most important idea in this topic: **the DOM is a live, mutable model, not a snapshot.** When you run:

```javascript
const list = document.getElementById("list");
```

`list` is a reference to the *actual node currently in the page*. If you later add an `<li>` to it with JavaScript, the page updates immediately, and the same `list` variable now points at the bigger list. You never "reload" the DOM after changing it — you changed the real thing.

### Reflow and Repaint (Advanced Note)

Because the DOM is tied to rendering, changing it has a cost. When you change an element's size, position, or visibility, the browser must recompute layout (**reflow**) and then redraw pixels (**repaint**). Batching many DOM changes together (for example, building a fragment first and inserting it once) avoids triggering expensive reflows many times. You do not need to master this now, but it explains two best practices you will see later: cache your lookups, and don't read/write the DOM in tight loops.

## Selecting Elements

Before you can do anything, you need a reference to an element. JavaScript offers five main ways.

### getElementById

```javascript
const list = document.getElementById("list");
```

Returns the element with that `id`, or `null` if it does not exist. This is the fastest selector and should be your default for unique elements. Because IDs must be unique, it always returns at most one element.

### getElementsByClassName

```javascript
const items = document.getElementsByClassName("item");
```

Returns a **live HTMLCollection** of all elements with the class. "Live" means the collection updates automatically when elements are added to or removed from the page. HTMLCollection supports index access (`items[0]`) and `.length`, but does **not** have `forEach`.

### getElementsByTagName

```javascript
const paragraphs = document.getElementsByTagName("p");
```

Same behavior, but matches by tag name. Also returns a live HTMLCollection.

### querySelector

```javascript
const firstItem = document.querySelector(".item");
const firstLi = document.querySelector("ul li");
const title = document.querySelector("#page-title");
```

Accepts any **CSS selector** and returns the first matching element, or `null`. This is why it is the preferred modern choice: it reuses the selector syntax you already know from CSS, so `#id`, `.class`, `tag`, `[attribute]`, and complex combinations all work.

### querySelectorAll

```javascript
const allItems = document.querySelectorAll(".item");
```

Returns a **static NodeList** of every matching element. Unlike HTMLCollection, NodeList is static (a snapshot at the moment of the query) and — importantly — supports `forEach`, `length`, and index access. Because it is not live, it will not automatically include elements you add afterward, so if you need the current list, re-query.

### NodeList vs HTMLCollection

| | NodeList | HTMLCollection |
|---|---|---|
| Created by | `querySelectorAll` | `getElementsByClassName`, `getElementsByTagName`, `children` |
| Live or static | Static | Live |
| `forEach` | Yes | No |
| Convert to array | `[...nodeList]` | `[...collection]` |

To use array methods like `map` or `filter` on either, spread it into an array: `[...document.querySelectorAll(".item")].map(li => li.textContent)`.

## Reading Element Data

### textContent

```javascript
console.log(list.textContent);
list.textContent = "New content";
```

Gets or sets all text inside the element, including text in nested elements, treating everything as plain text. Setting `textContent` **replaces all children** with a single text node, and it never parses HTML — it is the safe, fast way to change text.

### innerText

```javascript
const visible = message.innerText;
```

Also returns text, but only the text that is *visibly rendered* (it respects CSS like `display: none` and line breaks). It is more expensive than `textContent` because the browser must consider layout. Prefer `textContent` unless you specifically need rendered-text behavior.

### innerHTML

```javascript
container.innerHTML = "<strong>Bold</strong>";
```

Gets or sets the element's *HTML markup*, including child elements. This is powerful and convenient for building markup, but it carries a **security warning**: if the string contains user input, that input is parsed as HTML and can inject arbitrary elements and scripts — the classic **XSS (Cross-Site Scripting)** attack.

```javascript
// Dangerous if `userInput` comes from a user:
container.innerHTML = userInput;
// userInput = '<img src=x onerror="alert("hacked")">'  executes the handler!
```

Rule of thumb: use `textContent` for any text that could come from a user, and only use `innerHTML` with markup you fully control.

## Attributes vs Properties

Elements expose two overlapping systems: **HTML attributes** (what is in the markup) and **DOM properties** (what JavaScript reads).

```javascript
const input = document.querySelector("#name-input");

// Reading/writing attributes:
input.getAttribute("placeholder");  // the placeholder attribute
input.setAttribute("placeholder", "Enter a name");
input.hasAttribute("disabled");     // true/false

// Reading/writing properties:
input.placeholder;                  // same value, as a property
input.value = "";                   // the input's current value
```

Some attributes have special property counterparts. The classic pitfall: `className` (property) vs `class` (attribute). `class` is a reserved word, so the property is named `className`:

```javascript
element.className = "active";                       // property
element.setAttribute("class", "active");            // attribute
```

Properties are not always in sync with attributes — for example, typing in an `<input>` changes its `.value` property but not its `value` attribute. Prefer properties for values and states, and attributes for custom metadata (`data-*`).

## Styling

### Inline Styles with element.style

```javascript
message.style.color = "red";
message.style.backgroundColor = "black";  // camelCase, not background-color
message.style.fontSize = "20px";
```

The `style` property gives access to inline styles. Names are camelCase (`backgroundColor` for `background-color`) and values must include units (`"20px"`, not `20`).

### classList

The far better tool for most styling is toggling CSS classes, which keeps presentation in CSS and behavior in JavaScript:

```javascript
element.classList.add("active");        // add one or more classes
element.classList.remove("active");     // remove
element.classList.toggle("active");     // add if missing, remove if present
element.classList.contains("active");   // true/false
```

### Why Classes Over Inline Styles

1. **Separation of concerns** — styling rules live in CSS, where designers and themes belong.
2. **Reusability** — one `.dark-theme` class can restyle dozens of rules at once; inline styles change one property per line.
3. **Maintainability** — toggling `.open` or `.hidden` is easy to read; tracking which inline styles are set across code paths is not.
4. **Specificity and cascading** — classes play nicely with the cascade; inline styles override everything and are hard to undo.

Use `element.style` for one-off, dynamic values that genuinely depend on JavaScript (like `offsetWidth`), and `classList` for everything else.

## Creating and Inserting Nodes

### createElement and Text Nodes

```javascript
const li = document.createElement("li");      // creates an empty <li>, NOT yet in the page
const text = document.createTextNode("Apple"); // creates a text node
li.appendChild(text);
```

`createElement` only creates the element in memory. It does nothing visible until you insert it.

### appending and prepending

```javascript
const list = document.getElementById("list");

const a = document.createElement("li");
a.textContent = "Grapes";
list.appendChild(a);     // add at the end (classic method)

const b = document.createElement("li");
b.textContent = "Figs";
list.prepend(b);         // add at the beginning (modern)
list.append(b, a);       // append multiple nodes at once (modern)
```

- `appendChild(node)` — appends one node; returns it; throws if given a string.
- `append(...nodes)` — appends multiple nodes or strings; no return value.
- `prepend(...nodes)` — inserts at the beginning.

### insertBefore

```javascript
const secondItem = document.querySelectorAll(".item")[1];
list.insertBefore(b, secondItem);  // insert b before secondItem
```

A node can only exist in one place at a time. Inserting an existing node **moves** it.

### innerHTML for Building (with Caveats)

```javascript
list.innerHTML = "";
list.innerHTML = "<li>Apple</li><li>Banana</li>";
```

Convenient, but it re-parses everything (destroying existing listeners on child elements) and is unsafe with untrusted input. Prefer `createElement` + `textContent` when the content involves user data, or when you care about existing listeners.

### Removing Nodes

```javascript
const item = document.querySelector(".item");
item.remove();                 // modern: removes itself from the DOM
list.removeChild(item);        // classic: parent removes the child
```

`replaceChild(newNode, oldNode)` swaps one node for another.

## Events

Events are how your page reacts to the user. The modern and recommended way to listen is `addEventListener`.

```javascript
const button = document.querySelector("#save-btn");

button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

### Why addEventListener Over onclick

- **Multiple listeners** — you can attach several handlers to one element; `onclick = fn` overwrites the previous one.
- **Removal** — `removeEventListener("click", fn)` is possible, which is essential for cleanups.
- **Separation** — no JavaScript mixed into your HTML with `onclick="..."` attributes.
- **Consistency** — the same API for every event type.

### The Event Object

Every handler receives an **event object** describing what happened:

```javascript
button.addEventListener("click", (event) => {
  console.log(event.type);            // "click"
  console.log(event.target);          // the element actually clicked
  console.log(event.currentTarget);   // the element the listener is attached to
  console.log(event.timeStamp);       // when it happened
});
```

### Common Event Types

- `click` — mouse/touch tap
- `input` — user typed in a text field (fires on every keystroke)
- `change` — input value changed and focus left (or a checkbox/select changed)
- `submit` — a form was submitted
- `keydown` / `keyup` — a keyboard key pressed/released
- `DOMContentLoaded` — the HTML was parsed (styles/images may still be loading)
- `mouseover` / `mouseout` — mouse entered/left an element

### preventDefault

Some events have a default browser behavior. Submitting a form reloads the page; pressing keys in inputs can move the caret. `preventDefault` stops that default while still letting your handler run:

```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();  // stop the page reload
  console.log("Form handled by JavaScript");
});
```

`event.preventDefault()` does **not** stop other handlers or stop propagation — it only cancels the default action.

### Bubbling vs Capturing (Advanced Note)

When you click a nested element, the event does not just fire on that element — it travels. First it **captures** down from the document to the target, then it **bubbles** back up, firing handlers on every ancestor. By default, handlers run during the bubbling phase.

```html
<ul id="list"><li>Apple</li></ul>
```

```javascript
list.addEventListener("click", () => console.log("list clicked"));
document.querySelector("li").addEventListener("click", () => console.log("li clicked"));
// Clicking the li prints "li clicked" then "list clicked"
```

### target vs this (currentTarget)

- `event.target` — the element where the event originated (deepest).
- `event.currentTarget` (or `this` in a regular function) — the element the listener is attached to.

They differ whenever you click a child of the element with the listener.

### Event Delegation (Advanced, Essential)

Instead of attaching a listener to every child, attach **one** listener to a common ancestor and figure out which child was clicked from `event.target`:

```javascript
list.addEventListener("click", (event) => {
  const item = event.target.closest("li");  // find the <li>, even if we hit an inner tag
  if (!item) return;                        // click was not on an item
  item.classList.toggle("done");
});
```

Delegation keeps one listener, works for items added in the future, and pairs perfectly with `closest`.

## Traversal

Navigation between related elements:

```javascript
const item = document.querySelector(".item");

item.parentElement;            // the parent element (null if none)
item.parentNode;               // parent node (includes document fragments)
item.children;                 // HTMLCollection of direct element children
item.childNodes;               // NodeList including text nodes (messy — prefer children)
item.firstElementChild;        // first element child
item.lastElementChild;         // last element child
item.nextElementSibling;       // next element sibling
item.previousElementSibling;   // previous element sibling
item.closest("ul");            // nearest ancestor matching a selector (includes itself)
```

`closest` is especially useful with delegation: from any deeply nested click target, it walks up and returns the nearest matching ancestor, or `null`.

## Document Readiness

JavaScript at the bottom of `<body>` sees the whole parsed DOM, so no extra setup is needed. If your script runs in `<head>` (before the elements exist), `getElementById` returns `null`. Wrap initialization in `DOMContentLoaded`:

```javascript
document.addEventListener("DOMContentLoaded", () => {
  // The HTML is fully parsed; safe to query anything now
});
```

## Real-World Usage Examples

1. **Form validation**: on `submit`, call `preventDefault`, read inputs, add `.invalid` classes to bad fields, and show `.error` messages — no page reload.
2. **Todo list**: `submit` adds a `<li>`, `click` delegation toggles `.done` or removes the item, and a filter re-shows/hides items with `classList`.
3. **Dark mode**: one button toggles a `.dark` class on `document.body`; CSS handles the colors.
4. **Accordion / FAQ**: clicking a header toggles `.open` on its parent, and CSS shows or hides the content.
5. **Product rendering**: an array of products is turned into DOM nodes in a loop and appended once to a container.
6. **Lightbox gallery**: clicking a thumbnail reads its `src`/`alt`, opens an overlay, and a click on the overlay removes it.

Every interactive feature on a page — menus, tabs, notifications, galleries, dashboards — is built from the same handful of tools: select, read, modify, listen, and respond. Master these and you can build almost anything.

DOM manipulation is the foundation of every frontend framework. The patterns you practice here — declarative selection, safe content updates, delegation, and event-driven state changes — are exactly what React and Vue automate for you at scale.
