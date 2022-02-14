import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // host: true,
    // hmr: {
    //   port: 80
    // }
  },
  resolve: {
    alias: [
      {
        find: '@bg',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
})
