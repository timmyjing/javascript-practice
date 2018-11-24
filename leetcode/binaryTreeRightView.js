/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 
 do a BFS, per each level return the right most value
 O(n) time complexity, O(m) space where m is longest row
 */
var rightSideView = function(root) {
  if (!root) return [];
  const result = [];
  let row = [root];
  
  while (row.length > 0) {
    let newRow = [];
    for (let i = 0; i < row.length; i++) {
      if (row[i].left) newRow.push(row[i].left);
      if (row[i].right) newRow.push(row[i].right);
    }
    result.push(row[row.length - 1].val);
    row = newRow;
  }
  
  
  return result;
};