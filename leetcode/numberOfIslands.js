/**
 * @param {character[][]} grid
 * @return {number}
 
 go through each cell, if cell is land and unvisited, incremeent count by one and then 
 do a recursive search to all adj. if adj land, mark as visited.

 this solution does mutate so O(1) space. if a visited map is created, will need O(mn) extra space;
 this solution checks all the cells so O(mn) time complexity. m and n are row and columns.
 */
var numIslands = function(grid) {
  if (grid.length === 0 || !grid || grid[0].length === 0) return 0;
  let count = 0;
  
  function visit(grid, r, c) {
    if (r > grid.length - 1 || r < 0) return;
    if (c > grid[0].length - 1 || c < 0) return;
    if (grid[r][c] === '1') {
      grid[r][c] = true;
    } else {
      return;
    }
    visit(grid, r - 1, c);
    visit(grid, r + 1, c);
    visit(grid, r, c + 1);
    visit(grid, r, c - 1);
  }
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let cell = grid[i][j];
      
      if (cell === '1') {
        count++;
        visit(grid, i,j);
      }
    }
  }
  
  return count;
};