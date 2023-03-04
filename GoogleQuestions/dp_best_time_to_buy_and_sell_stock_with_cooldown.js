// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sold one share of the stock multiple times) with the following restrictions:

// After you sold your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sold the stock before you buy again).

// Example 1:

// Input: prices = [1,2,3,0,2]
// Output: 3
// Explanation: transactions = [buy, sold, cooldown, buy, sold]
// Example 2:

// Input: prices = [1]
// Output: 0

var maxProfit = function (prices) {
  if (!prices || prices.length < 2) return 0; //must buy and sold need at least two days

  let buy = new Array(prices.length).fill(0);
  let sold = new Array(prices.length).fill(0);

  //init
  buy[0] = -prices[0]; //buy day1
  buy[1] = Math.max(buy[0], -prices[1]); // buy day1 or day2
  sold[1] = Math.max(0, prices[1] - prices[0]); //sold at least after day1  no benefit or sold day2

  for (let i = 2; i < prices.length; i++) {
    buy[i] = Math.max(buy[i - 1], sold[i - 2] - prices[i]); //buy i-1  or sold i-2 then can buy now
    sold[i] = Math.max(sold[i - 1], buy[i - 1] + prices[i]); //sold i-1 or buy i-1 still and sold now
  }

  return sold[prices.length - 1]; //only sold all can earn max benefit
};

// var maxProfit = function (prices) {
//   const n = prices.length;

//   if (n == 0) return 0;

//   const sold = new Array(n).fill(0);
//   const bought = new Array(n).fill(0);
//   const reset = new Array(n).fill(0);

//   sold[0] = 0;
//   bought[0] = -prices[0];
//   reset[0] = 0;

//   for (let i = 1; i < n; i++) {
//     sold[i] = bought[i - 1] + prices[i];
//     bought[i] = Math.max(bought[i - 1], reset[i - 1] - prices[i]);
//     reset[i] = Math.max(reset[i - 1], sold[i - 1]);
//   }

//   return Math.max(sold[n - 1], reset[n - 1]);
// };

prices = [1, 2, 3, 0, 2];
console.log(maxProfit(prices));


var maxProfit = function (prices) {
  let left = 0,
    right = 1;
  let profit = 0,
    maxProfit = 0;
  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      profit = prices[right] - prices[left];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      left = right;
    }
    right += 1;
  }
  return maxProfit;
};

var maxProfit = function (prices) {
  let lowestPrice = Infinity;

  var maxProfit = 0;
  for (i = 0; i < prices.length; i++) {
    if (prices[i] < lowestPrice) lowestPrice = prices[i];
    maxProfit = Math.max(maxProfit, prices[i] - lowestPrice);
  }
  return maxProfit;
};