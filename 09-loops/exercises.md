# Exercises: Loops

Complete these exercises to practice JavaScript loops. They build on the concepts from `theory.md` and progress from simple counting to complex real-world logic.

## Beginner Exercises

1. **Count 1 to 10**
   - Use a `for` loop to print the numbers 1 through 10
   - Print each number on its own line

2. **Countdown from 10 to 1**
   - Use a `for` loop that counts down from 10 to 1
   - Print each number on its own line

3. **Even Numbers 0 to 20**
   - Use a `for` loop to print every even number from 0 to 20
   - Achieve this with a step of 2, not with a conditional check

4. **Sum of 1 to 100**
   - Use a `for` loop to add up all numbers from 1 to 100
   - Print the final total

5. **while Loop Counting**
   - Use a `while` loop to print the numbers 1 through 10
   - Increment the counter inside the loop body

6. **do...while at Least Once**
   - Use a `do...while` loop to print the numbers 1 through 5
   - Confirm the body runs before the condition is checked

7. **Iterate an Array with for**
   - Create an array of 5 fruits
   - Use a classic `for` loop to print each fruit with its index

8. **for...of Over an Array**
   - Create an array of your favorite colors
   - Use `for...of` to print each color

9. **for...of Over a String**
   - Use `for...of` to print each character of the string `"JavaScript"`
   - Print each character on its own line

10. **break to Find a Multiple**
    - Use a `for` loop from 1 to 100 with `break` to find the first multiple of 13
    - Print the number and stop the loop

## Intermediate Exercises

1. **continue to Skip Evens**
   - Use a `for` loop from 1 to 20 with `continue` to print only odd numbers
   - Do not use a negative condition; use `continue` to skip evens

2. **Sum of Array Elements**
   - Create an array of numbers
   - Use a loop to calculate the sum of all elements
   - Print the total

3. **Find the Largest Number**
   - Create an array of numbers
   - Use a loop to find and print the largest value
   - Assume the array is not empty

4. **Count Vowels in a String**
   - Write a function that counts the vowels (a, e, i, o, u) in a string
   - Use a loop and check each character
   - Test it with `"hello world"`

5. **Reverse a String**
   - Write a function that reverses a string using a loop
   - Do not use the built-in `reverse()` method
   - Test it with `"JavaScript"`

6. **Array of Squares**
   - Build an array containing the squares of 1 through 10 (1, 4, 9, ...)
   - Use a loop to fill the array
   - Print the resulting array

7. **Iterate Object Values**
   - Create an object with at least 4 key-value pairs (e.g., a person)
   - Use `Object.values()` with `for...of` to print each value

8. **Multiplication Table (nested loops)**
   - Use nested loops to print the multiplication table for 1 through 5
   - Format each row so the products are separated by spaces

9. **Halving Until Zero**
   - Start with the number 100
   - Use a `while` loop that repeatedly divides by 2 (using `Math.floor`) until the value is 0
   - Count and print how many halvings it took

10. **for...in Over an Object**
    - Create an object describing a car (make, model, year, color)
    - Use `for...in` to print each `key: value` pair

## Advanced Exercises

1. **FizzBuzz**
   - Print the numbers 1 through 100 with these rules
   - If divisible by 3, print `"Fizz"`
   - If divisible by 5, print `"Buzz"`
   - If divisible by both, print `"FizzBuzz"`
   - Otherwise, print the number

2. **Frequency Counter**
   - Given an array of strings, count how many times each string appears
   - Store the counts in an object
   - Test with `["apple", "banana", "apple", "orange", "banana", "apple"]`

3. **Filter Without filter()**
   - Write a function that returns a new array containing only the even numbers from an input array
   - Use a loop; do not use `Array.prototype.filter`
   - Test with `[1, 2, 3, 4, 5, 6, 7, 8]`

4. **Map Without map()**
   - Write a function that returns a new array with each element doubled
   - Use a loop; do not use `Array.prototype.map`
   - Test with `[1, 2, 3, 4]`

5. **Remove Duplicates**
   - Write a function that removes duplicate values from an array
   - Preserve the order of first occurrence
   - Do not use `Set`
   - Test with `[1, 2, 2, 3, 4, 4, 4, 5]`

6. **Print a Triangle Pattern**
   - Use nested loops to print a right triangle of asterisks, 5 rows tall
   - Row 1 has 1 star, row 2 has 2 stars, and so on

7. **Sum of a 2D Array**
   - Create a 2D array (array of arrays) of numbers
   - Use nested loops to sum all values
   - Print the total

8. **Check if Array Is Sorted**
   - Write a function that returns `true` if an array of numbers is sorted in ascending order
   - Use a loop to compare each element with the next one
   - Test with `[1, 2, 3, 4]` and `[1, 3, 2, 4]`

9. **Fibonacci Sequence**
   - Generate the first 10 numbers of the Fibonacci sequence with a loop
   - Each number is the sum of the two previous numbers, starting with 0 and 1
   - Print the resulting array

10. **Prime Numbers Up to N**
    - Write a function that prints all prime numbers up to a given number N
    - Use a loop to check each number for divisibility
    - Test with N = 30

---

**Note**: Solutions are available in `solutions.js`.
