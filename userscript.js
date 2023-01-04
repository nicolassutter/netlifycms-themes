/**
 * Script to be pasted in TamperMonkey or similar in development.
 */

;(async function() {
  const VITE_PORT = 5173

  const vite = document.createElement('script')
  vite.setAttribute('type', 'module')
  vite.setAttribute('src', `http://localhost:${VITE_PORT}/@vite/client`)

  const dev = document.createElement('script')
  dev.setAttribute('type', 'module')
  dev.setAttribute('src', `http://localhost:${VITE_PORT}/src/main.ts`)

  document.body.appendChild(vite)
  document.body.appendChild(dev)
})()