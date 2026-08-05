# Theory: Arrays

Arrays are ordered collections of values in JavaScript. They are one of the most commonly used data structures and are essential for working with lists of data.

## Creating Arrays

### Array Literal
```javascript
const arr = [1, 2, 3];
const mixed = [1, "hello", true, null];
```

### Array Constructor
```javascript
const arr = new Array(1, 2, 3);
const sized = new Array(5);  // Array with 5 empty slots
```

## Accessing Elements

### Index Access
```javascript
const arr = ["apple", "banana", "orange"];
arr[0];  // "apple"
arr[1];  // "banana"
arr[arr.length - 1];  // "orange"
```

### Length Property
```javascript
arr.length;  // 3
```

## Basic Methods

### Adding Elements
```javascript
arr.push("grape");    // Add to end
arr.unshift("pear");  // Add to beginning
```

### Removing Elements
```javascript
arr.pop();    // Remove from end
arr.shift();  // Remove from beginning
```

### Finding Elements
```javascript
arr.indexOf("banana");   // 1
arr.includes("orange");  // true
arr.find(item => item === "banana");  // "banana"
```

## Iteration Methods

### forEach
```javascript
arr.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
```

### map
```javascript
const doubled = arr.map(item => item * 2);
```

### filter
```javascript
const evens = arr.filter(item => item % 2 === 0);
```

### reduce
```javascript
const sum = arr.reduce((total, item) => total + item, 0);
```

## Transformation Methods

### sort
```javascript
const sorted = [...arr].sort((a, b) => a - b);
```

### slice
```javascript
const subset = arr.slice(1, 3);  // Elements from index 1 to 2
```

### splice
```javascript
arr.splice(1, 1);  // Remove 1 element at index 1
arr.splice(1, 0, "new");  // Insert at index 1
```

## Reference Semantics

Arrays are stored by reference, not by value:
```javascript
const original = [1, 2, 3];
const copy = original;
copy.push(4);
console.log(original);  // [1, 2, 3, 4] - Both modified!
```

Use spread operator to create copies:
```javascript
const copy = [...original];
```

## Multidimensional Arrays

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
matrix[0][0];  // 1
```

## Common Methods Reference

- **push/pop**: Add/remove from end
- **shift/unshift**: Add/remove from beginning
- **indexOf/lastIndexOf**: Find index of element
- **includes**: Check if element exists
- **slice**: Extract portion without modifying
- **splice**: Add/remove at specific index
- **concat**: Combine arrays
- **join**: Convert array to string
- **reverse**: Reverse array in place
- **flat**: Flatten nested arrays

Arrays are fundamental to JavaScript programming. Mastering array methods is essential for data manipulation and functional programming.
