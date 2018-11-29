/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 
 traverse the tree with a BFS to serialize
 */
var serialize = function(root) {
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    let node = queue.shift();
    if (node) {
      result.push(node.val.toString());
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push('null');
    }
  }
  return `${result.join(",")}`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const queue = data.split(",");
  let value = queue.shift();
  let root;
  let level;
  
  if (value === 'null') {
    return null;
  } else {
    value = parseInt(value);
    root = new TreeNode(value);
    level = [root];
  }
  let nextLevel = [];
  let levelCount = 1;
  
  
  while (queue.length > 0) {
    const val1 = queue.shift();
    const val2 = queue.shift();
    let prevLevelNode = level.shift();
    
    while (!prevLevelNode) {
      prevLevelNode = level.shift();
    }
    
    if (val1 === "null") {
      nextLevel.push(null);
    } else {
      prevLevelNode.left = new TreeNode(parseInt(val1));
      nextLevel.push(prevLevelNode.left);
    }
    
    if (val2 === "null") {
      nextLevel.push(null);
    } else {
      prevLevelNode.right = new TreeNode(parseInt(val2));
      nextLevel.push(prevLevelNode.right);
    }
    
    if (nextLevel.length === levelCount * 2) {
      level = nextLevel;
      levelCount *= 2;
    }
  }
  return root;
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */