// board class
// renders board

function Board() {
  this.grid = [[null, null, null], [null, null, null], [null, null, null]];
}

Board.prototype.handleInput = function(player, pos) {
  if (this.validMove(pos)) {
    this.grid[pos[0]][pos[1]] = player;
  } else {
    throw "invalid move";
  }
}

Board.prototype.full = function() {
  return this.grid.every( function(row) {
    return row.every( function(col) {
      return col;
    });
  });
}

Board.prototype.isOver = function() {
  console.log(this.full());
  console.log(this.won());
  return this.full() || this.won();
}

Board.prototype.won = function() {
  for (let i = 0; i < 3; i++) {
    const row = this.grid[i];
    if ((row[0] == row[1]) && (row[1] == row[2]) && row[0]) return row[0];
  }

  for (let i = 0; i < 3; i++) {
    if ((this.grid[i][0] == this.grid[i][1]) && (this.grid[i][1] == this.grid[i][2]) && this.grid[i][0]) return this.grid[i][0];
  }

  if (this.grid[1][1] && ((this.grid[0][0] == this.grid[1][1]) && (this.grid[1][1] == this.grid[2][2])) || ((this.grid[0][2] == this.grid[1][1]) && (this.grid[1][1] == this.grid[2][0]))) return this.grid[1][1];

  return false;
}

Board.prototype.validMove = function(pos) {
  return !this.grid[pos[0]][pos[1]];
}

Board.prototype.render = function() {
  for (let i = 0; i < 3; i++) {
    console.log(this.grid[i]);
  }
}

module.exports = Board;