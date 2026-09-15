# Sample validation helper script
Write-Host "Running project verification checks..." -ForegroundColor Cyan

# 1. Check git status
git status --short

# 2. Check for leftover debug logs or secrets (example check)
Write-Host "Scanning for potential secret leaks or debug statements..." -ForegroundColor Yellow
Get-ChildItem -Recurse -File -Exclude "*.git*", "*.md" | Select-String -Pattern "TODO_REMOVE|API_SECRET_KEY|password123"

Write-Host "Pre-review checks completed." -ForegroundColor Green
