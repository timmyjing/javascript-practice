// handles game logic
// should keep track of the marked tiles
// #won #handleTurn #switchTurn #over #tie #validMove
const Board = require('./board.js');
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Game() {
  this.playerOneTurn = true;
  this.board = new Board();
}

Game.prototype.switchTurn = function() {
  this.playerOneTurn = !this.playerOneTurn;
}

Game.prototype.run = function() {
  let pos = rl.question('Enter a pos: ', answer => {
    let pos = answer.split(",");
    pos = [parseInt(pos[0]), parseInt(pos[1])];
    let currPlayer = this.playerOneTurn ? "X" : "O";
    try {
      this.board.handleInput(currPlayer, pos);
    } catch(err) {
      console.log(err);
      this.board.handleInput(currPlayer, pos);
    }
    this.switchTurn();
    if (this.board.over) {
      console.log('gg');
    } else {
      this.board.render();
      this.run();
    }
  });
}


const game = new Game();

game.run();