// Sorting Algorithms



// Quick Sort


// Merge Sort

const mergesort = array => {
  // empty array or array with one el is already sorted. base case.
  if (array.length <= 1) return array;

  const mid = array.length / 2;
  // divide and conquer, split the array into left and right and recursively call mergesort on them
  const left = mergesort(array.slice(0, mid));
  const right = mergesort(array.slice(mid));

// finally merge the sorted left and right

  return merge(left, right);
}

const merge = (left, right) => {
  let result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  if (left.length === 0) result = result.concat(right);
  if (right.length === 0) result = result.concat(left);

  return result;
};

// O(nlogn) time, continually halving the arrays and then merging n arrays together at the end, O(n) memory? continually slicing the arrays until we have sizes of 1.

// Bubble Sort

const bubble = array => {

  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = false;
      }
    }
  }
  return array;

}

// O(n^2) time, O(1) space. Sorted in place, Worst case you have to bubble n elements n times.

const arr = [5,4,3,2,1];
const arr1 = [1,2,5,2,1];

// console.log(bubble(arr))
console.log(mergesort(arr1))