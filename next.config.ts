import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.itch.zone',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
