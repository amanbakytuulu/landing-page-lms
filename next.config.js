module.exports = {
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'en',
        localeDetection: false,
        domains: [
            {
                domain: 'landing-stage.crm.codifylab.com/en',
                defaultLocale: 'en',
              http: true,
            },
        ]
    },
}



