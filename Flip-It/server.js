var express = require('express')
var http = require('http')
var socketio = require('socket.io')

var app = express()
var server = http.Server(app)
var websocket = socketio(server)
server.listen(3005, () => console.log('listening on *:3005'))

// websocket.on('connection', socket => {
//   socket.on('sendState', state => {
//     console.log('server - send-state', state)
//     socket.broadcast.emit('newState', state)
//   })
// })
let logCount = 0
websocket.on('connection', socket => {
  socket.on('sendState', state => {
    console.log('server - send-state', state)
    if (!logCount) {
      logCount = 1
      setTimeout(
        () =>
          socket.emit('newState', [
            false,
            false,
            false,
            false,
            true,
            false,
            false,
            false,
            true,
            true,
            true,
            false,
            true,
            true,
            true,
            true
          ]),
        1000
      )
    } else {
      setTimeout(
        () =>
          socket.emit('newState', [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
          ]),
        1000
      )
    }
  })
})

// Event listeners.
// When a user joins the chatroom.
