// Kth Smallest Element in a BST
// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
// Note: You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

// Example 1:

// Input: root = [3,1,4,null,2], k = 1

//    3
//   / \
//  1   4
//   \
//    2

// Output: 1
// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3

//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1

// Output: 3
// Follow up: What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? 
// How would you optimize the kthSmallest routine?
/*
need to count the numbers of nodes in the subtrees. since BST, smaller elements are to the left. count the left subtree. if k < left subtree count, 
check to the left of the subtree

if k === left subtree count + 1, then return root. if k is greater, then check right subtree for the k - lsubtree smallest element.

determine subtree to search by counting nodes in l tree
if k + 1 == l return root
if k <= l, recursively search left subtree for the kth smallest
if k > l + 1, recursively search right subtree for kth - lth smallest

helper method needed to count l subtree nodes

need to count nodes on left subtree so O(n) time with n being the number of nodes in a subtree.
*/

function countNodes(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  let count = 1;

  if (root.left) count += countNodes(root.left);
  if (root.right) count += countNodes(root.right);

  return count;
}


function kthSmallestBST(root, k) {
  const leftCount = countNodes(root.left);

  if (k <= leftCount) {
    return kthSmallestBST(root.left, k);
  } else if (k === leftCount + 1) {
    return root;
  } else {
    return kthSmallestBST(root.right, k - leftCount - 1);
  }
}



// Delete a node in a BST
// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node 
// reference (possibly updated) of the BST.
// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.
// Note: Time complexity should be O(height of tree).

// Example:

// root = [5,3,6,2,4,null,7]
// key = 3

//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Given key to delete is 3. So we find the node with value 3 and delete it.

// One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

//     5
//    / \
//   4   6
//  /     \
// 2       7

// Another valid answer is [5,2,6,null,4,null,7].

//     5
//    / \
//   2   6
//    \   \
//     4   7

/*
first find the node. if node doesnt exist return root
if node is root, then will have to delete the root and promote a new root.
if node is found, actions to take depends on number of children of node.
if node has no children, then just delete the node.
if node has one child, promote the child and delete the node.
if node has two children, promote the rightmost child on the left tree. this rightmost node on the left
subtree will always be the max of the left subtree and swapping it with the node to be deleted will 
still fulfill the properties of a BST. delete the leaf node after swapping.

*/

function findParent(root, val) {
  if (!root) return null;

  if ((root.left && root.left.val === val) || (root.right && root.right.val === val)) return root;

  if (val < root.val) return findParent(root.left);

  if (val > root.val) return findParent(root.right); 
}

function promoteChild(node) {
  if (!node.left && !node.right) return null;

  if (node.left && !node.right) return node.left;

  if (node.right && !node.left) return node.right;

// if two children, find the right most node on left subtree and promote
  let max = findMax(node.left);
  
  // delete the max from the BST
  deleteFromBST(node.left);

  max.left = node.left;
  max.right = node.right;

  return max;
}

function findMax(root) {
  if (!root || !root.right) return root;

  return findMax(root.right);
}

function deleteFromBST(root, key) {
  if (root.val === key) {
    root = promoteChild(root);


    return root;
  }

  let parent = findParent(root, key);

  if (!parent) return root;

  // now that you have the parent, promote child

  if (parent.left && parent.left.val === key) parent.left = promoteChild(parent.left);

  if (parent.right && parent.right.val === key) parent.right = promoteChild(parent.right);

  return root;

}