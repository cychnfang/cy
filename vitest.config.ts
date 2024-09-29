import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/__tests__/**/*.spec.ts'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    testTimeout: 20000,
    isolate: false,
  },
  esbuild: {
    target: 'node18',
  },
  publicDir: false,
})
