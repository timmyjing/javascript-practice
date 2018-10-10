// Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.


/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
//     sort the numbers first and make the pairs next to each other. this will minimize the difference between the pairs and thus result in the largest sum as the minimum of the pairs isn't too big of a difference
    
    nums = nums.sort( (a,b) => a - b);
    
    let sum = 0;
    
    for (let i = 0; i < nums.length; i += 2) {
        sum += Math.min(nums[i], nums[i+1]);
    }
    
    return sum;
};