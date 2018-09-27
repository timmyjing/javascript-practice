// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

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

// do a level BFS and push the average results into an array
var averageOfLevels = function(root) {
    var result = [];
    var level = [root];
    
    while (level.length > 0) {
        var sum = level.reduce( (a, c) => a + c.val, 0);
        result.push(sum / level.length);
        
        var nextLevel = []
        
        level.forEach( el => {
            if (el.left) nextLevel.push(el.left);
            if (el.right) nextLevel.push(el.right);
        })
        
        level = nextLevel;
    }
    
    return result;
    
};