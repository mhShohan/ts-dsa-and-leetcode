/**
 * 283. Move Zeroes
 * https://leetcode.com/problems/move-zeroes/
 *
 * @ Explanation of the code:
 * - We initialize a `left` pointer to keep track of the position where the next non-zero element should be placed.
 * - We iterate through the `nums` array with a `right` pointer:
 *   - If the current element at the `right` pointer is not zero, we swap it with the element at the `left` pointer and increment the `left` pointer.
 * - This way, all non-zero elements are moved to the front of the array, and all zeros are moved to the end.
 *
 * @Steps to solve the problem (pseudocode):
 * 1. Initialize `left` to 0.
 * 2. Iterate through the `nums` array with a `right` pointer:
 *   a. If `nums[right]` is not zero:
 *      i. Swap `nums[left]` and `nums[right]`.
 *      ii. Increment `left`.
 *
 *
 *
 * @ Time Complexity: O(n) - We traverse the array once.
 * @ Space Complexity: O(1) - We use only a constant amount of extra space for the pointers.
 */
function moveZeroes(nums: number[]): void {
  let left = 0; // Pointer for the position to place the next non-zero element
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      // Swap the elements at left and right pointers
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++; // Move the left pointer to the next position
    }
  }
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // output [1, 3, 12, 0, 0]
console.log(moveZeroes([0])); // output [0]
console.log(moveZeroes([1, 0, 1])); // output [1, 1, 0]

/**
 * Dry Run:
 * Input: [0, 1, 0, 3, 12]
 * - Initialize left = 0
 * - right = 0: nums[right] = 0 (do nothing)
 * - right = 1: nums[right] = 1 (swap nums[left] and nums[right], left becomes 1)
 *   Array after swap: [1, 0, 0, 3, 12]
 * - right = 2: nums[right] = 0 (do nothing)
 * - right = 3: nums[right] = 3 (swap nums[left] and nums[right], left becomes 2)
 *   Array after swap: [1, 3, 0, 0, 12]
 * - right = 4: nums[right] = 12 (swap nums[left] and nums[right], left becomes 3)
 *   Array after swap: [1, 3, 12, 0, 0]
 * Final output: [1, 3, 12, 0, 0]
 */
