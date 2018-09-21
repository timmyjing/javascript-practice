// Given a binary tree, return the inorder traversal of its nodes' values.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
//     in order traversal is when you visit left, root, right
//     recursive solution 
    if (!root) return [];
    
    return inorderTraversal(root.left).concat( root.val, inorderTraversal(root.right));
    
    
    
};


// Iteratively