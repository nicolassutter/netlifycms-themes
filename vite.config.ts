import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import autoprefixer from 'autoprefixer'
import postcssNesting from 'postcss-nesting'
import postcssImport from 'postcss-import'

export default defineConfig({
  build: {
    lib: {
      entry: './src/lib.ts',
      formats: ['es']
    }
  },

  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        postcssNesting(),
        postcssImport()
      ]
    }
  },

  plugins: [dts()]
})