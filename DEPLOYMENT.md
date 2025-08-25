# GitHub Pages Deployment Guide

This project is configured to be deployed on GitHub Pages. Follow these steps to deploy your portfolio:

## Prerequisites

1. Make sure your code is pushed to a GitHub repository
2. The repository should be named: `yourusername.github.io` (for custom domain) or any name (for project pages)

## Automatic Deployment (Recommended)

1. **Push your code to GitHub** with the main branch
2. **Go to your repository on GitHub**
3. **Navigate to Settings → Pages**
4. **Under "Source"**, select **"GitHub Actions"**
5. **The workflow will automatically run** when you push to main branch

## Manual Deployment

If you prefer manual deployment:

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Go to Settings → Pages** in your GitHub repository
3. **Select "Deploy from a branch"**
4. **Choose the `gh-pages` branch** (created by the workflow)
5. **Save the settings**

## Custom Domain (Optional)

If you want to use a custom domain:

1. **Add your domain** in Settings → Pages → Custom domain
2. **Create a CNAME file** in the `public` folder with your domain
3. **Update the Vite config** to use `/` as base instead of `/GithubThemedPortfolio/`

## Troubleshooting

- **If the site doesn't load**: Check that the base path in `vite.config.ts` matches your repository name
- **If styles are broken**: Ensure the build completed successfully
- **If GitHub Actions fail**: Check the Actions tab for error details

## Repository Structure for GitHub Pages

```
yourusername.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
├── public/
├── package.json
├── vite.config.ts
└── README.md
```

Your site will be available at: `https://yourusername.github.io/`
