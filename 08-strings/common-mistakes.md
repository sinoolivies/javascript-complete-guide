# Common Mistakes: Strings

## 1. Assuming Strings Are Mutable

### The Mistake
```javascript
let text = "hello";
text[0] = "H";          // Attempting to modify in place
console.log(text);      // "hello" - unchanged
```

### The Problem
Strings are primitive and immutable. Bracket notation only reads characters; assigning to an index silently does nothing (or throws in strict mode).

### The Fix
Create a new string from the parts you need.
```javascript
let text = "hello";
text = "H" + text.slice(1);
console.log(text);  // "Hello"
```

## 2. Off-by-One Errors with length

### The Mistake
```javascript
const word = "hello";
word[word.length];  // undefined - index out of range
```

### The Problem
Indices are 0-based, so the last valid index is `length - 1`. `word.length` points one past the end.

### The Fix
```javascript
const word = "hello";
word[word.length - 1];  // "o" - last character
```

## 3. Using == on Strings

### The Mistake
```javascript
if (userInput == 5) {  // Loose equality
  console.log("It is five");
}
// userInput === "5" also passes!
```

### The Problem
`==` performs type coercion, so `"5" == 5` is `true`, leading to surprising matches.

### The Fix
Always use strict equality.
```javascript
if (userInput === "5") {
  console.log("It is five");
}
```

## 4. Forgetting Strings Are Primitive Values

### The Mistake
```javascript
let a = "hello";
let b = a;
b = b.toUpperCase();
console.log(a);  // "hello" - as expected
// But developers often expect b's change to affect a
```

### The Problem
Unlike arrays and objects, strings are copied by value, not by reference. Every operation returns a brand new string.

### The Fix
Remember: assign the returned value back if you want to keep the change.
```javascript
let name = "ada";
name = name.charAt(0).toUpperCase() + name.slice(1);
console.log(name);  // "Ada"
```

## 5. Confusing split and slice

### The Mistake
```javascript
const text = "hello world";
text.slice(" ");  // Wrong method for splitting
```

### The Problem
`slice` extracts a substring by index; it has nothing to do with separators. `split` breaks a string into an array by a separator.

### The Fix
```javascript
const text = "hello world";
text.split(" ");  // ["hello", "world"]
```

## 6. Case-Sensitivity Errors in Comparisons

### The Mistake
```javascript
const userInput = "ADMIN";
if (userInput === "admin") {
  console.log("Grant access");
}
// Never runs - case differs
```

### The Problem
String comparisons are case-sensitive by default. Users typing in mixed case are rejected.

### The Fix
Normalize case before comparing.
```javascript
const userInput = "ADMIN";
if (userInput.toLowerCase() === "admin") {
  console.log("Grant access");
}
```

## 7. Escaping Quote Issues

### The Mistake
```javascript
const message = 'It's broken';   // Syntax error
```

### The Problem
The apostrophe in `It's` terminates the string early. Using the same quote character inside a string is invalid.

### The Fix
Escape the character or use a different quote type.
```javascript
const message = "It's broken";
const message2 = 'It\'s broken';
```

## 8. Building Strings with + When Template Literals Are Better

### The Mistake
```javascript
const name = "Ada";
const age = 36;
const bio = "Name: " + name + ", Age: " + age + ", born " + (2026 - age) + ".";
```

### The Problem
Consecutive `+` concatenation is hard to read, error-prone with long text, and noisy when mixing values and expressions.

### The Fix
```javascript
const name = "Ada";
const age = 36;
const bio = `Name: ${name}, Age: ${age}, born ${2026 - age}.`;
```

## 9. indexOf Returning -1

### The Mistake
```javascript
const text = "hello world";
if (text.indexOf("xyz")) {        // -1 is truthy!
  console.log("Found it");
}
```

### The Problem
`-1` is a truthy value, so `if (indexOf(...))` treats "not found" as found. The check passes whenever the string is missing.

### The Fix
Compare against `-1` explicitly, or use `includes`.
```javascript
const text = "hello world";
if (text.indexOf("xyz") !== -1) {
  console.log("Found it");
}
if (text.includes("xyz")) {
  console.log("Found it");
}
```

## 10. substring vs substr Confusion

### The Mistake
```javascript
"JavaScript".substr(4, 3);  // "Scr" - length, not end index
"JavaScript".substring(4, 3);  // "S" - args swapped!
```

### The Problem
`substr` takes `(start, length)` and is deprecated; `substring` takes `(start, end)` and swaps arguments when `start > end`. Their signatures are easy to mix up.

### The Fix
Use `slice` for predictable behavior.
```javascript
"JavaScript".slice(4, 7);  // "Scr" - from 4 up to 7
```

## 11. Not Trimming Before Length Checks

### The Mistake
```javascript
const input = "   hello   ";
if (input.length >= 5) {
  console.log("Valid length");
}
// Passes even for "   a   "
```

### The Problem
Whitespace inflates the length. An input of only spaces looks long enough to pass validation.

### The Fix
Trim first, then validate.
```javascript
const input = "   hello   ".trim();
if (input.length >= 5) {
  console.log("Valid length");
}
```

## 12. Locale Issues with Sorting and Comparison

### The Mistake
```javascript
["ä", "a", "z"].sort();  // ["a", "z", "ä"] - ä sorts last
```

### The Problem
Default comparison sorts by UTF-16 code units, not language order. Accented letters and uppercase/lowercase pairs sort in non-intuitive ways.

### The Fix
```javascript
["ä", "a", "z"].sort((x, y) => x.localeCompare(y));
```

## 13. Searching Case-Sensitively by Accident

### The Mistake
```javascript
const text = "The Quick Brown Fox";
text.includes("quick");  // false
```

### The Problem
`includes`, `startsWith`, `endsWith`, and `indexOf` are all case-sensitive, so a match is missed when case differs.

### The Fix
```javascript
const text = "The Quick Brown Fox";
text.toLowerCase().includes("quick");  // true
```

## 14. Using length on Strings with Emoji

### The Mistake
```javascript
"😀".length;  // 2 - developer expects 1
```

### The Problem
Emoji and other characters above `0xFFFF` are stored as surrogate pairs (two code units), so `length` and `split("")` miscount them.

### The Fix
```javascript
Array.from("😀").length;  // 1
[... "a😀b"].join("-");    // works with spread too
```

## How to Avoid These Mistakes

1. Remember strings are immutable and primitives
2. Use `length - 1` for the last character
3. Prefer strict equality (`===`)
4. Normalize case before comparing or searching
5. Use `trim()` before validating input
6. Choose `slice` over `substring`/`substr`
7. Check `indexOf` against `-1`, or use `includes`
8. Prefer template literals over `+` concatenation
9. Use `localeCompare` for language-aware sorting
10. Use `Array.from` or spread for emoji-aware counting
