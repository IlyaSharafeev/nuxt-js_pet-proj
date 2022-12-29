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
                {rel: 'icon', type: 'image/x-icon', href: '@/public/favicon.ico'}
            ]
        },
    }
})
