# Theory: Strings

Strings are sequences of characters used to represent text in JavaScript. They are one of the most fundamental data types, and nearly every program you write will create, search, modify, or format strings in some way.

## What Is a String?

A string is an ordered sequence of characters (letters, digits, spaces, punctuation, and symbols). In JavaScript, strings are **primitive values** stored as UTF-16 encoded text.

```javascript
const greeting = "Hello, world!";
const answer = 'JavaScript';
const template = `Backtick string`;
```

Strings exist so programs can work with text: user names, email addresses, messages, file paths, URLs, HTML, JSON, and so on.

## Creating Strings: Quotes

JavaScript supports three ways to wrap string literals.

### Single Quotes
```javascript
const message = 'Hello';
```

### Double Quotes
```javascript
const message = "Hello";
```

Single and double quotes behave identically. Choose one style and be consistent.

### Backticks (Template Literals)
```javascript
const message = `Hello`;
```

Backticks add capabilities the other quotes do not have, covered below. Choose backticks whenever you need interpolation or multi-line text.

### Escaping Quotes

If a string needs to contain the quote character used to wrap it, escape it with a backslash:

```javascript
const quote = "She said, \"hello\"";
const other = 'It\'s a great day';
const slash = "A backslash: \\";
```

You can also avoid escaping by using a different quote type:

```javascript
const easier = 'She said, "hello"';
```

## Template Literals

Template literals (backticks) support three things normal quotes do not.

### 1. Interpolation
Embed variables and expressions directly with `${}`:

```javascript
const name = "Ada";
const age = 36;
console.log(`${name} is ${age} years old.`);
// "Ada is 36 years old."
```

Any expression works inside `${}`:

```javascript
console.log(`Total: $${(price * 2).toFixed(2)}`);
```

### 2. Multi-line Strings
Backticks preserve newlines naturally. With single/double quotes you must use `\n`:

```javascript
const multi = `Line one
Line two
Line three`;
```

### 3. Tagged Templates (Advanced)

A tag is a function called with the template's parts. This is used by libraries for styling (like styled-components). A simple example:

```javascript
function upper(strings, ...values) {
  let result = "";
  strings.forEach((str, i) => {
    result += str + (values[i] !== undefined ? String(values[i]).toUpperCase() : "");
  });
  return result;
}
console.log(upper`hello ${"world"}`);  // "hello WORLD"
```

You will rarely write tags yourself, but it is useful to know they exist.

## String Immutability

Strings are **immutable**: you cannot change a character inside an existing string.

```javascript
let text = "hello";
text[0] = "H";      // No effect
console.log(text);  // "hello"
```

Any "modification" actually creates a brand new string:

```javascript
text = text.toUpperCase();  // New string "HELLO" assigned to text
console.log(text);          // "HELLO"
```

In memory, the original "hello" is still there until the garbage collector reclaims it; `text` simply points to the new string. Every string method that changes text returns a new string and leaves the original untouched. This is why chaining works:

```javascript
const clean = "  Hello World  ".trim().toLowerCase();  // "hello world"
```

## Character Access

Access a single character using bracket notation or the `charAt` method.

```javascript
const word = "Hello";
word[0];                // "H"
word.charAt(1);         // "e"
word[word.length - 1];  // "o"
```

Notes:
- Indices start at 0.
- **Negative indexing is not supported**: `word[-1]` returns `undefined`. (The modern `at(-1)` method from arrays is also available on strings and does support negatives.)
- Out-of-range index: `word[99]` returns `undefined`; `word.charAt(99)` returns `""`.

## The length Property

`length` counts the number of UTF-16 code units in the string (see Unicode section for the emoji quirk):

```javascript
"Hello".length;          // 5
"".length;               // 0
"Hello world".length;    // 11 (space counts)
```

Always use `text.length - 1` to get the last character.

## Methods Grouped by Purpose

String methods do not mutate the original; each returns a new string.

### Case Conversion

```javascript
"hello".toUpperCase();   // "HELLO"
"HELLO".toLowerCase();   // "hello"
```

Use these to normalize text before comparing or searching.

### Trimming

```javascript
"  hello  ".trim();       // "hello"
"  hello  ".trimStart();  // "hello  "
"  hello  ".trimEnd();    // "  hello"
```

`trim` removes whitespace (spaces, tabs, newlines) from both ends. Always trim user input before validating or checking length.

### Searching

```javascript
const text = "The quick brown fox";

text.includes("quick");     // true  - contains substring?
text.includes("cat");       // false

text.startsWith("The");     // true  - begins with substring?
text.endsWith("fox");       // true  - ends with substring?

text.indexOf("quick");      // 4     - first index of substring
text.indexOf("cat");        // -1    - not found
text.lastIndexOf("o");      // 15    - last index of substring
```

Key facts:
- `includes`, `startsWith`, `endsWith` return booleans.
- `indexOf`/`lastIndexOf` return the index or **-1 if not found**. Always compare against `-1`, since `-1` is truthy in a boolean context.
- All search methods are case-sensitive by default. Normalize with `toLowerCase()` when case does not matter.

### Extracting Substrings: slice, substring, substr

```javascript
const text = "JavaScript";

text.slice(0, 4);      // "Java"  - from index 0 up to (not including) 4
text.slice(4);         // "Script" - from 4 to end
text.slice(-6);        // "Script" - negative counts from the end
text.slice(4, 8);      // "Scri"
```

`slice(start, end)`:
- `end` is exclusive (the character at `end` is not included).
- Negative values count from the end.
- This is the recommended method for clarity and predictability.

`substring(start, end)`:
- `end` is also exclusive.
- Negative values are treated as `0`.
- If `start > end`, the two are **swapped**: `substring(4, 0)` is `"Java"`.

```javascript
"JavaScript".substring(4, 0);  // "Java" (swapped)
"JavaScript".substring(4);     // "Script"
```

`substr(start, length)` is **deprecated** (the length argument, and its quirky negative start, are not consistent with the other two). Avoid it in new code.

### Splitting and Joining

```javascript
"apple,banana,orange".split(",");  // ["apple", "banana", "orange"]
"hello".split("");                 // ["h", "e", "l", "l", "o"]
"one two three".split(" ");        // ["one", "two", "three"]

["a", "b", "c"].join("-");         // "a-b-c"
["a", "b", "c"].join("");          // "abc"
```

`split` turns a string into an array; `join` turns an array into a string. Together they enable transforms like reversing a string:

```javascript
"hello".split("").reverse().join("");  // "olleh"
```

Note: `split("")` splits on UTF-16 code units, which splits emoji incorrectly (see Unicode).

### Replacing

`replace(search, replacement)` replaces the **first** occurrence only:

```javascript
"cat and cat".replace("cat", "dog");  // "dog and cat"
```

Use a global regex to replace all:

```javascript
"cat and cat".replace(/cat/g, "dog");  // "dog and dog"
```

`replaceAll` replaces every occurrence without a regex (and throws if given a global regex):

```javascript
"cat and cat".replaceAll("cat", "dog");  // "dog and dog"
```

The replacement can also be a function called for each match:

```javascript
"a1b2c3".replaceAll(/\d/g, match => `[${match}]`);
// "a[1]b[2]c[3]"
```

### Padding

```javascript
"5".padStart(2, "0");     // "05"  - pad on the left to width 2
"5".padEnd(2, "0");       // "50"  - pad on the right
"abc".padStart(6, "-");   // "---abc"
```

`padStart(2, "0")` is the classic way to format single-digit numbers like `5` as `05`. If the string already meets the width, nothing is added.

### Repeating

```javascript
"ab".repeat(3);   // "ababab"
"*".repeat(5);    // "*****"
"x".repeat(0);    // ""
```

Useful for drawing separators, indentation, or simple ASCII art.

### Extracting Characters and Codes

```javascript
"Hi".charAt(0);      // "H"
"Hi".charCodeAt(0);  // 72  - UTF-16 code unit as a number
"Hi".codePointAt(0); // 72  - full code point (handles emoji correctly)
```

`String.fromCharCode(72)` and `String.fromCodePoint(72)` go the other direction (number to character):

```javascript
String.fromCharCode(72);    // "H"
String.fromCodePoint(128512);  // "😀"
```

## Unicode and Code Points (Advanced)

JavaScript strings are stored as UTF-16 code units. Most common characters (the Basic Multilingual Plane) take one code unit, so `"A".length === 1`. But characters above `0xFFFF` (such as most emoji) are stored as a **surrogate pair**: two code units that represent one character.

```javascript
"😀".length;             // 2  - two code units!
Array.from("😀").length; // 1  - one logical character
```

Consequences:
- `"😀"[0]` gives a lone surrogate character, not the emoji.
- `"hello😀".split("")` splits the emoji in half.
- `codePointAt(0)` and `String.fromCodePoint()` handle these correctly.
- `Array.from(str)` iterates by code points and counts logical characters.

Escape sequences use `\u`:

```javascript
"\u0041";        // "A" - 4 hex digits (BMP)
"\u{1F600}";     // "😀" - full code point in braces (ES6+)
"\n";            // newline
"\t";            // tab
"\\";            // literal backslash
```

## String Comparisons

Use `===` (or `!==`) for exact comparison:

```javascript
"hello" === "hello";  // true
"Hello" === "hello";  // false - case matters
```

Comparisons with `<`, `>`, `<=`, `>=` use **lexicographic (dictionary) order** based on UTF-16 code unit values. Uppercase letters come before lowercase, which produces surprising results:

```javascript
"apple" < "banana";  // true
"Apple" < "apple";   // true  - 'A' (65) < 'a' (97)
```

`localeCompare` compares strings according to the user's locale (language-aware), which is correct for sorting real-world text:

```javascript
"apple".localeCompare("banana");  // negative (apple comes first)
"banana".localeCompare("apple");  // positive
"apple".localeCompare("apple");   // 0
["b", "a", "c"].sort((x, y) => x.localeCompare(y));  // ["a", "b", "c"]
```

`localeCompare` returns a negative number (first is less), positive (first is greater), or 0 (equal).

## Comparing Strings with == vs ===

Avoid `==` for string comparison because it performs type coercion:

```javascript
"5" == 5;    // true  - coerced!
"5" === 5;   // false - different types
```

Always prefer strict equality (`===`).

## Real-World Usage Examples

### Validating user input
```javascript
const input = "  ada@example.com  ";
const email = input.trim().toLowerCase();
if (email.includes("@") && email.endsWith(".com")) {
  // valid-looking email
}
```

### Truncating long text
```javascript
function truncate(text, max) {
  if (text.length <= max) return text;
  return text.slice(0, max - 3) + "...";
}
truncate("JavaScript is awesome", 14);  // "JavaScript is..."
```

### Generating a URL slug
```javascript
function slugify(text) {
  return text.toLowerCase().trim().replaceAll(" ", "-");
}
slugify("Hello World Again");  // "hello-world-again"
```

### Counting words
```javascript
function countWords(text) {
  return text.trim().split(/\s+/).length;
}
countWords("One two   three");  // 3
```

## Advanced Notes

- **Regex vs string methods**: For a simple literal search, `includes`, `startsWith`, `endsWith`, `indexOf`, and `replaceAll` are clearer and faster. Reach for regex only when you need patterns (multiple spaces, digits, word boundaries).
- **Performance**: Creating a new string per operation is fine in practice; strings are small and the engine optimizes them. Do not micro-optimize by mutating arrays of characters unless profiling shows a real problem.
- **`split("")` with emoji**: Use `Array.from(str)` or spread `[...str]` when you need logical characters.
- **Chain deliberately**: `"  Hello  ".trim().toLowerCase().slice(0, 3)` is readable; long chains can be split into named steps.
