import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    'shadcn-nuxt',
    'nuxt-lucide-icons',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt'
  ],
  lucide: {
    namePrefix: 'Icon',
  },
  app: {
    head: {
      title: 'Nuxt Tutorial',
      link: [{ rel: 'stylesheet', type: 'text/css', href: '/favicon.ico' }],
    },
  },
  vite: {
    server: { hmr: { port: 3000 } },
    plugins: [tailwindcss()],
  },
  shadcn: {
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  }
});