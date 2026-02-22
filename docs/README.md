# Git Workflow Guide

This guide outlines the standard branching and merging strategy for this project to ensure a clean commit history and stable releases.

## 🌿 Branching Strategy

| Branch | Purpose | Stable? |
| :--- | :--- | :--- |
| `main` | Production-ready code only. | ✅ Yes |
| `develop` | Integration branch for features. | 🛠️ Mostly |
| `feature/*` | Individual feature/module development. | ❌ No |

---

## 🚀 Common Commands

### 1. Starting a New Feature
Always branch out from `develop` for new features or modules.

```bash
# Ensure you are on develop and have latest changes
git checkout develop
git pull origin develop

# Create and switch to your feature branch
git checkout -b feature/your-feature-name
```

### 2. Merging Feature into Develop
Once your feature is complete and tested, merge it into the `develop` branch.

```bash
# Switch back to develop
git checkout develop

# Pull latest changes from remote to avoid conflicts
git pull origin develop

# Merge your feature branch
git merge feature/your-feature-name

# Push the updated develop branch to GitHub
git push origin develop

# (Optional) Delete the local feature branch
git branch -d feature/your-feature-name
```

### 3. Promoting Develop to Main (Release)
When `develop` is stable and ready for a release, merge it into `main`.

```bash
# Switch to main
git checkout main

# Pull latest main from remote
git pull origin main

# Merge develop into main
git merge develop

# Push the updated main branch to GitHub
git push origin main

# Switch back to develop to continue work
git checkout develop
```

---

## 💡 Best Practices
- **Commit Often**: Make small, logical commits.
- **Sync Regularly**: Run `git pull` frequently to stay updated with other team members.
- **Descriptive Names**: Use clear names for feature branches (e.g., `feature/login-system`, `feature/cart-logic`).
- **Conflict Resolution**: If a merge conflict occurs, Git will prompt you to fix it. Review the files, choose the correct code, and then run `git add .` followed by `git commit`.
