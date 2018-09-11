import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="App">
        <p>Chat App</p>
      </div>
    );
  }
}

export default App;
