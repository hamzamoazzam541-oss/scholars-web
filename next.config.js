/** @type {import('next').NextConfig} */
// GITHUB_PAGES=true is set in CI when building for GitHub Pages so that
// basePath/assetPrefix point at /scholars-web (required when served from
// https://<user>.github.io/scholars-web/). Local `next dev` serves from root.
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
