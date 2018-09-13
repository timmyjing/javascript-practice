/*
2.1 Write code to remove duplicates from an unsorted linked list.

FOLLOW UP

How would you solve this problem if a temporary buffer is not allowed?


Naive solution is to go through the list and keep an array of already seen values and remove the node if the value is already seen.
O(n^2) since required to check buffer and O(n) space.

Can be done in place. At every node, check the rest of the list to see if there is there is a duplicate. Remove if so.
O(n^2) solution but can be done without a buffer. 
*/