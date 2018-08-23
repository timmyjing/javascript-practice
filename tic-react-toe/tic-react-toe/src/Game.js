import React from 'react';

class Game extends React.Component {

  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(pos) {

  }

  isOver() {
    
  }


  render() {
    return (
      <div> 
        Tic React Toe
        {/* <Board /> */}
      </div>
    );
  }

}


export default Game;