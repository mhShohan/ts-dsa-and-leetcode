/**
 * 26. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @Steps to solve:
 * 1. Initialize two pointers, left and right. Set left to 0 and right to 1.
 * 2. Iterate through the array with the right pointer.
 * 3. If the element at the right pointer is different from the element at the left pointer, increment the left pointer and update the element at the left pointer to be the element at the right pointer.
 * 4. Continue this process until the right pointer reaches the end of the array.
 * 5. The length of the modified array without duplicates will be left + 1.
 */

function removeDuplicates(nums: number[]): number {
  let left = 0;

  for (let right = 1; right < nums.length; right++) {
    if (nums[left] !== nums[right]) {
      left++;
      nums[left] = nums[right];
    }
  }

  return left + 1;
}

console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
console.log(removeDuplicates([1, 2, 3, 4, 5])); // 5
console.log(removeDuplicates([])); // 0
console.log(removeDuplicates([1, 1, 1, 1, 1])); // 1
console.log(removeDuplicates([-1, 0, 0, 0, 0, 3, 3])); // 3
