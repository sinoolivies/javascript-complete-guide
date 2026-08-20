// 12 - React Hooks: Complete Solutions

import React, { useState, useEffect, useRef, useContext, createContext, useReducer } from 'react';

// Solution 1: ToggleLamp
export function ToggleLamp() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="p-4 border rounded-xl text-center max-w-xs bg-white">
      <div className="text-5xl mb-3">{isOn ? '💡' : '⚪'}</div>
      <button
        onClick={() => setIsOn((prev) => !prev)}
        className={`px-4 py-2 rounded-lg font-bold text-xs text-white ${isOn ? 'bg-amber-500' : 'bg-slate-700'}`}
      >
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  );
}

// Solution 5: Window Resize Tracker
export function WindowResizeTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div className="text-xs font-mono">Current Width: {width}px</div>;
}

// Solution 6: Previous Count Tracker
export function PreviousCountTracker({ count }) {
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="text-xs space-y-1">
      <div>Current Count: <strong>{count}</strong></div>
      <div className="text-slate-500">Previous Count: <strong>{prevCountRef.current ?? 'N/A'}</strong></div>
    </div>
  );
}

// Solution 18: Custom Hook useToggle
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((v) => !v);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  return [value, toggle, setTrue, setFalse];
}

// Solution 19: Custom Hook useFetch
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
