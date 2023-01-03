;(function() {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', 'http://localhost:3000/main.css')

    const head = document.querySelector('head')

    if (head) {
      head.appendChild(link)
    }
  }
})()
