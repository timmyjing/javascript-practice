
// Given a linked list, remove the n-th node from the end of list and return its head.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */
var removeNthFromEnd = function(head, n) {
    var count = 0;
    var nthPlusOne = head;
    var currNode = head;
    
    while (currNode) {
        if (count < n + 1) {
            count++;
        } else {
          nthPlusOne = nthPlusOne.next;
        }
        
        currNode = currNode.next;
    }
    
    if (nthPlusOne === head && count < n + 1) {
        head = head.next;
    } else {
        nthPlusOne.next = nthPlusOne.next.next;
    }
    
    return head;
};

/*
approach - start at the head and keep a variable to keep track of the prev to nth node, this will be the head initially.
keep a count of how many nodes have been visited, once that number becomes n, start advancing the n + 1th node pointer.

if this node ends up being the head, reset the head pointer to head.next and return.

1-2, 1, 1
curr = null
count = 2
nth = 1

POST SOLUTION: Could also use advancing pointers technique. Keep two pointers and advance one
n steps so the second pointer will always be offset.
*/