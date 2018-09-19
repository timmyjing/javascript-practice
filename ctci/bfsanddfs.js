class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// BST
// Visit the children before visiting grand children, level search

const BST = root => {
  if (!root) return null;

  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    console.log(node.val);

    if (node.left) queue.push(node.left);

    if (node.right) queue.push(node.right);
  }

}


/*

DFS

Visit grandchildren before visiting children

In order - Left, Root, Right
Pre Order - Root, Left, Right
Post Order - Left, Right, Root

Write these recursively and iteratively!
*/

const preDFS = node => {
  if (!node) return null;

  console.log(node.val);

  preDFS(node.left);

  preDFS(node.right);
}

const root = new Node(1);