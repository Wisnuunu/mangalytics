// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        // config: {},
        injectPosition: 0,
        viewer: true
    },
    colorMode: {
        classSuffix: ''
    },
    runtimeConfig: {
        FB_API_KEY: 'AIzaSyC-dV8WURO2kXJP3nb8JsywANDDyXO2PXk',
        FB_AUTH_DOMAIN: 'mangalytic.firebaseapp.com',
        FB_PROJECT_ID: 'mangalytic',
        FB_STORAGE_BUCKET: 'mangalytic.appspot.com',
        FB_MESSAGING_SENDER_ID: '370512084097',
        FB_APP_ID: '1:370512084097:web:9396823696b653ca7a6180',
        FB_MEASUREMENT_ID: 'G-S6GCDM8NMQ'
    }
})
