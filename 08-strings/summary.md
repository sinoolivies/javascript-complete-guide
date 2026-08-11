# Summary: Strings

## Key Concepts Learned

### 1. String Creation
- Strings are sequences of characters used to represent text
- Three quote styles: single, double, and backticks
- Backticks (template literals) add interpolation and multi-line support
- Escaping with `\` when a string contains its own quote character

### 2. Template Literals
- `${}` interpolation for values and expressions
- Native multi-line strings without `\n`
- Tagged templates for advanced use cases (e.g., styled-components)

### 3. Immutability and Primitives
- Strings are primitive values, copied by value, never by reference
- Strings are immutable; every "modification" creates a new string
- Methods return new strings and never change the original

### 4. Character Access
- Bracket notation `str[0]` and `charAt(0)`
- No negative indexing (the modern `at(-1)` supports it)
- `length` property; last character is `str[length - 1]`

### 5. Methods Grouped by Purpose
- Case: `toUpperCase`, `toLowerCase`
- Trim: `trim`, `trimStart`, `trimEnd`
- Search: `includes`, `startsWith`, `endsWith`, `indexOf`, `lastIndexOf`
- Extract: `slice` (recommended), `substring` (arg swapping), `substr` (deprecated)
- Split/Join: `split` string to array, `join` array to string
- Replace: `replace` (first), `replaceAll` (all), regex and callback forms
- Format: `padStart`, `padEnd`, `repeat`

### 6. Unicode and Code Points
- Strings are UTF-16; emoji are surrogate pairs taking two code units
- `length` and `split("")` miscount emoji
- `codePointAt` / `String.fromCodePoint` and `Array.from` handle them correctly
- Escape sequences: `\n`, `\t`, `\\`, `\u0041`, `\u{1F600}`

### 7. Comparisons
- Strict equality `===` (never `==` for strings)
- Case-sensitive by default; normalize with `toLowerCase()`
- `localeCompare` for language-aware sorting

## Important Takeaways

### String Best Practices
1. **Prefer template literals** over `+` concatenation
2. **Use `includes`** instead of `indexOf(...) !== -1`
3. **Normalize case** before comparing or searching
4. **Trim input** before validating length
5. **Prefer `replaceAll`** over regex for literal replacements
6. **Use `slice`** for predictable substring extraction
7. **Use `localeCompare`** for sorting
8. **Use `Array.from` or spread** for emoji-aware text
9. **Handle empty strings** before indexing or splitting
10. **Extract helpers** (`truncate`, `slugify`) for repeated logic

### Common Pitfalls
1. **Mutating strings in place** - strings are immutable
2. **Off-by-one errors** - last index is `length - 1`
3. **`==` comparison** - coerces types (`"5" == 5` is true)
4. **Case-sensitivity** - missed matches in search and compare
5. **`indexOf` returning `-1`** - `-1` is truthy
6. **`substring` vs `substr`** - confused signatures; `substr` is deprecated
7. **Not trimming** - whitespace passes length validation
8. **Emoji length quirk** - surrogate pairs count as 2

## What You Should Know Before Moving Forward

You should now be comfortable creating, searching, slicing, transforming, and formatting strings, and understand how JavaScript stores and compares text. These skills appear in virtually every application: validating input, generating URLs, parsing data, and formatting user-facing output.

## Next Topic

**09 - Loops**: Iteration constructs that let you repeat operations over data, including iterating through the characters and words of the strings you have just mastered.
