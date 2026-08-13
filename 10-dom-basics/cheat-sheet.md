# Cheat Sheet: DOM Basics

## Selecting
```javascript
document.getElementById("id")        // one element by id (or null)
document.querySelector("#id")        // first match for any CSS selector
document.querySelectorAll(".class")  // static NodeList of all matches
document.getElementsByClassName("c") // LIVE HTMLCollection by class
document.getElementsByTagName("tag") // LIVE HTMLCollection by tag
[...document.querySelectorAll("li")] // convert to array for map/filter/reduce
```

## Reading Content
```javascript
el.textContent        // all text, plain (safe, fastest)
el.innerText          // rendered text only (respects CSS, slower)
el.innerHTML          // HTML markup (parses; XSS risk with user input)
el.textContent = "x"  // set plain text, replaces children safely
```

## Attributes and Properties
```javascript
el.getAttribute("name")      // read an HTML attribute
el.setAttribute("name", "v") // set an HTML attribute
el.hasAttribute("name")      // does the attribute exist?
el.removeAttribute("name")   // remove an attribute
el.className                 // class attribute as a string
el.dataset.id                // shorthand for data-id attribute
```

## Classes
```javascript
el.classList.add("a")        // add a class
el.classList.remove("a")     // remove a class
el.classList.toggle("a")     // add if absent, remove if present
el.classList.contains("a")   // true/false check
```

## Styles
```javascript
el.style.color = "red"                  // camelCase property names
el.style.backgroundColor = "#000"       // background-color -> backgroundColor
el.style.fontSize = "20px"              // include units
```
Prefer `classList` toggles over inline styles for anything reusable.

## Creating / Inserting / Removing
```javascript
const li = document.createElement("li") // create an element (not yet in page)
li.textContent = "text"                 // give it content
parent.appendChild(li)                  // append one node at the end
parent.append(li, otherNode, "str")     // append multiple nodes/strings
parent.prepend(li)                      // insert at the beginning
parent.insertBefore(li, refNode)        // insert before a reference node
li.remove()                             // remove the element from the page
parent.removeChild(li)                  // parent removes a child
parent.replaceChild(newLi, oldLi)       // swap one node for another
parent.innerHTML = ""                   // clear all children
```
A node can exist in only one place — inserting an existing node moves it.

## Events
```javascript
el.addEventListener("click", handler)       // attach a handler
el.removeEventListener("click", handler)    // remove it (needs named handler)
document.addEventListener("DOMContentLoaded", init)  // wait for parsed HTML
event.preventDefault()                      // cancel default (e.g. form submit)
event.stopPropagation()                     // stop bubbling (rarely needed)
event.target                                // element actually clicked
event.currentTarget                         // element the listener is on
```

## Event Delegation
```javascript
list.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item) return;
  // handle one listener for all items, current and future
});
```

## Traversal
```javascript
el.parentElement            // parent element (or null)
el.children                 // HTMLCollection of element children
el.firstElementChild        // first element child
el.lastElementChild         // last element child
el.nextElementSibling       // next element sibling
el.previousElementSibling   // previous element sibling
el.closest("selector")      // nearest matching ancestor (or self), or null
```

## Common Event Types
```javascript
"click"        // mouse/touch tap
"input"        // typing in a text field (every keystroke)
"change"       // value changed and focus left, or checkbox/select changed
"submit"       // form submitted
"keydown"      // a key was pressed
"keyup"        // a key was released
"mouseover"    // mouse entered an element
"mouseout"     // mouse left an element
"DOMContentLoaded" // HTML fully parsed
```

## Forms
```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();           // stop the page reload
  const email = emailInput.value.trim();  // read the value inside the handler
  // validate, show errors via classList, submit
});
input.addEventListener("input", (event) => {
  console.log(event.target.value);  // live value as the user types
});
```
