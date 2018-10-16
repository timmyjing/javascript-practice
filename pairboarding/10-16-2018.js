// Determine if an Array represents a min heap or not
// Given an array of integers determine if it represents a min heap or not. Return true if it does and false if it doesn't.
// let heapA = [2,3,2,11,4,7,4]
// let heapB = [2,3,1,11,4,7,4]

// isMinHeap(heapA) // true
// isMinHeap(heapB) // false

/*
min heaps have a property that the children are always bigger than the parent
could do a heapify up or down

children indices given parent index i = 2 * i + 1, 2 * i + 2
parent index given child index i = (i - 1) / 2

at every index, check if parents are less than them, then recursively check parents
could also approach and check top down, check if children

[1,2,3]
*/


function isHeap(arr, idx = 0) {
  if (arr.length - idx === 1) return true;

  // get children index
  const children = [];

  if (2 * idx + 1 < arr.length) children.push(2 * idx + 1);
  if (2 * idx + 2 < arr.length) children.push(2 * idx + 2);

  for (let i = 0; i < children.length; i++) {
    if (arr[children[i]] < arr[idx]) return false;

    if (!isHeap(arr, children[i])) return false;
  }

  return true;
}

console.log(isHeap([2,1,0]));
console.log(isHeap([2,3,4]));
console.log(isHeap([2,3,2,11,4,7,4]));
console.log(isHeap([2,3,1,11,4,7,4]));


/*
Convert Min-heap to Max-heap in O(n) time
Given an array representing a min-heap, convert the min-heap to a max-heap. The conversion should be done in-place an in linear time.


[2,3,4] = [4,3,2]
start at the leaf and move up


*/

function minToMax(arr, idx = arr.length - 1) {
  if (idx === 0) return;


  let parent = Math.floor(idx - 1 / 2);

  if (arr[parent] < arr[idx]) {
    let temp = arr[parent];
    arr[parent] = arr[idx];
    arr[idx] = temp;
    minToMax(arr);
  }

  minToMax(arr, idx - 1);
  return arr;
} 

console.log(minToMax([2,3,2,11,4,7,4]));