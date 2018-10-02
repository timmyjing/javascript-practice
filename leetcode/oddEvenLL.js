// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// know that head is odd and head.next is even, keep pointer to those
// keep a count and iterate through the nodes, add to the correct even or odd list, update the curr even and odd

var oddEvenList = function(head) {
    if (!head || !head.next) return head;
    
    var odd = head;
    var even = head.next;
    var currOdd = odd;
    var currEven = even;
    var currNode = head.next.next;
    currEven.next = null;
    currOdd.next = null;
    var count = 1;
    
//     1-2-3
//     1->3->null
//     2
//     null
    
    while (currNode) {
        
        if (count % 2 === 0 ) {
            currEven.next = currNode;
            currNode = currNode.next;
            currEven = currEven.next;
            currEven.next = null;
        } else {
            currOdd.next = currNode;
            currNode = currNode.next;
            currOdd = currOdd.next;
            currOdd.next = null;
        }
        
        
        count++;
    }
    
    
    currOdd.next = even;
    return head;
    
};