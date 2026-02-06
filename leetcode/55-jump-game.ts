/**
 * 55. Jump Game
 * https://leetcode.com/problems/jump-game/
 *
 * @Explanation
 * We can keep track of the maximum reachable index at each step. If at any point, the current index exceeds the maximum reachable index, it means we cannot reach that point and we return false. If we can iterate through the entire array without exceeding the maximum reachable index, we return true.
 *
 * @Steps to solve the problem (pseudocode):
 * 1. Initialize a variable `maxReach` to 0, which will keep track of the maximum reachable index.
 * 2. Iterate through the array using a loop:
 *    a. If the current index `i` is greater than `maxReach`, return false (we cannot reach this point).
 *    b. Update `maxReach` to be the maximum of its current value and `i + nums[i]` (the farthest we can reach from the current index).
 * 3. If we finish the loop without returning false, return true (we can reach the end of the array).
 *
 *
 * @TimeComplexity O(n) - We traverse the array once.
 * @SpaceComplexity O(1) - We use a constant amount of space to store the maximum reachable index.
 */
function canJump(nums: number[]): boolean {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false;
    }
    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return true;
}

// console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([1]));

/**
 * Dry run: 
 * Input: [2, 3, 1, 1, 4]
 * - Start with maxReach = 0
 * - i = 0: maxReach = max(0, 0 + 2) = 2
 * - i = 1: maxReach = max(2, 1 + 3) = 4
 * - i = 2: maxReach = max(4, 2 + 1) = 4
 * - i = 3: maxReach = max(4, 3 + 1) = 4
 * - i = 4: maxReach = max(4, 4 + 4) = 8 (end of array reached)
 * Output: true

 * Input: [3, 2, 1, 0, 4]
 * - Start with maxReach = 0
 * - i = 0: maxReach = max(0, 0 + 3) = 3
 * - i = 1: maxReach = max(3, 1 + 2) = 3
 * - i = 2: maxReach = max(3, 2 + 1) = 3
 * - i = 3: maxReach = max(3, 3 + 0) = 3
 * - i = 4: i > maxReach (4 > 3), return false
 * Output: false

 * Input: [1]
 * - Start with maxReach = 0
 * - i = 0: maxReach = max(0, 0 + 1) = 1 (end of array reached)
 * Output: true
 */
