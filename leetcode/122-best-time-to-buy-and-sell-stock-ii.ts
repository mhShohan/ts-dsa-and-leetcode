/**
 * 122. Best Time to Buy and Sell Stock II
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
 * Find and return the maximum profit you can achieve.
 *
 * @Step to solve (pseudo code):
 * 1. Initialize a variable max to store the maximum profit, set it to 0.
 * 2. Loop through the prices array from the first day to the second last day:
 *    a. Calculate the difference between the price of the next day and the current day (curr = prices[i + 1] - prices[i]).
 *    b. If curr is greater than 0, it means there is a profit, so add curr to max.
 * 3. After the loop, return the value of max as the maximum profit.
 *
 * @Complexity Analysis:
 * - Time Complexity: O(n), where n is the number of days (length of the prices array). We traverse the array once.
 * - Space Complexity: O(1), as we are using only a constant amount of extra space to store the max profit.
 */

function maxProfit(prices: number[]): number {
  let max = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    const curr = prices[i + 1] - prices[i];

    if (curr > 0) {
      max += curr;
    }
  }

  return max;
}

/*
In my opinion this explanation is misleading.
Example 2:
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.

In simple words, the logic we have to think like this

prices = [1,2,3,4,5]
(2-1) +(3-2)+(4-3)+(5-4)
1 + 1 + 1 + 1 = 4

prices = [7,1,5,3,6,4]
(1-7)+(5-1)+(3-5)+(6-3)+(4-6)
(-6) + 4 + (-2) + 3 + (-2) // ignore all negative
4+3 = 7
*/

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));

/**
 * Dry Run:
 * For prices = [7, 1, 5, 3, 6, 4]
 * - Initialize max = 0
 * - Loop through the array:
 *   - i = 0: curr = prices[1] - prices[0] = 1 - 7 = -6 (not added to max)
 *   - i = 1: curr = prices[2] - prices[1] = 5 - 1 = 4 (added to max, max = 4)
 *   - i = 2: curr = prices[3] - prices[2] = 3 - 5 = -2 (not added to max)
 *   - i = 3: curr = prices[4] - prices[3] = 6 - 3 = 3 (added to max, max = 7)
 *   - i = 4: curr = prices[5] - prices[4] = 4 - 6 = -2 (not added to max)
 * - Return max = 7
 */
