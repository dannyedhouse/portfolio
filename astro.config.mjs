// @ts-check
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

export default defineConfig({
  integrations: [icon()],
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      cssMinify: 'esbuild',
    },
  },
})
