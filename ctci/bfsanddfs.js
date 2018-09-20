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

const inDFS = node => {
  if (!node) return null;

  inDFS(node.left);
  console.log(node.val);
  inDFS(node.right);
}


const postDFS = node => {
  if (!node) return null;

  postDFS(node.left);
  postDFS(node.right);
  console.log(node);

}

// doing a pre order first
const iterativeDFS = node => {
  if (!node) return null;

  const queue = [node];

  while (queue.length > 0) {
    const currNode = queue.shift();
    console.log(currNode.val);

    if (currNode.right) queue.unshift(currNode.right);
    if (currNode.left) queue.unshift(currNode.left);
  }

}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

iterativeDFS(root);

