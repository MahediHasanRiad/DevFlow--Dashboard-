---
trigger: always_on
---

# UI Component Rules

## Component Reuse

- Before creating a component, search for an existing reusable component.
- Reuse existing Button, Dialog, Input, Select, Table, Avatar, Card, and other UI components.
- Follow the existing component API and styling conventions.
- Do not create duplicate versions of existing components.

## Page Structure

- Follow the existing dashboard layout.
- Reuse the existing Sidebar, Header, MobileBottomTabs, and page container components.
- Keep page-level components focused on composition.
- Extract repeated sections into reusable components.

## Forms

- Follow the existing form validation and submission patterns.
- Show clear loading, success, and error states.
- Disable submission when appropriate.
- Preserve user input when validation fails.
- Do not duplicate API submission logic across components.

## Responsive Design

- Design for desktop and mobile.
- Check sidebar, tables, dialogs, forms, and bottom navigation on small screens.
- Avoid fixed widths that cause horizontal overflow.
- Use the existing responsive breakpoints.

## Accessibility

- Use semantic HTML where appropriate.
- Provide labels for form controls.
- Ensure buttons and interactive elements are keyboard accessible.
- Use meaningful accessible names for icons and controls.