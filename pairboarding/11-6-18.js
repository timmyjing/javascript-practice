// You are given a two-dimensional array (matrix) of potentially unequal height and width containing only 0s and 1s. 
// Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1s that are either 
// horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river determines its size. 
// Write a function that returns an array of the sizes of all rivers represented in the input matrix. Note that these sizes do not need 
// to be in any particular order.

// Sample Input:

// [
//   [1,0,0,1,0],
//   [1,0,1,0,0],
//   [0,0,1,0,1],
//   [1,0,1,0,1],
//   [1,0,1,1,0]
// ]
// Sample Output:

// => [1,2,2,2,5]

/*
at each cell, do a DFS on the horizontal and vertical adjacent cells to see if there are other adjacent elements. search NSEW. 
mark cells as visited. once a result is returned, push into results array.

*/

function rivers(arr) {
  if (!arr) return null;

  const result = [];

  const visited = [];

// initialize map of visited cells

  for (let i = 0; i < arr.length; i++) {
    let row = new Array(arr[0].length);
    row.fill(false);

    visited.push(row);
  }


  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      let cell = arr[i][j];

      if (cell === 1 && !visited[i][j]) {
        result.push(findAdj(arr, i, j, visited));
      }
    }
  }

  return result;
}

function findAdj(arr, r, c, visited) {
  if (r < 0 || r > arr.length - 1) return 0;
  if (c < 0 || c > arr[0].length - 1) return 0;
  if (arr[r][c] === 0 || visited[r][c]) return 0;

  // edge and out of bound conditions
  if (r < 0 || r > arr.length - 1) return 0;
  if (c < 0 || c > arr[0].length - 1) return 0;
  visited[r][c] = true;
  let result = 1;

  // check NSEW
  result += findAdj(arr, r - 1, c, visited);
  result += findAdj(arr, r + 1, c, visited);
  result += findAdj(arr, r, c - 1, visited);
  result += findAdj(arr, r, c +  1, visited);

  return result;
}

let arr =  [ [1,0,0,1,0], [1,0,1,0,0], [0,0,1,0,1], [1,0,1,0,1], [1,0,1,1,0] ];

console.log(rivers(arr));