/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // if you're using <Image>, otherwise remove this
  },
};

export default nextConfig;
