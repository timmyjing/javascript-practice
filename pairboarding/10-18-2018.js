/*
Given a string, find the first K non-repeating characters in it by doing only a single traversal of it.
let str = "ABCDBAGHCHFAC";
let k = 3;
firstKNonRepeating(str, k); // => D G F

use a min heap to keep track of indices and chars. keep a hash that maps chars to indices.
if a char hasnt occured yet, push it to the min heap and rebuild heap. if it has occured, remove from the heap.

*/


class MinHeap {
  constructor() {
    this.store = [];
  }
// [0,1,2,3,4,5,6]
// i - 1 / 2 for parent
// child = 2 * i + 1, 2 * i + 2
  add(el) {
    this.store.unshift(el);
    // const parent = Math.floor((this.store.length - 2) / 2);
    this.heapifyDown();
  }

  remove() {
    const len = this.store.length - 1;

    let temp = this.store[0];
    this.store[0] = this.store[len];
    this.store[len] = temp;

    this.store.pop();
    // heapify down
    this.heapifyDown();
  }


  delete(el) {
    let i = this.store.indexOf(el);
    // swap this with index 0, then shift and heapify down
    if (i > -1) {
      let temp = this.store[i];
      this.store[i] = this.store[0];
      this.store[0] = temp;
      this.store.shift();
      this.heapifyDown();
    }
  }

  heapifyDown(i = 0) {
    let left, right;

    if (2 * i + 1 < this.store.length) left = 2 * i + 1;
    if (2 * i + 2 < this.store.length) right = 2 * i + 2;

    let smallest = i;

    if (left !== undefined && this.store[left] < this.store[smallest]) smallest = left;
    if (right !== undefined && this.store[right] < this.store[smallest]) smallest = right;

    if (smallest !== i) {
      let temp = this.store[smallest];
      this.store[smallest] = this.store[i];
      this.store[i] = temp;

      this.heapifyDown(smallest);
    }
  }

  peek(k = 1) {
    return this.store.slice(0, k);
  }

}


function kNonRepeatChars(str, k) {
  if (!str) return null;
  const heap = new MinHeap();
  const map = {};

  for (let i = 0; i < str.length; i++) {

    if (map[str[i]] === undefined) {
      heap.add(i);
      map[str[i]] = i;
    } else {
      heap.delete(map[str[i]]);
    }
  }

  return heap.peek(k).map( i => str[i]);
}

console.log (kNonRepeatChars('ABCDEFAAAAABBBCDEFZHX', 3));


/*
Merge M Sorted Lists of Variable Length
Given an array of sorted integer arrays, print them in sorted order efficiently. The number of arrays in your array of arrays can vary as can the length of each individual array.
let list = [
        [10, 20, 30, 40],
        [15, 25, 35],
        [27, 29, 37, 48, 93],
        [32, 33]
      ]
printSorted(list); // => [ 10, 15, 20, 25, 27, 29, 30, 32, 33, 35, 37, 40, 48, 93 ]
*/