---
title: "Figma Interface Basics"
---

## Interface Basics

If you're used to VS Code, the Figma interface is surprisingly similar:

- **Left Sidebar (Explorer)**: Manage Layers, Assets, and Pages.
  - **Layers**: The DOM tree of your design.
  - **Assets**: Reusable components (like your details components library).
- **Canvas (Editor)**: Where you build your UI.
  - Hold `Space` to pan around.
  - `Ctrl` + `Scroll` to zoom.
- **Right Sidebar (Properties)**: The CSS panel. Controls alignment, colors, and layout.

## Frames vs Groups

This is the most critical concept for developers.

### Groups (`Ctrl + G`)

- **Analogy**: A `div` with `display: contents` (sort of).
- **Behavior**: It just wraps the selection. It has no background, no padding, and bounds are determined *only* by children.
- **Use Case**: Quick selections or grouping vectors in an illustration. **Avoid using for UI layout.**

### Frames (`F`)

- **Analogy**: A `div` or `section`.
- **Behavior**: Has its own properties (background, clips content, border radius). Can be a parent for **[Auto Layout](/notes/auto-layout)**.
- **Use Case**: **Everything in UI**. Screens, buttons, cards, Navbars. Use Frames for almost everything.

> **Tip**: If you are making a button, draw a Frame, not a rectangle.

## Useful Shortcuts

| Action | Shortcut (Mac) | Shortcut (Win) |
| :--- | :--- | :--- |
| **Pick Color** | `Ctrl + C` | `I` |
| **Frame** | `F` | `F` |
| **Rectangle** | `R` | `R` |
| **Text** | `T` | `T` |
| **Auto Layout** | `Shift + A` | `Shift + A` |
| **Create Component** | `Opt + Cmd + K` | `Ctrl + Alt + K` |
| **Show/Hide UI** | `Cmd + \` | `Ctrl + \` |

## Related

- [Auto Layout (Flexbox)](./auto-layout)
- [Components & Variants](./components)
- [Wireframing Workflow](./wireframing)
