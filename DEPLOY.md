# Deploying to GitHub Pages

## Quick Setup

1. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Name your repository (e.g., `portfolio` or `website`)
   - Don't initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy your site!

4. **Your site will be available at:**
   - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## If deploying to a custom domain or subdirectory:

If your repository name is not the root (e.g., `portfolio`), you may need to update `next.config.js`:

```javascript
basePath: '/your-repo-name',
trailingSlash: true,
```

Then rebuild and push again.

## Manual Build (if needed):

```bash
npm run build
# The static files will be in the 'out' directory
```
