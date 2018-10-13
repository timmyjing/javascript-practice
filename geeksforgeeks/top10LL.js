// Given a sorted linked list and a value to insert, 
// write a function to insert the value in sorted way.

/*

1-2-4-5

1-2-3-4-5

if list is empty, insert node and call it a day

if list isn't empty, iterate through list and keep a pointer to prev and current
prev will be initially null and will change with each iteration.
if the current node is greater than the value to insert, insert before.
if end of list is reached, insert node after the tail
if val is less than value at the head, insert this at head and return new head.
*/


function insertLL(list, value) {
  const node = new Node(value);

  if (!list) {
    return node;
  }

  if (list.value > value) {
    node.next = list;
    list = node;
    return list;
  }

  let currNode = list;

  while (currNode.next) {
    if (currNode.next.value > value) {
      node.next = currNode.next;
      currNode.next = node;
      return list;
    }
    currNode = currNode.next;
  }

  currNode.next = node;



  return list;
}

// Delete a given node in Linked List under given constraints
// Given a Singly Linked List, write a function to delete a given node. Your function must follow following constraints:
// 1) It must accept pointer to the start node as first parameter and node to be deleted as second parameter i.e., pointer to head node is not global.
// 2) It should not return pointer to the head node.
// 3) It should not accept pointer to pointer to head node.

// You may assume that the Linked List never becomes empty.

// Let the function name be deleteNode(). In a straightforward implementation, the function needs to modify head pointer when the node to be 
// deleted is first node. As discussed in previous post, when a function modifies the head pointer, the function must use one of the given approaches, 
// we can’t use any of those approaches here.

function deleteNode(head, node) {
  if (!head) return;
  if (head === node) head = head.next;

  let curr = head;
  while (curr.next !== node && curr.next ) {
    curr = curr.next;
  }

  if (curr.next === node) {
    curr.next = node.next;
  }

  return;
}