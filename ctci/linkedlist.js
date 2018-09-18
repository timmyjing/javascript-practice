// TODO IMPLEMENT A LINKED LIST AND NODE CLASS

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  find(val) {
    let currNode = this.head;
    while (currNode) {
      if (currNode.val === val) return currNode;
      currNode = currNode.next;
    }

    return null;
  }

  delete(val) {
    let currNode = this.head;

    if (currNode.val === val) {
      this.head = currNode.next;
      return;
    }

    while (currNode.next) {
      if (currNode.next.val === val) {
        currNode.next = currNode.next.next;
      }
      currNode = currNode.next;
    }

  }

  add(val) {

    if (!this.head) {
      this.head = new Node(val);
      return;
    }

    let currNode = this.head;

    while (currNode.next) {
      currNode = currNode.next;
    }

    currNode.next = new Node(val);
  }
}



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

Edge cases - what happens if the list has only one node? two?

 O(n) time and O(1) space
*/

const deleteMid = node => {
  let currNode = node;
  let prev = null;

  while (currNode.next) {
    
    let temp = currNode.val;

    currNode.val = currNode.next.val;
    currNode.next.val = temp;

    prev = currNode;
    currNode = currNode.next;
  }

  prev.next = null;
}

/* 
2.4 Write code to partition a linked list around a value x, such that all nodes less than
x come before all nodes greater than or equal to x.

Can go through the LL and add each node to two separate linked lists, one that is of all the values
lower and one that is of all the nodes greater than or equal to. Need to clarifiy on what does it mean to partition? 
Would this not be allowed?

Another way would be to keep track of a partition index of the node. Iterate through the linked list and keep track of a partition
node. If the curr node is less than X, set the partition node to be the curr. If the curr node is greater than or equal, link it after
the partition node. What if head node is >= than x? Will have to reset the pointer to head. Have to add extra checks to see if head is null
after setting the partition. If so, set the next node smaller than x to be the head and set the partition node.

*/




/*
2.5 You have two numbers represented by a linked list, where each node contains a
single digit. The digits are stored in reverse order, such that the Ts digit is at the
head of the list. Write a function that adds the two numbers and returns the sum
as a linked list.
EXAMPLE
Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is, 617 + 295.
Output: 2 -> 1 -> 9.That is, 912.
FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.
EXAMPLE
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is, 617 + 295.
Output: 9 -> 1 -> 2.That is, 912
*/


/* 
2.6 Given a circular linked list, implement an algorithm which returns the node at
the beginning of the loop.
DEFINITION
Circular linked list: A (corrupt) linked list in which a node's next pointer points
to an earlier node, so as to make a loop in the linked list.
EXAMPLE
Input: A ->B->C->D->E- > C [the same C as earlier]
Output: C

*/


/*
2.8  Implement a function to check if a linked list is a palindrome.
*/