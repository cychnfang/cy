import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue()
      }
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
