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
*/


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

*/