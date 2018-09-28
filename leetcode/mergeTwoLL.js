// Note: Your solution should have O(l1.length + l2.length) time complexity, since this is what you will be asked to accomplish in an interview.

// Given two singly linked lists sorted in non-decreasing order, your task is to merge them. In other words, return a singly linked list, also sorted in 
// non-decreasing order, that contains the elements from both original lists.


// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function mergeTwoLinkedLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    
    let result;
    
    if (l1.value < l2.value) {
        result = l1;
        l1 = l1.next;
    } else {
        result = l2;
        l2 = l2.next;
    }
    
    let curr1 = l1;
    let curr2 = l2;
    let currR = result;
    
    while (curr1 && curr2) {
        if (curr1.value < curr2.value) {
            currR.next = curr1;
            curr1 = curr1.next;
            currR = currR.next;
            
        } else {
            currR.next = curr2;
            curr2 = curr2.next;
            currR = currR.next;
        }
    }
    
    if (curr1) currR.next = curr1;
    if (curr2) currR.next = curr2;
    
    return result;
}


// since the two lists are sorted, check the head of the lists and compare which is smaller, add the smaller
// node to the new list. keep doing this until one of the lists is null, add the other list