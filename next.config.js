module.exports = {
    i18n: {
        defaultLocale: "en",
        locales: ["en", "ru"],
    },
    webpack: (config, {isServer}) => {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                stream: false,
                path: false,
                crypto: false
            }
        }

        return config;
    },
    async rewrites() {
        return [
            {
                source: '/test_drive/thanks_test_drive:path*',
                destination: '/',
            },
        ]
    },
}