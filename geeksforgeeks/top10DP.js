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

// console.log(LIS([3,2]));
// console.log(LIS([50, 3, 10, 5, 7, 40, 80]));
// console.log(LIS([3,10,2,1,20]));

/*
Edit Distance | DP-5
Given two strings str1 and str2 and below operations that can performed on str1. Find minimum number of edits (operations) required to convert ‘str1’ into ‘str2’.

Insert
Remove
Replace
All of the above operations are of equal cost.

    a a t
  0 1 2 3
a 1 0 1 2
a 2 1 0 1
t 3 2 1 0

    s a t u r d a y
  0 1 2 3 4 5 6 7 8
s 1 0 1 2 3 4 5 6 7
u 2 1 1 2 2 3 4 5 6
n 3 2 2 2 3 3 4 5 6
d 4 3 3 3 3 4 3 5 6
a 5 4 3 4 4 4 5 3 5
y 6 5 4 4 5 5 5 5 3



Solution: if last letters match, get the result of str1[0..-2], str2[0..-2] because curr = editDistance(str1[0..-2], str2[0..-2]);
if not, choose the min of i - 1, j - 1, i - 1 and j - 1 and add one to it note (if they dont match, you have to consider all the possible
operations you could do to get it to match. the last letters could match but at other indexes so there could be certain operations
that take less steps to get the result)

first row and first col will be labeled from 0 to length (this is because if either string was empty, it would take length times operations 
to fulfill, other longest common subsequence was about matching and thus the 0th row and col were all 0 as the two strings would not match if 
one were empty and the other wasn't)

BELOW WAS MY ATTEMPT. IT IS INCORRECT
try conditions
str1 is x,str2 is y

if lengths equal and if str1[-1] === str2[-1] = 0 + editDistance(str1[0..-2],str2[0..-2]) EQUAL
if str2 longer than str1 = 1 + editDistance(str2[0..-2], str1) REMOVE FROM STR2
if str2 is shorter than str1 = 1 + editDistance(str2, str1[0..-2]) INSERT ONE INTO STR1
if str2 is as long as str1 and last arent equal, = 1 + editDistance(str2[0..-2], str[0..-2]) REPLACE LAST LETTER
*/

function editDistance(a, b) {
  if (!a) return b.length;
  if (!b) return a.length;

  const distances = [];

  for (let i = 0; i <= a.length; i++) {
    const arr = new Array(b.length + 1);
    distances.push(arr);
  }

  for (let i = 0; i <= a.length; i++) {
    for (let j = 0; j <= b.length; j++) {
      if (i === 0) {
        distances[i][j] = j;
      } else if (j === 0) {
        distances[i][j] = i;
      }
      else {

        if (a[i - 1] !== b[j - 1]) {
          distances[i][j] = 1 + Math.min( distances[i - 1][j], distances[i][j - 1], distances[i - 1][j-1] );
        } else {
          distances[i][j] = distances[i - 1][j - 1];
        }
      }
    }
  }

  return distances[a.length][b.length];
}

// console.log(editDistance('geeks', 'gises'));
// console.log(editDistance('bat', 'cat'));
// console.log(editDistance('sunday', 'saturday'));


/*
Partition a set into two subsets such that the difference of subset sums is minimum
Given a set of integers, the task is to divide it into two sets S1 and S2 such that the absolute difference between their sums is minimum.
If there is a set S with n elements, then if we assume Subset1 has m elements, Subset2 must have n-m elements and the value of abs(sum(Subset1) – sum(Subset2)) should be minimum.

Example:



Input:  arr[] = {1, 6, 11, 5} 
Output: 1
Explanation:
Subset1 = {1, 5, 6}, sum of Subset1 = 12 
Subset2 = {11}, sum of Subset2 = 11        

base cases, if input arr is len 1, what do you return?
if input arr is len 2, then the two sets will be arr[0] and arr[1] and the min difference is abs(arr[0] - arr[1]);
with a third element...get min from these combos [0, (1,2)], [(0,1), 2], [(0,2), 1]
2 els abs(0 - 1)
3 els abs(abs(0 - 1) - 2)

1, 6, 11....min is 4

subset 1,6,11
min {1,6} {11} || min {1} {6,11} || min {6} {11, 1}

if added 5, you would iterate through each pair of subsets and try adding the new num to subset 1 or 2
min {1,6,5} {11}, min {1,6} {11,5} and etc...

memoize
for every el, take the previous solution and get the abs diff from the current el added to it. then also get the diff of the sum of previous els
and current el.
1: null
1,6 : abs(1-6) = 5
1,6,11: abs(5 - 11) = 6, abs (1+6 - 11) = 4;
1,6,11,5: 1, 1, 13
1,6,11,5, 13 = 
*/

function partition(arr) {
  if (arr.length <= 1) return null;

  if (arr.length === 2) return Math.abs(arr[0] - arr[1]);

  let prev = [Math.abs(arr[0] - arr[1])];

  for (let i = 2; i < arr.length; i++) {
    let curr = arr[i];

    prev = prev.map( el => Math.abs(el - curr));

    prev.push( Math.abs(arr.slice(0, i).reduce( (a, b) => a + b, 0) - arr[i]));
  }

  return Math.min(...prev);
}

// console.log(partition([3, 1, 4, 2, 2, 1]));

/*
Count number of ways to cover a distance
Given a distance ‘dist, count total number of ways to cover the distance with 1, 2 and 3 steps.

Examples :

Input:  n = 3
Output: 4
Below are the four ways
 1 step + 1 step + 1 step
 1 step + 2 step
 2 step + 1 step
 3 step

Input:  n = 4
Output: 7


start an arr cache of keeping track of the steps n + 1 length
initialize one as 0, one way to get to step 0
for each k distance, iterate through 1 and 3 steps as steps and add the amounts of ways[k - steps] if k - steps >= 0
bottom up appraoch
k ways
0  1
1  1  (ways[0])
2  1 + ways[1]= 2
3  1 + ways[1] + ways[2] = 4

ways to get to n steps = ways[n - 1] + ways[n - 2] + ways[n - 3]


*/

function ways(n) {
  const cache = new Array(n + 1);
  cache.fill(0);
  cache[0] = 1;

  for (let i = 1; i < cache.length; i++) {
    for (let steps = 1; steps <= 3; steps++) {
      if (i - steps >= 0) {
        cache[i] += cache[i - steps];
      }
    }
  }
  return cache[n + 1];
}

// O(steps * n) time. O(n + 1) space for the cache. This can be improved since we only need the last steps (3) in reality.