// 12 - React Hooks: 20+ Runnable Code Examples

import React, { useState, useEffect, useRef, useContext, useReducer, useMemo, useCallback, createContext } from 'react';

// ==========================================
// 1. Basic State Counter
// ==========================================
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// ==========================================
// 2. Object State Handling
// ==========================================
export function UserForm() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <p>Preview: {form.name} ({form.email})</p>
    </form>
  );
}

// ==========================================
// 3. Effect for Subscriptions & Timers
// ==========================================
export function LiveClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return <div>Current Time: {time}</div>;
}

// ==========================================
// 4. Effect with Dependencies (Data Fetching Simulation)
// ==========================================
export function UserDetails({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const timeout = setTimeout(() => {
      if (isMounted) {
        setUser({ id: userId, name: `User #${userId}`, role: 'Member' });
        setLoading(false);
      }
    }, 500);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [userId]);

  if (loading) return <div>Loading user {userId}...</div>;
  return <div><h3>{user?.name}</h3><p>Role: {user?.role}</p></div>;
}

// ==========================================
// 5. DOM Access with useRef
// ==========================================
export function AutoFocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus me" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

// ==========================================
// 6. Context API for Global Theme
// ==========================================
const ThemeContext = createContext('light');

export function ThemedApp() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, toggle: () => setTheme((t) => (t === 'light' ? 'dark' : 'light')) }}>
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <button className={`theme-${theme}`} onClick={toggle}>
      Active: {theme} (Click to switch)
    </button>
  );
}

// ==========================================
// 7. useReducer for Shopping Cart
// ==========================================
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartManager() {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <div>
      <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: { id: Date.now(), name: 'Book' } })}>
        Add Book
      </button>
      <button onClick={() => dispatch({ type: 'CLEAR' })}>Clear</button>
      <p>Items in Cart: {cart.items.length}</p>
    </div>
  );
}

// ==========================================
// 8. useMemo for Expensive Filter Calculations
// ==========================================
export function FilteredNumberList({ numbers, threshold }) {
  const heavyFiltered = useMemo(() => {
    console.log('Calculating filtered numbers...');
    return numbers.filter((n) => n > threshold);
  }, [numbers, threshold]);

  return <div>Matching Count: {heavyFiltered.length}</div>;
}

// ==========================================
// 9. useCallback for Event Handlers
// ==========================================
export function CallbackParent() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return <ChildButton onClick={handleIncrement} count={count} />;
}

const ChildButton = React.memo(function ChildButton({ onClick, count }) {
  return <button onClick={onClick}>Count: {count}</button>;
});

// ==========================================
// 10. Custom Hook: useLocalStorage
// ==========================================
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
      console.error(e);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
