/**
 * Script to be pasted in TamperMonkey or similar in development.
 */

;(async function() {
  const VITE_PORT = 5173
  const { applyTheme } = await import(`http://localhost:${VITE_PORT}/src/lib.ts`)

  if (!applyTheme) {
    return
  }

  applyTheme('catppuccin-macchiato')
})()