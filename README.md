# milesuicomponents

An npm package of Miles Innovation & Technology UI components, so every Miles project shares one centrally maintained set of styles.

Written in TypeScript, shipped as compiled ES modules with type definitions and a single stylesheet. Works with React 18 and 19.

---

## Table of contents

1. [Installation and usage](#installation-and-usage)
2. [Theming and dark mode](#theming-and-dark-mode)
3. [Color palette and design tokens](#color-palette-and-design-tokens)
4. [Components](#components)
5. [Overriding styles](#overriding-styles)
6. [Components to be built (roadmap)](#components-to-be-built-roadmap)
7. [Upgrading from 1.x](#upgrading-from-1x)
8. [Contributing](#contributing)

---

## Installation and usage

```bash
npm install milesuicomponents
```

Import the stylesheet **once**, in your app's root (for Next.js, `app/layout.jsx`; for Vite, `main.jsx`):

```jsx
import "milesuicomponents/styles.css";
```

Then use components anywhere:

```jsx
import { Button } from "milesuicomponents";

<Button onClick={login}>Login</Button>;
```

- Every component accepts `className`, `style`, `ref`, and all native HTML props of its element (`onClick`, `id`, `aria-*`, `type`, `disabled`, …).
- Prop types are included, so your editor autocompletes them.
- Components have no client-side state, so they work in React Server Components.

---

## Theming and dark mode

Set `data-theme="dark"` on a parent element (usually `<html>`) to switch every component to the dark palette:

```jsx
<html data-theme="dark">
```

To re-theme, override tokens in your own CSS. Your styles always win over the library's (see [Overriding styles](#overriding-styles)):

```css
:root {
  --miles-primary-color: #0b3d2e;
}
```

---

## Color palette and design tokens

All tokens are CSS custom properties prefixed with `--miles-`, defined in `src/styles/styles.css`.

### Core palette

| Token                     | Light (default) | Dark (`[data-theme="dark"]`) | Use for                         |
| ------------------------- | --------------- | ---------------------------- | ------------------------------- |
| `--miles-primary-color`   | `#213547`       | `#f8f5f5`                    | Main text, borders, brand color |
| `--miles-secondary-color` | `#4b657c`       | `#cfcfcf`                    | Dividers, muted text, focus     |
| `--miles-tertiary-color`  | `#f8f5f5`       | `#213547`                    | Soft backgrounds                |
| `--miles-light-color`     | `#ffffff`       | `#000000`                    | Surfaces / input backgrounds    |
| `--miles-dark-color`      | `#000000`       | `#ffffff`                    | High-contrast text              |
| `--miles-accent-color`    | `#4f46e5`       | `#818cf8`                    | Focus rings, floating labels    |
| `--miles-hover-bg`        | `#f2f4f5`       | `rgba(75, 101, 124, 0.8)`    | Hover state backgrounds         |

### Status colors

| Token                   | Light     | Dark      | Use for                 |
| ----------------------- | --------- | --------- | ----------------------- |
| `--miles-success-color` | `#016b01` | `#4ade80` | Success toast, positive |
| `--miles-error-color`   | `#ff0000` | `#f87171` | Failed toast, errors    |

### Component tokens

| Token                       | Light                        | Dark                          |
| --------------------------- | ---------------------------- | ----------------------------- |
| `--miles-btn-bg`            | `var(--miles-light-color)`   | `var(--miles-tertiary-color)` |
| `--miles-btn-color`         | `var(--miles-primary-color)` | `var(--miles-dark-color)`     |
| `--miles-btn-border`        | `var(--miles-primary-color)` | `var(--miles-dark-color)`     |
| `--miles-placeholder-color` | `#6b7280`                    | `#9ca3af`                     |
| `--miles-loader-track`      | `#d8d6d6`                    | `#4b657c`                     |
| `--miles-loader-dot`        | `#ff3d00`                    | `#ff3d00`                     |
| `--miles-toast-bg`          | `#f5f5f5`                    | `#1b2a38`                     |
| `--miles-toast-border`      | `#cecccc`                    | `#4b657c`                     |
| `--miles-card-bg`           | `#cecccc`                    | `#2c3e50`                     |

### Typography and shape

| Token                      | Value                                             |
| -------------------------- | ------------------------------------------------- |
| `--miles-font-family`      | `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif` |
| `--miles-font-size-small`  | `12px`                                            |
| `--miles-font-size-medium` | `14px`                                            |
| `--miles-font-size-large`  | `16px`                                            |
| `--miles-border-radius`    | `4px`                                             |
| `--miles-box-shadow`       | `0 2px 4px rgba(0, 0, 0, 0.1)`                    |

---

## Components

Only generic, app-agnostic components belong in this package. Project-specific UI (assignment cards, course cards, auth pages, sidebars, etc.) should be built in the consuming project, composed from these primitives.

| Component           | Element  | CSS class                                        | Extra props / defaults                                                      |
| ------------------- | -------- | ------------------------------------------------ | --------------------------------------------------------------------------- |
| `Button`            | `button` | `.miles-button`                                  |                                                                             |
| `InputFieldWrapper` | `div`    | `.miles-input-field`                             |                                                                             |
| `InputFieldIcon`    | `i`      | `.miles-input-field-icon`                        | `aria-hidden="true"` by default                                             |
| `Loader`            | `span`   | `.miles-loader` (inside `.miles-loader-wrapper`) | `wrapperClassName`, `wrapperStyle`; `role="status"`, `aria-label="Loading"` |
| `ResponseStatus`    | `div`    | `.miles-response-status`                         | `role="status"` by default; variants `success`, `failed`                    |
| `MilesCard`         | `div`    | `.miles-card`                                    |                                                                             |

Every component also exports its props type, e.g. `import type { ButtonProps } from "milesuicomponents"`.

### Input with icon and password toggle

```jsx
<InputFieldWrapper>
  <InputFieldIcon className="fa fa-lock" />
  <input type="password" placeholder="Password" aria-label="Password" />
  <button type="button" className="miles-input-field-toggle">
    Show
  </button>
</InputFieldWrapper>
```

### Loader

`className`/`style` go on the spinner; `wrapperClassName`/`wrapperStyle` go on the centering wrapper.

```jsx
<Loader wrapperStyle={{ height: "200px" }} />
```

### Toast

```jsx
<ResponseStatus className="success">Saved!</ResponseStatus>
<ResponseStatus className="failed" role="alert">Something went wrong</ResponseStatus>
```

---

## Overriding styles

All library CSS lives in a cascade layer called `miles`. Any style in your app that isn't in a layer beats it automatically, regardless of selector specificity, so you never need `!important`:

```css
.wide-button {
  width: 100%;
}
```

```jsx
<Button className="wide-button">Continue</Button>
```

---

## Components to be built (roadmap)

Pick one, open an issue or draft PR to claim it, and follow [CONTRIBUTING.md](CONTRIBUTING.md#how-to-build-a-component).

### Forms

| Component        | Element                | Notes                                                      |
| ---------------- | ---------------------- | ---------------------------------------------------------- |
| `Input`          | `input`                | Styled text input; pairs with `InputFieldWrapper`          |
| `TextArea`       | `textarea`             | Styles already exist under `.miles-input-field textarea`   |
| `Select`         | `select`               | Native select with token-based styling                     |
| `Checkbox`       | `input[type=checkbox]` | With a `label` wrapper                                     |
| `RadioGroup`     | `fieldset` + radios    |                                                            |
| `Toggle`         | `button[role=switch]`  | On/off switch                                              |
| `PasswordToggle` | `button`               | Show/hide button; `.miles-input-field-toggle` styles exist |
| `FormLabel`      | `label`                |                                                            |
| `FormError`      | `p`                    | Inline validation message (`role="alert"`)                 |

### Cards and content

| Component     | Element   | Notes                                            |
| ------------- | --------- | ------------------------------------------------ |
| `CardHeader`  | `div`     | Title row for `MilesCard`                        |
| `CardBody`    | `div`     | Content area for `MilesCard`                     |
| `Badge`/`Tag` | `span`    | Status label with success/warning/error variants |
| `Avatar`      | `img`     | Round user image with initials fallback          |
| `EmptyState`  | `div`     | Icon + message for empty lists                   |
| `Divider`     | `hr`      |                                                  |
| `Heading`     | `h1`–`h6` | `level` prop picks the element                   |

### Navigation

| Component     | Element             | Notes                                   |
| ------------- | ------------------- | --------------------------------------- |
| `Navbar`      | `nav`               | Top bar                                 |
| `Sidebar`     | `nav`               | Vertical nav container                  |
| `NavItem`     | `li` / `a`          | Icon + text item for `Sidebar`/`Navbar` |
| `Breadcrumbs` | `nav` + `ol`        |                                         |
| `Tabs`        | `div[role=tablist]` | Needs `"use client"` (keyboard state)   |
| `Pagination`  | `nav`               |                                         |
| `LinkButton`  | `a`                 | Link styled like `Button`               |

### Feedback

| Component     | Element           | Notes                                     |
| ------------- | ----------------- | ----------------------------------------- |
| `Alert`       | `div[role=alert]` | Static info/success/warning/error banners |
| `Modal`       | `dialog`          | Use the native `<dialog>` element         |
| `Tooltip`     | `span`            |                                           |
| `ProgressBar` | `progress`        | Course/assignment completion              |
| `Skeleton`    | `div`             | Loading placeholder                       |

### Layout and data

| Component   | Element   | Notes                                     |
| ----------- | --------- | ----------------------------------------- |
| `Container` | `div`     | Max-width page wrapper                    |
| `Grid`      | `div`     | Responsive card grid                      |
| `Form`      | `form`    | Vertical form layout with consistent gaps |
| `Table`     | `table`   | Grades, submissions                       |
| `Accordion` | `details` | Use native `<details>`/`<summary>`        |

---

## Upgrading from 1.x

2.0.0 is a breaking release. See [CHANGELOG.md](CHANGELOG.md) once it's published; in short:

1. **Import the stylesheet** once in your app root: `import "milesuicomponents/styles.css";`.
2. **Rename classes and tokens** in any custom CSS: everything is now prefixed with `miles-`.

   | 1.x                            | 2.x                                       |
   | ------------------------------ | ----------------------------------------- |
   | `.button-ui`                   | `.miles-button`                           |
   | `.input-field-wrapper`         | `.miles-input-field`                      |
   | `.icon`                        | `.miles-input-field-icon`                 |
   | `.show`                        | `.miles-input-field-toggle`               |
   | `.loader-wrapper` / `.loader`  | `.miles-loader-wrapper` / `.miles-loader` |
   | `.response-status`             | `.miles-response-status`                  |
   | `.milescard`                   | `.miles-card`                             |
   | `--primary-color` (all tokens) | `--miles-primary-color`                   |

3. **Toast variants** go on the toast itself: `<ResponseStatus className="success">`.
4. **Removed components** (`AssignmentCard`, `AssignmentStatus`, `SubjectHeading`, `SubjectTitle`, `CourseCard`, `CourseCardChild`, `CourseTitle`, `AuthBackground`, `AuthBackGroundWrapper`, `AuthBackgroundWrapperDiv`, `AuthWelcomeText`, `LoginForm`, `Attribution`, `MenuBarUl`, `IconsWithText`): copy them into your project from the 1.x package (`npm pack milesuicomponents@1.6.6`, then look in `package/src/`). Stay on `milesuicomponents@1` until you have.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup, how to build a component, coding standards, and the release process.

---

@migt-org [Github]
