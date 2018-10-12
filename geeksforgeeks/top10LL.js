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