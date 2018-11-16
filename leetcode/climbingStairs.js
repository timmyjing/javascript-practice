/**
 * @param {number} n
 * @return {number}
 
 
 can take one or two steps 
 
 want the number of ways to get to the top
 
 0 - 1 way
 1 - 1 way
 2 - 2 ways
 3 - 1,1,1 / 2 + 1 / 1 + 2
 
 if you have one step, then there is one way to get there.
 if you have two steps to take, then you can either take one step
 or two steps to get to two. to take one step, you need to have already taken one step so it depends on the number of ways you 
 got to the first step. likewise, to take two steps you will add it to the number of ways you got to 0 steps;
 
 iterate up through n steps since you need to build from bottom up
 
 at each i step, try going up one and two steps and add the number of steps from [i - 2] and [i - 1]
 0
 1 - at 0
 2 - at 1 and 0
 3 - at 2 and 1
 4 - at 3 and 2 
 
 
 */
var climbStairs = function(n) {
  if (n === 0) return 1;
  
  let cache = [1, 1];
  
  for (let i = 2; i <= n; i++) {
    let currCount = cache[0] + cache[1];
    cache[0] = cache[1];
    cache[1] = currCount;
  }
  
  return cache[1];
};