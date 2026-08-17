# Day 7: Events, Forms & Week 1 Capstone

## Cross-Browser SyntheticEvents

React wraps native DOM events in a `SyntheticEvent` instance for uniform behavior across all browsers.

```jsx
export function FilterSearchBar({ onFilterChange }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents browser page refresh
    const query = e.target.elements.searchInput.value;
    onFilterChange(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        name="searchInput"
        type="text"
        placeholder="Search courses..."
        className="px-3 py-2 border rounded-lg text-sm flex-1"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold">
        Search
      </button>
    </form>
  );
}
```
