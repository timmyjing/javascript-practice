// 9.3
// A magic index in an array A[1.. .n-l] is defined to be an index such that A[i] =
// i. Given a sorted array of distinct integers, write a method to find a magic index, if
// one exists, in array A.
// FOLLOW UP
// What if the values are not distinct?
/*


Brute force way is to just go through the whole array and see if the index is equal to the
element. This would be O(n) time and O(1) space.

Array is sorted and integers are distinct. Can do a binary search type method to split the arrays?

Base case would be if the array is just one element. Then check if the element is equal to index and return if it is.

Since the array is sorted, you have to check if A[i] is greater than i. if so then it is not likely to be on the side to the right
of i since the elements are distinct and it is sorted, meaning that every element after index i will have to be greater than A[i] and 
will also be greater than i.


FOLLOW UP: if the values aren't distinct
[1,1,1,5,7]
*/

const magicIndex = arr => {
  let low = 0;
  let high = arr.length;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] === mid) return mid;

    if (arr[mid] > mid) {
      high = mid - 1;
    }

    if (arr[mid] < mid) {
      low = mid + 1;
    }
  }

  return false;
}