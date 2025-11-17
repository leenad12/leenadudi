#!/bin/bash

# Build the site
echo "Building the site..."
npm run build

# Check if gh-pages branch exists
if git show-ref --verify --quiet refs/heads/gh-pages; then
  echo "gh-pages branch exists"
else
  echo "Creating gh-pages branch..."
  git checkout --orphan gh-pages
  git rm -rf .
  git checkout main -- .gitignore
  git commit -m "Initial gh-pages commit"
  git push -u origin gh-pages
  git checkout main
fi

# Switch to gh-pages branch
echo "Switching to gh-pages branch..."
git checkout gh-pages

# Remove all files except .git
find . -maxdepth 1 ! -name '.' ! -name '.git' ! -name '.gitignore' -exec rm -rf {} +

# Copy built files
echo "Copying built files..."
cp -r out/* .

# Add and commit
git add .
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
echo "Pushing to gh-pages branch..."
git push origin gh-pages

# Switch back to main branch
git checkout main

echo "Deployment complete! Your site should be available at:"
echo "https://leenad12.github.io/leenadudi/"
