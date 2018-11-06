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


/*
Boggle Board (From Geeks For Geeks)
Given a dictionary and an M x N board where every node has one character. Find all possible words that can be 
formed by a sequence of adjacent characters. Note that we can move to any of 8 adjacent characters, but a word 
should not have multiple instances of the same node.

Example:

// Input:
let dictionary = ["GEEKS", "FOR", "QUIZ", "GO"];
let boggle = [['G','I','Z'],
              ['U','E','K'],
              ['Q','S','E']];
findWords(boggle) // => The Following words of dictionary are present
                  // => GEEKS
                  // => QUIZ

what if large dictionary set? what if there were multiple words that started 
with the same letter?

starting with each node, if the node starts with a letter that is in the dictionary, 
take those word and check if any of the adjacent has the next letter. if so, do a DFS on those nodes. if not, continue.
once a word has been finished, then push it into the result. have to keep track of visited nodes for each word search.


*/

function solveBoggle(board, dictionary) {
  const result = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let letter = board[i][j];

      let words = dictionary.filter( el => el.startsWith(letter));

      words.forEach(word => {
        if (findWord(word, i, j, board)) result.push(word);
      });
    }
  }

  return result;
}

function findWord(word, i, j, board, visited) {
  if (!word) return true;
  if (i < 0 || i > board.length - 1) return false;
  if (j < 0 || j > board.length - 1) return false;

  if (!visited) {
    visited = [];
    for (let k = 0; k < board.length; k++) {
      let row = new Array(board[0]);
      row.fill(false);
      visited.push(row);
    }
  }

  visited[i][j] = true;

  const letter = board[i][j];
  const dirs = [ [-1,0], [1,0], [0,-1], [0, 1], [-1,-1], [-1, 1], [1, 1], [1, -1] ];

  if (word.startsWith(letter)) {
    for (let m = 0; m < dirs.length; m++) {
      let dir = dirs[m];
      if (findWord(word.slice(1), i + dir[0], j + dir[1], board, visited)) return true;
    }

  }


  return false;
}


let dictionary = ["GEEKS", "FOR", "QUIZ", "GO"];
let boggle = [['G','I','Z'],
              ['U','E','K'],
              ['Q','S','E']];

console.log(solveBoggle(boggle, dictionary));