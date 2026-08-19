# Day 9: Side Effects & Subscriptions (useEffect)

## The Synchronization Mental Model

Think of `useEffect` as synchronizing the outside world with your current state and props.

```jsx
useEffect(() => {
  const socket = new WebSocket('wss://api.example.com/live');
  socket.onmessage = (e) => setLiveData(JSON.parse(e.data));

  // Cleanup runs when component unmounts OR before effect re-runs
  return () => socket.close();
}, []); // Empty array = mount/unmount only
```
