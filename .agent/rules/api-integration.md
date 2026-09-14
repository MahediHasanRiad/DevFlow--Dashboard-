---
trigger: always_on
---

# API Integration Rules

- Follow the existing RTK Query API structure.
- Reuse the configured base query and authentication flow.
- Do not create a separate API client without a clear reason.
- Use existing access-token and refresh-token handling.
- Follow the existing request and response types.
- Keep API calls out of presentational components when possible.
- Handle loading, success, error, and empty states.
- Do not log access tokens, refresh tokens, passwords, or sensitive user data.
- Use consistent error messages and user feedback.