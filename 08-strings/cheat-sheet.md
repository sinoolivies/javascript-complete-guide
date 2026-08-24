# Cheat Sheet: Strings

## Creation

```javascript
const a = 'single';       // single quotes
const b = "double";       // double quotes
const c = `template`;     // backticks - interpolation + multi-line
const d = "text " + "more"; // concatenation
```

## Access / Character

```javascript
str[0]                 // Character at index 0
str.charAt(0)          // Same as above, "" if out of range
str[str.length - 1]    // Last character
str.at(-1)             // Last character (modern, supports negatives)
str.length             // Number of UTF-16 code units
```

## Case

```javascript
str.toUpperCase()      // "hello" -> "HELLO"
str.toLowerCase()      // "HELLO" -> "hello"
```

## Trim

```javascript
str.trim()             // Remove whitespace from both ends
str.trimStart()        // Remove whitespace from start only
str.trimEnd()          // Remove whitespace from end only
```

## Search / Check

```javascript
str.includes("x")      // true if substring exists
str.startsWith("x")    // true if begins with x
str.endsWith("x")      // true if ends with x
str.indexOf("x")       // First index, or -1 if not found
str.lastIndexOf("x")   // Last index, or -1 if not found
```

## Extract

```javascript
str.slice(start, end)      // Substring from start up to end (end exclusive, negatives OK)
str.slice(start)           // From start to end of string
str.substring(a, b)        // Like slice but negatives become 0, args may swap
str.substr(s, len)         // DEPRECATED - avoid
```

## Split / Join

```javascript
str.split(",")             // String to array by separator
str.split("")              // String to array of characters
arr.join("-")              // Array back to string with separator
```

## Replace

```javascript
str.replace("a", "b")      // Replace first occurrence only
str.replaceAll("a", "b")   // Replace every occurrence
str.replace(/a/g, "b")     // Replace every occurrence with regex
str.replaceAll(/\d/g, fn)  // Replace with a callback per match
```

## Transform

```javascript
str.repeat(3)              // "ab" -> "ababab"
str.padStart(3, "0")       // Pad left to width 3 -> "007"
str.padEnd(3, ".")         // Pad right to width 3 -> "5.."
str.concat("x")            // Same as str + "x"
str + "x"                  // Concatenation
```

## Template Literals

```javascript
`${name} is ${age}`        // Interpolation of values/expressions
`line1
line2`                     // Multi-line without \n
tag`text ${value}`         // Tagged template (advanced)
```

## Unicode

```javascript
str.charCodeAt(i)          // UTF-16 code unit number at index
str.codePointAt(i)         // Full code point (handles emoji)
String.fromCharCode(72)    // Number to character ("H")
String.fromCodePoint(128512) // Full code point to character ("😀")
"\u0041"                   // Escape: 4 hex digits
"\u{1F600}"                // Escape: full code point (ES6+)
Array.from(str).length     // Count logical characters (emoji-safe)
```

## Comparisons

```javascript
a === b                    // Strict equality (case-sensitive)
a.toLowerCase() === b.toLowerCase() // Case-insensitive equality
a.localeCompare(b)         // Negative/positive/0 for sorting
```

## Quick Reference

| Task | Method |
|------|--------|
| Length | `length` |
| Uppercase | `toUpperCase()` |
| Lowercase | `toLowerCase()` |
| Trim | `trim()` |
| Contains | `includes()` |
| Starts/Ends with | `startsWith()` / `endsWith()` |
| Find index | `indexOf()` |
| Extract | `slice()` |
| Split to array | `split()` |
| Join to string | `join()` |
| Replace all | `replaceAll()` |
| Pad | `padStart()` / `padEnd()` |
| Repeat | `repeat()` |
| Char code | `charCodeAt()` / `fromCharCode()` |
