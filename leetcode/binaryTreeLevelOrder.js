// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// use a BFS to traverse through all the levels but instead build a nested array of the current level and nodes
var levelOrder = function(root) {
    if (!root) return [];
    
    var result = [];
    
    var level = [root];
    
    while (level.length > 0) {
        result.push(level.map( node => node.val));
        
//         with the previous level, build the next level and point level to this next level
        let newLevel = [];
        level.forEach( el => {
            if (el.left) newLevel.push(el.left);
            if (el.right) newLevel.push(el.right);
        })
        
        level = newLevel;
    }
    
    return result;
};