# 11 - React Fundamentals: Practical Challenges

These practical challenges mirror real-world frontend tasks. Build each component with clean JSX, prop validation, modular composition, and accessible markup.

---

## Challenge 1: Developer Portfolio Profile Card
Build a responsive profile card component for a software engineer:
- **Props**: `name`, `title`, `avatarUrl`, `bio`, `skills` (array), `socialLinks` (array of objects with platform & URL), `isAvailableForHire` (boolean).
- **Requirements**:
  - Show a "Hire Me" badge if `isAvailableForHire` is true.
  - Render skills as colored pill badges.
  - Render social icons as external links.

---

## Challenge 2: Interactive E-Commerce Product Card
Create a complete product showcase card:
- **Props**: `product` object containing `id`, `title`, `price`, `discountPercentage`, `rating`, `stock`, `thumbnail`, `onAddToCart` (callback).
- **Requirements**:
  - Calculate and display original price and discounted price.
  - Show an "Out of Stock" banner and disable the Add to Cart button if `stock === 0`.
  - Render star ratings dynamically.

---

## Challenge 3: Multi-Category Filterable Course Catalog
Build a course listing component:
- **Props**: `courses` array, `selectedCategory`, `onSelectCategory`, `onEnroll`.
- **Requirements**:
  - Category selector buttons (All, Frontend, Backend, Mobile, DevOps).
  - Filter courses based on active category.
  - Calculate total duration of filtered courses.
  - Handle empty state when no courses match.
