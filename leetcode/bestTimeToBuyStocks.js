/**
 * @param {number[]} prices
 * @return {number}
 
 if price length is 1, return 0
 cant buy and sell so no profit
 
 with length == 2, only thing you can do
 is buy on day 1 and sell day 2
 
 since we have to buy before we sell,
 set el 0 as the min price seen so far
 
 starting from index 1, calculate the 
 profit from curr el - min price. compare
 this to the max profit at each step.
 also check if curr index is less than min,
 if so reset
 
 
 
 */
var maxProfit = function(prices) {
  let result = 0;
  
  if (prices.length <= 1) return 0;
  
  let minPrice = prices[0];
  
  for (let i = 1; i < prices.length; i++) {
    result = Math.max(result, prices[i] - minPrice);
    
    if (prices[i] < minPrice) minPrice = prices[i];
  }
  
  return result;
};