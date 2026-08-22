// ========================================
// EXAMPLE 1: Creating strings
// ========================================
const single = 'Hello';
const double = "World";
const backtick = `Template`;
console.log(single, double, backtick);

// ========================================
// EXAMPLE 2: Escaping quotes
// ========================================
const quote1 = 'She said, "hi"';
const quote2 = "It's a book";
const escaped = "She said, \"hi\"";
console.log(quote1, quote2, escaped);

// ========================================
// EXAMPLE 3: String length
// ========================================
console.log("Hello".length);        // 5
console.log("".length);             // 0
console.log("Hello world".length);  // 11 - space counts

// ========================================
// EXAMPLE 4: Concatenation with +
// ========================================
const firstName = "Ada";
const lastName = "Lovelace";
console.log(firstName + " " + lastName);  // "Ada Lovelace"

// ========================================
// EXAMPLE 5: Template literal interpolation
// ========================================
const name = "Grace";
const year = 1950;
console.log(`${name} was born in ${year}.`);
console.log(`Sum: ${2 + 3}`);

// ========================================
// EXAMPLE 6: Multi-line template literal
// ========================================
const multi = `Line one
Line two
Line three`;
console.log(multi);

// ========================================
// EXAMPLE 7: String immutability
// ========================================
let word = "hello";
word[0] = "H";                    // No effect
console.log(word);                // "hello"
word = word.toUpperCase();        // New string assigned
console.log(word);                // "HELLO"

// ========================================
// EXAMPLE 8: Character access
// ========================================
const text = "Hello";
console.log(text[0]);              // "H"
console.log(text.charAt(1));       // "e"
console.log(text[text.length - 1]); // "o"
console.log(text[-1]);             // undefined - negative indexing unsupported

// ========================================
// EXAMPLE 9: Uppercase and lowercase
// ========================================
console.log("hello".toUpperCase());  // "HELLO"
console.log("HELLO".toLowerCase());  // "hello"

// ========================================
// EXAMPLE 10: trim, trimStart, trimEnd
// ========================================
const padded = "  spaced  ";
console.log(padded.trim());       // "spaced"
console.log(padded.trimStart());  // "spaced  "
console.log(padded.trimEnd());    // "  spaced"

// ========================================
// EXAMPLE 11: includes
// ========================================
const sentence = "The quick brown fox";
console.log(sentence.includes("quick"));  // true
console.log(sentence.includes("cat"));    // false
console.log(sentence.includes("THE"));    // false - case-sensitive

// ========================================
// EXAMPLE 12: startsWith and endsWith
// ========================================
console.log(sentence.startsWith("The"));   // true
console.log(sentence.startsWith("the"));   // false
console.log(sentence.endsWith("fox"));     // true
console.log(sentence.endsWith("dog"));     // false

// ========================================
// EXAMPLE 13: indexOf and lastIndexOf
// ========================================
console.log(sentence.indexOf("quick"));    // 4
console.log(sentence.indexOf("cat"));      // -1 - not found
console.log(sentence.indexOf("o"));        // 12 - first occurrence
console.log(sentence.lastIndexOf("o"));    // 15 - last occurrence

// ========================================
// EXAMPLE 14: Checking for -1 safely
// ========================================
const search = "quick";
if (sentence.indexOf(search) !== -1) {
  console.log(`Found "${search}"`);
} else {
  console.log(`Did not find "${search}"`);
}

// ========================================
// EXAMPLE 15: slice
// ========================================
const word2 = "JavaScript";
console.log(word2.slice(0, 4));    // "Java"
console.log(word2.slice(4));       // "Script"
console.log(word2.slice(-6));      // "Script" - negative counts from end

// ========================================
// EXAMPLE 16: substring (and deprecated substr)
// ========================================
console.log(word2.substring(0, 4));  // "Java"
console.log(word2.substring(4, 0));  // "Java" - args swapped
console.log(word2.substr(4, 3));     // "Scr" - DEPRECATED, avoid

// ========================================
// EXAMPLE 17: split and join
// ========================================
const csv = "apple,banana,orange";
console.log(csv.split(","));           // ["apple", "banana", "orange"]
console.log("hello".split(""));        // ["h", "e", "l", "l", "o"]
console.log(["a", "b", "c"].join("-")); // "a-b-c"
console.log("hello".split("").reverse().join(""));  // "olleh"

// ========================================
// EXAMPLE 18: replace (first occurrence only)
// ========================================
console.log("cat and cat".replace("cat", "dog"));  // "dog and cat"

// ========================================
// EXAMPLE 19: replaceAll
// ========================================
console.log("cat and cat".replaceAll("cat", "dog"));  // "dog and dog"

// ========================================
// EXAMPLE 20: replaceAll with a callback
// ========================================
const digits = "a1b2c3";
console.log(digits.replaceAll(/\d/g, match => `[${match}]`));
// "a[1]b[2]c[3]"

// ========================================
// EXAMPLE 21: padStart and padEnd
// ========================================
console.log("5".padStart(2, "0"));    // "05"
console.log("42".padStart(5, "*"));   // "***42"
console.log("5".padEnd(3, "."));      // "5.."

// ========================================
// EXAMPLE 22: repeat
// ========================================
console.log("ab".repeat(3));   // "ababab"
console.log("*".repeat(5));    // "*****"

// ========================================
// EXAMPLE 23: charCodeAt and String.fromCharCode
// ========================================
console.log("Hi".charCodeAt(0));       // 72
console.log("Hi".charCodeAt(1));       // 105
console.log(String.fromCharCode(72));  // "H"

// ========================================
// EXAMPLE 24: codePointAt and String.fromCodePoint
// ========================================
console.log("😀".codePointAt(0));          // 128512
console.log(String.fromCodePoint(128512)); // "😀"

// ========================================
// EXAMPLE 25: Unicode emoji length quirk
// ========================================
console.log("😀".length);              // 2 - surrogate pair
console.log(Array.from("😀").length);  // 1 - logical character
console.log([..."a😀b"]);              // ["a", "😀", "b"]

// ========================================
// EXAMPLE 26: localeCompare for sorting
// ========================================
const words = ["banana", "Apple", "cherry"];
const sorted = [...words].sort((a, b) => a.localeCompare(b));
console.log(sorted);  // ["Apple", "banana", "cherry"]
console.log("a".localeCompare("b"));  // negative
console.log("a".localeCompare("a"));  // 0

// ========================================
// EXAMPLE 27: truncate function
// ========================================
function truncate(str, max) {
  if (str.length <= max) return str;
  return str.slice(0, max - 3) + "...";
}
console.log(truncate("JavaScript is awesome", 14));  // "JavaScript is..."
console.log(truncate("short", 14));                  // "short"

// ========================================
// EXAMPLE 28: slugify function
// ========================================
function slugify(text) {
  return text.trim().toLowerCase().replaceAll(" ", "-");
}
console.log(slugify("  Hello World Again "));  // "hello-world-again"

// ========================================
// EXAMPLE 29: countWords function
// ========================================
function countWords(text) {
  return text.trim().split(/\s+/).length;
}
console.log(countWords("One two   three"));  // 3
console.log(countWords("   spaced out text   "));  // 3

// ========================================
// EXAMPLE 30: capitalize words function
// ========================================
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("hello world from strings"));  // "Hello World From Strings"

console.log("\nAll examples completed!");
