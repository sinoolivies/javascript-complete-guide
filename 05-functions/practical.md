# Practical Challenges: Functions

These real-world coding challenges help you apply functions to practical scenarios.

## Challenge 1: Data Processing Pipeline

**Scenario**: Create a data processing pipeline using functions.

**Requirements**:
- Write functions to: validate, transform, filter, and format data
- Compose these functions into a pipeline
- Handle errors at each stage
- Return final processed data

**Steps**:
1. Write `validateData(data)` function
2. Write `transformData(data)` function
3. Write `filterData(data)` function
4. Write `formatData(data)` function
5. Write `processPipeline(data)` that composes all functions

## Challenge 2: Event Emitter

**Scenario**: Create a simple event emitter using functions.

**Requirements**:
- Register event listeners
- Emit events with data
- Remove event listeners
- Handle multiple listeners for same event

**Steps**:
1. Create event emitter object
2. Write `on(event, listener)` function
3. Write `emit(event, data)` function
4. Write `off(event, listener)` function
5. Test with multiple events and listeners

## Challenge 3: Function Cache

**Scenario**: Create a caching mechanism for function results.

**Requirements**:
- Cache function results based on arguments
- Support cache expiration
- Support cache invalidation
- Handle different data types

**Steps**:
1. Write `memoize(fn, options)` function
2. Implement cache storage
3. Add expiration support
4. Add invalidation support
5. Test with various functions

## Challenge 4: API Client

**Scenario**: Create an API client using functions.

**Requirements**:
- Functions for GET, POST, PUT, DELETE
- Handle request/response transformation
- Error handling
- Request/response interceptors

**Steps**:
1. Write `get(url, options)` function
2. Write `post(url, data, options)` function
3. Write `put(url, data, options)` function
4. Write `delete(url, options)` function
5. Write `createClient(baseURL)` factory function

## Challenge 5: Validation Library

**Scenario**: Create a validation library using higher-order functions.

**Requirements**:
- Validators for common types (email, url, number)
- Composable validators
- Custom error messages
- Support for async validation

**Steps**:
1. Write `required(value)` validator
2. Write `email(value)` validator
3. Write `minLength(value, min)` validator
4. Write `composeValidators(...validators)` function
5. Write `validate(data, schema)` function

## Challenge 6: Promise Utilities

**Scenario**: Create utility functions for Promise handling.

**Requirements**:
- Delay function
- Timeout function
- Retry function
- Parallel execution with limit
- Sequential execution

**Steps**:
1. Write `delay(ms)` function
2. Write `timeout(promise, ms)` function
3. Write `retry(fn, maxRetries)` function
4. Write `parallel(tasks, limit)` function
5. Write `sequential(tasks)` function

## Challenge 7: Middleware Pattern

**Scenario**: Implement middleware pattern using functions.

**Requirements**:
- Middleware functions that can modify request/response
- Chain multiple middleware
- Error handling in middleware
- Next function to pass control

**Steps**:
1. Write `middleware(req, res, next)` pattern
2. Write `composeMiddleware(...middleware)` function
3. Implement error handling middleware
4. Test with multiple middleware in chain

## Challenge 8: Curry Utility

**Scenario**: Create a curry utility for function transformation.

**Requirements**:
- Convert any function to curried version
- Support partial application
- Maintain function context
- Handle different arities

**Steps**:
1. Write `curry(fn)` function
2. Handle functions with different numbers of parameters
3. Support calling with multiple arguments at once
4. Test with various functions

## Challenge 9: Function Decorators

**Scenario**: Create decorators that modify function behavior.

**Requirements**:
- Logging decorator
- Timing decorator
- Memoization decorator
- Retry decorator
- Composable decorators

**Steps**:
1. Write `logDecorator(fn)` function
2. Write `timeDecorator(fn)` function
3. Write `memoizeDecorator(fn)` function
4. Write `retryDecorator(fn, maxRetries)` function
5. Write `composeDecorators(...decorators)` function

## Challenge 10: State Management

**Scenario**: Create a simple state management system using functions.

**Requirements**:
- Create state store
- Subscribe to state changes
- Dispatch actions
- Update state based on actions
- Support middleware

**Steps**:
1. Write `createStore(initialState)` function
2. Write `subscribe(listener)` function
3. Write `dispatch(action)` function
4. Write `reducer(state, action)` function
5. Implement middleware support

---

**Note**: Complete solutions are available in `solutions.js`. Try to solve each challenge before checking the solutions!
