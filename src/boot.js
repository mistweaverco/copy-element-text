const _browser = chrome
let target

const toClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    // happy path
  }, (err) => {
    console.error('Async: Could not copy text: ', err)
  })
}

document.addEventListener('contextmenu', (e) => {
  target = e.target
}, false)

_browser.runtime.onMessage.addListener((e) => {
  switch (e.type) {
    case 'element':
      toClipboard(target.innerText.trim())
      break
    default:
      break
  }
})
