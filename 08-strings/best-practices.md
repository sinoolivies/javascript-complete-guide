# Best Practices: Strings

## 1. Prefer Template Literals Over Concatenation

```javascript
const user = { name: "Ada", role: "admin" };
console.log(`${user.name} is an ${user.role}`);
```

Template literals keep values and text together, support expressions, and remove the noisy `+` chains. Use them any time you build a string from multiple parts.

## 2. Use includes Instead of indexOf > -1

```javascript
const text = "The quick brown fox";
if (text.includes("quick")) {
  // ...
}
```

`includes` expresses intent ("does it contain?") and returns a boolean directly, avoiding the `!== -1` idiom and the truthy `-1` trap.

## 3. Normalize Case Before Comparing

```javascript
const isEqualIgnoringCase = (a, b) => a.toLowerCase() === b.toLowerCase();
```

Case-sensitive equality is correct only when case truly matters. For emails, usernames, and search, lowercasing both sides avoids missed matches.

## 4. Trim Input Before Validating

```javascript
const email = rawInput.trim();
if (email.length === 0) {
  // reject empty submission
}
```

Leading and trailing whitespace is almost never meaningful. Trim before checking length or comparing so `"  "` cannot pass validation.

## 5. Use replaceAll Over a Regex When Possible

```javascript
const text = "cat and cat";
text.replaceAll("cat", "dog");  // clearer than /cat/g
```

For a plain literal replacement, `replaceAll` is clearer and avoids regex escaping pitfalls. Reach for a regex only when you need patterns.

## 6. Choose slice Over substring for Clarity

```javascript
const word = "JavaScript";
word.slice(0, 4);    // "Java"
word.slice(-6);      // "Script"
```

`slice` supports negative indices and never swaps arguments, unlike `substring`, and `substr` is deprecated. One consistent method means fewer surprises.

## 7. Handle Empty Strings

```javascript
function firstWord(text) {
  const trimmed = text.trim();
  if (trimmed.length === 0) return "";
  return trimmed.split(/\s+/)[0];
}
```

Empty input is a real case, not an edge case. Guard against it before indexing, splitting, or reversing so `""[0]` (undefined) and other pitfalls never surface.

## 8. Use localeCompare for Sorting

```javascript
const names = ["Élodie", "anna", "Bob"];
names.sort((a, b) => a.localeCompare(b));
```

Default `sort` uses UTF-16 code unit order, which misplaces accented characters and uppercase letters. `localeCompare` sorts the way users expect.

## 9. Prefer String Methods Over Manual Character Loops

```javascript
const upper = "hello".toUpperCase();          // not a manual loop
const reversed = "abc".split("").reverse().join("");
const padded = "7".padStart(2, "0");
```

The built-in methods are tested, fast, and readable. Write loops only when no method fits, and let methods describe the operation.

## 10. Use padStart for Fixed-Width Formatting

```javascript
const formattedHour = String(hour).padStart(2, "0");  // "09"
```

Pad numbers to a fixed width (`"05"`, `"042"`) with `padStart(2, "0")`. It is clearer and safer than manual `"0" + n` logic that breaks past width 10.

## 11. Prefer Arrow Callbacks in replaceAll

```javascript
const css = "margin-8 padding-4";
const expanded = css.replaceAll(/\d+/g, px => `${px}px`);
```

A callback keeps the replacement logic next to the match and lets you transform each match instead of hard-coding one string.

## 12. Keep Long Strings Readable

```javascript
const message = [
  "Invoice #12345",
  `Total: $${total.toFixed(2)}`,
  "Thank you for your business."
].join("\n");
```

For multi-line text, an array joined with `\n` (or a template literal) stays readable and is easy to extend. Avoid one gigantic line with many `\n`.

## 13. Escape Regex Characters When Building Patterns

```javascript
function containsLiteral(text, literal) {
  const escaped = literal.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(escaped).test(text);
}
```

When user input is used to build a regex, escape regex special characters first so `.` and `+` match literally instead of acting as wildcards.

## 14. Use Array.from or Spread for Emoji-Aware Text

```javascript
const emojiCount = Array.from("Hello 😀").length;  // 6, not 7
const chars = [..."a😀b"];                         // ["a", "😀", "b"]
```

Surrogate pairs make `length` and `split("")` unreliable for emoji. Spread and `Array.from` iterate by code point, giving the logical characters.

## 15. Keep Method Chains Readable

```javascript
const cleaned = input
  .trim()
  .toLowerCase()
  .replaceAll(" ", "-");
```

Chain short operations on separate lines so each step is visible and debuggable. If a chain grows past three or four steps, extract it into a named function.

## 16. Prefer Named Helper Functions Over Repeated Inline Code

```javascript
function slugify(title) {
  return title.trim().toLowerCase().replaceAll(" ", "-");
}
```

If you trim, lowercase, and reformat text in several places, extract a helper. It removes duplication, gives the operation a name, and makes changes one-line fixes.
