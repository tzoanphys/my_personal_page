# Git Commands to Push Your Changes

## Step 1: Add Your GitHub Repository (if not already added)

```powershell
git remote add origin https://github.com/tzoan218/my_personal_page.git
```

**Note**: If you get "remote origin already exists", skip this step.

---

## Step 2: Check What Files Changed

```powershell
git status
```

This shows which files have been modified or are new.

---

## Step 3: Add All Changes

```powershell
git add .
```

This stages all your changes (new files, modified files, deleted files).

**Or add specific files:**
```powershell
git add my-website/src/SkillPage.jsx
git add my-website/src/ProjectsPage.jsx
git add my-website/public/notes/no-scale-notes.pdf
```

---

## Step 4: Commit Your Changes

```powershell
git commit -m "Add Physics notes list and Projects page with BedsWithBenefits"
```

**Write your own message** describing what you changed:
- `"Add Physics notes with PDF viewer"`
- `"Update Projects page with GitHub link"`
- `"Add no-scale notes PDF for Physics"`

---

## Step 5: Push to GitHub

```powershell
git branch -M main
git push -u origin main
```

**If you already pushed before:**
```powershell
git push
```

---

## Complete Sequence (All at Once)

```powershell
# 1. Add remote (only needed once)
git remote add origin https://github.com/tzoan218/my_personal_page.git

# 2. Check status
git status

# 3. Add all changes
git add .

# 4. Commit
git commit -m "Add Physics notes list and update Projects page"

# 5. Push
git branch -M main
git push -u origin main
```

---

## Troubleshooting

### "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/tzoan218/my_personal_page.git
```

### "authentication failed"
You need to use a **Personal Access Token** instead of your password:
1. Go to: https://github.com/settings/tokens
2. Generate new token (classic) with "repo" permissions
3. Use the token as your password when pushing

### "branch main not found"
```powershell
git branch -M main
git push -u origin main
```

### "nothing to commit"
This means all your changes are already committed. Just push:
```powershell
git push
```

---

## Quick Reference

| Command | What it does |
|---------|--------------|
| `git status` | See what files changed |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Save changes with a message |
| `git push` | Upload to GitHub |
| `git log` | See commit history |

