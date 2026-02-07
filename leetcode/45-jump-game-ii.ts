/**
 * 45. Jump Game II
 * https://leetcode.com/problems/jump-game-ii/
 *
 * @ Explanation of the algorithm:
 * 1. We initialize three variables: `jumps` to count the number of jumps, `currentEnd` to track the end of the current jump range, and `farthest` to track the farthest reachable index.
 * 2. We iterate through the array until the second last element (since we don't need to jump from the last element).
 * 3. For each index `i`, we calculate how far we can reach from that index by adding `i` and `nums[i]`. We update `farthest` if this value is greater than the current `farthest`.
 * 4. If we reach the end of the current jump range (`i === currentEnd`), it means we need to make another jump. We increment the `jumps` counter and update `currentEnd` to the value of `farthest`.
 * 5. Finally, we return the total number of jumps needed to reach the end of the array.
 *
 * @ Time Complexity: O(n) - We traverse the array once.
 * @ Space Complexity: O(1) - We use a constant amount of space for the variables.
 */
function jump(nums: number[]): number {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }

  return jumps;
}

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));

/**
 * Dry Run
 * Input: [2, 3, 1, 1, 4]
 *
 * Iteration 1:
 * i = 0, nums[i] = 2
 * farthest = max(0, 0 + 2) = 2
 * i === currentEnd (0 === 0), so jumps = 1, currentEnd = 2
 *
 * Iteration 2:
 * i = 1, nums[i] = 3
 * farthest = max(2, 1 + 3) = 4
 * i !== currentEnd (1 !== 2), so we continue to the next iteration.
 *
 * Iteration 3:
 * i = 2, nums[i] = 1
 * farthest = max(4, 2 + 1) = 4
 * i === currentEnd (2 === 2), so jumps = 2, currentEnd = 4
 *
 * Iteration ends as we have reached the end of the array.
 * Total jumps needed: 2
 *
 * Output: 2
 *
 *
 * * Input: [2, 3, 0, 1, 4]
 *
 * Iteration 1:
 * i = 0, nums[i] = 2
 * farthest = max(0, 0 + 2) = 2
 * i === currentEnd (0 === 0), so jumps = 1, currentEnd = 2
 *
 * Iteration 2:
 * i = 1, nums[i] = 3
 * farthest = max(2, 1 + 3) = 4
 * i !== currentEnd (1 !== 2), so we continue to the next iteration.
 *
 * Iteration 3:
 * i = 2, nums[i] = 0
 * farthest = max(4, 2 + 0) = 4
 * i === currentEnd (2 === 2), so jumps = 2, currentEnd = 4
 *
 * Iteration ends as we have reached the end of the array.
 * Total jumps needed: 2
 * * Output: 2
 *
 */
