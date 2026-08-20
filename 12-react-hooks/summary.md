# Summary: React Hooks & State Management

## Key Takeaways

1. **Functional Hooks**: Hooks provide complete access to state, lifecycle, context, refs, and reducers in pure functional components.
2. **Rules of Hooks**: Always call hooks at the top level and exclusively from React functions to preserve Fiber linked-list execution order.
3. **State & Synchronization**: `useState` handles local state with functional updaters; `useEffect` synchronizes with external systems with cleanups.
4. **Context & Reducers**: `useContext` eliminates prop drilling; `useReducer` structures complex state transitions with pure action dispatchers.
5. **Performance & Custom Hooks**: `useMemo` and `useCallback` prevent unnecessary recalculations and re-renders; custom hooks cleanly package reusable logic.
