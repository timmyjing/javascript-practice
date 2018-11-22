/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0 || !matrix || matrix[0].length === 0) return 0;
  const m = matrix.length;
  const n = matrix[0].length;
  let searchRow = null;
  
//   BST first index since they are sorted
  let low = 0;
  let high = m - 1;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log(mid)
    if (matrix[mid][0] === target) return true;
    if (matrix[mid][n - 1] === target) return true;
    
    
    if (matrix[mid][0] < target && matrix[mid][n - 1] > target) {
      searchRow = matrix[mid];
      low = high + 1;
    }
    
    if (matrix[mid][0] > target) high = mid - 1;
    
    if (matrix[mid][0] < target) low = mid + 1;
  }
  
  if (!searchRow) return false;
  
  
  low = 0;
  high = n - 1;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    if (searchRow[mid] === target) {
      return true;
    } else if (searchRow[mid] < target){
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  
  return false;
};