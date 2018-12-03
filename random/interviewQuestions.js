// Given a sorted array arr[] and a number x, write a function that counts the occurrences of x in arr[]. (O(Log(N)))
// ex [1,1,1,2,3,3,3]
// for 1, return 3
// for 4, return 0
// for 2, return 2
// do a binary search for the element. if the element is present, check to the left and right of it.
// if there is no similar element next to it, there is only one occurrence
// if there is one to the left or right, there are multiple occurences, have to search in the left and right range. 
// you search for the left most element and the right most element on each range. subtract the indices and you'll get the count
// since the array is sorted.
// if element is not found, then return 0;

function findOccurences(arr, target) {
  let low = 0;
  let high = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      if (arr[mid - 1] !== target && arr[mid + 1] !== target) return 1;

      // find start in left
      let left = searchLeft(arr, low, mid - 1, target, -1);
      let right = searchRight(arr, mid + 1, high, target, 1);

      return right - left + 1;
  
    } else if (arr[mid] > target){
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }


  return 0;
}

function searchRight(arr, start, end, target) {
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);

    if (arr[mid] === target && (arr[mid] = end || arr[mid + 1] !== target)) {
      return mid;
    } else if (arr[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return end;
}


function searchLeft(arr, start, end, target) {
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);

    if (arr[mid] === target && (arr[mid] = 0 || arr[mid - 1] !== target)) {
      return mid;
    } else if (arr[mid] >= target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return start;
}

// console.log(findOccurences([1,2,3,4,5], 1));
// console.log(findOccurences([1,1,2,2,5], 2));
// console.log(findOccurences([1,2,2,2,5], 2));
// console.log(findOccurences([2,2,2,3,3], 3));


