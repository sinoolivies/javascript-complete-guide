// 12 - React Hooks: Solutions for Exercises & Practical Challenges

import React, { useState, useEffect, useRef, useContext, createContext } from 'react';

// Solution 1: Toggle Switch
export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => setIsOn((prev) => !prev)}
      className={`px-4 py-2 rounded-lg font-bold text-white ${isOn ? 'bg-green-600' : 'bg-gray-600'}`}
    >
      {isOn ? 'ON 🟢' : 'OFF ⚪'}
    </button>
  );
}

// Solution 3: Document Title Sync
export function TitleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <button onClick={() => setCount((c) => c + 1)}>
      Increment ({count})
    </button>
  );
}

// Solution 6: Previous Value Tracker
export function PreviousValueCounter({ value }) {
  const prevRef = useRef();

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return (
    <div>
      <p>Current: {value}</p>
      <p>Previous: {prevRef.current ?? 'N/A'}</p>
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
      .then((data) => {
        setData(data);
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
