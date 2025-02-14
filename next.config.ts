const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  ...(isProd
    ? {
        output: 'export',
        basePath: '/Interactive-Resume',
        assetPrefix: '/Interactive-Resume/',
      }
    : {}),
};

export default nextConfig;
