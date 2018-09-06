const io = require('socket.io');

// const createChat = server => require('socket.io')(server, {
//   path: '/test',
//   serveClient: false,
//   pingInterva: 10000,
//   pingTimeout: 5000,
//   cookie: false
// });

let chat;

const chatServer = {
  listen(server) {
    chat = io(server);

    chat.on('connection', () => {
      console.log('connected');
    });
  }
}

module.exports = chatServer;