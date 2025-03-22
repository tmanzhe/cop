import type { NextConfig } from "next";
import type { Configuration } from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'standalone',
  // Enable Docker-friendly settings
  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    // Enable polling for file changes in Docker
    if (!isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
}

export default nextConfig
