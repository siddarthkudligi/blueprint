/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  // Add image domains if needed
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
