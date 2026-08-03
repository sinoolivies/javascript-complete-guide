# Practical Challenges: Introduction to JavaScript

These real-world coding challenges help you apply JavaScript concepts to practical scenarios.

## Challenge 1: Personal Information Card

**Scenario**: Create a program that stores and displays personal information.

**Requirements**:
- Store your name, age, email, and city in an object
- Write a function to display this information in a formatted way
- Use template literals for formatting
- Include a function to update any field

**Steps**:
1. Create a person object with your information
2. Write a `displayInfo()` function
3. Write an `updateField(field, value)` function
4. Test both functions

**Expected Output**:
```
Name: John Doe
Age: 30
Email: john@example.com
City: New York
```

## Challenge 2: Simple Calculator

**Scenario**: Build a basic calculator that can perform arithmetic operations.

**Requirements**:
- Create functions for add, subtract, multiply, divide
- Each function takes two numbers and returns the result
- Handle division by zero (return an error message)
- Create a main function that takes operation and two numbers

**Steps**:
1. Write four basic operation functions
2. Write a `calculate(operation, num1, num2)` function
3. Test with different operations
4. Handle edge cases (division by zero)

## Challenge 3: Shopping List Manager

**Scenario**: Create a simple shopping list application.

**Requirements**:
- Store items in an array
- Add functions to:
  - Add an item
  - Remove an item
  - Display all items
  - Find an item
- Use array methods (push, pop, includes, indexOf)

**Steps**:
1. Start with an empty array
2. Write `addItem(item)` function
3. Write `removeItem(item)` function
4. Write `displayItems()` function
5. Write `findItem(item)` function
6. Test all functions

## Challenge 4: Temperature Converter

**Scenario**: Build a temperature converter between Celsius and Fahrenheit.

**Requirements**:
- Write a function to convert Celsius to Fahrenheit
- Write a function to convert Fahrenheit to Celsius
- Use the formulas:
  - F = (C × 9/5) + 32
  - C = (F - 32) × 5/9
- Round results to 2 decimal places

**Steps**:
1. Write `celsiusToFahrenheit(celsius)` function
2. Write `fahrenheitToCelsius(fahrenheit)` function
3. Create a table of conversions from 0°C to 100°C in steps of 10
4. Print the table

## Challenge 5: Grade Calculator

**Scenario**: Calculate letter grades from numerical scores.

**Requirements**:
- Write a function that takes a numerical score (0-100)
- Return the letter grade:
  - A: 90-100
  - B: 80-89
  - C: 70-79
  - D: 60-69
  - F: 0-59
- Handle invalid scores (return error message)

**Steps**:
1. Write `getLetterGrade(score)` function
2. Test with various scores
3. Test edge cases (0, 100, -5, 105)
4. Test with non-numeric input

## Challenge 6: Word Counter

**Scenario**: Count words in a given text.

**Requirements**:
- Write a function that takes a string
- Return the number of words
- Handle multiple spaces between words
- Handle leading/trailing spaces
- Handle empty strings

**Steps**:
1. Write `countWords(text)` function
2. Test with normal sentences
3. Test with extra spaces
4. Test with empty string
5. Test with single word

## Challenge 7: Array Statistics

**Scenario**: Calculate statistics for an array of numbers.

**Requirements**:
- Write functions to calculate:
  - Sum of all numbers
  - Average of all numbers
  - Minimum value
  - Maximum value
- Handle empty arrays (return appropriate message)

**Steps**:
1. Write `sum(numbers)` function
2. Write `average(numbers)` function
3. Write `min(numbers)` function
4. Write `max(numbers)` function
5. Test with various arrays
6. Test with empty array

## Challenge 8: Password Strength Checker

**Scenario**: Check the strength of a password.

**Requirements**:
- Write a function that takes a password
- Return strength based on:
  - Weak: less than 8 characters
  - Medium: 8+ characters, no numbers
  - Strong: 8+ characters with numbers
  - Very Strong: 12+ characters with numbers and special characters
- Check for at least one number and one special character

**Steps**:
1. Write `checkPasswordStrength(password)` function
2. Test with various passwords
3. Test edge cases (empty, very short, very long)

## Challenge 9: Phone Number Formatter

**Scenario**: Format phone numbers into a standard format.

**Requirements**:
- Write a function that takes a phone number string
- Remove all non-digit characters
- Format as (XXX) XXX-XXXX if 10 digits
- Return error if not 10 digits
- Handle various input formats

**Steps**:
1. Write `formatPhoneNumber(phone)` function
2. Test with different formats:
   - "1234567890"
   - "123-456-7890"
   - "(123) 456-7890"
   - "123 456 7890"
3. Test with invalid numbers

## Challenge 10: Simple Login System

**Scenario**: Create a simple user authentication system.

**Requirements**:
- Store user credentials in an object (username/password)
- Write a function to check login
- Return success message if credentials match
- Return error message if they don't
- Handle case sensitivity

**Steps**:
1. Create a user object with username and password
2. Write `login(username, password)` function
3. Test with correct credentials
4. Test with incorrect credentials
5. Test with wrong case

---

**Note**: Complete solutions are available in `solutions.js`. Try to solve each challenge before checking the solutions!
