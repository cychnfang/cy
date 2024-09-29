/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'

export default defineConfig({
  environment: 'happy-dom',
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue()
      }
    })
  ],
  test: {}
})
