/** @type {import('next').NextConfig} */

const assetPrefix =
  process.env.NODE_ENV === 'production'
    ? 'https://bright-kringle-122bbb.netlify.app'
    : ''

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: 'https://bright-kringle-122bbb.netlify.app',
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
