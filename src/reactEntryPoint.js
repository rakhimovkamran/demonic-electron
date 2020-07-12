// Import Utility Modules
const net = require('net')
const childProcess = require('child_process')

// Get port from proccess or generate
const port = process.env.PORT ? process.env.PORT - 100 : 3000

// Default URL for React Application
process.env.ELECTRON_START_URL = `http://localhost:${port}`

// Open Socket for Client Updates
const client = new net.Socket()

let startedElectron = false

// Try to connect to socket
const tryConnection = () => {
	client.connect({ port }, () => {
		client.end()
		if (!startedElectron) {
			console.log('starting electron')
			startedElectron = true
			const exec = childProcess.exec
			exec('npm run electron')
		}
	})
}

tryConnection()

// Emit when something went wrong
client.on('error', () => {
	setTimeout(tryConnection, 1000)
})
