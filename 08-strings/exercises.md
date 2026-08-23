# Exercises: Strings

Complete these exercises to practice JavaScript strings.

## Beginner Exercises

1. **String Creation**
   - Create a string using single quotes, one using double quotes, and one using backticks
   - Print all three strings to the console

2. **String Length**
   - Create a string with several words and spaces
   - Print its length using the `length` property
   - Print the length of an empty string

3. **Concatenation**
   - Combine a first name and a last name using the `+` operator
   - Combine the same values using a template literal
   - Print both results

4. **Template Literal Interpolation**
   - Create variables for a product name and a price
   - Use a template literal to print `"Product: <name> - $<price>"`

5. **Multi-line Strings**
   - Create a multi-line string using a template literal with at least three lines
   - Create the same text using `\n` with double quotes
   - Print both and confirm they look the same

6. **Character Access**
   - Create the string `"JavaScript"`
   - Print the first character using `[0]` and `charAt(0)`
   - Print the last character using the `length` property
   - Print what `str[100]` returns

7. **Uppercase and Lowercase**
   - Convert `"Hello World"` to uppercase and print it
   - Convert it to lowercase and print it
   - Chain both methods together and print the result

8. **Trimming**
   - Create the string `"   padded text   "`
   - Print it after `trim()`, `trimStart()`, and `trimEnd()`
   - Compare the three results

9. **includes**
   - Check if `"The quick brown fox"` contains `"quick"` and `"cat"`
   - Check the same string for `"QUICK"` and explain why the result differs

10. **startsWith and endsWith**
    - Check if `"filename.pdf"` starts with `"file"` and ends with `".pdf"`
    - Check the same string against `"File"` and `".png"`
    - Print all four results

## Intermediate Exercises

1. **Normalizing Case for Comparison**
   - Write code that checks whether two strings match ignoring case
   - Test with `"Hello"` and `"hello"`, then with `"World"` and `"World"`

2. **indexOf and lastIndexOf**
   - Find the first and last index of `"o"` in `"Hello, world of code"`
   - Print what `indexOf` returns when the character is not found

3. **Checking for -1**
   - Search for a word in a sentence using `indexOf`
   - Print `"Found"` only when the index is not `-1`
   - Print `"Not found"` otherwise

4. **slice**
   - Extract `"World"` from `"Hello World"` using `slice`
   - Extract the first 5 characters using `slice`
   - Extract the last 3 characters using a negative index

5. **substring**
   - Extract the first 4 characters of `"JavaScript"` with `substring`
   - Call `substring(4, 0)` and print the result
   - Explain why the result is not an error

6. **split and join**
   - Split `"apple,banana,orange"` by `","` and print the array
   - Join the array back together with `" - "` and print the string
   - Split the word `"hello"` into an array of characters

7. **Reverse a String**
   - Reverse `"JavaScript"` using `split`, `reverse`, and `join`
   - Print the reversed result

8. **replace and replaceAll**
   - Replace the first `"cat"` in `"cat and cat"` using `replace`
   - Replace every `"cat"` using `replaceAll`
   - Print both results

9. **padStart for Number Formatting**
   - Format the numbers `7`, `42`, and `365` so each is at least 3 digits wide
   - Use `padStart` with `"0"` and print each result

10. **repeat**
    - Print `"-"` repeated 20 times
    - Print `"hi"` repeated 3 times
    - Print `"x"` repeated 0 times and observe the result

## Advanced Exercises

1. **truncate Function**
   - Write a function `truncate(text, max)` that adds `"..."` when the text is too long
   - Return the text unchanged when it is already short enough
   - Test with a long sentence and a short word

2. **slugify Function**
   - Write a function `slugify(text)` that converts a title to a URL-friendly slug
   - Trim, lowercase, and replace spaces with hyphens
   - Test with `"  Hello World Again  "`

3. **capitalizeWords Function**
   - Write a function `capitalizeWords(sentence)` that capitalizes the first letter of every word
   - Use `split`, `map`, and `join`
   - Test with `"hello world from strings"`

4. **countWordFrequencies**
   - Write a function `countWordFrequencies(text)` that returns an object mapping each word to how many times it appears
   - Split on one or more spaces using a regex
   - Test with `"the cat and the dog"` and verify `"the"` counts as 2

5. **maskString Function**
   - Write a function `mask(secret)` that shows only the last 4 characters and fills the rest with `*`
   - Use `slice`, `repeat`, and `padStart`
   - Test with a 16-character credit-card-like string

6. **Character Code Shifting**
   - Convert `"abc"` to `"bcd"` by adding 1 to each character code
   - Use `charCodeAt`, `String.fromCharCode`, and `split`/`map`/`join`
   - Test with `"xyz"` as well

7. **Counting Logical Characters**
   - Count how many characters are in `"Hello 😀 world"` using the `length` property
   - Count the same string using `Array.from(...)` and compare the two numbers
   - Explain the difference in one sentence

8. **extractInitials Function**
   - Write a function `extractInitials(fullName)` that returns initials like `"A.L."` for `"Ada Lovelace"`
   - Split the name, take the first character of each part, uppercase it, and join with `"."`
   - Test with a three-part name such as `"Alan Mathison Turing"`

9. **isPalindrome Function**
   - Write a function `isPalindrome(text)` that checks if a phrase reads the same forward and backward
   - Lowercase the text, remove non-alphanumeric characters with `replace`, and reverse it
   - Test with `"racecar"` and `"A man a plan a canal Panama"`

10. **Sort Names with localeCompare**
    - Sort the array `["banana", "Apple", "cherry", "date"]` alphabetically
    - Use `sort` with `localeCompare` for a case-insensitive, human-friendly order
    - Print the sorted array

---

**Note**: Solutions are available in `solutions.js`.
