# 09 - Loops

## Topic Overview

This topic covers JavaScript loops, which let you repeat operations efficiently instead of writing the same code over and over. Loops are the backbone of processing collections of data, and understanding them deeply is essential for writing concise, correct, and performant JavaScript.

## Learning Objectives

By the end of this topic, you will be able to:

- Understand the anatomy of the `for` loop (initialization, condition, increment)
- Use `while` and `do...while` loops and know when each is appropriate
- Iterate over arrays and strings with `for...of`
- Iterate over object keys with `for...in` and understand its caveats
- Use `break` and `continue` to control loop execution
- Build and reason about nested loops
- Recognize and avoid infinite loops
- Know the performance trade-offs of loops versus array methods
- Choose the right loop construct for the right job

## Prerequisites

- Completion of Topic 08: Strings
- Understanding of variables (`const`/`let`) and data types
- Comfort with comparison operators and boolean conditions
- Familiarity with arrays and objects
- Ability to write and run basic JavaScript code

## What You Will Build/Understand

- Comprehensive understanding of every loop construct in JavaScript
- The ability to process arrays, strings, objects, sets, and maps with loops
- Skills to aggregate, transform, and search collections manually
- Understanding of when to use a loop versus when to use array methods
- Confidence to write programs that repeat logic safely and correctly

## Estimated Difficulty

Beginner to Intermediate

This topic looks simple on the surface, but details like off-by-one errors, loop conditions that never end, and the differences between loop types make it easy to get wrong. Practice is essential.

## Time to Complete

- Reading and understanding: 2-3 hours
- Practicing examples: 2-3 hours
- Completing exercises: 3-4 hours
- **Total**: 7-10 hours

## Why This Topic Matters

Loops are how programs avoid repetition. Without loops:
- Every repeated operation would have to be written by hand
- Processing large collections would be impossible
- Code would balloon in size and become unmaintainable
- You could not build games, reports, or data-processing tools

Almost every real JavaScript program uses a loop somewhere, whether directly or through array methods like `map` and `filter`, which are loops under the hood.

## Key Concepts to Master

1. **for loop**: The classic loop with initialization, condition, and increment
2. **while loop**: A loop that runs while a condition is true
3. **do...while loop**: A loop that always runs at least once
4. **for...of**: Iterating over the values of iterables (arrays, strings, sets, maps)
5. **for...in**: Iterating over object keys, with important caveats
6. **break and continue**: Early exit and skipping iterations
7. **Nested loops**: Loops inside loops for multi-dimensional data
8. **Infinite loops**: Causes and how to prevent them

## Common Challenges

- Off-by-one errors (running one too many or one too few iterations)
- Creating infinite loops by forgetting to update the loop variable
- Using `for...in` on arrays instead of `for...of`
- Mutating an array while iterating over it
- Confusing `break` and `continue`
- Choosing between `for...of` and array methods like `forEach`

## Next Steps

1. Read `theory.md` to understand loops deeply
2. Study `examples.js` to see loops in action
3. Complete exercises in `exercises.md` to reinforce learning
4. Work through `practical.md` for real-world applications
5. Check `solutions.js` when you need help
6. Review `common-mistakes.md` to avoid pitfalls
7. Follow `best-practices.md` for professional habits
8. Use `cheat-sheet.md` for quick reference
9. Review `summary.md` before moving to the DOM

## Resources

- [MDN: Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [MDN: for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [MDN: for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [JavaScript.info: Loops](https://javascript.info/while-for)

---

**Ready to repeat operations efficiently? Start with `theory.md`!**
