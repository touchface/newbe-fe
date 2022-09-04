import { defineNuxtConfig } from "nuxt";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Icons from 'unplugin-icons/vite';
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
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
  css: [],

  // build
  build: {
    transpile: lifecycle === "build" ? ["element-plus"] : [],
  },

  // build modules
  buildModules: [
    "@pinia/nuxt",
    "@nuxtjs/svg",
    "@vueuse/nuxt",
    "nuxt-windicss",
    "unplugin-icons/nuxt"
  ],
  modules: [
  ],
  // auto import components
  components: true,
  // vite plugins
  vite: {
    plugins: [
      AutoImport({
        resolvers: [
          ElementPlusResolver({importStyle:true}),
          IconsResolver({
            prefix:"Icon"
          })],
      }),
      Components({
        dts: true,
        resolvers: [
          ElementPlusResolver({importStyle:true}),
          IconsResolver({enabledCollections:['ep']})
        ]
      }),
      Icons({
        autoInstall: true
      })
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