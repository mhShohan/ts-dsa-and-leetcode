/**
 * 334. Increasing Triplet Subsequence
 * https://leetcode.com/problems/increasing-triplet-subsequence/
 *
 * @Steps to solve the problem (pseudocode):
 * 1. Initialize two variables, `first` and `second`, to positive infinity.
 * 2. Iterate through each number in the input array `nums`:
 *    a. If the current number is less than or equal to `first`, update `first` to the current number.
 *    b. Else if the current number is less than or equal to `second`, update `second` to the current number.
 *    c. Else, if the current number is greater than both `first` and `second`, return true (indicating an increasing triplet subsequence is found).
 * 3. If the loop completes without finding an increasing triplet subsequence, return false.
 *
 * @Time Complexity: O(n) - We traverse the array once.
 * @Space Complexity: O(1) - We use only a constant amount of extra space.
 *
 * @Example:
 * Input: nums = [1, 2, 3, 4, 5]
 * Output: true
 */

function increasingTriplet(nums: number[]): boolean {
  let first = Number.POSITIVE_INFINITY;
  let second = Number.POSITIVE_INFINITY;

  for (const last of nums) {
    if (last <= first) {
      first = last;
    } else if (last <= second) {
      second = last;
    } else {
      return true;
    }
  }

  return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5]));
// console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
// console.log(increasingTriplet([5, 4, 3, 2, 1]));
// console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));

/**
 * Explanation of the code:
 * - We initialize `first` and `second` to positive infinity to represent the smallest and second smallest numbers we have encountered so far.
 * - We iterate through each number in the input array `nums`:
 *   - If the current number is less than or equal to `first`, we update `first` to this number, as it represents a new potential start of an increasing triplet.
 *   - If the current number is greater than `first` but less than or equal to `second`, we update `second` to this number, as it represents a new potential middle of an increasing triplet.
 *   - If the current number is greater than both `first` and `second`, it means we have found a valid increasing triplet subsequence, and we return true.
 * - If we finish iterating through the array without finding an increasing triplet, we return false.
 *
 * @ Dry Run:
 * Input: nums = [1, 2, 3, 4, 5]
 * - Initialize first = Infinity, second = Infinity
 * - Iterate through nums:
 *   - last = 1: first = 1 (since 1 <= Infinity)
 *   - last = 2: second = 2 (since 2 > first and 2 <= Infinity)
 *   - last = 3: return true (since 3 > first and 3 > second)
 * Output: true
 */
