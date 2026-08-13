# Day 3: Components, Props & Immutability

## Props are Pure Inputs

React components must behave like pure functions with respect to their props.

```jsx
// ✅ Pure Component
function ProductPrice({ amount, discountPercent = 0, currency = "$" }) {
  const finalPrice = amount * (1 - discountPercent / 100);
  return (
    <div className="price-tag">
      <span className="current">{currency}{finalPrice.toFixed(2)}</span>
      {discountPercent > 0 && (
        <span className="original line-through text-slate-400">
          {currency}{amount.toFixed(2)}
        </span>
      )}
    </div>
  );
}
```

### Golden Rule of Props:
Never write `props.amount = 100;`. Props belong to the caller and are immutable.
