# Summary: Loops

## Key Concepts Learned

### 1. The for Loop
- Anatomy: initialization, condition, increment, body
- Initialization runs once; the condition is checked before every iteration; the increment runs after every body
- Counting forward and backward, stepping by values other than 1
- Off-by-one errors come from using `<=` where `<` belongs

### 2. The while Loop
- Runs while a condition is true; the condition is checked before each iteration
- Use when the iteration count is not known in advance
- The loop variable must be updated inside the body or the loop never ends

### 3. The do...while Loop
- Body runs at least once because the condition is checked after the body
- Best for flows where the body must happen before testing, like a guess or a menu
- Requires a trailing semicolon

### 4. for...of
- Iterates the values of any iterable: arrays, strings, Sets, Maps, NodeLists
- Preferred over index loops when the index is not needed
- No off-by-one errors; works on every iterable uniformly
- `.entries()` provides index and value together
- Maps yield destructureable `[key, value]` pairs

### 5. for...in
- Iterates the keys (property names) of an object
- Includes inherited properties; filter with `Object.hasOwn`
- Do not use on arrays
- Prefer `Object.keys`, `Object.values`, and `Object.entries` in modern code

### 6. break, continue, and Labels
- `break` exits the loop immediately
- `continue` skips the rest of the current iteration only
- Labeled statements let `break`/`continue` target outer loops; rarely needed

### 7. Nested Loops
- The inner loop runs to completion for each outer iteration
- Total work is the product of the sizes (O(n squared) and worse)
- Natural for grids and patterns, but avoid on large collections

### 8. Infinite Loops
- Caused by conditions that never become false
- Common causes: forgotten increments, wrong comparison direction, updating the wrong variable
- Prevention: always move toward the end condition; cap iterations as a safety guard

### 9. Loops vs Array Methods
- `map`, `filter`, `reduce`, and `forEach` are loops under the hood
- Array methods cannot `break` or `continue`; use `for...of` for early exit
- Choose based on clarity, not micro-performance; modern engines optimize loops well

## Important Takeaways

### Loop Best Practices
1. Prefer `for...of` when the index is unused
2. Use `map`/`filter`/`reduce` when their semantics fit
3. Do not mutate a collection while iterating it
4. Use `const` for `for...of` loop variables
5. Avoid nested loops where a `Set` or `Map` does the job
6. Keep heavy work out of loop bodies
7. Exit early with `break` or `return`
8. Guard risky loops against running forever

### Common Pitfalls
1. Off-by-one errors from `<=` instead of `<`
2. Infinite loops from forgotten increments
3. `for...in` on arrays (keys, strings, inherited properties)
4. Mutating an array while iterating it
5. `=` instead of `===` in conditions
6. Confusing `break` (exit all) with `continue` (skip one)
7. `var` loop variables causing closure bugs
8. Loops with conditions that can never become false

## What You Should Know Before Moving Forward

You should be able to write any of the loop constructs from memory, choose the right one for a given task, trace a loop by hand to predict its output, and spot the classic failure modes (off-by-one, infinite loops, mutation during iteration). You should also be comfortable deciding between a manual loop and array methods. These skills carry directly into every later topic: the DOM, async programming, and framework code all rely on iterating collections safely.

## Next Topic

**10 - DOM Basics**: Loops are used constantly in browser code — for example, iterating over NodeLists and rendering lists of elements. Your loop skills will be your foundation there.
