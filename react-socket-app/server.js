const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port = 3000;

const app = express();

const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', socket => {
  console.log('connected');

  socket.on('disconnect', () => {
    console.log('disconnected')
  })
})

server.listen(port, () => console.log('listening on port 3000'));  

