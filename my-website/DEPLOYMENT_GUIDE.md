# 🚀 Deployment Guide - Make Your Website Public

This guide shows you how to deploy your personal website so it's accessible at a public URL.

---

## Option 1: Vercel (Recommended - Easiest) ⭐

**Free URL**: `tzoanphys.vercel.app` or custom domain

### Steps:

1. **Build your project** (test locally first):
   ```bash
   cd my-website
   npm run build
   ```

2. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

3. **Deploy**:
   ```bash
   cd my-website
   vercel
   ```
   - Follow the prompts
   - It will ask for project settings - just press Enter for defaults
   - Your site will be live in seconds!

4. **For custom domain** (like `tzoanphys.com`):
   - After first deployment, run: `vercel --prod`
   - Go to Vercel dashboard → Your project → Settings → Domains
   - Add your custom domain

**Or use the web interface:**
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Add New Project"
4. Import your `my_personal_page` repository
5. Set root directory to `my-website`
6. Deploy!

---

## Option 2: Netlify (Also Very Easy)

**Free URL**: `tzoanphys.netlify.app`

### Steps:

1. **Build your project**:
   ```bash
   cd my-website
   npm run build
   ```

2. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy**:
   ```bash
   cd my-website
   netlify deploy
   ```
   - First time: `netlify login`
   - Choose "Create & configure a new site"
   - Publish directory: `dist`
   - Your site will be live!

4. **For production**:
   ```bash
   netlify deploy --prod
   ```

**Or use the web interface:**
1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Base directory: `my-website`
   - Build command: `npm run build`
   - Publish directory: `my-website/dist`
6. Deploy!

---

## Option 3: GitHub Pages (Free, but more setup)

**Free URL**: `tzoan218.github.io/my_personal_page`

### Steps:

1. **Update vite.config.js** (already done - see below)

2. **Install gh-pages**:
   ```bash
   cd my-website
   npm install --save-dev gh-pages
   ```

3. **Add to package.json** scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: `gh-pages` branch
   - Your site will be at: `https://tzoan218.github.io/my_personal_page`

---

## ⚙️ Important: Fix Vite Config for Routing

Since you're using React Router, you need to update `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './'  // Add this line for proper routing
})
```

This ensures your routes work correctly when deployed.

---

## 🎯 Quick Comparison

| Platform | Ease | Free URL | Custom Domain | Best For |
|----------|------|----------|---------------|----------|
| **Vercel** | ⭐⭐⭐⭐⭐ | `tzoanphys.vercel.app` | ✅ Yes | React apps |
| **Netlify** | ⭐⭐⭐⭐⭐ | `tzoanphys.netlify.app` | ✅ Yes | Static sites |
| **GitHub Pages** | ⭐⭐⭐ | `tzoan218.github.io/...` | ✅ Yes | GitHub users |

---

## 📝 Recommended: Vercel (5 minutes)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Add New Project"
4. Import `my_personal_page` repository
5. Settings:
   - Framework Preset: Vite
   - Root Directory: `my-website`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"
7. Done! Your site is live at `tzoanphys.vercel.app` (or similar)

---

## 🔧 Before Deploying - Test Build

Always test your build locally first:

```bash
cd my-website
npm run build
npm run preview
```

Visit the preview URL to make sure everything works!

---

## 🌐 Custom Domain Setup (Optional)

If you want `tzoanphys.com`:

1. **Buy a domain** from:
   - Namecheap
   - Google Domains
   - GoDaddy

2. **On Vercel/Netlify**:
   - Go to project settings → Domains
   - Add your domain
   - Follow DNS setup instructions

---

## 🚨 Common Issues

### Routes not working (404 errors)
- Make sure `vite.config.js` has `base: './'`
- On Netlify: Create `_redirects` file in `public/` folder:
  ```
  /*    /index.html   200
  ```

### Images not loading
- Make sure all images are in `public/` folder
- Use paths starting with `/` (e.g., `/image.jpg`)

### PDFs not loading
- Make sure PDFs are in `public/notes/` folder
- Paths should be `/notes/filename.pdf`

---

## ✅ Checklist Before Deploying

- [ ] Test build locally: `npm run build && npm run preview`
- [ ] All images load correctly
- [ ] All PDFs load correctly
- [ ] All routes work (click through all pages)
- [ ] Mobile responsive (test on phone)
- [ ] Push latest changes to GitHub

---

**Need help?** Each platform has excellent documentation and support!

