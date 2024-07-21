/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  env: {
    GH_TOKEN: process.env.GH_TOKEN,
  },
}

export default nextConfig
