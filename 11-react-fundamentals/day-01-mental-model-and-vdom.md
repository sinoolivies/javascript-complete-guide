# Day 1: The React Mental Model & Virtual DOM

## The Core Paradigm Shift

In traditional web development:
```
Event Occurs ──► Find DOM Element ──► Manually Modify Element
```

In React:
```
Event Occurs ──► Update State ──► React Automatically Re-renders UI = f(state)
```

### Why the Virtual DOM Exists
The browser DOM is represented as a C++ object tree inside the browser engine (Blink, WebKit, Gecko). Direct modifications trigger:
1. **Recalculate Style**: Calculating CSS rules for matching elements.
2. **Reflow (Layout)**: Computing coordinates and geometry of elements.
3. **Repaint**: Rasterizing pixels to the screen.
4. **Compositing**: Stacking GPU layers.

React's Virtual DOM performs the comparison in pure JavaScript memory in microseconds, computing the minimal set of changes and applying them in a single batched repaint.
