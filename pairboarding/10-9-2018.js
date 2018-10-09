// Given the root node of a binary search tree, return an in-order doubly-linked circular linked list.

/*
input:
      3
    /   \
  1       5
 / \     / \
0   2   4   6

output:

... 6 <=> 0 <=>1 <=> 2 <=> 3 <=> 4 <=> 5 <=> 6 <=> 0 ...

or...

 0 <=> 1 <=> 2
 ^             ^
 |             3
 v             v
 6 <=> 5 <=> 4

Inorder traversal....left, root, right.
Get the traversals then link the ... left <=> root <=> right <=> left ...
Doubly links could be done using the left/right pointers of nodes

Could just do a DFS and save the ndoes to another data structure and link them in the end. Would take extra memory.

*/

function BSTtoLL(root) {
  if (!root) return root;
  if (!root.left && !root.right) {
    root.right = root;
    root.left = root;
  }

  let head = root;
  let tail = root;

  let left = flattenBSTtoLL(root.left);
  if (left) {
    // got to be careful here, doing this with recursion will produce another circularly linked list
    // traverse through left and point end of left to root.
    // remember to point left to end
    head = left;
    let curr = left;
    while (curr.right) {
      curr = curr.right;
    }
    curr.right = root;
    root.left = curr;
  }

  let right = flattenBSTtoLL(root.right);

  if (right) {
    root.right = right;
    right.left = root;
    let curr = right;
    while (curr.right) {
      curr = curr.right;
    }
    tail = curr;
  }

  // point end to first node
  head.left = tail;
  tail.right = head;

  return head;
}


function flattenBSTtoLL(root) {
  if (!root) return null;
  let head = root;

  if (root.left) {
    head = flattenBSTtoLL(root.left);
    let curr = head;
    while (curr.right) {
      curr = curr.right;
    }

    curr.right = root;
    root.left = curr;
  }

  if (root.right) {
    let right = flattenBSTtoLL(root.right);
    root.right = right;
    right.left = root;
  }

  return head;
}
