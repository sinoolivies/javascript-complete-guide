# Day 3: Conditional Rendering & Lists Deep Dive

## Preventing the "Zero Bug" in React

When checking array lengths, never write:
```jsx
// ❌ WRONG: If items is [], items.length is 0.
// React evaluates (0 && <ItemList />) to 0 and prints "0" on the screen!
<div>
  {items.length && <ItemList items={items} />}
</div>
```

### Safe Alternatives:
```jsx
// ✅ Explicit boolean comparison:
<div>
  {items.length > 0 && <ItemList items={items} />}
</div>

// ✅ Or ternary operator:
<div>
  {items.length > 0 ? <ItemList items={items} /> : <EmptyState />}
</div>
```
