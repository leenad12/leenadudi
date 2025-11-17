/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/leenadudi',
  trailingSlash: true,
}

module.exports = nextConfig
