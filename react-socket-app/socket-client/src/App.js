import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      endpoint: `http://127.0.0.1:4000`,
      color: 'white'
    }
  }

  send() {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change color', this.state.color);
  }

  setColor(color) {
    this.setState({color});
  }

  render() {

    const socket = socketIOClient(this.state.endpoint);

    socket.on('change color', (color) =>  {
      console.log('change');
      document.body.style.backgroundColor = color;
    });

    return (
      <div className="App">
        <button onClick={() => this.send()}>Change Color</button>

        <button id="red" onClick={() => this.setColor('red')}>Red</button>
        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>

      </div>
    );
  }
}

export default App;
