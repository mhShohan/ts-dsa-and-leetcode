/**
 * 121. Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * @Steps to solve:
 * 1. Initialize two variables: minPrice to track the lowest price seen so far, and profit to track the maximum profit.
 * 2. Iterate through the array of prices starting from the second day.
 * 3. For each price, calculate the potential profit by subtracting minPrice from the current price.
 * 4. Update the profit if the calculated profit is greater than the current profit.
 * 5. Update minPrice if the current price is lower than minPrice.
 * 6. After iterating through all prices, return the maximum profit found.
 *
 * @TimeComplexity: O(n) - We traverse the list of prices once.
 * @SpaceComplexity: O(1) - We use a constant amount of space.
 */

function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    const cost = prices[i] - minPrice;
    profit = Math.max(cost, profit);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
