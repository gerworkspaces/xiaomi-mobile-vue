// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Nevel Tech - Frontend Developer',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Portfolio XIAOMI mobile project built from Figma design by Quang Vo Nguyen Thanh - on 14th November 2025' },
      ],
      script:[
        {
          type: 'text/javascript',
        },
      ],
    },
  },
  routeRules: {
    //User
    "/": { redirect: '/home' },
    "/product": { redirect: '/product' },
    "/contact": { redirect: '/contact' },
    "/price": { redirect: '/price' },
    
    //Admin
  },
  imports: {
    autoImport: true
  },
  ssr: true,
  nitro: {
    preset: 'vercel',
  },
  css: ['~/assets/css/main.css' , "@/assets/css/global.css"],
  // build: {
  // transpile: ['@heroicons/vue', '@headlessui/vue'],
  //   transpile: [],
  // },
  // typescript: {
  //   strict: true,
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
