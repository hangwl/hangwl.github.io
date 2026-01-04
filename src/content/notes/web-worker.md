---
title: "Web Workers"
---

## Introduction

Web Workers are a browser API that allows JavaScript code to run in **background threads separate from the main execution thread** of a web application. This enables computationally intensive tasks to run without blocking the user interface, keeping the application responsive.

## Why Use Web Workers?

JavaScript is single-threaded by default, meaning all code execution, DOM manipulation, and UI rendering happen on the same thread. When a long-running computation executes, it blocks the main thread and causes the UI to freeze, resulting in a poor user experience.

Web Workers solve this problem by:

- **Preventing UI Blocking**: Heavy computations run in the background without freezing the interface
- **Parallel Processing**: Multiple workers can run simultaneously, leveraging multi-core processors
- **Improved Responsiveness**: The main thread remains free to handle user interactions and render updates
- **Separation of Concerns**: Complex logic can be isolated from UI code

## How Web Workers Work

Web Workers run in a separate global context from the main thread. They communicate with the main thread through a **message-passing system** using `postMessage()` and `onmessage` event handlers.

Key characteristics:
- **No DOM Access**: Workers cannot directly manipulate the DOM or access window objects
- **Limited APIs**: Workers have access to a subset of browser APIs (e.g., fetch, timers, WebSockets)
- **Message Passing**: Data is passed between threads by copying (structured cloning), not by sharing references
- **Independent Execution**: Workers run independently and don't block the main thread

## Example: Web Workers in Action

To see Web Workers in action, check out the [Thompson Sampling Demo](/lab/ts-demo), which uses a dedicated worker to run intensive simulation computations in the background. The demo showcases how Web Workers enable:

- **Smooth Animations**: Charts and UI updates remain fluid even during intensive calculations
- **High Iteration Rates**: Running hundreds of simulation steps per second without lag
- **Responsive Controls**: Adjusting parameters and interacting with the UI while simulation runs continuously
- **Complex Computations**: Beta sampling, auction calculations, and mean-reversion updates without blocking the main thread

The worker handles all simulation logic, state management, and calculations, while the main thread focuses on rendering and user interactions.
