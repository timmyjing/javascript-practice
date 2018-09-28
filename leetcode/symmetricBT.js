// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// check if root is null or just root, if just root it is symmetric
// could use a BFS on left tree and a reverse BFS on right tree to check if symmetric
// base cases are just the root or no root is true
// if there is only one child for the root, then it can't be symmetric
var isSymmetric = function(root) {
    if (!root || (!root.left && !root.right)) return true;
    if ((!root.left && root.right) || (!root.right && root.left)) return false;
    
    const left = [root.left];
    const right = [root.right];
    
    while (left.length > 0 && right.length > 0) {
        let leftNode = left.shift();
        let rightNode = right.shift();

        if (!leftNode || !rightNode) {
            if (leftNode !== rightNode) return false;
        } else {
            if (leftNode.val !== rightNode.val) return false;
        }

        if (leftNode !== null) {
            left.push(leftNode.left);
            left.push(leftNode.right);
        }
        
        if (rightNode !== null) {
            right.push(rightNode.right);
            right.push(rightNode.left);
        }
        
    }
    
//     check if any of the queues for either one have any nodes left, if they do it is not symmetric
    if (left.length > 0 || right.length > 0) return false;
    
    return true;
};