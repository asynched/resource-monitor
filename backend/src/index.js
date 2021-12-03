const { WebSocketServer, WebSocket } = require('ws')
const { getComputerStats } = require('./util/computer-info')

/** @type { WebSocket[] } */
const sockets = []

const server = new WebSocketServer({
  port: 1337,
})

server.on('connection', (socket) => {
  sockets.push(socket)

  socket.on('close', () => {
    sockets.splice(sockets.indexOf(socket), 1)
  })
})

setInterval(async () => {
  const computerStats = await getComputerStats()
  sockets.forEach((socket) => socket.send(JSON.stringify(computerStats)))
}, 500)
