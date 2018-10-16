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


/*

Maximum Path Sum in a Binary Tree
Given a binary tree, find the maximum path sum. The path may start and end at any node in the tree.

Example:

Input: Root of below tree
       1
      / \
     2   3
Output: 6

See below diagram for another example.
1+2+3

if null return 0
if just root, return the value or root.
add the max path sum of left and right if their sums are positive.
this will be done recursively to all the subtrees.

*/

function maxPathSum(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return root.value;

  let left = 0;
  let right = 0;

  if (root.left) left = Math.max(left, maxPathSumHelper(root.left));
  if (root.right) right = Math.max(right, maxPathSumHelper(root.right));

  return root.value + left + right;
}


function maxPathSumHelper(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return root.value;

  let left = 0;
  let right = 0;

  if (root.left) left = Math.max(left, maxPathSumHelper(root.left));
  if (root.right) right = Math.max(right, maxPathSumHelper(root.right));
  
  if (left > right) {
    return root.value + left;
  } else {
    return root.value + right;
  }

}


/*
Check if a given array can represent Preorder Traversal of Binary Search Tree
Given an array of numbers, return true if given array can represent preorder traversal of a Binary Search Tree, 
else return false. Expected time complexity is O(n).

Examples:

Input:  pre[] = {2, 4, 3}
Output: true
Given array can represent preorder traversal
of below tree
    2
     
      4
     /
    3

Input:  pre[] = {2, 4, 1}
Output: false
Given array cannot represent preorder traversal
of a Binary Search Tree.

Input:  pre[] = {40, 30, 35, 80, 100}
Output: true
Given array can represent preorder traversal
of below tree
     40
   /   
 30    80 
        
  35     100 


Input:  pre[] = {40, 30, 35, 20, 80, 100}
Output: false
Given array cannot represent preorder traversal
of a Binary Search Tree.

preorder is root, left, right

r is 40
30 is less than 40
35 is less than 40, greater than 30

80 is greater than 40
100 is greater than 80
we know first el is root
second could be left or right, if less than root, then it is left, if greater then right
third could be right or on the left subtree

keep track of root and level as a solution? pop elemenets off from the input arr and determine if it is a valid BST?
root = 2
[3]

4 is greater than 2 so has to be left
now we are right of the root
next el is 3, this is less than 4, so on its left. also less than root. have to also check the range depending on left or right

*/