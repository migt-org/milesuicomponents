---
"milesuicomponents": major
---

Rebuild the package as compiled TypeScript with a single stylesheet.

**Breaking changes**

- Import the stylesheet once in your app root: `import "milesuicomponents/styles.css";`. Components no longer import CSS themselves.
- Removed app-specific components: `AssignmentCard`, `AssignmentStatus`, `SubjectHeading`, `SubjectTitle`, `CourseCard`, `CourseCardChild`, `CourseTitle`, `AuthBackground`, `AuthBackGroundWrapper`, `AuthBackgroundWrapperDiv`, `AuthWelcomeText`, `LoginForm`, `Attribution`, `MenuBarUl`, `IconsWithText`.
- All CSS classes, tokens, and animations now use a `miles-` prefix (for example `.button-ui` → `.miles-button`, `--primary-color` → `--miles-primary-color`). The password toggle class is now `.miles-input-field-toggle` (`.show` was removed).
- Toast variants apply to the toast itself: `<ResponseStatus className="success">`.
- `react` and `react-dom` (18 or 19) are now peer dependencies.

**Added**

- TypeScript types for every component and its props, and `ref` forwarding.
- Styles live in the `miles` cascade layer, so any app style overrides them without `!important`.
- Dark-mode values for every color token.
- `Loader` accepts `wrapperClassName` and `wrapperStyle`, and renders `role="status"` with a "Loading" label.
- `ResponseStatus` renders `role="status"`; `InputFieldIcon` is `aria-hidden` by default.
- `Button` focus and disabled styles; reduced-motion support for the loader.
