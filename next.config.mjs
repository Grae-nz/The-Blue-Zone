// next.config.js
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',               // generate static HTML
  images: { unoptimized: true },  // needed if using next/image
  trailingSlash: true,
  // repo name = The-Blue-Zone, so pages are served from /The-Blue-Zone/ on GitHub
  basePath: isProd ? '/The-Blue-Zone' : '',
  assetPrefix: isProd ? '/The-Blue-Zone/' : '',
};

module.exports = nextConfig;