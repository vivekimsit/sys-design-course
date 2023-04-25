/** @type {import('next').NextConfig} */

const basePath =
  process.env.NODE_ENV === 'production'
    ? 'https://sys-design-course.vercel.app'
    : ''

const nextConfig = {
  basePath,
  reactStrictMode: true,
  // assetPrefix: 'https://sys-design-course.vercel.app',
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
