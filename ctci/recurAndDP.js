// 9.3
// A magic index in an array A[1.. .n-l] is defined to be an index such that A[i] =
// i. Given a sorted array of distinct integers, write a method to find a magic index, if
// one exists, in array A.
// FOLLOW UP
// What if the values are not distinct?
/*


Brute force way is to just go through the whole array and see if the index is equal to the
element. This would be O(n) time and O(1) space.

Array is sorted and integers are distinct. Can do a binary search type method to split the arrays?

Base case would be if the array is just one element. Then check if the element is equal to index and return if it is.

Since the array is sorted, you have to check if A[i] is greater than i. if so then it is not likely to be on the side to the right
of i since the elements are distinct and it is sorted, meaning that every element after index i will have to be greater than A[i] and 
will also be greater than i.


FOLLOW UP: if the values aren't distinct
[1,1,1,5,7]
*/

const magicIndex = arr => {
  let low = 0;
  let high = arr.length;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] === mid) return mid;

    if (arr[mid] > mid) {
      high = mid - 1;
    }

    if (arr[mid] < mid) {
      low = mid + 1;
    }
  }

  return false;
}

/*
9.8 Write an algorithm to print all ways of arranging eight queens on an 8x8 chess
board so that none of them share the same row, column or diagonal. In this case,
"diagonal" means all diagonals, not just the two that bisect the board.

Brute force solution, pick a row and try ever column position and push those solved boards into a result array if they are a
valid board arrangement. Will have to do some sort of backtracking...if 8 queens cannot be placed, then discard solution. Every time
you place a queen, eliminate the rows and cols and diags from the rest of the possible spots. Will need to mark the nodes.

Will need a helper method to 'solve' a certain board when placing the first queen. Helper method will take a board and try to place
a queen at each row and backtrack if invalid.

ways to arrange board with queen at row 0, col 0 through 8
ways to arrange board with q at 0,0 = q at 0,0 and q2 at 1,2 or q2 at 1,3...etc

as you place a queen at a location, you eliminate some possibilities of where the next queen could be
*/

const placeQueens = (row, queenCols, results) => {

  if (row === 8) return result.push(queenCols);

//  try to place a queen at each column
  for (let i = 0; i < 8; i++) {
    if (validMove(i,queenCols)) {
      queenCols[row] = i;
      placeQueens(row + 1, queenCols, results);
    }
  }
  return results;
}

const validMove = (col, cols) => {
  // return false if diag or col has been seen
}


/*
9.8

You have a stack of n boxes, with widths wi, heights li and depths di The boxes
cannot be rotated and can only be stacked on top of one another if each box in the
stack is strictly larger than the box above it in width, height, and depth. Implement
a method to build the tallest stack possible, where the height of a stack is the sum of
the heights of each box.

Similar to house robber problem? If there is only one box, then take this box only. This is also the base solution.
An additional box, determine if the boxes can be stacked with constraints. If so, add onto stack. If not, take the one with greater
height, which will either be the new box or the previous stack. Sliding window problem? If current box is too big to add to top of stack,
keep removing boxes until there is a fit.

Actually a problem where you take the largest box and try to arrange other boxes on top. Experiment with all boxes as the bottom
and experiment adding boxes and etc.

*/

const stackBoxes = (w, h, d) => {
  const cache = [[0], [0]];

  for (let i = 1; i < w.length; i++) {
    let last = cache[1][cache[1].length - 1];

    if (w[i] < w[last] && h[i] < w[last] && d[i] < w[last]) {
      cache[1].push(i);
    } else {
      let height = cache[1].map( i => h[i]).reduce( (a, c) => a + c, 0);
      cache[1] = h[i] > height ? [i] : cache[1];
    }

    
  }


  return cache[1];
}