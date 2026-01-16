/**
 * 1877. Minimize Maximum Pair Sum in Array
 * https://leetcode.com/problems/minimize-maximum-pair-sum-in-array
 *
 * @Steps to solve the problem:
 * 1. Sort the input array in ascending order.
 * 2. Initialize a variable to keep track of the maximum pair sum found so far.
 * 3. Use two pointers: one starting at the beginning (left) and the other at the end (right) of the sorted array.
 * 4. While the left pointer is less than the right pointer:
 *    a. Calculate the sum of the elements at the left and right pointers.
 *    b. Update the maximum pair sum if the current sum is greater than the previously recorded maximum.
 *    c. Move the left pointer one step to the right and the right pointer one step to the left.
 * 5. Return the maximum pair sum found.
 *
 * @Time Complexity: O(n log n) due to sorting the array.
 * @Space Complexity: O(1) if we ignore the space used for sorting.
 */

function minPairSum(nums: number[]): number {
  let min = -Infinity;
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    min = Math.max(min, sum);

    left++;
    right--;
  }

  return min;
}

console.log(minPairSum([3, 5, 2, 3]));
console.log(minPairSum([3, 5, 4, 2, 4, 6]));
