# Cheat Sheet: Arrays

## Creation
```javascript
const arr = [1, 2, 3];
const empty = [];
const fromStr = Array.from("hello");
const ofArr = Array.of(1, 2, 3);
```

## Access
```javascript
arr[0]           // First element
arr[arr.length-1] // Last element
arr.at(-1)        // Last (modern)
arr.length        // Length
```

## Basic Methods
```javascript
arr.push(4)       // Add to end
arr.pop()         // Remove from end
arr.unshift(0)     // Add to beginning
arr.shift()       // Remove from beginning
```

## Search
```javascript
arr.indexOf(x)    // Index of x
arr.includes(x)   // Does x exist?
arr.find(fn)      // Find first match
arr.findIndex(fn) // Index of first match
```

## Iteration
```javascript
arr.forEach(fn)   // Iterate
arr.map(fn)      // Transform
arr.filter(fn)   // Filter
arr.reduce(fn, init) // Aggregate
```

## Transformation
```javascript
arr.sort(fn)      // Sort (mutates)
arr.slice(a, b)   // Extract (copy)
arr.splice(i, n)  // Remove/insert (mutates)
arr.concat(other)  // Combine
arr.join(sep)     // To string
arr.reverse()     // Reverse (mutates)
```

## Modern Methods
```javascript
arr.toSorted()    // Sort (copy)
arr.toReversed()  // Reverse (copy)
arr.toSpliced()   // Splice (copy)
arr.flat()        // Flatten
arr.flatMap(fn)   // Map + flatten
```

## Utilities
```javascript
Array.isArray(x)   // Is array?
arr.every(fn)      // All pass?
arr.some(fn)      // Any passes?
arr.keys()         // Get keys
arr.values()       // Get values
arr.entries()      // Get entries
```

## Copy
```javascript
const copy = [...arr];           // Spread
const copy2 = arr.slice();       // Slice
const copy3 = Array.from(arr);   // From
```

## Reference
```javascript
// Arrays are copied by reference
const a = [1, 2, 3];
const b = a;      // Same reference
const c = [...a];  // New reference
```

## Quick Reference

| Task | Method |
|------|--------|
| Add to end | push |
| Remove from end | pop |
| Add to start | unshift |
| Remove from start | shift |
| Find index | indexOf |
| Check existence | includes |
| Transform | map |
| Filter | filter |
| Aggregate | reduce |
| Sort | sort |
| Copy | slice or spread |
