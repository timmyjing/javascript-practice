// The Longest Increasing Subsequence (LIS) problem is to find the length of the 
// longest subsequence of a given sequence such that all elements of the subsequence 
// are sorted in increasing order. For example, the length of LIS for {10, 22, 9, 33, 21, 50, 41, 60, 80} 
// is 6 and LIS is {10, 22, 33, 50, 60, 80}.

// Input  : arr[] = {3, 10, 2, 1, 20}
// Output : Length of LIS = 3
// The longest increasing subsequence is 3, 10, 20

// Input  : arr[] = {3, 2}
// Output : Length of LIS = 1
// The longest increasing subsequences are {3} and {2}

// Input : arr[] = {50, 3, 10, 7, 40, 80}
// Output : Length of LIS = 4
// The longest increasing subsequence is {3, 7, 40, 80}


/*
approach: base case is if array length 1, then return that array
keep a cache of subsequences...iterate through the array elements and see which subseq
the curr array can add to. if they cant be added to any, start a new array with that number. return the longest

{50, 3, 10, 5, 7, 40, 80}

1 [50] 1
2 [3] 1
3 [3,10] 2
4 [3,5] 2
5 [3,5,7] 3
6 [3,5,7,40] 4
7 [3,5,7,40,80] 5

build an array cache of the input length with all elements equal to one (this covers the base case and how every element by itself is
the longest increasing subsequence)

iterate through the rest of the numbers starting from one and do a nested loop checking numbers up to but not the current number.
within that loop, check if the the curr number is greater than the number less than it. If so, you can add the curr number to that
seq. Compare this and take the max with the curr numbers longest sequence.
*/

const LIS = arr => {
  const result = new Array(arr.length);
  result.fill(1);

  for (let i = 1; i < arr.length; i++) {

    const currNum = arr[i];

    for (let j = 0; j < i; j++) {
      if (currNum > arr[j]) {
        result[i] = Math.max(result[i], 1 + result[j]);
      }
    }
  }

  return Math.max(...result);
};

console.log(LIS([3,2]));
console.log(LIS([50, 3, 10, 5, 7, 40, 80]));
console.log(LIS([3,10,2,1,20]));

