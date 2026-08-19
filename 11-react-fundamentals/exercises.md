# 11 - React Fundamentals: 30 Structured Exercises

---

## Part 1: Beginner Level (Exercises 1–10)

1. **Simple Headline**: Write a `MainHeader` component that renders an `<h1>` with "Mastering Modern React" and an `<h2>` with "Topic 11". Wrap them in a Fragment.
2. **Personal Greeting**: Create a component `UserGreeting` that accepts `firstName` and `lastName` props and renders "Welcome back, {firstName} {lastName}!".
3. **Formatted Price Badge**: Build a `CurrencyDisplay` component taking `amount` (number) and `currencyCode` (string). Output the formatted price (e.g. `$49.00`).
4. **Circular Avatar**: Build an `Avatar` component taking `src`, `alt`, and `size` ("sm" = 32px, "md" = 48px, "lg" = 64px) applying the appropriate CSS classes.
5. **Skill Pill Component**: Create `SkillBadge` accepting `name` and `isHighlighted` (boolean). If highlighted, apply a distinct background color.
6. **Boolean Active Indicator**: Build `OnlineStatus` taking `isOnline`. Render a green circle with "Active" if true, and a gray circle with "Away" if false.
7. **External Anchor Link**: Create a `ExternalLink` component taking `href`, `text`, and `icon`. Ensure it opens in a new tab safely with `rel="noopener noreferrer"`.
8. **Rating Star Counter**: Create `StarRating` accepting `score` (1–5). Render the exact number of filled star characters (★) and empty stars (☆).
9. **Simple Content Card**: Create a `BasicCard` component taking `title`, `category`, and `summary` props.
10. **Dismissable Alert UI**: Create `InfoBanner` taking `message` and `onDismiss` callback function attached to a close button.

---

## Part 2: Intermediate Level (Exercises 11–20)

11. **Conditional Auth Bar**: Create `AuthNavbar` that displays user profile info and a "Sign Out" button when `user` prop is provided, or "Sign In" and "Register" buttons when `user` is null.
12. **Invoice Itemized List**: Build an `InvoiceTable` component accepting an array of line item objects (`id`, `description`, `unitPrice`, `quantity`). Calculate subtotal, 10% tax, and final total.
13. **Text Truncator**: Create a `TruncatedParagraph` taking `text` and `limit`. If `text.length > limit`, display truncated text with "..." and a "Read More" link.
14. **Custom Button Variants**: Build a reusable `Button` supporting `variant` ("primary", "secondary", "danger", "ghost") and `size` ("sm", "md", "lg").
15. **FAQ Accordion Item**: Create an `AccordionPanel` component taking `question`, `answer`, `isOpen` boolean, and `onToggle` callback.
16. **Task Item with Checkbox**: Build a `TaskRow` displaying task title, tag badge, priority color, and a checkbox calling `onToggle(taskId)`.
17. **Tag Cloud Filter**: Create `TagCloud` taking an array of string tags and `activeTag`. Highlight the active tag and call `onSelectTag(tag)` when clicked.
18. **Generic Data Table**: Build a `DynamicTable` component that accepts `columns` (`[{ header, accessor }]`) and `data` (array of objects) rendering a semantic `<table>`.
19. **Smart Counter Badge**: Create a `CountBadge` that displays number counts up to 99, but displays "99+" when `count > 99`.
20. **Layout Template**: Build a `DashboardLayout` component accepting `sidebar`, `navbar`, and `children` props.

---

## Part 3: Advanced Level (Exercises 21–30)

21. **Filterable Product Grid**: Build a component that takes a collection of products and category filters, rendering only matching items with zero-state handling.
22. **Interactive Tabbed Panel**: Build a `TabController` accepting an array of `{ id, label, content }` and `activeTabId`, invoking `onTabChange` upon tab selection.
23. **Breadcrumb Navigation**: Create a `BreadcrumbTrail` component taking an array of navigation segments and rendering accessible chevron-separated breadcrumbs.
24. **Pagination Bar**: Build a `PaginationControl` component accepting `currentPage`, `totalPages`, and `onPageChange` with Next, Previous, and numbered buttons.
25. **Reorderable Item List**: Build a component rendering an array of steps with "Move Up" and "Move Down" buttons calling position exchange callbacks.
26. **Render Props Pattern**: Create a `ListFilter` component that takes an array, a filter predicate, and a `renderItem(item)` render prop function.
27. **Compound Card Architecture**: Implement a compound component system with `Card`, `Card.Header`, `Card.Body`, and `Card.Footer`.
28. **Schema Form Generator**: Build a component that accepts a JSON schema array of form fields (`{ name, label, type, required }`) and dynamically outputs the form.
29. **Matrix Grid Board**: Create a `GameBoard` component that renders an (N 	imes M) grid matrix using nested `.map()` calls with stable composite keys.
30. **Error Boundary Fallback**: Create an `ErrorFallbackCard` displaying error message, error code, reload button, and technical stack trace details.
