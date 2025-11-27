# GitHub Setup Guide

## Step 1: Create Repository on GitHub
1. Go to https://github.com and log in
2. Click the green "New" button (top right)
3. Name it: `my_personal_page` (or any name)
4. Choose Public or Private
5. DO NOT check "Add a README" (files already exist)
6. Click "Create repository"

## Step 2: Copy Repository URL
After creating, GitHub shows a page with commands. 
Look for a URL that looks like:
```
https://github.com/tzoan218/my_personal_page.git
```
Copy this URL.

## Step 3: Connect Local Code to GitHub
Open PowerShell in the project folder and run:

```powershell
# Connect local repository to GitHub
git remote add origin https://github.com/tzoan218/my_personal_page.git

# Push code to GitHub
git push -u origin main
```

**Note:** If asked for username/password:
- Username: GitHub username (tzoan218)
- Password: Use a Personal Access Token (not regular password)
  - Go to: Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Generate new token with "repo" permissions
  - Copy the token and use it as password

## Step 4: Verify
Go back to GitHub profile and refresh the page. 
The `my_personal_page` repository should be visible.

## Common Issues:
- "remote origin already exists": Run `git remote remove origin` first, then add it again
- "authentication failed": Use a Personal Access Token, not password
- "branch master not found": Try `git push -u origin main` instead

## Making Updates

When code changes, update GitHub with:

```powershell
# 1. Stage changes
git add .

# 2. Commit with a clear message
git commit -m "Add new contact section to homepage"

# 3. Push to GitHub
git push
```

### Commit Message Examples:
Write messages that describe what was changed:
- `"Add dark mode toggle button"`
- `"Fix mobile menu not closing on click"`
- `"Update resume with new job experience"`
- `"Change background color to blue"`
- `"Add Instagram link to social media section"`

### Avoid Generic Messages:
- `"Description of changes"` (too vague)
- `"Update files"` (doesn't say what changed)
- `"Fix bugs"` (doesn't say which bugs)

### Change Last Commit Message:
If a commit was made with a bad message:

```powershell
# Change the last commit message (before pushing)
git commit --amend -m "New message here"

# If already pushed, force push (be careful!)
git push --force
```
