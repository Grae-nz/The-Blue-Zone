// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',                     // 👈 THIS FIXES EVERYTHING
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? '/The-Blue-Zone' : '',
  assetPrefix: isProd ? '/The-Blue-Zone/' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
