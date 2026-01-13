---
title: "MUI Developer Handoff"
---

How to move from Figma to your codebase (`src/theme/`).

## 1. Generating the Theme

1. Open your Figma library file.
2. Run **Material UI Sync** plugin.
3. Select **"Generate Theme"**.
4. Copy the output or download `theme.ts`.

## 2. Using Quest (Optional)

For entire screens:

1. Use the **Quest** plugin.
2. Select your Frame.
3. Export to React code.
   - *Note*: This is often overkill for simple changes, but great for initial page scaffolding.

## 3. Manual Inspection (Dev Mode)

1. Select a component (e.g., a Card).
2. Switch to **Dev Mode** (`Shift + D`).
3. Look at the **Props** section.
   - It explicitly lists: `elevation: 1`, `variant: outlined`.
   - This is much safer than guessing `box-shadow` values manually.

## Related

- [MUI Introduction](./intro)
- [Design Workflow](./workflow)
