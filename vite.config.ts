import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

const REPO_NAME = 'life'

export default defineConfig(({command}) => {
  const isProd = command === 'build'
  return {
    plugins: [
      vue(),
      Pages(),
      AutoImport({
        imports:[
          'vue',
          'vue-router',
          '@vueuse/core'
        ],
        dts: true,
        vueTemplate:true
      }),
      Components(),
      UnoCSS(),
    ],
    base: isProd ? `/${REPO_NAME}/` : '/'
  }
})
