import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/petry/Área de Trabalho/vuepress3/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/home/petry/Área de Trabalho/vuepress3/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
