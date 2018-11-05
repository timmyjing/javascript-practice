/*

check the mid el of the array, if it is the value wanted, return true
if not, check if the value is less than mid el, if so, then check the left half
else check the right half if the value wanted is greater than the mid el

keep reducing the array down by halves until the value is found or the range is empty
assumes arr is sorted and integers.

*/


function binarySearch(arr, value) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(high - low / 2);
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




