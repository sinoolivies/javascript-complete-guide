// 11 - React Fundamentals: 25+ Comprehensive Code Examples

import React from 'react';

// ============================================================================
// 1. Basic Functional Component & Expression Interpolation
// ============================================================================
export function WelcomeBanner() {
  const applicationName = "JavaScript Complete Guide";
  const releaseYear = 2026;
  const user = { name: "Alex", role: "Developer" };

  return (
    <header className="banner p-4 bg-slate-100 rounded-lg">
      <h1 className="text-xl font-bold text-slate-900">Welcome to {applicationName}!</h1>
      <p className="text-sm text-slate-600">
        Logged in as: <strong>{user.name}</strong> ({user.role}) • Edition: {releaseYear}
      </p>
    </header>
  );
}

// ============================================================================
// 2. Props with Destructuring, Type Flexibility & Defaults
// ============================================================================
export function UserProfileBadge({
  username,
  email,
  role = "Student",
  reputation = 100,
  isVerified = false,
}) {
  return (
    <div className="flex items-center gap-3 p-3 border rounded-xl shadow-xs bg-white">
      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
        {username.charAt(0).toUpperCase()}
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <h4 className="font-semibold text-slate-800">{username}</h4>
          {isVerified && <span className="text-blue-600 text-xs" title="Verified User">✓</span>}
        </div>
        <p className="text-xs text-slate-500">{email} • {role}</p>
        <span className="text-[11px] text-emerald-600 font-medium">{reputation} Rep Points</span>
      </div>
    </div>
  );
}

// ============================================================================
// 3. Conditional Rendering: Ternary Operator
// ============================================================================
export function ServerStatus({ isOnline, latencyMs, lastChecked }) {
  return (
    <div className="p-3 rounded-lg border">
      <div className="flex items-center justify-between">
        <span className="font-medium text-sm">Server Cluster 01:</span>
        {isOnline ? (
          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-xs rounded-full font-bold">
            🟢 Online ({latencyMs}ms)
          </span>
        ) : (
          <span className="px-2 py-0.5 bg-red-100 text-red-800 text-xs rounded-full font-bold">
            🔴 Offline (Checked: {lastChecked})
          </span>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// 4. Conditional Rendering: Safe Short-Circuit (&&)
// ============================================================================
export function NotificationAlertBar({ notifications = [], isMaintenanceScheduled }) {
  const count = notifications.length;

  return (
    <div className="space-y-2">
      {/* Safe boolean check: count > 0 */}
      {count > 0 && (
        <div className="p-2 bg-blue-50 text-blue-800 text-xs rounded-md">
          📬 You have {count} unread {count === 1 ? 'notification' : 'notifications'}.
        </div>
      )}

      {isMaintenanceScheduled && (
        <div className="p-2 bg-amber-50 text-amber-800 text-xs rounded-md font-semibold">
          ⚠️ Scheduled maintenance tonight at 02:00 UTC.
        </div>
      )}
    </div>
  );
}

// ============================================================================
// 5. Early Return Pattern for Loading & Error States
// ============================================================================
export function ProductViewer({ product, isLoading, error }) {
  if (isLoading) {
    return <div className="p-6 text-center text-slate-500 animate-pulse">Loading product details...</div>;
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
        <strong>Error loading product:</strong> {error}
      </div>
    );
  }

  if (!product) {
    return <div className="p-4 text-slate-400 text-sm">No product data available.</div>;
  }

  return (
    <div className="p-4 border rounded-xl bg-white shadow-sm">
      <h3 className="text-lg font-bold text-slate-900">{product.title}</h3>
      <p className="text-xs text-slate-500 mt-1">{product.description}</p>
      <div className="mt-3 font-extrabold text-blue-600">${product.price.toFixed(2)}</div>
    </div>
  );
}

// ============================================================================
// 6. Dynamic List Rendering with Unique Keys
// ============================================================================
export function FrameworkCatalog({ frameworks }) {
  return (
    <div className="space-y-3">
      <h3 className="font-bold text-slate-900">Modern JavaScript Ecosystem</h3>
      <ul className="divide-y divide-slate-100 border rounded-xl overflow-hidden">
        {frameworks.map((fw) => (
          <li key={fw.id} className="p-3 flex items-center justify-between hover:bg-slate-50">
            <div>
              <span className="font-semibold text-sm text-slate-800">{fw.name}</span>
              <p className="text-xs text-slate-500">{fw.maintainer} • Created {fw.year}</p>
            </div>
            <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-mono">
              ★ {fw.stars.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============================================================================
// 7. Synthetic Event Handling: Clicks and Mouse Events
// ============================================================================
export function InteractiveButton({ label, onClick, variant = 'primary' }) {
  const handleClick = (event) => {
    console.log('Event Type:', event.type);
    console.log('Target Element:', event.target);
    if (onClick) {
      onClick(event);
    }
  };

  const variantClass = variant === 'primary' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-800';

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition hover:opacity-90 ${variantClass}`}
    >
      {label}
    </button>
  );
}

// ============================================================================
// 8. Passing Custom Arguments to Handlers
// ============================================================================
export function ItemActionList({ items, onSelectItem, onRemoveItem }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between p-2 border rounded-lg">
          <span className="text-sm font-medium text-slate-800">{item.name}</span>
          <div className="flex gap-2">
            <button
              onClick={() => onSelectItem(item.id, item.name)}
              className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded hover:bg-blue-100"
            >
              Select
            </button>
            <button
              onClick={() => onRemoveItem(item.id)}
              className="px-2 py-1 bg-red-50 text-red-600 text-xs rounded hover:bg-red-100"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// 9. Component Composition with Container & `props.children`
// ============================================================================
export function ModalShell({ isOpen, title, onClose, children, footerAction }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
        <div className="px-6 py-4 border-b flex items-center justify-between">
          <h3 className="font-bold text-slate-900">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">✕</button>
        </div>
        <div className="p-6">{children}</div>
        {footerAction && (
          <div className="px-6 py-3 bg-slate-50 border-t flex justify-end gap-2">
            {footerAction}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// 10. Form Handling & Preventing Default Browser Reloads
// ============================================================================
export function QuickSearchForm({ onSearchSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents full page refresh
    const queryInput = e.target.elements.searchBox.value;
    if (queryInput.trim()) {
      onSearchSubmit(queryInput.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        name="searchBox"
        type="text"
        placeholder="Type search terms..."
        className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold">
        Search
      </button>
    </form>
  );
}
