/*

check the mid el of the array, if it is the value wanted, return true
if not, check if the value is less than mid el, if so, then check the left half
else check the right half if the value wanted is greater than the mid el

keep reducing the array down by halves until the value is found or the range is empty
assumes arr is sorted and integers.

*/


function binarySearch(arr, value) {
  arr.sort();
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    let el = arr[mid];

    if (el === value) {
      return true;
    } else if (el > value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return false;
}

console.log(binarySearch([1], 2))
console.log(binarySearch([1,2], 2))
console.log(binarySearch([1,2,3,4,5], 5))
console.log(binarySearch([1,2,3,4,5], 1))
console.log(binarySearch([1,2,3,4,5], 1000))


/*
given an array of words, return the range of words that match the prefix

while low is <= high, this indicates that there are still indices to search otherwise if low is greater than high, then we are out
of indices to search

if prefix in low and high, return the whole range.
if prefix not in low, low = low + 1
if prefix not in high, high = high - 1
if not, check mid.
if prefix > mid, reset low to mid + 1;
if prefix < mid, reset high to mid - 1;
might be able to proceed but maybe 

the above lines could be wrapped in a condition. get the mid index. if prefix isnt in mid index, then reset the new search halves.
if prefix is in min, then the range could possibly be before the mid and also after the mid.
can use mid and high to find the new high?
if prefix in mid, then all have to reset high to find. maybe do another divide and conquer from mid to high to find out where high should end?
would also have to do divide and conquer through the low to mid to find the new low.

can check by strings, comparison is by lexographic order.
if prefix is > el and prefix in el, then el belongs.
if prefix < el and prefix in el, then el belongs


[ask], b

[account, action, hello, helper, hi, took, zoo]
prefix = a
*/


function bSearchWords(arr, prefix) {
  if (!prefix) return arr;

  arr.sort();
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    if (arr[low].startsWith(prefix) && arr[high].startsWith(prefix)) return arr.slice(low, high + 1);

    if (!arr[low].startsWith(prefix)) {
      low += 1;
    }

    if (!arr[high].startsWith(prefix)) {
      high -= 1;
    }
    
    if (low > high) return [];

    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid].startsWith(prefix)) {
      // have to find new low and high
    } else if (arr[mid] > prefix && !arr[mid].startsWith(prefix)) {
      high = mid - 1;
    } else if (arr[mid] < prefix && !arr[mid].startsWith(prefix)) {
      low = mid + 1;
    }
  }

  return [];
}

const arr = ['account', 'action', 'hello', 'helper', 'hi', 'took', 'tools', 'top' ,'zoo'];


console.log(bSearchWords(arr, 'to'));
console.log(bSearchWords(arr, 'h'));
console.log(bSearchWords(arr, 'hel'));
