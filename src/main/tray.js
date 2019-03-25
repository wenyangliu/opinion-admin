import {Menu, Tray, BrowserWindow, app} from 'electron'
const path = require('path')

const iconTray = new Tray(path.join(__static, 'favicon.ico'))

let win = BrowserWindow.getFocusedWindow()

win.on('close', (e) => {
    if (!win.isFocused()) {
        win = null
    } else {
        e.preventDefault()
        win.hide()
    }
})

iconTray.on('click', () => {
    win.show()
})

const contextMenu = Menu.buildFromTemplate([
    {
        label: '打开',
        click: function () {
            win.show()
        }
    },
    {
        label: '退出',
        click: function () {
            app.quit()
        }
    }
])

iconTray.setToolTip('舆情管理')
iconTray.setContextMenu(contextMenu)

