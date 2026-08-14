// 11 - React Fundamentals: 20+ Runnable Code Examples

import React from 'react';

// ==========================================
// 1. Basic Functional Component & JSX
// ==========================================
export function Welcome() {
  const greeting = "Hello, World!";
  const year = 2026;
  return (
    <div className="welcome-container">
      <h1>{greeting}</h1>
      <p>Welcome to modern React development in {year}.</p>
    </div>
  );
}

// ==========================================
// 2. Component with Props & Destructuring
// ==========================================
export function UserBadge({ name, role = "Student", score = 0 }) {
  return (
    <div className="badge">
      <span className="name">{name}</span>
      <span className="role">({role})</span>
      <span className="score">Score: {score} pts</span>
    </div>
  );
}

// ==========================================
// 3. Conditional Rendering (Ternary Operator)
// ==========================================
export function StatusIndicator({ isOnline, lastSeen }) {
  return (
    <div className="status">
      {isOnline ? (
        <span className="online">🟢 Active Now</span>
      ) : (
        <span className="offline">⚪ Offline (Last seen: {lastSeen})</span>
      )}
    </div>
  );
}

// ==========================================
// 4. Conditional Rendering (Logical &&)
// ==========================================
export function NotificationAlert({ count, urgent = false }) {
  return (
    <div className="alerts">
      <span>Inbox</span>
      {count > 0 && <span className="counter">{count} unread</span>}
      {urgent && <span className="warning">⚠️ High Priority</span>}
    </div>
  );
}

// ==========================================
// 5. Early Return Pattern
// ==========================================
export function UserProfile({ user, isLoading, error }) {
  if (isLoading) {
    return <div className="spinner">Loading user data...</div>;
  }
  if (error) {
    return <div className="error">Error: {error}</div>;
  }
  if (!user) {
    return <div className="empty">No profile found.</div>;
  }

  return (
    <div className="profile-card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

// ==========================================
// 6. Rendering Lists with Unique Keys
// ==========================================
export function BookList({ books }) {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id} className="book-item">
          <h4>{book.title}</h4>
          <p>Author: {book.author}</p>
          <span>Price: ${book.price.toFixed(2)}</span>
        </li>
      ))}
    </ul>
  );
}

// ==========================================
// 7. Synthetic Event Handling (Clicks)
// ==========================================
export function ActionButton({ label, onClickAction }) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(`Clicked action: ${label}`);
    if (onClickAction) onClickAction();
  };

  return (
    <button className="btn-primary" onClick={handleClick}>
      {label}
    </button>
  );
}

// ==========================================
// 8. Passing Arguments to Event Handlers
// ==========================================
export function ItemRemover({ items, onDeleteItem }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="item-row">
          <span>{item.name}</span>
          <button onClick={() => onDeleteItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

// ==========================================
// 9. Component Composition with Children Prop
// ==========================================
export function ModalLayout({ title, isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

// ==========================================
// 10. Form Handling & Preventing Default
// ==========================================
export function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.searchQuery.value;
    if (onSearch) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input name="searchQuery" type="text" placeholder="Search topics..." />
      <button type="submit">Search</button>
    </form>
  );
}
