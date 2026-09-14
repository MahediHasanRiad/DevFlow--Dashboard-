---
trigger: always_on
---

# Dashboard Project Rules

## Project Context

This is a React + TypeScript + Vite admin dashboard.

The project uses:
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn-style UI components
- Redux Toolkit / RTK Query
- React Router
- Lucide icons
- zod 

## General Development Rules

- Inspect the existing codebase before making changes.
- Follow existing project patterns and conventions.
- Do not introduce a new library when an existing solution is available.
- Do not rewrite unrelated code.
- Keep changes focused on the requested feature.
- Prefer simple, maintainable solutions over unnecessary abstractions.
- Use TypeScript properly; avoid `any`.
- Preserve existing functionality when modifying components.

## Component Rules

- Reuse existing UI components before creating new ones.
- Keep reusable components separate from page-specific components.
- Avoid duplicating the same UI logic across pages.
- Keep components focused on one responsibility.
- Extract complex logic into custom hooks when appropriate.

## Styling Rules

- Use the existing Tailwind design system.
- Reuse existing spacing, colors, typography, and responsive patterns.
- Do not introduce arbitrary colors or inconsistent spacing.
- Ensure layouts work on desktop, tablet, and mobile.
- Do not break existing responsive behavior.

# Dashboard UI & Design Rules

## Color System

The dashboard uses a minimal white and gray color palette.

### Primary Colors

- Background: White
- Surface / Card: White
- Primary text: Dark gray / near-black
- Secondary text: Medium gray
- Borders: Light gray
- Muted backgrounds: Very light gray
- Hover states: Light gray

### Color Guidelines

- Keep the overall UI monochromatic using white and gray.
- Do not introduce arbitrary colors.
- Avoid excessive use of pure black.
- Use dark gray for primary text instead of pure black where appropriate.
- Use light gray for borders, dividers, and secondary surfaces.
- Use slightly darker gray for hover states.
- Maintain sufficient contrast between text and background.
- Keep the interface visually clean, minimal, and professional.

### Semantic Colors

Semantic colors may be used only when necessary:

- Success: green
- Warning: yellow/orange
- Error: red
- Information: blue

Semantic colors should be limited to statuses, alerts, validation messages, and other cases where color communicates meaning.

Do not use semantic colors as decorative UI colors.

## State Management

- Use the existing Redux Toolkit / RTK Query architecture.
- Do not introduce another state-management library.
- Keep server state and UI state separate.
- Reuse existing API endpoints and hooks when available.
- Handle loading, error, and empty states consistently.

## API Integration

- Follow the existing API service and RTK Query patterns.
- Do not call APIs directly inside components if the project already has an API layer.
- Reuse existing authentication and token-refresh logic.
- Handle API errors consistently.
- Do not expose sensitive data in the UI or logs.

## Testing and Verification

Before considering a feature complete:

1. Run TypeScript type checking.
2. Run linting if configured.
3. Run tests if available.
4. Run the production build.
5. Check the affected page in the browser.
6. Verify responsive behavior.
7. Review the changed files for unnecessary modifications.