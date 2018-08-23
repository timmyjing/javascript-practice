// handles game logic
// should keep track of the marked tiles
// #won #handleTurn #switchTurn #over #tie #validMove

function Game() {
  this.playerOneTurn = true;
  this.grid = new Board();
}

Game.prototype.switchTurn = function() {
  this.playerOneTurn = !this.playerOneTurn;
}

Game.prototype.won = function() {

}