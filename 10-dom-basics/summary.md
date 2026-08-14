# Summary: DOM Basics

## Key Concepts Learned

### 1. What the DOM Is
- The Document Object Model: a live, structured tree of nodes the browser builds from HTML
- The bridge between HTML and JavaScript — every element, text, and attribute is an object you can read and change
- Accessible through the global `document` object

### 2. How It Works Internally
- HTML is parsed into element nodes, text nodes, and attributes
- The DOM is **live**: changes update the page immediately
- Reflow/repaint make batch changes the performance-conscious choice (advanced note)

### 3. Selecting Elements
- `getElementById` — fastest, unique elements
- `getElementsByClassName` / `getElementsByTagName` — **live HTMLCollection**, no `forEach`
- `querySelector` / `querySelectorAll` — CSS selectors, **static NodeList** with `forEach`
- Convert either to an array with `[...collection]` when you need `map`/`filter`/`reduce`

### 4. Reading and Writing Content
- `textContent` — all text as plain text, safe, fast
- `innerText` — rendered text only, layout-aware, slower
- `innerHTML` — parsed markup, powerful but an **XSS risk** with user input
- Rule: `textContent` for user data, `innerHTML` only for markup you control

### 5. Attributes and Properties
- Attributes via `getAttribute`/`setAttribute`; properties like `.value`, `.placeholder`, `.className`
- The `class` attribute's property name is `className`; `dataset` handles `data-*` attributes
- Properties and attributes are not always in sync (e.g. input `.value`)

### 6. Styling
- `element.style` for inline styles (camelCase names, units required)
- `classList.add/remove/toggle/contains` for everything else
- Classes keep presentation in CSS and behavior in JavaScript

### 7. Creating and Managing Nodes
- `createElement`, then populate with `textContent`
- Insert with `appendChild`, `append`, `prepend`, `insertBefore`; insert an existing node to move it
- Remove with `remove()` or `removeChild()`; swap with `replaceChild`

### 8. Events
- `addEventListener` over `onclick` — multiple handlers, removable, no markup mixing
- The event object: `type`, `target`, `currentTarget`, `timeStamp`
- `preventDefault` stops default behavior (form reloads) without stopping handlers
- Bubbling lets one ancestor listener handle clicks on all descendants — **event delegation**

### 9. Traversal
- `parentElement`, `children`, `firstElementChild`, `lastElementChild`, siblings
- `closest()` — the workhorse of delegation: nearest matching ancestor

### 10. Document Readiness
- Scripts at the end of `<body>` see the full DOM
- `DOMContentLoaded` guards scripts that must run early

## Important Takeaways

### Best Practices
1. **Cache DOM references** — don't re-query in loops
2. **Use delegation** — one listener for many/dynamic children
3. **Prefer `addEventListener`** over inline handlers
4. **Use `classList` and classes** over scattered inline styles
5. **Sanitize before injecting** — `textContent` beats `innerHTML` for user data
6. **Guard against `null`** — optional chaining on selector results
7. **Build with `createElement`/`append`** for data-driven markup
8. **Keep handlers small and named** so they can be removed
9. **Read values inside handlers** — never store stale `.value`
10. **Batch DOM writes** to minimize reflows

### Common Pitfalls
1. Running DOM code before the element exists
2. `querySelectorAll` is a NodeList, not an array
3. Static NodeList vs live HTMLCollection confusion
4. `innerHTML` with user input (XSS)
5. Forgetting `preventDefault` on form submit
6. Confusing `event.target` and `event.currentTarget`
7. `==` vs `===` with string DOM values
8. Scattered inline styles that are hard to undo

## What You Should Know Before Moving Forward

You can now read a page, change its content, react to user interaction, and build dynamic UI from data. That is the foundation of every frontend framework. Practice by building small widgets (todo lists, accordions, galleries) until selection, classList, events, and delegation feel automatic.

## Next Topic

This completes **Phase 1: JavaScript Fundamentals**. You are ready for **Phase 2: Advanced Practice** — build portfolio projects (task manager, weather app, e-commerce cart) and then move into **Asynchronous JavaScript** (promises, async/await, fetch) to make your pages talk to servers.
