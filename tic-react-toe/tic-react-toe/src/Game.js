import React from 'react';
import Board from './Board';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.grid = [null, null, null, null, null, null, null, null, null];
    this.currentTurn = "X";

    this.handleInput = this.handleInput.bind(this);
    this.isOver = this.isOver.bind(this);
    this.isWon = this.isWon.bind(this);
  }

  handleInput(pos) {
    if (this.isOver()) return null;

    if (!this.grid[pos]) {
      let newGrid = [this.grid];
      newGrid[pos] = this.currentTurn;

      this.setState({grid: newGrid, currentTurn: this.currentTurn === "X" ? "O" : "X"});
    }
  }

  isOver() {
    return this.grid.every( grid => grid) || this.isWon();
  }

  isWon() {
    const winCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    winCombos.forEach( combo => {
      if (this.grid[combo[0]] && (this.grid[combo[0]] === this.grid[combo[1]]) && (this.grid[combo[2]] === this.grid[combo[1]])) return this.grid[combo[0]];
    });
    return false;
  }


  render() {
    return (
      <div> 
        Tic React Toe
        <Board grid={this.grid} handleInput={this.handleInput} />
      </div>
    );
  }

}


export default Game;