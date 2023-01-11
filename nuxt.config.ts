// import ua from '@/lang/ua';
// import en from '@/lang/en';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/styles/index.scss'
    ],
    app: {
        head: {
            title: process.env.TITLE_APP || 'Pet project',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '@/public/favicon.ico'},
                {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'}
            ],
            script: [
                {
                    src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',
                },
            ],
        },
    },
    modules: [
        '@nuxtjs/i18n',
        'nuxt-icon',
        '@pinia/nuxt',
    ],
    build: {
        transpile: ['AppModal']
    },
    vue: {
        compilerOptions: {
            isCustomElement: tag => ['AppModal'].includes(tag)
        }
    },
    // i18n: {
    //     locales: ['en', 'ua'],
    //     defaultLocale: 'en',
    //     vueI18n: {
    //         fallbackLocale: 'en',
    //         messages: {
    //             en,
    //             ua
    //         }
    //     }
    // }
    i18n: {
        locales: ['en', 'ua'],
        defaultLocale: 'en',
        vueI18n: {
            fallbackLocale: 'en',
            messages: {
                en: {
                    lang: "ENG",
                },
                ua: {
                    lang: "УКР"
                }
            }
        }
    },
    ssr: true,
})
