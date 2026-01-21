/**
 * 1004. Max Consecutive Ones III
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 *
 * Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
 *
 * @Steps to Solve:
 * 1. Initialize variables to keep track of the maximum length of consecutive 1's (max), the count of zeros in the current window (zeros), and two pointers (left and right) for the sliding window.
 * 2. Iterate through the array using the right pointer.
 * 3. For each element, if it is 0, increment the zeros count.
 * 4. If the count of zeros exceeds k, move the left pointer to the right until the count of zeros is less than or equal to k, decrementing the zeros count if a 0 is passed.
 * 5. Update the maximum length of consecutive 1's found so far.
 * 6. Return the maximum length after iterating through the array.
 *
 * @Complexity Analysis:
 * - Time Complexity: O(n), where n is the length of the input array nums. Each element is processed at most twice (once by the right pointer and once by the left pointer).
 * - Space Complexity: O(1), as we are using a constant amount of extra space.
 */

const longestOnes = function (nums: number[], k: number): number {
  let max = 0,
    zeros = 0,
    left = 0,
    right = 0;

  while (right < nums.length) {
    const cur_num = nums[right];

    if (cur_num === 0) zeros++;
    if (zeros <= k) {
      max = Math.max(max, right - left + 1);
    } else {
      if (nums[left] === 0) zeros--;
      left++;
    }

    right++;
  }

  return max;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));

/**
 * Dry Run
 *
 * Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
 * Output: 6
 *
 * Initialize:
 * max = 0, zeros = 0, left = 0, right = 0
 *
 * Iteration 1 (right = 0):
 * cur_num = 1
 * zeros = 0
 * max = 1 (right - left + 1)
 *
 * Iteration 2 (right = 1):
 * cur_num = 1
 * zeros = 0
 * max = 2 (right - left + 1)
 *
 * Iteration 3 (right = 2):
 * cur_num = 1
 * zeros = 0
 * max = 3 (right - left + 1)
 *
 * Iteration 4 (right = 3):
 * cur_num = 0
 * zeros = 1
 * max = 4 (right - left + 1)
 *
 * Iteration 5 (right = 4):
 * cur_num = 0
 * zeros = 2
 * max = 5 (right - left + 1)
 *
 * Iteration 6 (right = 5):
 * cur_num = 0
 * zeros = 3
 * zeros > k, so we move left pointer:
 * nums[left] = 1, zeros = 3
 * left = 1
 *
 * Iteration 7 (right = 6):
 * cur_num = 1
 * zeros = 3
 * zeros > k, so we move left pointer:
 * nums[left] = 1, zeros = 3
 * left = 2
 *
 * Iteration 8 (right = 7):
 * cur_num = 1
 * zeros = 3
 * zeros > k, so we move left pointer:
 * nums[left] = 1, zeros = 3
 * left = 3
 *
 * Iteration 9 (right = 8):
 * cur_num = 1
 * zeros = 3
 * zeros > k, so we move left pointer:
 * nums[left] = 0, zeros = 2
 * left = 4
 *
 * Iteration 10 (right = 9):
 * cur_num = 1
 * zeros = 2
 * max = 6 (right - left + 1)
 *
 * Iteration 11 (right = 10):
 * cur_num = 0
 * zeros = 3
 * zeros > k, so we move left pointer:
 * nums[left] = 0, zeros = 2
 * left = 5
 *
 * End of array:
 * Return max = 6
 *
 */
