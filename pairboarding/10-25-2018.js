// Find the in-order successor for a given key in a BST
// Given a BST, find the in-order successor of a given key in it. If the given key doesn't appear in the BST, then return the next greater key (if any) present in the BST.
// An in-order successor of a node in a BST is the next node in the in-order traversal of it. Consider the below BST:

//       15
//     /    \
//   10      20
//  /  \     / \
// 8   12  16   25

// - The in-order successor of 8 is 10
// - The in-order successor of 12 is 15
// - The in-order successor of 25 doesn't exist

/*
an in order sucessor is the following number of the given key. it will be the smallest value that is greater than the key.

find the node with the key
check if that node is a leaf
NON LEAF:
check if node has a right tree, if so search tree for the left most value, this would be the min of the right tree and
would be the next greater value.

if node doesnt have a right subtree, treat like a leaf.

LEAF:
if node is a leaf, find its parent.
if node is left of parent, return parent
if node is right of parent, recurse to find parents parent and determine if value is less than or greater than key. if less than, there is no
greater node

maybe it is better to find the parent of the node. more options that way. and you always have a reference to the key since it is a BST.

account for key not appearing in tree...can insert into the tree key if it doesnt exist and then find successor. 
could also search for smallest value greater than key with helper method
*/



function ios(root, key) {
  if (!root) return null;

// find parent of key
  const parent = findParent(root, key);

// if no parent of key, then try to find the smallest value greater than key

  if (!parent) {
    return findMinGreater(root, key);
  }

// if there is a parent, check if the child is leaf

  let child;

  if (key > parent.val) {
    child = parent.right;
  } else {
    child = parent.left;
  }

  if (child === parent.left && !child.right) {
    return parent.val;
  }

  if (child.right) {
    return findMin(child.right);
  }

  if (child === parent.left && isLeaf(child)) {
    return parent.val;
  }

  if (isLeaf(child) && child === parent.right) {
    // need to recurse
    // find parent of the parent. check its value to see if it is less than or greater than key. if it is less than, the
    // parent was to the right most node and there is no bigger element. this means that the child is the max value
    const parentOfParent = findParent(root, parent.val);
    if (parentOfParent.val > key) {
      return parentOfParent.val;
    } else {
      return null;
    }
  }
}


function findMinGreater(root, key) {
  if (!root) return null;

  let min = null;

  if (root.val > key) {
    min = root.val;
  }

  if (root.val > key) {
    return findMinGreater(root.left, key) || min;
  } else {
    return findMinGreater(root.right, key) || min;
  }

}


function isLeaf(node) {
  return !node.left && !node.right;
}

function findParent(root, key) {
  if (!root) return null;

  if ((root.left && root.left.val === key) || (root.right && root.right.val === key)) return root;

  if (root.val > key) {
    return findParent(root.left);
  } else {
    return findParent(root.right);
  }

}

function findMin(node) {
  if (!node || !node.left) return node;

  return findMin(node.left);
}
