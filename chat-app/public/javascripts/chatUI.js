const Chat = require('./chat');

class ChatUI {
  constructor(socket) {
    this.chat = new Chat(socket);
    this.input = document.querySelector('input');
    this.form = document.querySelector('form');
    this.submitHandler();
  }

  getInput() {
    return this.input.value;
  }



  emitMessage() {
    console.log(this.getInput());
    console.log('send messages')
    this.chat.sendMessage(this.getInput());
  }

  receiveMessages() {
    this.chat.on('message', data => {
      console.log(data);
    });
    console.log('received messages');
  }

  submitHandler() {
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.emitMessage();
      this.input.value = '';
      console.log('cool')
    })
  }
}

module.exports = ChatUI;