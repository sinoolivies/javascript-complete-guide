# Practical Challenges: Operators

These real-world coding challenges help you apply operators to practical scenarios.

## Challenge 1: Shopping Cart Calculator

**Scenario**: Calculate total price for a shopping cart with discounts and tax.

**Requirements**:
- Calculate subtotal (sum of all item prices)
- Apply discount if total exceeds threshold
- Add tax to the final amount
- Round to 2 decimal places
- Handle edge cases (empty cart, negative prices)

**Steps**:
1. Create a cart array with items (price, quantity)
2. Write `calculateSubtotal(cart)` function
3. Write `applyDiscount(subtotal, threshold, discount)` function
4. Write `addTax(amount, taxRate)` function
5. Write `calculateTotal(cart)` function combining all

## Challenge 2: Temperature Converter

**Scenario**: Build a comprehensive temperature conversion tool.

**Requirements**:
- Convert between Celsius, Fahrenheit, and Kelvin
- Support all conversion directions
- Handle invalid inputs
- Round results to 2 decimal places
- Create a conversion table

**Steps**:
1. Write conversion functions for each pair
2. Write a master `convertTemperature(value, from, to)` function
3. Handle edge cases (absolute zero, invalid units)
4. Create a conversion table from -50°C to 50°C

## Challenge 3: Loan Calculator

**Scenario**: Calculate monthly payments for a loan.

**Requirements**:
- Calculate monthly payment using the formula:
  - M = P * [r(1+r)^n] / [(1+r)^n - 1]
  - Where P = principal, r = monthly rate, n = months
- Calculate total payment over loan term
- Calculate total interest paid
- Handle edge cases (zero interest, negative values)

**Steps**:
1. Write `calculateMonthlyPayment(principal, annualRate, years)` function
2. Write `calculateTotalPayment(monthlyPayment, months)` function
3. Write `calculateTotalInterest(totalPayment, principal)` function
4. Write `generateLoanReport(principal, annualRate, years)` function

## Challenge 4: Game Score Calculator

**Scenario**: Calculate and rank game scores with bonuses.

**Requirements**:
- Base score from achievements
- Apply multipliers based on difficulty
- Add time bonus (faster = more points)
- Deduct penalties for mistakes
- Calculate final score and rank

**Steps**:
1. Define scoring rules (base points, multipliers, bonuses)
2. Write `calculateBaseScore(achievements)` function
3. Write `applyDifficultyMultiplier(score, difficulty)` function
4. Write `calculateTimeBonus(baseTime, actualTime)` function
5. Write `applyPenalties(score, mistakes)` function
6. Write `calculateFinalScore(gameData)` function
7. Write `determineRank(score)` function

## Challenge 5: Data Validation System

**Scenario**: Create a comprehensive validation system for user input.

**Requirements**:
- Validate age (number, range)
- Validate email (format using string operations)
- Validate phone number (format using string operations)
- Validate password (complexity using operators)
- Return detailed validation results

**Steps**:
1. Write `validateAge(age)` function
2. Write `validateEmail(email)` function
3. Write `validatePhone(phone)` function
4. Write `validatePassword(password)` function
5. Write `validateAll(userData)` function that returns overall validation

## Challenge 6: Scientific Calculator

**Scenario**: Build a scientific calculator with advanced operations.

**Requirements**:
- Basic operations (+, -, *, /)
- Advanced operations (power, square root, modulo)
- Trigonometric functions (sin, cos, tan)
- Logarithmic functions (log, log10)
- Handle division by zero and invalid operations

**Steps**:
1. Write basic operation functions
2. Write advanced operation functions
3. Write trigonometric functions using Math object
4. Write logarithmic functions
5. Write `calculate(operation, operand1, operand2)` function
6. Handle errors gracefully

## Challenge 7: Speed Calculator

**Scenario**: Calculate speed, time, and distance relationships.

**Requirements**:
- Calculate speed given distance and time
- Calculate time given distance and speed
- Calculate distance given speed and time
- Convert between units (mph, kph, m/s)
- Handle unit conversions

**Steps**:
1. Write `calculateSpeed(distance, time)` function
2. Write `calculateTime(distance, speed)` function
3. Write `calculateDistance(speed, time)` function
4. Write unit conversion functions
5. Write `convertSpeed(value, from, to)` function
6. Handle edge cases (zero time/distance)

## Challenge 8: Percentage Calculator

**Scenario**: Create a comprehensive percentage calculator.

**Requirements**:
- Calculate percentage of a number
- Calculate what percentage one number is of another
- Calculate percentage increase/decrease
- Calculate percentage difference
- Handle edge cases (division by zero)

**Steps**:
1. Write `percentageOf(percent, total)` function
2. Write `whatPercentage(part, total)` function
3. Write `percentageChange(original, new)` function
4. Write `percentageDifference(value1, value2)` function
5. Write `percentageCalculator(type, value1, value2)` master function

## Challenge 9: Investment Calculator

**Scenario**: Calculate investment growth with compound interest.

**Requirements**:
- Calculate future value with compound interest
- Calculate required investment to reach goal
- Calculate how long to reach goal
- Compare different investment scenarios
- Handle different compounding frequencies

**Steps**:
1. Write `calculateFutureValue(principal, rate, time, compounds)` function
2. Write `calculateRequiredInvestment(goal, rate, time, compounds)` function
3. Write `calculateTimeToGoal(principal, goal, rate, compounds)` function
4. Write `compareInvestments(scenarios)` function
5. Handle edge cases (zero principal, negative rates)

## Challenge 10: Expression Evaluator

**Scenario**: Build a safe expression evaluator for user input.

**Requirements**:
- Evaluate mathematical expressions from strings
- Support: +, -, *, /, %, **
- Support parentheses for grouping
- Validate expressions before evaluation
- Handle errors gracefully
- Prevent code injection

**Steps**:
1. Write `validateExpression(expr)` function
2. Write `tokenizeExpression(expr)` function
3. Write `evaluateTokens(tokens)` function
4. Write `evaluateExpression(expr)` main function
5. Add security measures to prevent code injection
6. Test with various expressions

---

**Note**: Complete solutions are available in `solutions.js`. Try to solve each challenge before checking the solutions!
