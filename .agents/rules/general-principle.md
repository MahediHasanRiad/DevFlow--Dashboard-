---
trigger: always_on
---


# Dashboard Project Rules

## 1. General Principles

- Follow the existing project structure, conventions, and technology choices.
- **Do not repeat yourself (DRY).** Reuse existing components, utilities, hooks, types, and styles whenever possible.
- Before creating something new, check whether a similar implementation already exists.
- Keep the code simple, readable, maintainable, and consistent.
- Do not introduce unnecessary dependencies or abstractions.
- Do not change unrelated files or functionality while working on a task.
- Prefer small, focused changes over large, unrelated refactors.

## 2. Task Documentation

- **Create a separate task file for every task.**
- Store every task file inside the relevant `components` folder.
- Use a clear, descriptive name based on the task.

### Task File Naming

```text
components/
├── task-name.task.md
├── another-task.task.md
└── ...
```

### Task File Structure

Each task file should contain:

```markdown
# Task: [Task Name]

## Objective
Describe what needs to be implemented or changed.

## Requirements
- Requirement 1
- Requirement 2

## Implementation Plan
1. Step 1
2. Step 2
3. Step 3

## Files to Change
- `src/...`

## Completed
- [ ] Task implemented
- [ ] Tested
- [ ] Reviewed
```

- Update the task file as the work progresses.
- Mark completed items only after verifying them.
- Do not create duplicate task files for the same task.
- If a task is closely related to an existing task, update the existing task file instead of creating unnecessary duplicates.

## 3. Folder and File Organization

- Organize code by page, feature, or responsibility.
- Keep page-specific components close to their corresponding page.
- Keep reusable components in a shared components folder.
- Do not place unrelated components in the same folder.
- Follow the project's established naming conventions.

### Page Naming Convention

Page files must follow:

```text
page-name.page.tsx
```

Examples:

```text
overview.page.tsx
duty-schedule.page.tsx
guard-management.page.tsx
customer-management.page.tsx
```

- Use kebab-case for page names.
- Use descriptive names that clearly communicate the page's purpose.
- Keep page components focused on layout and page-level composition.
- Move reusable UI logic into components, hooks, or utilities.

## 4. Component Rules

- Create a new component only when it improves reuse, readability, or separation of responsibility.
- Reuse existing components before creating new ones.
- Avoid duplicating the same UI structure across multiple pages.
- Keep components small and focused on one responsibility.
- Use meaningful component names.
- Prefer composition over unnecessary inheritance or complex abstractions.
- Do not create overly generic components that make the code harder to understand.

## 5. TypeScript Rules

- Use TypeScript for all application code.
- Define proper types for component props, API responses, and shared data.
- Avoid `any` unless there is a justified reason.
- Reuse shared types instead of redefining the same type in multiple files.
- Keep type definitions close to their usage unless they are shared across features.
- Prefer clear, explicit types over unnecessary complexity.

## 6. Styling and UI Rules

- Follow the existing styling system and component library.
- Use the project's established spacing, typography, and responsive conventions.
- Avoid hardcoded styles when an existing design token or utility can be used.
- Keep the dashboard's visual design consistent across all pages.
- Use a clean **white and gray color palette** as the primary visual foundation.
- Use accent colors only when they communicate meaning, such as status, alerts, or important actions.
- Ensure layouts are responsive and usable on desktop, tablet, and mobile.
- Do not introduce inconsistent colors, spacing, or typography without a clear reason.

## 7. State and Data Management

- Reuse existing state-management patterns.
- Do not duplicate the same state in multiple places unnecessarily.
- Keep API-related logic separate from presentation when practical.
- Reuse existing API services, hooks, and query patterns.
- Avoid unnecessary global state.
- Keep local UI state local unless it must be shared.

## 8. Development Workflow

For every task:

1. Read the relevant existing code.
2. Check for reusable components, utilities, hooks, and types.
3. Create or update the task file in the relevant `components` folder.
4. Plan the implementation before making changes.
5. Implement the smallest clean solution.
6. Reuse existing code wherever possible.
7. Test the affected functionality.
8. Review the changes for duplication, consistency, and unnecessary complexity.
9. Update the task file with the completion status.

## 9. Quality Rules

- Do not leave unused imports, variables, or components.
- Do not leave debugging statements such as `console.log` unless intentionally required.
- Handle loading, error, and empty states where applicable.
- Keep accessibility in mind when creating interactive UI.
- Ensure new functionality does not break existing functionality.
- Prefer maintainable solutions over quick hacks.

## 10. Before Completing a Task

Verify:

- [ ] Existing code was checked for reuse.
- [ ] No unnecessary duplication was introduced.
- [ ] The task file was created or updated.
- [ ] Naming conventions are followed.
- [ ] The implementation matches the project structure.
- [ ] The affected functionality was tested.
- [ ] No unrelated changes were made.
- [ ] The code is clean and maintainable.