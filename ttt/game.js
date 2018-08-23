// handles game logic
// should keep track of the marked tiles
// #won #handleTurn #switchTurn #over #tie #validMove

function Game() {
  this.playerOneTurn = true;
  this.board = new Board();
}

Game.prototype.switchTurn = function() {
  this.playerOneTurn = !this.playerOneTurn;
}

Game.prototype.run = function() {

  while (!this.board.over) {
    let currPlayer = this.playerOneTurn ? "X" : "O";
    // get position from current player
    try {
      this.board.handleInput(currPlayer, pos);
    } catch {
      this.board.handleInput(currPlayer, pos);
    }
  }

  if (this.board.won) {
    console.log(`${this.board.won} won!`);
  } else {
    console.log('Tie!');
  }
}