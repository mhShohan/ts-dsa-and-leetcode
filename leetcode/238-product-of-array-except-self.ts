/**
 * 238. Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/
 *
 * @ Steps to solve the problem (pseudocode - Optimized Approach):
 * 1. Initialize an array `answer` of the same length as `nums` and fill it with 1s.
 * 2. Initialize a variable `prefix` to keep track of the product of elements to the left of the current index.
 * 3. Iterate through the input array `nums` from left to right:
 *    - Set `answer[i]` to the current value of `prefix`.
 *    - Update `prefix` by multiplying it with `nums[i]`.
 * 4. Initialize a variable `suffix` to keep track of the product of elements to the right of the current index.
 * 5. Iterate through the input array `nums` from right to left:
 *    - Multiply `answer[i]` by the current value of `suffix`.
 *    - Update `suffix` by multiplying it with `nums[i]`.
 * 6. After both passes, return the `answer` array, which now contains the product of all elements except itself for each index.
 *
 * Time Complexity: O(n) - We traverse the array twice.
 * Space Complexity: O(n) - We use the `answer` array for output, and the space used for variables is constant.
 */
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
}

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]

/**
 * Dry run
 * Input: nums = [1, 2, 3, 4]
 *
 * Initialize:
 * n = 4
 * answer = [1, 1, 1, 1]
 *
 * First Pass (Prefix):
 * i = 0:
 * -- answer[0] = prefix = 1
 * -- prefix = prefix * nums[0] = 1 * 1 = 1
 * i = 1:
 * -- answer[1] = prefix = 1
 * -- prefix = prefix * nums[1] = 1 * 2 = 2
 * i = 2:
 * -- answer[2] = prefix = 2
 * -- prefix = prefix * nums[2] = 2 * 3 = 6
 * i = 3:
 * -- answer[3] = prefix = 6
 * -- prefix = prefix * nums[3] = 6 * 4 = 24
 *
 * After first pass, answer = [1, 1, 2, 6]
 *
 * Second Pass (Suffix):
 * i = 3:
 * -- answer[3] *= suffix => answer[3] = 6 * 1 = 6
 * -- suffix *= nums[3] => suffix = 1 * 4 = 4
 * i = 2:
 * -- answer[2] *= suffix => answer[2] = 2 * 4 = 8
 * -- suffix *= nums[2] => suffix = 4 * 3 = 12
 * i = 1:
 * -- answer[1] *= suffix => answer[1] = 1 * 12 = 12
 * -- suffix *= nums[1] => suffix = 12 * 2 = 24
 * i = 0:
 * -- answer[0] *= suffix => answer[0] = 1 * 24 = 24
 * -- suffix *= nums[0] => suffix = 24 * 1 = 24
 *
 * Final answer: [24, 12, 8, 6]
 */
