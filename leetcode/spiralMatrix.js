/**
 * @param {number[][]} matrix
 * @return {number[]}

 
 pattern is travel col width, then travel down row - 1;
 then travel left w - 1, then up row - 2, then
 travel right w - 2
 
 travel the outer then recursively travel the inner
 
 can keep a directions array
 dupe the matrix to keep track of visited.
 
 traverse right, then down, then left until end reached
 or visted reach. continue until everything is visited
 

 
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return matrix;
  const dir = [[0,1], [1,0], [0,-1], [-1,0]];
  const m = matrix.length;
  const n = matrix[0].length;
  let currDir = 0;
  let curr = [0,0];
  const result = [];
  
  for (let i = 0; i < m * n; i++) {

    result.push(matrix[curr[0]][curr[1]]);
    matrix[curr[0]][curr[1]] = false;
    
//     increment
    if ((curr[0] + dir[currDir][0] < m && curr[0] + dir[currDir][0] >= 0) && (curr[1] + dir[currDir][1] < n && curr[1] + dir[currDir][1] >= 0) && matrix[curr[0] + dir[currDir][0]][curr[1] + dir[currDir][1]]) {
      curr = [curr[0] + dir[currDir][0], curr[1] + dir[currDir][1]];
    } else {
//       change the direction

      currDir = (currDir + 1) % 4;
      curr = [curr[0] + dir[currDir][0], curr[1] + dir[currDir][1]]; 
    }
    
  }

  
  return result;
};