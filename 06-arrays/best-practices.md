# Best Practices: Arrays

## 1. Use Spread for Copies
```javascript
const copy = [...original];
```

## 2. Use map for Transformations
```javascript
const doubled = arr.map(x => x * 2);
```

## 3. Use filter for Selection
```javascript
const evens = arr.filter(x => x % 2 === 0);
```

## 4. Use reduce for Aggregation
```javascript
const sum = arr.reduce((t, x) => t + x, 0);
```

## 5. Avoid Mutation When Possible
```javascript
const sorted = [...arr].sort();
```

## 6. Use forEach for Side Effects
```javascript
arr.forEach(x => console.log(x));
```

## 7. Use find for Search
```javascript
const found = arr.find(x => x > 10);
```

## 8. Use includes for Existence Check
```javascript
const exists = arr.includes(5);
```

## 9. Use some/any for Condition Check
```javascript
const hasEven = arr.some(x => x % 2 === 0);
```

## 10. Use every for All Condition Check
```javascript
const allPos = arr.every(x => x > 0);
```

## 11. Chain Methods for Pipelines
```javascript
const result = arr.filter(x => x > 0).map(x => x * 2).reduce((t, x) => t + x, 0);
```

## 12. Use slice for Safe Extraction
```javascript
const subset = arr.slice(1, 3);
```

## 13. Validate Array Before Operations
```javascript
if (!Array.isArray(arr)) return;
```

## 14. Handle Empty Arrays
```javascript
if (arr.length === 0) return defaultValue;
```

## 15. Use Destructuring for Clean Code
```javascript
const [first, second, ...rest] = arr;
```

## 16. Use Modern Methods When Available
```javascript
const toSorted = arr.toSorted((a, b) => a - b);
```

## 17. Avoid forEach for Return Values
```javascript
// Use map if you need a new array
```

## 18. Use flat for Nested Arrays
```javascript
const flat = nested.flat();
```

## 19. Use Set for Deduplication
```javascript
const unique = [...new Set(arr)];
```

## 20. Document Complex Transformations
```javascript
// Comment what complex chains do
```
