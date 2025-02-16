const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  // Only apply basePath/assetPrefix if needed (e.g., when hosting in a subdirectory)
  ...(process.env.NEXT_PUBLIC_USE_BASEPATH === 'true'
    ? {
        output: 'export',
        basePath: '/Interactive-Resume',
        assetPrefix: '/Interactive-Resume/',
      }
    : {}),
};

export default nextConfig;
