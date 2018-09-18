/* 
Write a function that takes in an array of positive integers and returns an integer representing the 
maximum sum of non-adjacent elements in the array. If a sum cannot be generated, the function should return 0.

Example:

input: [75, 105, 120, 75, 90, 135]
output: 330 // (75 + 120 + 135)

thought process: use DP to build upon previous solutions...at each step of the problem, determine the max of
the current element added to the prev prev solution or the prev solution (can only take non adjacent elements,
so should you take the curr el and it's non adjacent or skip the element and take the previous solution)

O(n) time and O(1) space if you keep track of the two prev solutions
*/


const maxSum = arr => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  let prev = [0, arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let currEl = arr[i];
    let max = Math.max( currEl + prev[0], prev[1]);

    prev[0] = prev[1];
    prev[1] = max;
  }


  return prev[1];
}


