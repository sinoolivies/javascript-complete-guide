// ========================================
// BEGINNER EXERCISE SOLUTIONS
// ========================================

// Exercise 1: String Creation
console.log("=== Exercise 1 ===");
const single = 'single quotes';
const double = "double quotes";
const backtick = `backtick quotes`;
console.log(single, double, backtick);

// Exercise 2: String Length
console.log("\n=== Exercise 2 ===");
const phrase = "hello world of strings";
console.log(phrase.length);      // 23 - spaces count
console.log("".length);          // 0

// Exercise 3: Concatenation
console.log("\n=== Exercise 3 ===");
const first = "Ada";
const last = "Lovelace";
console.log(first + " " + last);        // "Ada Lovelace"
console.log(`${first} ${last}`);        // "Ada Lovelace"

// Exercise 4: Template Literal Interpolation
console.log("\n=== Exercise 4 ===");
const product = "Keyboard";
const price = 49.99;
console.log(`Product: ${product} - $${price}`);

// Exercise 5: Multi-line Strings
console.log("\n=== Exercise 5 ===");
const multiTemplate = `line one
line two
line three`;
const multiEscaped = "line one\nline two\nline three";
console.log(multiTemplate);
console.log(multiEscaped);
console.log(multiTemplate === multiEscaped);  // true

// Exercise 6: Character Access
console.log("\n=== Exercise 6 ===");
const word = "JavaScript";
console.log(word[0]);              // "J"
console.log(word.charAt(0));       // "J"
console.log(word[word.length - 1]); // "t"
console.log(word[100]);            // undefined

// Exercise 7: Uppercase and Lowercase
console.log("\n=== Exercise 7 ===");
const mixed = "Hello World";
console.log(mixed.toUpperCase());  // "HELLO WORLD"
console.log(mixed.toLowerCase());  // "hello world"
console.log(mixed.toUpperCase().toLowerCase());  // "hello world"

// Exercise 8: Trimming
console.log("\n=== Exercise 8 ===");
const padded = "   padded text   ";
console.log(`trim:      "${padded.trim()}"`);
console.log(`trimStart: "${padded.trimStart()}"`);
console.log(`trimEnd:   "${padded.trimEnd()}"`);

// Exercise 9: includes
console.log("\n=== Exercise 9 ===");
const sentence = "The quick brown fox";
console.log(sentence.includes("quick"));  // true
console.log(sentence.includes("cat"));    // false
console.log(sentence.includes("QUICK"));  // false - search is case-sensitive

// Exercise 10: startsWith and endsWith
console.log("\n=== Exercise 10 ===");
const filename = "filename.pdf";
console.log(filename.startsWith("file"));  // true
console.log(filename.endsWith(".pdf"));    // true
console.log(filename.startsWith("File"));  // false - case matters
console.log(filename.endsWith(".png"));    // false

// ========================================
// INTERMEDIATE EXERCISE SOLUTIONS
// ========================================

// Exercise 1: Normalizing Case for Comparison
console.log("\n=== Intermediate Exercise 1 ===");
function sameIgnoringCase(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}
console.log(sameIgnoringCase("Hello", "hello"));  // true
console.log(sameIgnoringCase("World", "World"));  // true
console.log(sameIgnoringCase("World", "hello"));  // false

// Exercise 2: indexOf and lastIndexOf
console.log("\n=== Intermediate Exercise 2 ===");
const code = "Hello, world of code";
console.log(code.indexOf("o"));       // 4
console.log(code.lastIndexOf("o"));   // 16
console.log(code.indexOf("z"));       // -1

// Exercise 3: Checking for -1
console.log("\n=== Intermediate Exercise 3 ===");
const haystack = "The quick brown fox";
const needle = "brown";
if (haystack.indexOf(needle) !== -1) {
  console.log("Found");
} else {
  console.log("Not found");
}

// Exercise 4: slice
console.log("\n=== Intermediate Exercise 4 ===");
const greeting = "Hello World";
console.log(greeting.slice(6));         // "World"
console.log(greeting.slice(0, 5));      // "Hello"
console.log(greeting.slice(-3));        // "rld"

// Exercise 5: substring
console.log("\n=== Intermediate Exercise 5 ===");
const js = "JavaScript";
console.log(js.substring(0, 4));  // "Java"
console.log(js.substring(4, 0));  // "Java" - args are swapped, no error

// Exercise 6: split and join
console.log("\n=== Intermediate Exercise 6 ===");
const csv = "apple,banana,orange";
const parts = csv.split(",");
console.log(parts);                     // ["apple", "banana", "orange"]
console.log(parts.join(" - "));         // "apple - banana - orange"
console.log("hello".split(""));         // ["h", "e", "l", "l", "o"]

// Exercise 7: Reverse a String
console.log("\n=== Intermediate Exercise 7 ===");
const reversed = "JavaScript".split("").reverse().join("");
console.log(reversed);  // "tpircSavaJ"

// Exercise 8: replace and replaceAll
console.log("\n=== Intermediate Exercise 8 ===");
const cats = "cat and cat";
console.log(cats.replace("cat", "dog"));    // "dog and cat"
console.log(cats.replaceAll("cat", "dog")); // "dog and dog"

// Exercise 9: padStart for Number Formatting
console.log("\n=== Intermediate Exercise 9 ===");
console.log(String(7).padStart(3, "0"));    // "007"
console.log(String(42).padStart(3, "0"));   // "042"
console.log(String(365).padStart(3, "0"));  // "365"

// Exercise 10: repeat
console.log("\n=== Intermediate Exercise 10 ===");
console.log("-".repeat(20));  // "--------------------"
console.log("hi".repeat(3));  // "hihihi"
console.log("x".repeat(0));   // ""

// ========================================
// ADVANCED EXERCISE SOLUTIONS
// ========================================

// Exercise 1: truncate Function
console.log("\n=== Advanced Exercise 1 ===");
function truncate(text, max) {
  if (text.length <= max) return text;
  return text.slice(0, max - 3) + "...";
}
console.log(truncate("JavaScript is an awesome language", 20));  // "JavaScript is a..."
console.log(truncate("short", 20));                              // "short"

// Exercise 2: slugify Function
console.log("\n=== Advanced Exercise 2 ===");
function slugify(text) {
  return text.trim().toLowerCase().replaceAll(" ", "-");
}
console.log(slugify("  Hello World Again  "));  // "hello-world-again"

// Exercise 3: capitalizeWords Function
console.log("\n=== Advanced Exercise 3 ===");
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("hello world from strings"));  // "Hello World From Strings"

// Exercise 4: countWordFrequencies
console.log("\n=== Advanced Exercise 4 ===");
function countWordFrequencies(text) {
  const words = text.trim().split(/\s+/);
  const frequencies = {};
  words.forEach(word => {
    frequencies[word] = (frequencies[word] || 0) + 1;
  });
  return frequencies;
}
console.log(countWordFrequencies("the cat and the dog"));
// { the: 2, cat: 1, and: 1, dog: 1 }

// Exercise 5: maskString Function
console.log("\n=== Advanced Exercise 5 ===");
function mask(secret) {
  return "*".repeat(Math.max(0, secret.length - 4)) + secret.slice(-4);
}
console.log(mask("1234567890123456"));  // "************3456"
console.log(mask("abcd"));              // "abcd"

// Exercise 6: Character Code Shifting
console.log("\n=== Advanced Exercise 6 ===");
function shift(text, amount) {
  return text
    .split("")
    .map(ch => String.fromCharCode(ch.charCodeAt(0) + amount))
    .join("");
}
console.log(shift("abc", 1));  // "bcd"
console.log(shift("xyz", 1));  // "yz{"

// Exercise 7: Counting Logical Characters
console.log("\n=== Advanced Exercise 7 ===");
const emojiText = "Hello 😀 world";
console.log(emojiText.length);             // 14 - emoji counts as 2 code units
console.log(Array.from(emojiText).length); // 13 - logical characters
// The emoji is a surrogate pair, so length counts it twice.

// Exercise 8: extractInitials Function
console.log("\n=== Advanced Exercise 8 ===");
function extractInitials(fullName) {
  return fullName
    .split(" ")
    .map(part => part.charAt(0).toUpperCase() + ".")
    .join(" ");
}
console.log(extractInitials("Ada Lovelace"));            // "A. L."
console.log(extractInitials("Alan Mathison Turing"));    // "A. M. T."

// Exercise 9: isPalindrome Function
console.log("\n=== Advanced Exercise 9 ===");
function isPalindrome(text) {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}
console.log(isPalindrome("racecar"));                  // true
console.log(isPalindrome("A man a plan a canal Panama"));  // true
console.log(isPalindrome("hello"));                    // false

// Exercise 10: Sort Names with localeCompare
console.log("\n=== Advanced Exercise 10 ===");
const fruits = ["banana", "Apple", "cherry", "date"];
const sortedFruits = [...fruits].sort((a, b) => a.localeCompare(b));
console.log(sortedFruits);  // ["Apple", "banana", "cherry", "date"]

// ========================================
// PRACTICAL CHALLENGE SOLUTIONS
// ========================================

// Challenge 1: Text Analyzer
console.log("\n=== Practical Challenge 1: Text Analyzer ===");
function analyzeText(text) {
  const trimmed = text.trim();
  const withoutSpaces = trimmed.replaceAll(" ", "");
  const words = trimmed.split(/\s+/).filter(word => word.length > 0);
  const sentences = trimmed.split(/[.!?]/).filter(part => part.trim().length > 0);
  const longestWord = words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ""
  );
  return {
    charactersIncludingSpaces: trimmed.length,
    charactersExcludingSpaces: withoutSpaces.length,
    wordCount: words.length,
    sentenceCount: sentences.length,
    longestWord: longestWord
  };
}
console.log(analyzeText("Hello world. This is a longer test."));

// Challenge 2: Password Strength Validator
console.log("\n=== Practical Challenge 2: Password Strength Validator ===");
function validatePassword(password) {
  const rules = {
    length: password.length >= 8,
    hasUpper: /[A-Z]/.test(password),
    hasLower: /[a-z]/.test(password),
    hasDigit: /\d/.test(password),
    hasSpecial: /[^A-Za-z0-9]/.test(password)
  };
  const score = Object.values(rules).filter(value => value).length;
  const missing = [];
  if (!rules.length) missing.push("at least 8 characters");
  if (!rules.hasUpper) missing.push("an uppercase letter");
  if (!rules.hasLower) missing.push("a lowercase letter");
  if (!rules.hasDigit) missing.push("a digit");
  if (!rules.hasSpecial) missing.push("a special character");
  return { score, missing };
}
console.log(validatePassword("Passw0rd!"));
console.log(validatePassword("weak"));

// Challenge 3: Slug Generator / URL Formatter
console.log("\n=== Practical Challenge 3: Slug Generator ===");
function generateSlug(title) {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")      // remove punctuation
    .replace(/\s+/g, "-")              // spaces to hyphens
    .replace(/-+/g, "-");              // collapse repeated hyphens
}
console.log(generateSlug("  Hello, World! This is a Test!!  "));
// "hello-world-this-is-a-test"

// Challenge 4: Redacted Message Filter
console.log("\n=== Practical Challenge 4: Redacted Message Filter ===");
function redact(message, blockedWords) {
  let result = message;
  blockedWords.forEach(word => {
    const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    result = result.replace(new RegExp(escaped, "gi"), "***");
  });
  return result;
}
console.log(redact("Meet me at the secret spot, secret plan", ["secret", "plan"]));
// "Meet me at the *** spot, *** ***"

// Challenge 5: UI Name and Email Formatting
console.log("\n=== Practical Challenge 5: UI Formatting ===");
function toTitleCase(fullName) {
  return fullName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
function formatLastFirst(fullName) {
  const parts = fullName.split(" ");
  const last = parts[parts.length - 1];
  const first = parts.slice(0, -1).join(" ");
  return `${last}, ${first}`;
}
function maskEmail(email) {
  const [local, domain] = email.split("@");
  return `${local.charAt(0)}${"*".repeat(Math.max(0, local.length - 1))}@${domain}`;
}
function formatPhone(digits) {
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}
console.log(toTitleCase("ada lovelace"));         // "Ada Lovelace"
console.log(formatLastFirst("Ada Lovelace"));     // "Lovelace, Ada"
console.log(maskEmail("ada@example.com"));        // "a***@example.com"
console.log(formatPhone("1234567890"));           // "(123) 456-7890"

console.log("\n=== All solutions completed! ===");
