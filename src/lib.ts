function init() {
  document.body.setAttribute('data-netlifycms-theme', '')
}

export async function applyTheme(_theme: 'catppuccin-macchiato') {
  if (typeof document !== 'undefined') {
    init()

    const availableThemes = import.meta.glob('./themes/*.css')
    const theme = Object.entries(availableThemes)
      .find(([key]) => key.endsWith(`${_theme}.css`))

    if (theme) {
      const [, themeImportFn] = theme
      const css = await themeImportFn() as string
  
      const style = document.createElement('style')
      style.innerText = css
  
      document.head.appendChild(style)
    }
  }
}