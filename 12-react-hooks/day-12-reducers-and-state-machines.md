# Day 12: Predictable State with useReducer

## Reducer Architecture for Complex State

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0, history: [] };

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload, history: [...state.history, `+${action.payload}`] };
    case 'DECREMENT':
      return { count: state.count - action.payload, history: [...state.history, `-${action.payload}`] };
    case 'RESET':
      return initialState;
    default:
      throw new Error(`Unhandled action: ${action.type}`);
  }
}

export function CounterMachine() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 5 })}>-5</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <p>Log: {state.history.join(', ')}</p>
    </div>
  );
}
```
