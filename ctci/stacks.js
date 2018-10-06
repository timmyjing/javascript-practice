// IMPLEMENT A STACK AND QUEUE


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// can use a reversed linked list. tail in the front.
class Stack {
  constructor() {
    this.store = null;
  }

  peek() {
    return this.store;
  }

  push(val) {
    const node = new Node(val);
    node.next = this.store;
    this.store = node;
  }

  pop() {
    if (!this.store) return;

    this.store = this.store.next;
  }

}

class Queue {
  constructor() {
    this.store = null;
  }

  peek() {
    return this.store;
  }

  push(val) {
    const node = new Node(val);

    if (!this.store) {
      this.store = node;
      return;
    }

    let currNode = this.store;

    while (currNode.next) {
      currNode = currNode.next;
    }

    currNode.next = node;
  }

  pop() {
    if (!this.store) return;

    this.store = this.store.next;
  }

}


/*
3.1 Describe how you could use a single array to implement three stacks.

One way to approach this is to have a large array and keep track of the indexes where each stack starts and their end indexes. Have one 
stack at the start, another at the mid, and the last at the end of the array going backwards. You can then
key into the following index to push in a new element or pop an element by removing that stack's end index. This will be O(1) time since 
you know the indexes but O(n) space and you have to initialize a large enough array. An issue with this will be when the array is full and
everything will need to be resized. Another way would be to just push the elements into the array and maintain a separate array of indices
for each stack...technically won't be using a single array anymore. 

*/



/*
3.2 How would you design a stack which, in addition to push and pop, also has a
function min which returns the minimum element? Push, pop and min should
all operate in O(1) time.

keep another stack of the min value. peek the value on top of the min stack to
get the min value in O(1). when pushing to this stack, check if the value is less
than the top of min stack, if so then this is the new min. when popping from the stack,
if the value is the same as the top of the min stack, also pop the top of the min stack.
*/

class minStack {
  constructor() {
    this.stack = [];
    this.min = [];
  }

  push(val) {
    this.stack.push(val)

    if (this.min.length == 0 || val <= this.min[this.min.length - 1]) {
      this.min.push(val)
    }
  }

  pop() {
    if (this.stack.length === 0) return null;

    const val = this.stack.pop();

    if (val === this.getMin()) {
      this.min.pop();
    }

    return val;
  }

  getMin() {
    if (this.min.length !== 0) {
      return this.min[this.min.length - 1];
    } else {
      return null;
    }
  }
}


// const mStack = new minStack();

// mStack.push(6);
// console.log(mStack.getMin());
// mStack.push(4);
// console.log(mStack.getMin());
// mStack.push(2);
// console.log(mStack.getMin());
// mStack.pop();
// console.log(mStack.getMin());



/*
3.3 Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
Therefore, in real life, we would likely start a new stack when the previous stack
exceeds some threshold. Implement a data structure SetOf Stacks that mimics
this. SetOf Stacks should be composed of several stacks and should create a
new stack once the previous one exceeds capacity. SetOf Stacks. push() and
SetOf Stacks. pop() should behave identically to a single stack (that is, popO
should return the same values as it would if there were just a single stack).
FOLLOW UP

Implement a function popAt(int index) which performs a pop operation on
a specific sub-stack.


PSEUDO CODE:
create a set of stacks class that has a store that holds the nested stacks.
this store itself can be a stack too in that the top of the store stack will be 
the most recent stack, which we will pop from or push to first.

*/

class SetofStacks {
  constructor(height) {
    this.height = height;
    this.store = [[]];
  }

  push(val) {
    const stackIdx = this.store.length - 1;
    const stack = this.store[stackIdx];

    if (stack.length > this.height) {
      stack.push(val);
    } else {
      this.store.push([val]);
    }

    return val;
  }

  pop() {
    let stackIdx = this.store.length - 1;
    let stack = this.store[stackIdx];

    if (stack.length > 0) {
      return stack.pop();
    } else {
      if (this.store.length !== 1) {
        this.store.pop();
        stack = this.store[this.store.length - 1];
        return stack.pop();
      }
      return null;
    }
  }
}


/*
3.4 
In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of
different sizes which can slide onto any tower. The puzzle starts with disks sorted
in ascending order of size from top to bottom (i.e., each disk sits on top of an
even larger one). You have the following constraints:
(1) Only one disk can be moved at a time.
(2) A disk is slid off the top of one tower onto the next tower.
(3) A disk can only be placed on top of a larger disk.
Write a program to move the disks from the first tower to the last using stacks
*/


/*
3.5
Implement a MyQueue class which implements a queue using two stacks.

NOTES: A queue is FIFO. Have two stacks with are LIFO. Two functions are enqueue and dequeue
for a queue. Whenever you queue an el, push it to Stack 1. When you need to pop an element, pop all elements
from Stack 1 and push them onto Stack 2 and pop from Stack 2. This will reverse the LIFO order of Stack 1,
the first ones in will be on top of Stack 2 and the last ones in on the bottom.

Whenever you dequeue, have to check if Stack 2 is empty. If so, pop from Stack 1 and push onto Stack 2.

*/


/*
3.6
Write a program to sort a stack in ascending order (with biggest items on top).
You may use at most one additional stack to hold items, but you may not copy
the elements into any other data structure (such as an array). The stack supports
the following operations: push, pop, peek, and isEmpty.


two stacks, whenever you push an el in, check if top of current stack is empty or if
top is less than el. if so, push on to top of current stack.

if not, pop the top of the stack 1 and push to stack 2 until you find an value that is <= to 
the el. then pop/push from stack 1 to 2.

*/


/*
3.7
An animal shelter holds only dogs and cats, and operates on a strictly "first in,
first out" basis. People must adopt either the "oldest" (based on arrival time) of
all animals at the shelter, or they can select whether they would prefer a dog or
a cat (and will receive the oldest animal of that type). They cannot select which
specificanimal they would like. Create the data structures to maintain this system
and implement operations such as enqueue, dequeueAny, dequeueDog and
dequeueCat.You may use the built-in LinkedList data structure.
*/