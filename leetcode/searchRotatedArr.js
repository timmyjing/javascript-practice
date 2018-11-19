/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log(nums[mid])
    if (nums[mid] === target) return mid;
    // [4,5,6] low = 0, high = 0
    if (nums[low] <= nums[mid]) {
//       left is asc
      if (target < nums[mid] && nums[low] <= target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
//       right is asc
      if (target > nums[mid] && nums[high] >= target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    
  }
  
  
  return -1;
};


/*
thought process - use a divide and conquer method. check the middle value of array. if it is the target, return the index.

if not, check the values next to the middle. depending on the middle value, check left or right. have to find pivot.
compare left and right ends to the mid. 
make decision depending on if the ranges from left to mid and mid to right are asc or desc. 
if asc, pivot isnt there
if desc, pivot is somewhere in that range
*/