# Day 6: Dynamic Lists & Key Reconciliation

## The Mechanics of Keys in React Reconciliation

When React renders a list of elements:
```jsx
<ul>
  {items.map((item) => (
    <li key={item.id}>{item.text}</li>
  ))}
</ul>
```

React creates an internal hashmap of keys: `{ "item-1": VNode, "item-2": VNode }`.

### What Happens When You Insert an Item at the Top?
- **With Unique ID Keys**: React sees `item-new` was added, leaves existing DOM nodes untouched, and inserts 1 new DOM node at the top.
- **With Index Keys (`key={index}`)**: React thinks item 0 changed into the new item, item 1 changed into item 0, and item 2 changed into item 1, forcing **every single item** in the DOM to mutate and lose input focus or animation state.
