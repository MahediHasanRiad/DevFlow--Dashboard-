---
trigger: always_on
---

# State Management Rules

- Use Redux Toolkit for global client state.
- Use RTK Query for server state and API communication.
- Do not introduce Zustand, React Query, or another state library unless explicitly requested.
- Reuse existing API slices and endpoint patterns.
- Keep authentication state consistent with the existing auth architecture.
- Do not duplicate server data in local component state unnecessarily.
- Use local state for UI concerns such as dialog visibility, tabs, filters, and temporary form values.
- Invalidate or refetch affected data after mutations when required.
- Handle loading, error, and empty states in every data-driven page.
- Avoid unnecessary global state.