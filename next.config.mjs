import nextPWA from 'next-pwa';

const withPWA = nextPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // Nonaktifkan PWA di mode development
});

const nextConfig = {
  reactStrictMode: true,
  ...withPWA,
};

export default nextConfig;
