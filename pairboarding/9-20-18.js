/*
How do you clone an object in JavaScript?

Depends on what is the clone. Probably can't use === since they won't be the same object. Does cloning mean
creating a new object with the same keys and values? Can create a new object and create similar keys and values.
If values are objects, then can clone recursively. Object.create might possibly work?
*/


/*
Min Number of Coins to Make Change
Write a function that takes in an amount and a set of coins. Return the minimum number of coins needed to make change for the given amount. 
You may assume you have an unlimited supply of each type of coin. If it's not possible to make change for a given amount, return nil or NaN.

Example:

make_change(14, [10, 7, 1])
# return 2 because [7, 7] is the smallest combination


Sort the coins, initialize a change amount cache with 0. Build the amount starting at 1. Iterate through the coins, if the coin value is smaller than or equal
to the amount, subtract that coin value from the target amount and build from the previous solutions if there is value leftover. Check the cache
for the value, if it is undefined. Set the amount built from the coins as the value. If it is defined, check which change amount has
less coins and set that as the cache. Get the value at the end. O(nm) n is the amount, m is the amount of coins. O(n) space.
*/


const minChange = (amount, coins) => {
  if (!amount) return null;
  const changeCache = {}

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        let change = [coins[j]];
        if (i - coins[j] > 0) {
          change = change.concat(changeCache[ i - coins[j] ]);
        }

        if (!changeCache[i] || changeCache[i].length > change.length) {
          changeCache[i] = change;
        }

      }
    }
  }

  return changeCache[amount].length;
}

// console.log(minChange( 14, [10 , 7 , 1] ));
// console.log(minChange( 5, [10 , 7 , 1] ));
// console.log(minChange( 0, [10 , 5] ));


// Partner B

/* What do the following lines output, and why?
  console.log(1 < 2 < 3);
  console.log(3 > 2 > 1);

  1 < true
  3 > true
  type coercion? true coerces into 1
  return false because 1 < 1 is false
  return true because 3 > 1 is true

  wrong. evaluated left to right. not an expression
  1 < 2 < 3 -> true < 3 -> 1 < 3 -> true
  3 > 2 > 1 -> true > 1 -> 1 > 1 -> false
*/

// Number of ways to Make Change
// Given an array of positive integers representing coin denominations and a single non-negative integer representing a target amount of money, 
// implement a function that returns the number of ways to make change for that target amount using the given coin denominations. 
// Note that an unlimited number of coins is at your disposal.

// Build a cache of the amounts from 1 to the amount. For each amount, iterate through the coins. If the coin value is <= than the 
// current amount, use the coin and add it to all the current amount minus the coin value ways of making change. Return the length of the
// final amount, which will be all the number of ways to make change. Duplicate values will occur. Can just keep counts of ways to make a change for each amount instead.

// input: 6, [1, 5]
// output: 2 // (1x1 + 1x5 and 6x1)

const waysMakeChange = (amount, coins) => {
  const cache = {};
  coins = coins.sort( (a, b) => b - a);

  for (let i = 1; i <= amount; i++) {
    cache[i] = [];
    for (let j = 0; j < coins.length; j++) {
      let coin = coins[j];

      if (coin <= i) {
        if (coin === i) {
          cache[i].push([coin]);
        } else {
          let ways = cache[i - coin].map( el => el.concat([coin]));
          ways = ways.filter( way => cache[i].indexOf(way.sort( (a,b) => a - b )) === -1);
          // have to filter through the solutions but JS makes it difficult to compare arrays.
          cache[i] = cache[i].concat(ways);
          console.log(coin)
          console.log(cache)
        }
      }
    }
  }

  return cache[amount].length;
}

// console.log(waysMakeChange(6, [1,5]));


// solution

const numberOfWaysToMakeChange = (n, denoms) => {
  const ways = (new Array(n + 1)).fill(0);
  ways[0] = 1;
  for (let denom of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (denom <= amount) {
        ways[amount] += ways[amount - denom];
      }
    }
  }
  return ways[n];
}