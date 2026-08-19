# Day 4: Synthetic Events & Form Workflows

## Event Delegation Architecture

In React, event listeners are not attached to individual DOM nodes. Instead, React attaches a single listener to the root container node (`#root`) and dispatches synthetic events using event delegation.

### Passing Custom Arguments to Event Handlers
```jsx
export function UserActionList({ users, onDeleteUser, onPromoteUser }) {
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>
          <span>{u.name}</span>
          <button onClick={() => onPromoteUser(u.id, 'Admin')}>Promote</button>
          <button onClick={() => onDeleteUser(u.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```
