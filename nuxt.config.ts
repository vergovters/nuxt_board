
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss", "shadcn-nuxt",
  ['@nuxtjs/google-fonts', {
    families: {
     Lato: {
      wght: [300, 400, 700],
      ital: [300],
     }
    }
}], 'nuxt-icon'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: ' ',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})