/** @type {import('next').NextConfig} */
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/+|\/+$/g, '')}`
  : ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: repoBasePath,
  assetPrefix: repoBasePath ? `${repoBasePath}/` : undefined,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig

