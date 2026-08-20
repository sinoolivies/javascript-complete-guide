# Day 13: Performance Memoization & Custom Hooks

## Custom Hook Abstractions: `useLocalStorage`

```jsx
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (e) {
      console.warn(`Error setting localStorage key "${key}":`, e);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
```
