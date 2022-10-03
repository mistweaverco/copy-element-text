const _browser = chrome
const _menus = _browser.contextMenus

_menus.create({
  id: 'copy-element-text',
  title: _browser.i18n.getMessage('menuItemCopyElementText'),
  contexts: ['all']
})

_menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case 'copy-element-text':
      _browser.tabs.sendMessage(tab.id, { type: 'element' }, { frameId: info.frameId })
      break
    default:
      break
  }
})
