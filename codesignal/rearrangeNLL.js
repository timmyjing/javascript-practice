// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
// advance a node from the head n nodes forward
// make another pointer at head, advance those two until
// the advanced node reaches the end.
// the advanced node will reach the last node of the n nodes and the
// other node will point to the start of the n nodes.
// rearrange pointers

function rearrangeLastN(l, n) {
    if (!l) return l;
    
    let advanced = l;
    let curr = l;
    
    for (let i = 0; i < n; i++) {
        if (advanced.next) {
            advanced = advanced.next
        } else {
            return l;
        }
    };
    
    while (advanced.next) {
        curr = curr.next;
        advanced = advanced.next;
    }
    
    advanced.next = l;
    let newHead = curr.next;
    
    curr.next = null;
    
    return newHead;
}