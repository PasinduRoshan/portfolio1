/** @type {import('next').NextConfig} */
// next.config.mjs
export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
}
