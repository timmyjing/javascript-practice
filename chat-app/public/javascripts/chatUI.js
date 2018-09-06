const Chat = require('./chat');

class ChatUI {
  constructor(socket) {
    this.chat = new Chat(socket),
    this.input = document.querySelector('input')
  }

  emitMessages(message) {
    console.log('send messages')
  }

  receiveMessages() {
    console.log('received messages')
  }
}