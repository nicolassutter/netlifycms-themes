import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import autoprefixer from 'autoprefixer'
import postcssNesting from 'postcss-nesting'
import postcssImport from 'postcss-import'
import Icons from 'unplugin-icons/vite'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import presetWind from '@unocss/preset-wind'
import transformerDirectives from '@unocss/transformer-directives'

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

  server: {
    cors: true
  },

  plugins: [
    Icons({
      compiler: 'raw'
    }),
    Unocss({
      presets: [
        presetIcons(),
        presetWind(),
      ],
      transformers: [
        transformerDirectives()
      ]
    }),
    dts()
  ]
})