/** @type {import('next').NextConfig} */
// Set GITHUB_PAGES=true when building for GitHub Pages deployment so that
// assetPrefix/basePath point at /scholars-web. Local `next dev` and `next build`
// (without that flag) serve from root.
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'scholars-web';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  trailingSlash: true,
};

module.exports = nextConfig;
