# React Hooks: Best Practices & Guidelines

## 1. State Colocation
- Keep state as close to where it is needed as possible. Do not put state into global context unless multiple unrelated branches of the component tree genuinely need it.

## 2. Functional Updates
- Always use the updater syntax `setCount(c => c + 1)` whenever the new state relies on the prior state value.

## 3. Dependency Array Honesty
- Always declare all variables, props, and functions referenced inside an effect in the dependency array. If an effect uses a function, either define it inside the effect or wrap it in `useCallback`.

## 4. Custom Hook Abstractions
- Extract repeated stateful logic into custom hooks whose names begin with `use` (e.g. `useWindowSize`, `useLocalStorage`).
