const Chat = require('./chat');

class ChatUI {
  constructor(socket) {
    this.chat = new Chat(socket);
    this.input = document.querySelector('input');
    this.form = document.querySelector('form');
    this.msgList = document.getElementById('messages');
    this.submitHandler();
  }

  getInput() {
    return this.input.value;
  }



  emitMessage() {
    console.log(this.getInput());
    console.log('send messages')
    this.chat.sendMessage(this.getInput());
    this.receiveMessages(this.getInput());
  }

  receiveMessages(message) {
    const newMessage = document.createElement('li');
    newMessage.textContent = message;
    this.msgList.appendChild(newMessage);
    // this.chat.on('get message', data => {
    //   console.log(data);
    // });
    // console.log('received messages');
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