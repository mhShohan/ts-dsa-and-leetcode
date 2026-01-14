/**
 * 977. Squares of a Sorted Array
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 * @Steps to solve the problem:
 * 1. Initialize two pointers, left at the start (0) and right at the end (length - 1) of the array.
 * 2. Create an output array of the same length as the input array to store the squared values.
 * 3. Iterate from the end of the output array to the beginning:
 *    - Compare the absolute values of the elements at the left and right pointers.
 *    - Square the larger absolute value and place it in the current position of the output array.
 *    - Move the corresponding pointer (left or right) inward.
 * 4. Continue this process until all elements have been processed.
 * 5. Return the output array containing the squared values in sorted order.
 *
 * @TimeComplexity: O(n) - We traverse the input array once.
 * @SpaceComplexity: O(n) - We use an additional array to store the squared values.
 */

function sortedSquares(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  let i = nums.length - 1;

  let output = new Array<number>(nums.length);

  while (left <= right) {
    let value: number;

    if (nums[left] * nums[left] >= nums[right] * nums[right]) {
      value = nums[left] * nums[left++];
    } else {
      value = nums[right] * nums[right--];
    }

    output[i--] = value;
  }

  return output;
}

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
