# Day 5: State & Effects Integration

## Deep Dive: Safe Data Fetching with AbortController

```jsx
import React, { useState, useEffect } from 'react';

export function UserProfileCard({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      signal: abortController.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });

    // Cleanup: cancel pending request if userId changes before response arrives
    return () => abortController.abort();
  }, [userId]);

  if (loading) return <p className="text-xs text-slate-400">Loading user {userId}...</p>;
  if (error) return <p className="text-xs text-red-500">Error: {error}</p>;

  return (
    <div className="p-4 border rounded-xl bg-white shadow-xs">
      <h3 className="font-bold text-slate-900">{user?.name}</h3>
      <p className="text-xs text-slate-500">{user?.email} • {user?.company?.name}</p>
    </div>
  );
}
```
