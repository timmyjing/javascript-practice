/*
4.1 Implement a function to check if a binary tree is balanced. For the purposes of
this question, a balanced tree is defined to be a tree such that the heights of the
two subtrees of any node never differ by more than one.



subtree height of left and right of root never differ by more than one

helper function to check depth needed possibly?

get depth of left subtree and right subtree and compare
*/

const isBalanced = root => {
  if (!root || (!root.left && !root.right)) return true;

  const leftDepth = depth(root.left);
  const rightDepth = depth(root.right);

  const diff = Math.abs(leftDepth - RightDepth);
  return diff == 0 || diff == 1;
}

const depth = root => {
  if (!root) return 0;

  let left = 0;
  let right = 0;

  if (root.right) right += depth(root.right) + 1;
  if (root.left) left += depth(root.left) + 1;

  return Math.max(left, right);
}

