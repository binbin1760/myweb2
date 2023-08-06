import vue from '@vitejs/plugin-vue'
import Component from "unplugin-vue-components/vite"
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import path from "path"
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
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
    },
    server: {
      host: true,
      port: 3000,
      proxy: {
        "/api": {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
        }
      }
    }
  }
})
