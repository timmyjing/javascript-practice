/*
4.1 Implement a function to check if a binary tree is balanced. For the purposes of
this question, a balanced tree is defined to be a tree such that the heights of the
two subtrees of any node never differ by more than one.



subtree height of left and right of root never differ by more than one

helper function to check depth needed possibly?

get depth of left subtree and right subtree and compare

ADDED: have to make sure every nodes subtrees are balanced too
*/

const isBalanced = root => {
  if (!root || (!root.left && !root.right)) return true;

  const leftDepth = depth(root.left);
  const rightDepth = depth(root.right);

  const diff = Math.abs(leftDepth - RightDepth) > 1;
  if (!diff) return false;
  // added this after solution
  return isBalanced(root.left) && isBalanced(root.right);
}

const depth = root => {
  if (!root) return 0;

  let left = 0;
  let right = 0;

  if (root.right) right += depth(root.right) + 1;
  if (root.left) left += depth(root.left) + 1;

  return Math.max(left, right);
}

/*
4.2
Given a directed graph, design an algorithm to find out whether there is a route
between two nodes.

keep track of the visited nodes
starting at node 1, do a BFS through the adjacent nodes.
if one of the adjacent nodes ends up being B, return true
return false at the end if nothing is found
*/

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}


const findRoute = (A, B) => {
  A.visited = true;
  const queue = [A];

  while (queue.length > 0) {
    const node = queue.shift();

    node.visited = true;

    node.adjacent.forEach( adj => {
      if (adj === B) return true;

      if (!adj.visited) queue.push(adj);
    })

  }

  return false;
}

/*
4.3 Given a sorted (increasing order) array with unique integer elements, write an algorithm
to create a binary search tree with minimal height.

do something sorta like a divide and conquer
get the middle of the the array. make that the root.
recursively call this algorithm on the left slice and right slice and set those result to be
the left and right respectively.

since the input array is sorted, this divide and conquer algo should fulfill the BST reqs.
i.e. left tree is the left slice of array which will always be less than mid.

O(n) space and O(nlogn) time
*/

const createBST = array => {
  if (array.length === 0) return null;

  if (array.length === 1) return new Node(array[0]);

  let mid = Math.floor(array.length / 2);

  let root = new Node(array[mid]);

  root.left = createBST(array.slice(0,mid));
  root.right = createBST(array.slice(mid+1));

  return root;
}
