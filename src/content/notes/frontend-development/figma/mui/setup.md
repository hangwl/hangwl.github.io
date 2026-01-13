---
title: "MUI Setup & Sync"
---

# Setup & Installation

To get the full power of MUI in Figma, you need the kit and the Sync plugin.

## 1. Get the Kit

1. Go to **Figma Community**.
2. Search for **"Material UI for Figma"** (look for the one by MUI).
3. Click "Open in Figma" (or "Buy" if getting the full version).
4. Publish the file as a **Library** (Assets > Library icon > Publish). This makes components available in your other design files.

## 2. Install "Material UI Sync" Plugin

This plugin generates a theme file from your Figma design decisions.

1. In Figma, press `Shift + I` (Resources).
2. Search **"Material UI Sync"**.
3. Run the plugin.

## 3. Connecting Logic

The plugin works by reading **Local Variables** in Figma.

- If you change the `primary.main` color variable in Figma, the plugin detects this.
- It allows you to download a generated `theme.js` or `theme.ts` file.

## Related

- [MUI Introduction](./intro)
- [Design Workflow](./workflow)
