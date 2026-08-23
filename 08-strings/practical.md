# Practical Challenges: Strings

These real-world coding challenges help you apply strings to practical scenarios.

## Challenge 1: Text Analyzer

**Scenario**: Build a utility that analyzes a block of text and reports its statistics.

**Requirements**:
- Count the total number of characters (including and excluding spaces)
- Count the number of words (handle multiple spaces between words)
- Count the number of sentences
- Find the longest word in the text
- Return all results in an object

## Challenge 2: Password Strength Validator

**Scenario**: Build a function that scores a password and reports which rules it fails.

**Requirements**:
- Check minimum length of 8 characters
- Check for at least one uppercase and one lowercase letter
- Check for at least one digit
- Check for at least one special character (non-alphanumeric)
- Return an object with a score from 0 to 4 and a list of missing requirements

## Challenge 3: Slug Generator / URL Formatter

**Scenario**: Build a function that converts any title into a URL-friendly slug.

**Requirements**:
- Trim surrounding whitespace
- Convert everything to lowercase
- Replace spaces with hyphens
- Replace any character that is not a letter, digit, or hyphen (remove punctuation)
- Collapse multiple consecutive hyphens into one

## Challenge 4: Redacted Message Filter

**Scenario**: Build a function that removes sensitive words from a message before sharing it.

**Requirements**:
- Accept a message and a list of words to block
- Replace every occurrence of a blocked word (case-insensitively) with `"***"`
- Work when a blocked word appears multiple times in one message
- Preserve the rest of the message exactly

## Challenge 5: UI Name and Email Formatting

**Scenario**: Build formatting helpers for a user interface that displays names and contact info.

**Requirements**:
- Convert a full name like `"ada lovelace"` to title case (`"Ada Lovelace"`)
- Format a name as `"Last, First"` for sorting displays
- Mask an email address, showing only the first character of the local part and the full domain (e.g., `"a***@example.com"`)
- Format a phone number like `"1234567890"` as `"(123) 456-7890"`
- Return each formatted value from its own function

---

**Note**: Solutions are available in `solutions.js`.
