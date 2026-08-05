# Common Mistakes: Arrays

## 1. Modifying Arrays During Iteration
```javascript
// Mistake
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    arr.splice(i, 1);  // Skips elements
  }
}
// Fix: Iterate backwards or use filter
```

## 2. Using == Instead of === in indexOf
```javascript
// Mistake
arr.indexOf("5");  // String vs number confusion
// Fix: Use strict comparison or includes
```

## 3. Not Understanding Reference Semantics
```javascript
// Mistake
const copy = original;
copy.push(4);  // Modifies original
// Fix: Use spread operator [...original]
```

## 4. Sort Mutation
```javascript
// Mistake
arr.sort();  // Modifies original
// Fix: [...arr].sort()
```

## 5. Not Handling Empty Arrays
```javascript
// Mistake
arr[0];  // undefined for empty array
// Fix: Check length first
```

## 6. Confusing slice and splice
```javascript
// slice: Returns new array, doesn't modify
// splice: Modifies original, returns removed elements
```

## 7. Using forEach for Side Effects Only
```javascript
// Mistake
const result = arr.forEach(x => x * 2);  // undefined
// Fix: Use map for transformations
```

## 8. Not Using reduce Properly
```javascript
// Mistake
arr.reduce((t, n) => t + n);  // Might return NaN for empty array
// Fix: Always provide initial value
```

## 9. Array Destructuring Index Errors
```javascript
// Mistake
const [first, second] = arr;  // Error if arr has < 2 elements
// Fix: Provide defaults or check length
```

## 10. Using for-in with Arrays
```javascript
// Mistake
for (let i in arr) {}  // Iterates over enumerable properties too
// Fix: Use for-of or forEach
```

## How to Avoid These Mistakes

1. Create copies before modifying
2. Use strict equality
3. Understand method mutation
4. Handle edge cases
5. Choose the right method
6. Test with empty arrays
7. Use modern array methods
8. Provide initial values for reduce
9. Use destructuring carefully
10. Use for-of or forEach for iteration
