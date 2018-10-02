// Shortest Distance Between Nodes
// Write a method, shortestDistance, that takes in a root node and two node values. This method should return the shortest distance between these two nodes.





// if a === b return 0
// the tree is a BST
// if A or B is the root, DFS for the other val in appropriate subtree depending on val
// if A and B are both less than or greater than root, search appropriate subtree
//  if root is between A and B, search for both and add distance
// a <= b for simplification

const findDistance = (root, val) => {
  if (root.val == val) return 0;

  if (val > root.val) {
    return 1 + findDistance(root.right);
  } else {
    return 1 + findDistance(root.left);
  }
}


const shortestDistance = (root, a, b) => {
  if (a === b) return 0;

  if (root.val === a) {
    if (b > root.val) {
      return 1 + findDistance(root.right, b);
    } else {
      return 1 + findDistance(root.left, b);
    }
  }

  if (root.val === b) {
    if (a > root.val) {
      return 1 + findDistance(root.right, a);
    } else {
      return 1 + findDistance(root.left, a);
    }
  }


  if (root.val > a && root.val > b) {
    return shortestDistance(root.left, a, b);
  }

  if (root.val < a && root.val < b) {
    return shortestDistance(root.right, a, b);
  }

  let left, right;

  left = 1 + findDistance(root.left, a);
  right = 1 + findDistance(root.right, b);

  return left + right;
}


