import fg from 'fast-glob'
import chokidar from 'chokidar'
import { debounce } from 'lodash'
import { parse, resolve } from 'node:path'
import { writeFile } from 'node:fs/promises'

function themes() {
  const generateThemesTypes = debounce(function () {
    // Matches every theme
    const files = fg.sync('./src/themes/[!base]*.css')

    const themes = files.map((file) => {
      const _file = parse(file)
      return _file.name
    })

    const type = `export type Theme = ${themes.map((theme) => `'${theme}'`).join(' | ')}`

    writeFile(
      resolve(__dirname, 'types/themes.d.ts'),
      type
    )
  }, 50)

  if (process.env.NODE_ENV === 'production') {
    generateThemesTypes()
  } else {
    // Matches everything in themes directory
    chokidar.watch('./src/themes').on('all', () => {
      generateThemesTypes()
    })
  }
}

themes()