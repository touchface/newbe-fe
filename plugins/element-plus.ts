import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
    nuxtApp.vueApp.use(ElementPlus,{ size: 'small'})
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        nuxtApp.vueApp.component(key, component)
      }
})