# 11 - React Fundamentals: Practical Real-World Challenges

---

## Challenge 1: Developer Portfolio Card
Build a responsive, modern developer profile card component.
- **Props**:
  - `name` (string)
  - `title` (string)
  - `bio` (string)
  - `avatarUrl` (string)
  - `skills` (array of strings)
  - `socialLinks` (array of `{ platform, url, icon }`)
  - `isAvailableForHire` (boolean)
- **Features**:
  - Render an "Available for Hire" green badge when `isAvailableForHire` is true.
  - Render skills as styled pill badges.
  - Render social links opening in a new tab safely.

---

## Challenge 2: Dynamic E-Commerce Product Card
Create a complete product display card with calculations.
- **Props**: `product` object containing `id`, `title`, `price`, `discountPercent`, `rating`, `stock`, `image`, `onAddToCart`.
- **Features**:
  - Display original price with strikethrough if `discountPercent > 0` alongside computed discounted price.
  - Render star ratings (★/☆).
  - Disable Add to Cart button with an "Out of Stock" banner when `stock === 0`.

---

## Challenge 3: Multi-Category Filterable Course Catalog
Build a course listing directory with category filtering.
- **Props**: `courses` array, `selectedCategory`, `onCategorySelect`, `onEnroll`.
- **Features**:
  - Render category buttons (All, Frontend, Backend, Mobile, Cloud).
  - Filter courses dynamically.
  - Calculate total hours and course count for the active category.
  - Display a clean empty-state card if no courses match.
