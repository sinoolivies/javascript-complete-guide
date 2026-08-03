# Practical Challenges: Variables and Data Types

These real-world coding challenges help you apply variables and data types concepts to practical scenarios.

## Challenge 1: User Profile System

**Scenario**: Create a user profile system that stores user information using appropriate data types.

**Requirements**:
- Store user information: id, name, email, age, isActive, preferences
- Use appropriate data types for each field
- preferences should be an object with theme and notification settings
- Create a function to display user profile
- Create a function to update user information

**Steps**:
1. Design the user object structure
2. Create a sample user with all fields
3. Write `displayProfile(user)` function
4. Write `updateUser(user, field, value)` function
5. Test both functions

## Challenge 2: Product Inventory

**Scenario**: Manage a product inventory with proper data types.

**Requirements**:
- Store product information: id, name, price, quantity, inStock, category
- Use appropriate data types (number for price/quantity, boolean for inStock)
- Create an array of products
- Create functions to:
  - Add a product
  - Remove a product by id
  - Update product quantity
  - Check if product is in stock

**Steps**:
1. Design the product object structure
2. Create an array of sample products
3. Write `addProduct(products, product)` function
4. Write `removeProduct(products, productId)` function
5. Write `updateQuantity(products, productId, newQuantity)` function
6. Write `checkStock(products, productId)` function

## Challenge 3: Configuration Manager

**Scenario**: Create a configuration manager for an application.

**Requirements**:
- Store configuration: apiUrl, maxRetries, timeout, debugMode, features
- Use const for the configuration object
- features should be an array of enabled features
- Create a function to validate configuration
- Create a function to get a specific config value

**Steps**:
1. Create a configuration object with all required fields
2. Write `validateConfig(config)` function
3. Write `getConfig(config, key)` function
4. Test with valid and invalid configurations

## Challenge 4: Student Grade System

**Scenario**: Create a system to track student grades using appropriate data types.

**Requirements**:
- Store student information: id, name, grades (array), gpa, isGraduated
- grades should be an array of numbers
- Create functions to:
  - Calculate GPA from grades
  - Add a grade
  - Determine if student is graduated (GPA >= 2.0)
  - Display student report

**Steps**:
1. Design the student object structure
2. Create sample students
3. Write `calculateGPA(grades)` function
4. Write `addGrade(student, grade)` function
5. Write `checkGraduation(student)` function
6. Write `displayReport(student)` function

## Challenge 5: Shopping Cart

**Scenario**: Implement a shopping cart with proper data type handling.

**Requirements**:
- Store cart items: productId, name, price, quantity
- Use appropriate data types
- Create functions to:
  - Add item to cart
  - Remove item from cart
  - Update item quantity
  - Calculate total price
  - Apply discount (percentage)

**Steps**:
1. Design the cart item structure
2. Create a cart array
3. Write `addItem(cart, item)` function
4. Write `removeItem(cart, productId)` function
5. Write `updateQuantity(cart, productId, quantity)` function
6. Write `calculateTotal(cart)` function
7. Write `applyDiscount(cart, discountPercentage)` function

## Challenge 6: Type-Safe Input Handler

**Scenario**: Create a function that handles user input with type validation.

**Requirements**:
- Create a function that accepts various input types
- Validate and convert types appropriately:
  - Strings: keep as strings, trim whitespace
  - Numbers: convert to number, validate it's a valid number
  - Booleans: convert to boolean
  - Arrays: validate it's an array
  - Objects: validate it's an object
- Return processed value or error message

**Steps**:
1. Write `processInput(input, expectedType)` function
2. Handle all primitive types
3. Handle object types (array, object, null)
4. Return appropriate error messages for invalid types
5. Test with various inputs

## Challenge 7: State Management

**Scenario**: Create a simple state management system.

**Requirements**:
- Store application state: isLoading, error, data, user
- Use appropriate data types
- Create functions to:
  - Get current state
  - Update state
  - Reset state
  - Get specific state value

**Steps**:
1. Design the state object structure
2. Initialize state with default values
3. Write `getState()` function
4. Write `setState(newState)` function
5. Write `resetState()` function
6. Write `getValue(key)` function

## Challenge 8: Data Sanitizer

**Scenario**: Create a data sanitizer for user-provided data.

**Requirements**:
- Create a function that sanitizes different data types:
  - Strings: remove HTML tags, trim, limit length
  - Numbers: ensure within range, handle NaN
  - Booleans: convert truthy/falsy to true/false
  - Arrays: ensure each element is sanitized
  - Objects: sanitize each property value
- Return sanitized data

**Steps**:
1. Write `sanitizeString(str, maxLength)` function
2. Write `sanitizeNumber(num, min, max)` function
3. Write `sanitizeBoolean(value)` function
4. Write `sanitizeArray(arr)` function
5. Write `sanitizeObject(obj)` function
6. Write main `sanitize(data, type)` function

## Challenge 9: Data Cloning Utility

**Scenario**: Create a utility for cloning data with proper type handling.

**Requirements**:
- Create functions to clone different data types:
  - Primitives: return as-is
  - Arrays: create new array with copied elements
  - Objects: create new object with copied properties
  - Handle nested structures (deep clone)
  - Handle special objects (Date, RegExp)
- Return cloned data

**Steps**:
1. Write `clonePrimitive(value)` function
2. Write `cloneArray(arr)` function
3. Write `cloneObject(obj)` function
4. Write `deepClone(data)` function
5. Test with various data types and nested structures

## Challenge 10: Type Conversion Validator

**Scenario**: Create a validator for type conversions.

**Requirements**:
- Create a function that attempts type conversion
- Validate the conversion was successful
- Return:
  - Converted value if successful
  - Original value with warning if conversion is lossy
  - Error message if conversion fails
- Handle conversions between:
  - String ↔ Number
  - String ↔ Boolean
  - Number ↔ Boolean
  - Any ↔ String

**Steps**:
1. Write `safeConvert(value, targetType)` function
2. Handle each conversion type
3. Implement validation logic
4. Return appropriate results (converted value, warning, or error)
5. Test with various conversion scenarios

---

**Note**: Complete solutions are available in `solutions.js`. Try to solve each challenge before checking the solutions!
