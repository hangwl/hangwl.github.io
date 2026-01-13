---
title: "MUI for Figma: Introduction"
---

# Material UI for Figma

Leveraging Material UI (MUI) for Figma is a huge efficiency booster for teams that use MUI in their codebase.

The following [Design Kit](https://mui.com/material-ui/design-resources/material-ui-for-figma/) includes:

- Figma components with the same design as Material UI
- Additional components and features not covered by Material Design
- Shared terminology from the React library for props, variables, design tokens, and other values

## Official Kit vs Community

### Official "Material UI for Figma" Kit

- **Pros**: Exact 1:1 match with MUI v5/v6 (and visually compatible with v7). Includes all states (hover, focus, disabled) and props.
- **Cons**: Paid product (Store release).
- **Features**:
  - Auto Layout enabled.
  - Variables for theming (Colors, Typography, Radius).
  - Slots for advanced customization.

> **Note on Versioning**: You might see MUI code libraries at v7, while the Figma kit says v5/v6. Don't worry. The *visuals* (Material Design 2 or 3) are stable. The major version bumps in code often refer to architectural changes (like React Server Components) that don't affect how a button *looks* in Figma.

### Community Kits

- **Pros**: Free.
- **Cons**: Often outdated or incomplete.
- **Recommendation**: For learning, a high-rated Community kit is fine. For production, the official kit pays for itself by preventing "design drift" (where design specs simply don't exist in the code library).

## Why use it?

1. **Speed**: Drag and drop a "Text Field" instead of drawing a rectangle + text + label.
2. **Accuracy**: Developers know exactly which component to build (`<TextField variant="outlined" />`).
3. **Theming**: You can sync Figma tokens to your code theme.

## Related

- [Setup & Installation](./setup)
- [Design Workflow](./workflow)
- [Developer Handoff](./dev-handoff)
