/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */


//   start at a node as currHead, gather k nodes from that node.
//   will need to reset the head pointer if this is the first k nodes.
//   the head pointer will point to last
//   keep pointer to the head of these k nodes. 
//   save the pointer of the next node from the kth node.
//   reverse the nodes gathered unless if failed to gather k node.
//   continue with the pointer saved from the next to the kth node.
//   can do recursively too. capture k nodes, reverse. point head to the tail
//   of this reversed series and then recursively call for the rest of the nodes
//   after the kth one.

var reverseKGroup = function(head, k) {
  if (!head) return head;
  
//   capture k nodes
  let currNode = head;
  let count = 1;
  
  while (count < k && currNode.next) {
    currNode = currNode.next;
    count++;
  }
  
//   return head if not enough nodes to modify
  if (count !== k) return head;
  
//   otherwise, save pointer of currNode next, break the link and reverse the head.
  let list = currNode.next;
  currNode.next = null;

//   recursively reverse the rest of the list
  list = reverseKGroup(list, k);
  
  head = reverse(head);

  currNode = head;
  
  while (currNode.next) {
    currNode = currNode.next;
  }
  
  
  currNode.next = list;
  
  return head;
};


function reverse(head) {
  if (!head) return head;
  
  let prev = null;
  
  let currNode = head;
  
  while (currNode) {
    let nextNode = currNode.next;
    currNode.next = prev;
    prev = currNode;
    currNode = nextNode;
  }
  
  return prev;
}

// will refactor later for a faster solution
// could prob do it iteratively and with a faster way
// by playing with pointers. ex. the head node of the k nodes before
// reversing could be saved to a pointer and this can point to the
// next series of reversed k instead of having to iterate through