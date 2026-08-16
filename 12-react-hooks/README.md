# 12 - React Hooks & State Management

## Topic Overview

React Hooks are functions that let functional components tap into React state, lifecycle methods, and side effects without writing class components. Introduced in React 16.8, hooks transformed React development by enabling clean code reuse, composability, and clear separation of concerns.

## Learning Objectives

By the end of this topic, you will be able to:

- Master the Rules of Hooks (top-level only, React functions only)
- Manage component state using the `useState` hook
- Handle asynchronous side effects and subscriptions with `useEffect` and cleanups
- Share global/tree state avoiding prop drilling with `useContext`
- Persist mutable references and interact with DOM nodes using `useRef`
- Manage complex state transitions with actions and reducers using `useReducer`
- Optimize rendering performance with `useMemo` and `useCallback`
- Build and compose reusable Custom Hooks (`useLocalStorage`, `useDebounce`, `useFetch`)

## Prerequisites

- Completion of Topic 11: React Fundamentals
- Strong understanding of JavaScript closures, array destructuring, and asynchronous JavaScript

## What You Will Build/Understand

- Full stateful components with persistent storage
- Debounced search interfaces and real-time event listeners
- Custom reusable hook libraries for data fetching and window resizing
- Performance-optimized component trees

## Estimated Difficulty

⭐⭐⭐⭐☆ (Intermediate to Advanced)

## Time to Complete

- Reading and understanding: 4-5 hours
- Practicing examples: 4-5 hours
- Completing exercises: 5-6 hours
- **Total**: 13-16 hours

## Key Concepts to Master

1. **State with `useState`**: Primitive, object, array states, and updater functions `setState(prev => ...)`
2. **Side Effects with `useEffect`**: Dependency array rules, initial mount, updates, and cleanup functions
3. **Global Tree State with `useContext`**: Providers, consumers, avoiding prop drilling
4. **DOM Access & Values with `useRef`**: Mutable ref containers, avoiding unnecessary re-renders
5. **Complex State with `useReducer`**: Dispatching actions to pure reducer functions
6. **Calculation Caching with `useMemo`**: Preventing expensive recalculations across renders
7. **Function Reference Stability with `useCallback`**: Passing stable callbacks to memoized children
8. **Custom Hooks**: Extracting and sharing stateful logic across multiple components

## Resources

- [React Hooks Official Guide](https://react.dev/reference/react/hooks)
- [React Beta Docs: Managing State](https://react.dev/learn/managing-state)
