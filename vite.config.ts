import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Component from "unplugin-vue-components/vite"
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Component({
      dts: true,
      dirs: ['src/components'],
      resolvers: [ElementPlusResolver()]
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router'],
      dts: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
