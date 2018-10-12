// Longest Common Subsequence | DP-4
// We have discussed Overlapping Subproblems and Optimal Substructure properties in Set 1 and Set 2 respectively. 
// We also discussed one example problem in Set 3. Let us discuss Longest Common Subsequence (LCS) problem as one 
// more example problem that can be solved using Dynamic Programming.

// LCS Problem Statement: Given two sequences, find the length of longest subsequence present in both of them. A subsequence 
// is a sequence that appears in the same relative order, but not necessarily contiguous. For example, “abc”, “abg”, “bdf”, “aeg”, ‘
// ”acefg”, .. etc are subsequences of “abcdefg”. So a string of length n has 2^n different possible subsequences.

// It is a classic computer science problem, the basis of diff (a file comparison program that outputs the differences between 
// two files), and has applications in bioinformatics.

// Examples:
// LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.
// LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.
// build a matrix of m*n. each row represents a letter of str1, each col a letter of str2.
// iterate through and see if the letters match
// if so, add one to the value of row - 1, col - 1 (this is so because a letter can only match once per row and col)
// if not, choose the max of row - 1, col or row, col - 1
/*
ex.
    A B C
  0 0 0 0
A 0 1 1 1
C 0 1 1 2
B 0 1 2 1
notes: i just want to check if the last letters of each string match. if they do, then i can add one to the previous solution of 
str1[0...-1], str2[0...-1]. the memoization is for saving the previous solutions so you don't have to do more recursive calls by 
building from the bottom up
*/


function lcs(str1, str2) {
  const grid = [];
  
  for (let i = 0; i < str1.length + 1; i++) {
    grid.push( new Array(str2.length + 1));
    grid[i][0] = 0;
  }

  grid[0].fill(0);

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      if (str1[i] === str2[j]) {
        grid[i][j] = 1 + grid[i - 1][j - 1];
      } else {
        grid[i][j] = Math.max(grid[i - 1][j], grid[i][j - 1])
      }
    }
  }

  return grid[grid.length][grid[0].length];
}

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

