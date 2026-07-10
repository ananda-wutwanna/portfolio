/** @type {import('next').NextConfig} */

// For GitHub Pages project sites the site is served from /<repo-name>.
// Change 'portfolio' below to your GitHub repository name, or set
// NEXT_PUBLIC_BASE_PATH in the environment (the deploy workflow does this).
const repoBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === 'production' ? '/portfolio' : '');

const nextConfig = {
  output: 'export',
  basePath: repoBasePath,
  assetPrefix: repoBasePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: repoBasePath,
  },
};

module.exports = nextConfig;
