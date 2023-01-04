import type { Theme } from '../types/themes'
import 'uno.css'

function init() {
  document.body.setAttribute('data-netlifycms-theme', '')
}

export async function applyTheme(_theme: Theme) {
  if (typeof document !== 'undefined') {
    init()

    const availableThemes = import.meta.glob('./themes/*.css', { query: '?inline' })

    const theme = Object.entries(availableThemes)
      .find(([key]) => key.endsWith(`${_theme}.css`))

    if (theme) {
      const [, themeImportFn] = theme
      const { default: css } = await themeImportFn() as { default: string }

      const style = document.createElement('style')
      style.innerText = css
  
      document.head.appendChild(style)
    }
  }
}