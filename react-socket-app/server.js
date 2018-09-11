const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port = 4000;

const app = express();

const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', socket => {
  console.log('connected');

  socket.on('change color', color => {
    console.log('Color changed to ' + color);
    io.sockets.emit('change color', color);
  })

  socket.on('disconnect', () => {
    console.log('disconnected')
  })  
})

server.listen(port, () => console.log('listening on port 4000'));  

