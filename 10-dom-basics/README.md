# 10 - DOM Basics

## Topic Overview

This topic covers the Document Object Model (DOM), the bridge between your HTML page and JavaScript. You will learn how the browser turns HTML into a tree of nodes, how to select elements, how to read and change their content, styles, and attributes, and how to respond to user interaction with events. This is the point where your JavaScript starts to make web pages come alive.

## Learning Objectives

By the end of this topic, you will be able to:

- Explain what the DOM is and why it exists
- Select elements with getElementById, getElementsByClassName, getElementsByTagName, querySelector, and querySelectorAll
- Understand the difference between NodeList and HTMLCollection
- Read and write element content with textContent, innerText, and innerHTML
- Understand the security risks of innerHTML
- Read and set attributes and properties
- Style elements with inline styles and classList
- Create, insert, move, and remove elements
- Handle user events with addEventListener
- Understand the event object, bubbling, and delegation
- Traverse the DOM with parentElement, children, siblings, and closest
- Build interactive features like dark mode toggles, list appenders, and forms

## Prerequisites

- Completion of Topics 01-09 (JavaScript fundamentals)
- A working knowledge of `const`/`let`, arrow functions, and template literals
- **Basic HTML and CSS** — you should know what a `<ul>`, `<button>`, `<input>`, and `<form>` look like, and be comfortable with simple CSS selectors like `#id` and `.class`
- A browser with developer tools (Chrome, Firefox, or Edge)

## What You Will Build/Understand

- A mental model of the DOM as a live tree of nodes
- The ability to build and modify page content dynamically
- Interactive features driven by user events
- The tools to build real-world UI widgets (todo lists, accordions, galleries)
- A foundation for every future frontend topic, including frameworks like React

## Estimated Difficulty

⭐⭐⭐☆☆ (Beginner to Intermediate)

The individual APIs are simple, but the topic is big: selection, content, styles, attributes, creation, events, and traversal all interact. Event handling and the live vs static nature of collections are the parts beginners most often trip over.

## Time to Complete

- Reading and understanding: 3-4 hours
- Practicing examples: 3-4 hours
- Completing exercises: 4-5 hours
- **Total**: 10-13 hours

## Why This Topic Matters

JavaScript exists to make pages interactive, and the DOM is how it does that. Without the DOM:
- Cannot change what a user sees on the page
- Cannot respond to clicks, typing, or form submissions
- Cannot build dynamic content (todo apps, galleries, notifications)
- Cannot validate or process form data
- Cannot work with any frontend framework (React, Vue, Angular)

Mastering the DOM is the bridge from "I can write JavaScript" to "I can build web applications."

## Key Concepts to Master

1. **The DOM Tree**: HTML parsed into a live tree of nodes
2. **Selecting Elements**: IDs, classes, tags, and CSS selectors
3. **Reading Content**: textContent vs innerText vs innerHTML
4. **Attributes and Properties**: getAttribute/setAttribute, className/classList
5. **Styling**: element.style and classList for dynamic appearance
6. **Creating Nodes**: createElement, append, prepend, insertBefore
7. **Removing Nodes**: removeChild, remove
8. **Events**: addEventListener, the event object, preventDefault
9. **Delegation and Traversal**: handling many elements and navigating the tree
10. **Document Readiness**: DOMContentLoaded and script placement

## Common Challenges

- Running DOM code before the element exists
- Forgetting that querySelectorAll returns a NodeList, not an array
- Using innerHTML with user input (XSS risk)
- Not calling preventDefault on form submit (page reloads)
- Confusing event.target with event.currentTarget
- Re-querying the DOM repeatedly instead of caching references

## Next Steps

1. Read `theory.md` to understand the DOM deeply
2. Study `examples.js` to see DOM code in action (in a browser)
3. Complete exercises in `exercises.md` to reinforce learning
4. Work through `practical.md` for real-world applications
5. Check `solutions.js` when you need help
6. Review `common-mistakes.md` to avoid pitfalls
7. Follow `best-practices.md` for professional habits
8. Use `cheat-sheet.md` for quick reference
9. Review `summary.md` before moving on

## Resources

- [MDN: Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [JavaScript.info: DOM](https://javascript.info/document)
- [MDN: Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

---

**Ready to bring your pages to life? Start with `theory.md`!**
