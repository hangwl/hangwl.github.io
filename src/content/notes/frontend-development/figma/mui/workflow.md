---
title: "Designing with MUI Components"
---

# Design Workflow

When designing with the MUI kit, you stop thinking in "pixels" and start thinking in "props".

## Using Instances

1. Press `Shift + I` to open Assets.
2. Search for `Button`.
3. Drag it onto the canvas.

## Component Properties

In the Right Sidebar, you won't just see generic layout tools. You'll see specific **Component Properties**:

- **Variant**: `text`, `contained`, `outlined`.
- **Color**: `primary`, `secondary`, `error`.
- **Size**: `small`, `medium`, `large`.
- **State**: `enabled`, `hover`, `focus`.

## Mapping to Code

This is the superpower.

- **Design**: You select `Variant: Cameo`, `Size: Small`.
- **Code**: You write `<Button variant="cameo" size="small" />`.

> **Tip**: If you find yourself "detaching" an instance to change it, **STOP**. You probably need to change a property or use a "Slot" component instead. Detaching breaks the link to code reality.

## Related

- [Setup & Installation](./setup)
- [Developer Handoff](./dev-handoff)
