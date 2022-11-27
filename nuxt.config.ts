import { defineNuxtConfig } from "nuxt";
const lifecycle = process.env.npm_lifecycle_event;

export default defineNuxtConfig({
  // meta
  meta: {
    title: "NEWBE.PLUS",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "NEWBE.PLUS",
        content: "NEWBE.PLUS",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  // css
  css: ['~/assets/scss/reset.css','~/assets/scss/index.scss'],
  js: [],

  // build
  build: {
    transpile: lifecycle === "build" ? ["element-plus"] : [],
  },
  modules: [
    // y"@nuxtjs/axios",
    "@pinia/nuxt",
    "@nuxtjs/svg",
    "@vueuse/nuxt",
    "nuxt-windicss"
  ],
  // auto import components
  components: true,
  // vite plugins
  vite: {
    server: {
      proxy: {
          '/api': {
              target: 'http://127.0.0.1:8000',  //这里是接口地址
              changeOrigin: true
          }
      }
    },
    plugins: [
    ],
  },
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
  // windicss
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 4000,
        open: false,
      },
    },
    scan: true,
  },
});