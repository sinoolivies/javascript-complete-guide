# Day 6: Context & Reducer Pattern

## Enterprise Architecture: Context + Reducer State Management

Combining `useContext` with `useReducer` provides a scalable state management system without external libraries.

```jsx
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE':
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
```
