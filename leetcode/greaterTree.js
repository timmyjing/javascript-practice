// Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original 
// BST is changed to the original key plus sum of all keys greater than the original key in BST.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */


//  naive solution

var convertBST = function(root) {
// can traverse the tree and grab all the values into an array and then traverse the tree again to add
//     greater values to each node. Use a BFS to build the values
    
    if (!root) return null;
    
    var values = [];
    
    var queue = [root];
    
//     use BFS to get all values 
    
    while (queue.length > 0) {
        var currNode = queue.shift();
        values.push(currNode.val);
        if (currNode.left) queue.push(currNode.left);
        if (currNode.right) queue.push(currNode.right);
    }
    
//     use BFS again to build new tree
    
    queue = [root];
    
    var greaterVals;
    
    while (queue.length > 0) {
        currNode = queue.shift();
//  use filter and reduce to get the sum of all the greater values
        greaterVals = values.filter( val => val > currNode.val).reduce( (a,b) => a + b, 0);
        currNode.val += greaterVals;
        if (currNode.left) queue.push(currNode.left);
        if (currNode.right) queue.push(currNode.right);
    }
    
    
    return root;
};