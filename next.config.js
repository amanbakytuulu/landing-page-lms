module.exports = {
    i18n: {
        locales: ["en", "ru"],
        defaultLocale: "en",
        localeDetection: true
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
    }
}