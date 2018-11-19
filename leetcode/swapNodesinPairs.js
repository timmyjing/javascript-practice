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
 
 
 iterate through nodes
 take curr node next, save curr nodes next next pointer,
 point curr node next -> curr node
 curr node -> curr node next next;
 have to keep track of of prev node;
 prev would be curr node
 curr node = curr node next next;
 
 prev = 1
 cn3
 cnn4
 cnnn - null
 4 - 3 ->
 
 2 -> 1 -> 4 - 3 -> null
 
 if at head, rearrange head pointer

 O(n) time complexity where n is length of linked list,
 O(1) space
 */
var swapPairs = function(head) {
  let prev = head;
  let currNode = head;
  
  while (currNode) {
    if (!currNode.next) return head;
    let adj = currNode.next;
    let adjNext = currNode.next.next;
    adj.next = currNode;
    currNode.next = adjNext;
    if (prev === head) {
      head = adj;
    } else {
      prev.next = adj;
    }
    prev = currNode;
    currNode = currNode.next
  }
  
  return head;
};