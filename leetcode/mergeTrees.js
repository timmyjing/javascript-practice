// Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

// You need to merge them into a new binary tree. The merge rule is that if two nodes 
// overlap, then sum node values up as the new value of the merged node. Otherwise, 
// the NOT null node will be used as the node of new tree.

var mergeTrees = function(t1, t2) {
//   if both roots are null, return null
    if (!t1 && !t2) return null;
    var newRoot;
    
//   if either one is null, create a new tree of the one tree that isn't null
    if (!t1 || !t2) {
      // determine non empty tree and create a new tree recursively
        var nonEmptyTree = !t2 ? t1 : t2;
        newRoot = new TreeNode(nonEmptyTree.val);
        newRoot.left = mergeTrees(nonEmptyTree.left, null);
        newRoot.right = mergeTrees(nonEmptyTree.right, null);
        
        return newRoot;
    }    
//     set the new root to be a new node with the vals of 1 and 2
    newRoot = new TreeNode(t1.val + t2.val);
    
//     merge the left and right subtrees
    newRoot.left = mergeTrees(t1.left, t2.left);
    
    newRoot.right = mergeTrees(t1.right, t2.right);
    
    return newRoot;
};