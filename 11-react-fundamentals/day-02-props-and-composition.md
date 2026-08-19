# Day 2: Props & Component Composition

## The Power of `props.children`

Component composition allows you to build generic, reusable shells that wrap arbitrary content.

```jsx
export function AlertBox({ type = "info", title, children }) {
  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    warning: "bg-amber-50 border-amber-200 text-amber-800",
    error: "bg-red-50 border-red-200 text-red-800",
  };

  return (
    <div className={`p-4 border rounded-xl ${styles[type] || styles.info}`}>
      {title && <h4 className="font-bold text-sm mb-1">{title}</h4>}
      <div className="text-xs leading-relaxed">{children}</div>
    </div>
  );
}
```

### Usage:
```jsx
<AlertBox type="warning" title="System Maintenance">
  <p>The database will be offline from <strong>02:00 UTC</strong> to <strong>04:00 UTC</strong>.</p>
  <button className="mt-2 text-xs underline">View details</button>
</AlertBox>
```
