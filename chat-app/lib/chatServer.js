const io = require('socket.io');

// const createChat = server => require('socket.io')(server, {
//   path: '/test',
//   serveClient: false,
//   pingInterva: 10000,
//   pingTimeout: 5000,
//   cookie: false
// });

let chat;
let guestNum = 1;
const nickNames = {};

const chatServer = {
  listen(server) {
    chat = io(server);

    chat.on('connection', socket => {
      console.log('user connected');
      guestNum++;

      socket.on('message', message => {
        console.log('hi');
        console.log(message);
      })

      socket.on('disconnect', () => {
        console.log('user disconnected')
      })
    });
  }
}

module.exports = chatServer;