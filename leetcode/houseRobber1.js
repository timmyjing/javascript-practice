
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    
    if (nums.length === 1) return nums[0];
    
//     cache is built on the first two elements of the nums, will only keep two solutions since we care about 
//     adjacent or nonadjacent previous solutions
    
    const cache = [nums[0], Math.max(nums[0], nums[1])];
    
    for (let i = 2; i < nums.length; i++) {
        let curr = nums[i];
        
        let amount = Math.max(curr + cache[0], cache[1]);
        
        cache[0] = cache[1];
        cache[1] = amount;
    }
    
    return cache[1];
};

/* dynamic programming
constraint is cannot rob adjacent houses
build bottom up, the bottom case is when there is just one house...then rob it lol
if there are two houses, since you can't rob an adjacent house you pick the max of the two houses
with three houses...you choose between taking the third house and the non adjacent previous solutions
or you take the adjacent solution but not the third house
build on previous optimal solutions...
*/