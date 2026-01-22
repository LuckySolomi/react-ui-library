React Component Library (Test Assignment)
A small React UI component library built with TypeScript and Storybook as part of a front-end test assessment.

Tech Stack

- React
- TypeScript
- Storybook
- Framer Motion
- CSS Modules
- Vite

Installation
npm install
npm run storybook

Storybook will be available at http://localhost:6006

omponents Overview

1. Input Component
   Reusable input component supporting multiple types and features:
   text / number / password
   password visibility toggle
   clearable input
   States
   Default
   Password (hidden / visible)
   Clearable

Screenshots:

![Input default](./screenshots/input-default.png)
![Input password visible](./screenshots/input-password-visible.png)
![Input password hidden](./screenshots/input-password-hidden.png)
![Input number](./screenshots/input-number.png)
![Input clearable](./screenshots/input-clearable.png)

2. Toast Component
   Notification component with animations and auto-dismiss behavior.

Features
Appears in bottom-right corner
Auto close with configurable duration
Manual close option
Animated transitions

Screenshots:

![Toast success](./screenshots/toast-success.png)
![Toast error](./screenshots/toast-error.png)
![Toast info](./screenshots/toast-info.png)

3. Sidebar Menu Component
   Sliding sidebar menu with nested accordion navigation.

Features
Slides in from the right
Overlay click to close
Nested menu (accordion)
Supports multiple nesting levels

Screenshots:

![Sidebar nested](./screenshots/sidebar-nested.png)
