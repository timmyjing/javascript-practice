// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

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

//     naive solution: iterate through the list once and keep a counter, determine mid after and iterate
//     through again to get node

var middleNode = function(head) {
    if (!head) return null;
    
    if (!head.next) return head;
    
//     use a slow and fast pointer to find the middle
    var slow = head;
    var fast = head;
    
// check if the fast is at the end of the list or if the next node of the fast pointer exists
    while (fast && fast.next) {
//         slow advances one node at a time, fast two at a time

        slow = slow.next;
        fast = fast.next.next;
    }
//     slow pointer will point to mid at the end since it moves 1 per 2 of the fast
    return slow;
    
};