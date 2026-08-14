# Day 4: Component Composition & children

## Inversion of Control with Container Patterns

Instead of passing dozens of configuration props, use `props.children` to let the parent control the content:

```jsx
export function DialogCard({ title, icon = "ℹ️", onClose, children, actions }) {
  return (
    <div className="dialog-backdrop fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="dialog-box bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>{icon}</span>
            <h3 className="font-bold text-slate-900">{title}</h3>
          </div>
          {onClose && <button onClick={onClose} className="text-slate-400 hover:text-slate-600">✕</button>}
        </div>
        <div className="p-4">{children}</div>
        {actions && <div className="p-3 bg-slate-50 border-t flex justify-end gap-2">{actions}</div>}
      </div>
    </div>
  );
}
```
