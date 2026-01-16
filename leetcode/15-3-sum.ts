/**
 * 15. 3Sum
 * https://leetcode.com/problems/3sum/
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that
 * i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 * @Steps to solve the problem:
 * 1. Sort the input array to facilitate the two-pointer technique.
 * 2. Iterate through the array, fixing one element and using two pointers to find pairs that sum to the negative of the fixed element.
 *    - If the sum of the three elements is greater than zero, move the right pointer left to decrease the sum.
 *    - If the sum is less than zero, move the left pointer right to increase the sum.
 *    - If the sum is zero, record the triplet and adjust both pointers while skipping duplicates.
 * 3. Skip duplicate elements to ensure unique triplets in the result.
 *    - Continue this process until all elements have been processed.
 * 4. Return the list of unique triplets that sum to zero.
 */

const threeSum = (nums: number[]): number[][] => {
  const result: number[][] = [];
  let n = nums.length;
  nums.sort((a, b) => a - b); // Sort the array to use two-pointer technique

  for (let i = 0; i < n; i++) {
    // Skip duplicate values for the first number
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        result.push([nums[i], nums[j], nums[k]]);
        k--;
        j++;

        // Skip duplicate values for the second number
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-2, 0, 1, 1, 2]));
