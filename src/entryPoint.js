// Import Modules from Electron Package
const { app, BrowserWindow } = require('electron')

// Utility Modules
const path = require('path')
const url = require('url')

// Initialize Window
let mainWindow

// Create Window Method
function createWindow() {
	mainWindow = new BrowserWindow({
		width: 850, // Set Size for Window Width
		height: 600, // Set Size for Window Height
		webPreferences: {
			nodeIntegration: true, // Integrate With NodeJS
		},
	})

	// Loading Demonic React Application URL
	mainWindow.loadURL(
		process.env.ELECTRON_START_URL ||
			url.format({
				pathname: path.join(__dirname, '/../public/index.html'),
				protocol: 'file:',
				slashes: true,
			})
	)

	// it will emit when window'll close
	mainWindow.on('closed', () => {
		mainWindow = null
	})
}

// Create our window when application is ready
app.on('ready', createWindow)

// When all tabs were closed, we'll quit Electron proccess
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

// Activate Window here
app.on('activate', () => {
	if (mainWindow === null) {
		createWindow()
	}
})
