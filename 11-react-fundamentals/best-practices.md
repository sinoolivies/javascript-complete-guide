# React Fundamentals: Best Practices & Guidelines

## 1. Component Design & Composition

1. **Single Responsibility Principle**: Each component should do one job well. If a component exceeds ~150 lines or handles multiple unrelated UI blocks, extract subcomponents.
2. **Component Purity**: Components should be pure with respect to their inputs. Do not mutate variables declared outside the component during rendering.
3. **Use Descriptive Names**: PascalCase for component files and names (`ProductCard.jsx`, `NavigationMenu.jsx`).

---

## 2. Props Management

1. **Destructure in Function Signature**: Always destructure props with sensible defaults for immediate clarity.
2. **Never Mutate Props**: Props are read-only. Never assign values to `props.xyz`.
3. **Use `props.children` for Generic Wrappers**: Favor composition over prop configuration when building layouts, modals, and cards.

---

## 3. List Rendering & Keys

1. **Use Stable Unique IDs**: Always use database IDs (`item.id`) or unique identifiers as keys.
2. **Never Use Array Index for Dynamic Lists**: Using `key={index}` creates rendering bugs when items are reordered, deleted, or sorted.
