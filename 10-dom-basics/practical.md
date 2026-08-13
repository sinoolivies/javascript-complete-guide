# Practical Challenges: DOM Basics

These real-world coding challenges help you apply DOM manipulation to practical scenarios. Build each one as a small HTML page with a `<script>` at the end of `<body>`.

## Challenge 1: Todo App

**Scenario**: Build a classic todo list with add, complete, and delete.

**Requirements**:
- An input and an "Add" button that appends a new todo `<li>`
- Ignore empty or whitespace-only input; clear and focus the input after adding
- Clicking a todo toggles a `done` class (strikethrough styling via CSS)
- A "delete" button on each todo removes it
- Use **event delegation** on the list so both existing and newly added todos work with one listener
- Show a count of remaining (not done) todos

## Challenge 2: Form Validation

**Scenario**: Validate a signup form entirely in JavaScript, with no page reloads.

**Requirements**:
- Fields: name, email, and password
- On submit, call `preventDefault` and validate each field
- Name must be non-empty, email must contain `@` and a dot, password must be at least 6 characters
- Invalid fields get an `invalid` class and a message in a nearby `.error` element
- Valid fields get a `valid` class and an empty error message
- Only log "Success" when all fields pass

## Challenge 3: Interactive Counter and Accordion

**Scenario**: Build a small dashboard combining an interactive counter and an FAQ accordion.

**Requirements**:
- A counter with increment, decrement, and reset buttons
- The display updates its text; add an `active` class whenever the count is not zero
- An accordion of three FAQ items; each has a header and hidden content
- Clicking a header toggles `open` on its item; only one item should be open at a time
- Closing the currently open item by clicking its header again (toggle behavior)

## Challenge 4: Image Gallery Lightbox

**Scenario**: Clicking a thumbnail opens a full-size view in an overlay.

**Requirements**:
- A gallery container with several thumbnail images (use `data-full` attributes for the full-size URL)
- Use **event delegation**: one click listener on the gallery reads the thumbnail's `data-full` and `alt`
- Opening the lightbox creates a `.lightbox` overlay in the DOM containing the full image and a caption
- Clicking the overlay closes it and removes it from the DOM
- Pressing Escape also closes the lightbox

## Challenge 5: Dynamic Product List Rendering

**Scenario**: Render a product catalog from a JavaScript array and filter it.

**Requirements**:
- A `products` array of `{ name, price, category }` objects
- Render all products as list items using `createElement` and `textContent` (no `innerHTML`)
- Format prices with a currency symbol
- Two filter buttons ("Electronics" and "Books") plus an "All" button
- Clicking a filter re-renders only matching products
- Use `classList` to indicate which filter is active

---

**Note**: Solutions are available in `solutions.js`.
