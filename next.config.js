/** @type {import('next').NextConfig} */

const assetPrefix =
  process.env.NODE_ENV === 'production'
    ? 'https://bright-kringle-122bbb.netlify.ap'
    : ''

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    disableStaticImages: true,
  },
}

module.exports = nextConfig
