# Day 5: Conditional Rendering & Edge Cases

## The Top 3 Patterns for Clean Conditional UI

### Pattern 1: Guard Clauses (Early Return)
```jsx
function UserDashboard({ user, isLoading, error }) {
  if (isLoading) return <Spinner />;
  if (error) return <Alert variant="error" message={error} />;
  if (!user) return <SignInPrompt />;
  return <MainDashboardContent user={user} />;
}
```

### Pattern 2: Binary Choice (Ternary)
```jsx
<button className={isSubscribed ? "btn-active" : "btn-inactive"}>
  {isSubscribed ? "Subscribed ✓" : "Subscribe"}
</button>
```

### Pattern 3: Optional Display (Safe &&)
```jsx
// Always ensure the left side is a boolean!
<div>{unreadCount > 0 && <span className="badge">{unreadCount}</span>}</div>
```
