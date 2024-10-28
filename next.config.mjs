/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://placehold.co/600',
        port: '',
        pathname: '/about/first',
      },
    ],
  },
};

export default nextConfig;
