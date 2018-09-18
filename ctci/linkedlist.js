/*
2.1 Write code to remove duplicates from an unsorted linked list.

FOLLOW UP

How would you solve this problem if a temporary buffer is not allowed?


Naive solution is to go through the list and keep an array of already seen values and remove the node if the value is already seen.
O(n^2) since required to check buffer and O(n) space.

Can be done in place. At every node, check the rest of the list to see if there is there is a duplicate. Remove if so.
O(n^2) solution but can be done without a buffer. O(1) space
Traverse through the node, at each current node, go through the rest of the linked list to see if there duplicates.

5 = 5
5-4-3-3-2 = 5-4-3-2
5-2-2 = 5-2
*/

const removeDup = list => {
  let nodeA = list;

  while (nodeA) {
    let nodeB = nodeA;

    while (nodeB.next) {
      if (nodeB.next.val === nodeA.val) nodeB.next = nodeB.next.next;
      nodeB = nodeB.next;
    }
    nodeA = nodeA.next;
  }

  return list;
}

/*
2.2 Implement an algorithm to find the kth to last element of a singly linked list.

Naive solution: can traverse through the linked list and keep track of a count, then subtract the kth argument from 
the count and iterate through the linked list again to find that element. O(2n) time and O(1) space.

Edge case? Return null if k is greater than the length of the list?

Could also start at head and go through each node, keeping a counter of number of nodes traversed. Once that number is
equal to k, set the kth node to the head and continue going through the nodes, updating the kth node everytime. Eventually, the kth
node will point to the node we want once we reach the end of the list. O(n) time and O(1) space


1-2-3  0, 3
1, 0    1
1-2, 1
*/

const findKth = (list, k) => {
  let kth = null;
  let count = 0;
  let currNode = list;

  while (currNode) {
    if (count < k) count++;

    if (count === k) {
      if (kth) {
        kth = kth.next;
      } else {
        kth = head;
      }
    }

    currNode = currNode.next;
  }

  return kth;
}


/*
2.3 Implement an algorithm to delete a node in the middle of a singly linked list,
given only access to that node.
EXAMPLE
Input: the node c from the linked list a->b->c->d->e
Result: nothing is returned, but the new linked list looks like a- >b- >d->e

Keep swapping the value of the node with the next node, bubbling down the middle value to the end of the list and then remove the last node.

Start from the middle node, swap the values of the currNode and the next node. Will eventually be at the tail node but need to have a reference to
the node before the tail node. Check currNode.next.next in order to have a reference to the node before the tail. Will have to do the swap
once more and point the node to null afterwards. Could also keep a prev node pointer to remove instead of checking currNode.next.next.

 O(n) time and O(1) space
*/