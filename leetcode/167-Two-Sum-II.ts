/**
 * 167. Two Sum II - Input Array Is Sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
 * @Steps to solve the problem:
 * 1. Initialize two pointers, left at the start and right at the end of the array.
 * 2. While left pointer is less than right pointer:
 *    a. Calculate the sum of the elements at the left and right pointers.
 *    b. If the sum equals the target, return the indices (1-based).
 *    c. If the sum is greater than the target, move the right pointer one step left.
 *    d. If the sum is less than the target, move the left pointer one step right.
 * 3. If no pair is found, return an empty array.
 *
 * @Time Complexity: O(n), where n is the number of elements in the input array, since we are iterating through the array at most once.
 * @Space Complexity: O(1) since we are using only a constant amount of extra space.
 */

function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (target === sum) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output : [1, 2]
console.log(twoSum([2, 3, 4], 6)); // Output : [1, 3]
console.log(twoSum([-1, 0], -1)); // Output : [1, 2]
