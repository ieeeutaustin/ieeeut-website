/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ieeeut.org',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'utfs.io',
                port: '',
            },
        ],
    },
};

module.exports = nextConfig;
