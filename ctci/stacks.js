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