# 11 - React Fundamentals: Exercises

Practice your understanding of JSX, components, props, conditional rendering, lists, and event handling.

---

## Part 1: Beginner Level (Exercises 1–10)

1. **Hello React Component**: Create a component `Greeting` that renders an `<h1>` containing "Hello, React!" wrapped in a `<section>`.
2. **Props Greeting**: Modify `Greeting` to accept a `name` prop and render "Hello, {name}!". Provide a default of "Guest".
3. **Price Tag**: Create a `PriceTag` component that receives an amount and currency. Render it formatted (e.g. "$29.99").
4. **User Avatar**: Create a component that receives an `imageUrl` and `altText` and renders a round `<img />`.
5. **Skill Pill**: Create a `SkillPill` component that accepts `skill` (string) and `level` ("beginner", "intermediate", "expert"). Apply a CSS class based on the level.
6. **Active Status**: Create a `StatusDot` that renders a green dot if `isActive` is true and a grey dot if false.
7. **Social Link**: Create a `SocialLink` component that takes `href`, `icon`, and `label` and renders an accessible link opening in a new tab.
8. **Rating Stars**: Create a component `RatingStars` that takes a number `rating` (1-5) and renders that many star characters (★).
9. **Simple Card**: Create a `Card` component that accepts `title` and `description` and renders them inside a border container.
10. **Notification Box**: Create an `AlertBox` that takes `type` ("info", "success", "error") and `message`, rendering styled alerts.

---

## Part 2: Intermediate Level (Exercises 11–20)

11. **Conditional Dashboard**: Create a `DashboardHeader` that renders user details if `user` prop exists, or a "Please sign in" button if null.
12. **Shopping Cart List**: Create a `CartList` that accepts an array of item objects (`id`, `name`, `price`, `quantity`) and renders them in a list with total sum calculated.
13. **Article Summary**: Create a component that accepts `content` string and `maxLength`. If the text exceeds `maxLength`, truncate it and append "...".
14. **Custom Button with Variants**: Create a flexible `Button` component supporting `variant` ("primary", "secondary", "danger") and `size` ("sm", "md", "lg").
15. **Accordion Item**: Create an `AccordionItem` component that accepts `title`, `content`, and `isOpen` boolean prop.
16. **Task Item with Strikethrough**: Create a `TaskItem` that displays task title, category, and applies a strike-through style if `completed` is true.
17. **Tag Cloud**: Create a `TagCloud` component that receives an array of string tags and renders each tag with a click handler returning the tag clicked.
18. **Table Generator**: Create a `DataTable` component that accepts `columns` (array of header titles) and `data` (array of row objects) and dynamically renders a `<table>`.
19. **Badge Counter**: Create a `BadgeCounter` that renders a number, but if count is over 99, displays "99+".
20. **Layout Shell**: Create a `PageLayout` component accepting `header`, `sidebar`, and `children` for the main content.

---

## Part 3: Advanced Level (Exercises 21–30)

21. **Filterable Product Grid**: Create a `ProductGrid` component that takes a products array and an active category filter, rendering only matching items.
22. **Interactive Tab Bar**: Create a `Tabs` component that receives a list of tab definitions (`id`, `label`) and an `activeTabId`, calling `onTabChange(id)` on click.
23. **Breadcrumb Navigation**: Create a `Breadcrumbs` component that takes an array of path items (`label`, `href`) and renders chevron-separated links.
24. **Pagination Controls**: Create a `Pagination` component taking `currentPage`, `totalPages`, and `onPageChange`. Include Prev, Next, and page numbers.
25. **Keyed Reorderable List**: Build a component that renders a list of items and includes Up/Down buttons to trigger item reordering.
26. **Render Props Card**: Create a `DataFetcherPlaceholder` that takes a `renderData` function prop and passes processed statistics to it.
27. **Compound Component Modal**: Create a `Modal` system with `Modal.Header`, `Modal.Body`, and `Modal.Footer` subcomponents.
28. **Dynamic Form Builder**: Build a component that accepts a JSON schema of form fields and generates corresponding input elements.
29. **Matrix Grid Renderer**: Create a component that renders a dynamic 2D grid matrix (e.g. Tic-Tac-Toe board or seat selector) using nested `map()`.
30. **Error Fallback UI**: Create an `ErrorFallback` UI component displaying error code, message, reload button, and technical stack trace toggle.
