# Exercises: DOM Basics

Complete these exercises to practice working with the DOM. Exercises may reference this assumed HTML page — create it as a local `.html` file (with a `<script>` tag at the end of `<body>`) or paste the exercise code into the browser console while viewing the page:

```html
<div id="app">
  <h1 id="page-title">My Page</h1>
  <p id="message">Hello, world!</p>
  <ul id="list">
    <li class="item">Apple</li>
    <li class="item">Banana</li>
    <li class="item">Cherry</li>
  </ul>
  <input id="name-input" type="text" placeholder="Your name" />
  <button id="save-btn">Save</button>
  <button id="theme-btn">Toggle dark mode</button>
  <form id="login-form">
    <input id="email" type="email" placeholder="you@example.com" />
    <button type="submit">Login</button>
  </form>
  <div id="greeting"></div>
</div>
```

## Beginner Exercises

1. **Access the Document**
   - Log the `document` object, `document.title`, and `document.body`
   - Explain what each one represents in one comment

2. **Select by ID**
   - Use `getElementById` to select `#message`
   - Change its `textContent` to a message of your choice

3. **Select by Class**
   - Use `getElementsByClassName("item")` to select all list items
   - Log the collection's length and the first element's text

4. **Select by Tag**
   - Use `getElementsByTagName("li")` to select all list items
   - Log the number of items found

5. **querySelector**
   - Use `querySelector` to select `#page-title`, the first `.item`, and the first `li`
   - Log all three results

6. **querySelectorAll**
   - Use `querySelectorAll(".item")` to select all items
   - Log the count and iterate with `forEach` to log each item's text

7. **Change Text Content**
   - Select `#page-title` and change its `textContent`
   - Log the new value to confirm the change

8. **Change Inline Style**
   - Select `#message` and change its `color` and `fontSize` via `style`

9. **classList Add and Remove**
   - Select `#page-title`
   - Add a class `highlight`, log `className`, then remove it

10. **Create and Append**
    - Use `createElement` to make an `<li>` with text "Grapes"
    - Append it to `#list` with `appendChild`
    - Log the list's new item count

## Intermediate Exercises

11. **textContent vs innerHTML**
    - Create an empty `div#output` in the page
    - Set its `innerHTML` to `"<strong>Bold</strong>"` and log the result
    - Set its `textContent` to `"<strong>Bold</strong>"` and log the result
    - Explain the difference in a comment

12. **Attributes vs Properties**
    - Select `#name-input`
    - Log its `placeholder` attribute via `getAttribute` and via the `.placeholder` property
    - Set a `data-` attribute with `setAttribute`, then read it back

13. **classList Toggle and Contains**
    - Select `#list`
    - Toggle the class `active`, log `contains("active")`, toggle again, and log again

14. **append and prepend**
    - Create an `<li>` "First" and prepend it to `#list`
    - Create an `<li>` "Last" and append it to `#list`
    - Log the resulting list of item texts

15. **Removing Elements**
    - Select the last `.item` and remove it with `.remove()`
    - Remove another `.item` with `removeChild`
    - Log the remaining count

16. **Create Many Elements in a Loop**
    - Add an empty `<ul id="numbers">` to the page
    - Use a loop to create and append five `<li>` elements (1 through 5)
    - Verify with a log of `#numbers` children length

17. **Read Input Value**
    - Set `#name-input`'s value programmatically, then read it back with `.value`
    - Log the trimmed value

18. **Click Event**
    - Add a `click` listener to `#save-btn` that reads the value of `#name-input` and logs `"Saved: <value>"`
    - Handle the empty case with an early return

19. **Form Submit**
    - Add a `submit` listener to `#login-form`
    - Call `preventDefault`, read the `#email` value, and log it
    - Verify the page does not reload

20. **Input Event**
    - Add an `input` listener to `#name-input`
    - Update `#greeting`'s `textContent` to `"Hello, <value>!"` as the user types

## Advanced Exercises

21. **Event Object**
    - Add a `click` listener to `#list`
    - Log `event.type`, `event.target`, and `event.currentTarget`
    - Click different items and observe the differences

22. **Keyboard Events**
    - Add a `keydown` listener to the document
    - If the key is "Enter", log the current value of `#name-input`
    - If the key is "Escape", clear the input

23. **Event Delegation**
    - Attach ONE `click` listener to `#list`
    - When an `<li>` is clicked, log its `textContent`
    - Append a new `<li>` programmatically and confirm it is handled without a new listener

24. **closest()**
    - Add a `<button class="remove">x</button>` inside each existing `<li>`
    - Add ONE `click` listener on `#list`; when the button is clicked, use `event.target.closest("li")` to find and remove the whole item

25. **Dark Mode Toggle**
    - Add a `click` listener to `#theme-btn`
    - Toggle a `dark` class on `document.body`
    - Update the button's `textContent` to reflect the current state

26. **Todo List Appender**
    - Use `#name-input` and `#save-btn` as an "add todo" input and button
    - On click, append a new `<li>` with the trimmed value (ignore empty values)
    - Clear and focus the input after adding

27. **Accordion**
    - Add three `.accordion-item` blocks, each with a `.accordion-header` and a hidden `.accordion-content`
    - Add ONE `click` listener on the container; clicking a header toggles `.open` on its parent item, showing/hiding the content

28. **Interactive Counter**
    - Add `#counter` (a display), `#inc-btn`, `#dec-btn`, and `#reset-btn`
    - Wire up increment, decrement, and reset
    - Apply an `active` class to the counter when it is not zero

29. **Form Validation**
    - In the `#login-form` submit handler, validate that `#email` is non-empty and contains `@`
    - If invalid, add an `invalid` class to the input and set `#greeting` to an error message
    - If valid, log "Form valid" and keep `preventDefault` so the page stays

30. **Dynamic List Rendering**
    - Given an array of product objects `[{ name, price }]`, render one `<li>` per product into `#list` using `createElement` and `textContent` (no innerHTML)
    - Include the price in each item's text

---

**Note**: Solutions are available in `solutions.js`.
