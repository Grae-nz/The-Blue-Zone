// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? '/The-Blue-Zone' : '',
  assetPrefix: isProd ? '/The-Blue-Zone/' : '',
  eslint: {
    ignoreDuringBuilds: true, // 👈 let the build succeed even if lint errors exist
  },
};

export default nextConfig;
