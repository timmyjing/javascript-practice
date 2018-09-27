// Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. 
// You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


// iterate through the numbers, keep a results of the max of the windows
// with each iteration, take the previous solution
// if the current el is greater than the previous max, this must be the max
// if the current el is less than max, need to check previous max...check the letter that was just pushed out the window and
// determine new max. if that letter === previous max, then recalculate max from -2,-1,0
var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0) return [];
    
    const result = [];
    
    for (let i = 0; i < nums.length - k + 1; i++) {
        if (i === 0) {
            result.push(Math.max(...nums.slice(i, i + k)));
        } else {
            if ( nums[i] > result[result.length - 1] ) {
                result.push(nums[i])   
            } else {
                let max = Math.max(...nums.slice(i, i + k));
                result.push(max);
            }
        
        }
    }
    
    return result;
};