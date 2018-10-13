// Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from root node down to the nearest leaf node.

// For example, minimum height of below Binary Tree is 2.


function findMinDepth(root) {
  if (!root) return 0;

  if (!root.left && !root.right) return 1;
  
  let left = Infinity;
  let right = Infinity;

  if (root.left) left = 1 + findMinDepth(root.left);

  if (root.right) right = 1 + findMinDepth(root.right);

  return Math.min(left, right);
}
