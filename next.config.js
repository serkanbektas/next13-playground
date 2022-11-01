/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 1000,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
