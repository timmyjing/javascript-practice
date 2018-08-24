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

// Game.prototype.run = function() {
//   let pos = rl.question('Enter a pos: ', answer => {
//     let pos = answer.split(",");
//     pos = [parseInt(pos[0]), parseInt(pos[1])];
//     let currPlayer = this.playerOneTurn ? "X" : "O";
//     try {
//       this.board.handleInput(currPlayer, pos);
//     } catch(err) {
//       console.log(err);
//       this.board.handleInput(currPlayer, pos);
//     }
//     this.switchTurn();
//     if (this.board.over) {
//       console.log('gg');
//     } else {
//       this.board.render();
//       this.run();
//     }
//   });
// }

Game.prototype.getInput = function() {

  return new Promise( resolve => {
    const prompt = rl.question('Enter a row: ', row => {
        row = parseInt(row);
        return rl.question('Enter a col: ', col => {
          col = parseInt(col);
          resolve([row, col]);
        });
    });
  });
  // return await rl.question('Enter a pos: ', answer => {
  //   let pos = answer.split(",");
  //   console.log(pos);
  //   return [parseInt(pos[0]), parseInt(pos[1])];
  // });
}

Game.prototype.run = async function() {
  let pos = await this.getInput();
  console.log(pos);

  let currPlayer = this.playerOneTurn ? "X" : "O";

  this.board.handleInput(currPlayer, pos);
  // try {
  //   this.board.handleInput(currPlayer, pos);
  // } catch(err) {
  //   console.log(err);
  //   this.board.handleInput(currPlayer, pos);
  // }

  this.switchTurn();

  if (this.board.isOver()) {
    console.log('gg');
  } else {
    this.board.render();
    this.run();
  }
}


const game = new Game();

game.run();