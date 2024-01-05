// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['tslib'],
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss', '@nuxt/image'],
  apollo: {
    clients: {
      default: {
        httpEndpoint:
          'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clqy26tviv6lc01t68fg4hsoh/master',
      },
    },
  },
});
