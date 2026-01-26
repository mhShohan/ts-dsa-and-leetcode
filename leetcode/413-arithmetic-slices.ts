/**
 * 413. Arithmetic Slices
 * https://leetcode.com/problems/arithmetic-slices/
 *
 * @Explanation:
 * An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.
 *
 * For example, these are arithmetic arrays:
 * 1, 3, 5, 7, 9
 * 7, 7, 7, 7
 * 3, -1, -5, -9
 *
 * The array [1, 1, 2, 5, 7] is not arithmetic because the differences between consecutive elements are not the same.
 *
 * A subarray is called arithmetic if it is contiguous and has at least three elements.
 *
 * @Setps to solve the problem:
 * 1. Initialize two variables: count to keep track of the total number of arithmetic slices, and current to keep track of the number of arithmetic slices ending at the current position.
 * 2. Iterate through the array starting from the third element (index 2).
 * 3. For each element, check if it forms an arithmetic sequence with the two preceding elements.
 * 4. If it does, increment the current count and add it to the total count.
 * 5. If it doesn't, reset the current count to zero.
 * 6. Return the total count after iterating through the array.
 *
 * @Time Complexity: O(n), where n is the length of the array.
 * @Space Complexity: O(1), as we are using only a constant amount of extra space.
 */

function numberOfArithmeticSlices(nums: number[]): number {
  let count = 0;
  let current = 0;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      current += 1;
      count += current;
    } else {
      current = 0;
    }
  }

  return count;
}

console.log(numberOfArithmeticSlices([1, 2, 3, 4])); // Output: 3

/**
 * Dry Run Example:
 * Input: nums = [1, 2, 3, 4]
 * - Initialize count = 0, current = 0
 * - i = 2: nums[2] - nums[1] == nums[1] - nums[0] -> 3 - 2 == 2 - 1 (true)
 *   - current = 1, count = 1
 * - i = 3: nums[3] - nums[2] == nums[2] - nums[1] -> 4 - 3 == 3 - 2 (true)
 *   - current = 2, count = 3
 * Output: 3
 */
