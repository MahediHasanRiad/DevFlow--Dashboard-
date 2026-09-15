# Code Review Checklist

Use this checklist during step 2 of the code review workflow.

## 1. Security Checklist
- [ ] No hardcoded API keys, tokens, passwords, or credentials.
- [ ] User input is sanitized and validated on both client and server boundaries.
- [ ] Authentication and authorization checks are enforced on sensitive endpoints.
- [ ] Dependencies have no known critical CVE vulnerabilities.

## 2. Code Quality & Standards
- [ ] Code follows project naming and structuring conventions.
- [ ] No debug statements or stray `console.log` / `print` in production paths.
- [ ] Edge cases (null/undefined values, network timeouts, empty states) are properly handled.
- [ ] Functions and classes adhere to Single Responsibility Principle (SRP).

## 3. Testing & Coverage
- [ ] New functionality includes corresponding unit or integration tests.
- [ ] Existing tests pass without regressions.
