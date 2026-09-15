---
name: sample-reviewer
description: >-
  Perform automated and manual code quality checks, security reviews, and architecture validation before committing or completing tasks. Use this skill when asked to review code or check pull requests.
---

# Code Reviewer Skill

This skill guides the agent through performing a structured, thorough code review.

## Workflow Steps

1. **Static Analysis & Linting**:
   - Run existing linting or test scripts in the workspace to verify formatting and syntax.
   - Example helper: [run-checks.ps1](./scripts/run-checks.ps1)

2. **Security & Best Practices Audit**:
   - Check against known security vulnerabilities (input validation, SQL injection, XSS, secret leaks).
   - Consult the [review checklist](./references/review-checklist.md) for domain-specific checks.

3. **Performance & Architecture Review**:
   - Ensure separation of concerns and maintainable abstractions.
   - Check for memory leaks, unclosed streams, and unindexed database queries.

4. **Feedback Delivery**:
   - Summarize findings categorized by **Critical / High**, **Medium**, and **Suggestions**.
   - Provide concrete diffs or code snippets for suggested fixes.
