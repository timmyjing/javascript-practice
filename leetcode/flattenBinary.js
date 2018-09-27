// Given a binary tree, flatten it to a linked list in-place.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

// cannot use recursion as you cannot return anything, no base case,
// iterative pre order DFS, root, left, right
// use a stack to keep track of nodes 
// could use a stack to place nodes and then iterate and relink them once in order
// push right child into stack first, then left child
// could also use a queue i guess
var flatten = function(root) {
    const queue = [];
    let currNode = root;
    
    if (!root) return;
    
    if (currNode.right) queue.unshift(currNode.right);
    if (currNode.left) queue.unshift(currNode.left);
    
    root.left = null;
    while (queue.length > 0) {
        let popped = queue.shift();
        if (popped.right) queue.unshift(popped.right);
        if (popped.left) queue.unshift(popped.left);
        currNode.right = popped;
        currNode = popped;
        popped.left = null;
    }
    
    
    
};