// 12 - React Hooks: 25+ Comprehensive Code Examples

import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
  useMemo,
  useCallback,
  createContext,
} from 'react';

// ============================================================================
// 1. Primitive State & Functional Updates
// ============================================================================
export function CounterWidget() {
  const [count, setCount] = useState(0);

  const handleAsyncIncrement = () => {
    setTimeout(() => {
      // Functional updater guarantees fresh state even after 2s delay
      setCount((prev) => prev + 1);
    }, 2000);
  };

  return (
    <div className="p-4 border rounded-xl bg-white shadow-xs">
      <h3 className="font-bold text-slate-800">Count: {count}</h3>
      <div className="flex gap-2 mt-3">
        <button onClick={() => setCount((c) => c + 1)} className="px-3 py-1 bg-blue-600 text-white rounded">
          +1 Immediate
        </button>
        <button onClick={handleAsyncIncrement} className="px-3 py-1 bg-indigo-600 text-white rounded">
          +1 in 2s (Async)
        </button>
        <button onClick={() => setCount(0)} className="px-3 py-1 bg-slate-200 text-slate-700 rounded">
          Reset
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// 2. Object State Handling & Form Binding
// ============================================================================
export function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: 'Developer',
    subscribeNewsletter: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <form className="p-4 border rounded-xl bg-white space-y-3 max-w-sm">
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        className="w-full p-2 border rounded"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 border rounded"
      />
      <label className="flex items-center gap-2 text-xs text-slate-600">
        <input
          name="subscribeNewsletter"
          type="checkbox"
          checked={formData.subscribeNewsletter}
          onChange={handleChange}
        />
        Subscribe to updates
      </label>
      <pre className="p-2 bg-slate-100 rounded text-xs font-mono">
        {JSON.stringify(formData, null, 2)}
      </pre>
    </form>
  );
}

// ============================================================================
// 3. Side Effect with Cleanup: Window Resize Listener
// ============================================================================
export function WindowDimensionsViewer() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return (
    <div className="p-3 bg-slate-100 rounded-lg text-xs font-mono">
      Viewport: {windowSize.width}px × {windowSize.height}px
    </div>
  );
}

// ============================================================================
// 4. Data Fetching Effect with AbortController
// ============================================================================
export function PostViewer({ postId }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort(); // Cancel pending network request
  }, [postId]);

  if (loading) return <div className="p-4 text-xs text-slate-400">Loading post #{postId}...</div>;
  if (error) return <div className="p-4 text-xs text-red-500">Error: {error}</div>;

  return (
    <article className="p-4 border rounded-xl bg-white shadow-xs">
      <h4 className="font-bold text-slate-900">{post?.title}</h4>
      <p className="text-xs text-slate-600 mt-2">{post?.body}</p>
    </article>
  );
}

// ============================================================================
// 5. DOM Access & Focus Control with useRef
// ============================================================================
export function SearchInputWithFocus() {
  const searchInputRef = useRef(null);

  const handleClearAndFocus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
      searchInputRef.current.focus();
    }
  };

  return (
    <div className="flex gap-2">
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Type to search..."
        className="p-2 border rounded-lg text-sm flex-1"
      />
      <button
        onClick={handleClearAndFocus}
        className="px-3 py-2 bg-slate-800 text-white text-xs rounded-lg font-medium"
      >
        Clear & Focus
      </button>
    </div>
  );
}

// ============================================================================
// 6. Global Context: Theme Switcher System
// ============================================================================
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'dark' ? 'dark bg-slate-900 text-white p-6' : 'bg-white text-slate-900 p-6'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg border font-semibold text-xs shadow-xs"
    >
      Active: {theme.toUpperCase()} (Click to Switch)
    </button>
  );
}

// ============================================================================
// 7. Structured State Transitions with useReducer
// ============================================================================
const initialTodoState = [
  { id: 1, text: 'Learn React Fundamentals', completed: true },
  { id: 2, text: 'Master React Hooks', completed: false },
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [{ id: Date.now(), text: action.payload, completed: false }, ...state];
    case 'TOGGLE_TODO':
      return state.map((t) => (t.id === action.payload ? { ...t, completed: !t.completed } : t));
    case 'DELETE_TODO':
      return state.filter((t) => t.id !== action.payload);
    default:
      return state;
  }
}

export function TodoBoardManager() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodoState);
  const [inputText, setInputText] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    dispatch({ type: 'ADD_TODO', payload: inputText.trim() });
    setInputText('');
  };

  return (
    <div className="p-4 border rounded-xl bg-white max-w-md space-y-3">
      <form onSubmit={handleAdd} className="flex gap-2">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="New task..."
          className="flex-1 p-2 border rounded text-xs"
        />
        <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-bold">
          Add
        </button>
      </form>

      <ul className="divide-y text-xs">
        {todos.map((todo) => (
          <li key={todo.id} className="py-2 flex items-center justify-between">
            <span
              onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
              className={`cursor-pointer ${todo.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}
            >
              {todo.completed ? '✓ ' : '○ '} {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============================================================================
// 8. Performance Optimization: useMemo & useCallback
// ============================================================================
export function FilterableUserList({ users, filterRole }) {
  // Expensive calculation cached with useMemo
  const filteredUsers = useMemo(() => {
    console.log('Computing filtered users...');
    return users.filter((u) => filterRole === 'ALL' || u.role === filterRole);
  }, [users, filterRole]);

  // Stable callback reference passed to memoized children
  const handleNotifyUser = useCallback((userId) => {
    console.log(`Sending notification to user: ${userId}`);
  }, []);

  return (
    <div className="p-4 border rounded-xl bg-white">
      <h4 className="font-bold text-xs text-slate-500 uppercase">Filtered ({filteredUsers.length})</h4>
      <div className="divide-y text-xs mt-2">
        {filteredUsers.map((u) => (
          <div key={u.id} className="py-1.5 flex justify-between">
            <span>{u.name} ({u.role})</span>
            <button onClick={() => handleNotifyUser(u.id)} className="text-blue-600 hover:underline">
              Notify
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// 9. Custom Hook: useLocalStorage
// ============================================================================
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

// ============================================================================
// 10. Custom Hook: useDebounce
// ============================================================================
export function useDebounce(value, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
