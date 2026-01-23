/**
 * longest Sub Array technique - Sliding Window
 *
 * Explanation of technique:
 * 1. We maintain a window with two pointers (start and end).
 * 2. We expand the window by moving the end pointer and adding elements to the current sum.
 * 3. If the current sum exceeds k, we shrink the window by moving the start pointer and subtracting elements from the current sum.
 * 4. We keep track of the maximum length of the window that satisfies the condition (sum <= k).
 *
 */

/**
 * longest Sub Array brute force technique
 *
 * Explanation:
 * 1. We use two nested loops to consider all possible subarray.
 * 2. For each subarray, we calculate the sum and check if it is less than or equal to k.
 * 3. If it is, we update the maximum length and the window if the current subarray is longer than the previous maximum.
 *
 * @TimeComplexity O(n*n) - two nested loops
 * @SpaceComplexity O(1) - constant space for variables
 *
 */
const longestSubArrayBruteForce = (numbers: number[], k: number) => {
  let maxLen = 0;
  const window = [0, 0];

  for (let i = 0; i < numbers.length; i++) {
    let sum = numbers[0];

    for (let j = 1; j < numbers.length; j++) {
      sum += numbers[j];
      if (sum <= k) {
        // to track the window positions (optional)
        if (maxLen < j - i + 1) {
          window[0] = i;
          window[1] = j;
        }

        maxLen = Math.max(maxLen, j - i + 1);
      } else {
        break;
      }
    }
  }

  return {
    maxLen,
    window,
  };
};

console.log(longestSubArrayBruteForce([2, 5, 1, 7, 10], 14));

/**
 * longest Sub Array technique (Better approach) - Sliding Window
 *
 * Explanation of technique:
 * 1. We maintain a window with two pointers (start and end).
 * 2. We expand the window by moving the end pointer and adding elements to the current sum.
 * 3. If the current sum exceeds k, we shrink the window by moving the start pointer and subtracting elements from the current sum.
 *
 * @TimeComplexity O(2n) - each element is processed at most twice
 * @SpaceComplexity O(1) - constant space for variables
 */
const longestSubArrayBetter = (numbers: number[], k: number) => {
  let maxLen = 0;
  let left = 0;
  let right = 0;
  let currentSum = 0;

  while (right < numbers.length) {
    currentSum += numbers[right];

    // Shrink the window from the left if the current sum exceeds k
    while (currentSum > k) {
      currentSum -= numbers[left];
      left++;
    }

    if (currentSum <= k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    // Expand the window to the right
    right++;
  }

  return maxLen;
};

/**
 * Dry Run
 * Input: numbers = [2, 5, 1, 7, 10], k = 14
 *
 * 1. Initialize variables:
 *    - maxLen = 0
 *    - left = 0
 *    - right = 0
 *    - currentSum = 0
 *
 * 2. Start the while loop (right < numbers.length):
 *    - Add numbers[right] to currentSum:
 *      - currentSum = 0 + 2 = 2
 *    - currentSum (2) <= k (14), update maxLen:
 *      - maxLen = max(0, 0 - 0 + 1) = 1
 *    - Increment right:
 *      - right = 1
 *
 * 3. Next iteration:
 *    - Add numbers[right] to currentSum:
 *      - currentSum = 2 + 5 = 7
 *    - currentSum (7) <= k (14), update maxLen:
 *      - maxLen = max(1, 1 - 0 + 1) = 2
 *    - Increment right:
 *      - right = 2
 *
 * 4. Next iteration:
 *    - Add numbers[right] to currentSum:
 *      - currentSum = 7 + 1 = 8
 *    - currentSum (8) <= k (14), update maxLen:
 *      - maxLen = max(2, 2 - 0 + 1) = 3
 *    - Increment right:
 *      - right = 3
 *
 * 5. Next iteration:
 *    - Add numbers[right] to currentSum:
 *      - currentSum = 8 + 7 = 15
 *    - currentSum (15) > k (14), shrink window from left:
 *      - Subtract numbers[left] from currentSum:
 *        - currentSum = 15 - 2 = 13
 *      - Increment left:
 *        - left = 1
 *    - currentSum (13) <= k (14), update maxLen:
 *      - maxLen = max(3, 3 - 1 + 1) = 3
 *    - Increment right:
 *      - right = 4
 *
 * 6. Next iteration:
 *    - Add numbers[right] to currentSum:
 *      - currentSum = 13 + 10 = 23
 *    - currentSum (23) > k (14), shrink window from left:
 *      - Subtract numbers[left] from currentSum:
 *        - currentSum = 23 - 5 = 18
 *      - Increment left:
 *        - left = 2
 *    - currentSum (18) > k (14), shrink window from left again:
 *      - Subtract numbers[left] from currentSum:
 *        - currentSum = 18 - 1 = 17
 *      - Increment left:
 *        - left = 3
 *    - currentSum (17) > k (14), shrink window from left again:
 *      - Subtract numbers[left] from currentSum:
 *        - currentSum = 17 - 7 = 10
 *      - Increment left:
 *        - left = 4
 *    - currentSum (10) <= k (14), update maxLen:
 *      - maxLen = max(3, 4 - 4 + 1) = 3
 *    - Increment right:
 *      - right = 5
 *
 * 7. Exit the while loop (right >= numbers.length).
 * 8. Return maxLen:
 *    - return 3
 */

console.log(longestSubArrayBetter([2, 5, 1, 7, 10], 14));

/**
 * longest SubArray (Optimal Approach) - Sliding Window Pattern
 *
 * Explanation:
 * This function finds the length of the longest contiguous sub-array
 * whose sum is less than or equal to a given value k using the sliding window technique.
 *
 * Approach:
 * 1. We maintain a window defined by two pointers (left and right) and a current sum of the elements in the window.
 * 2. We expand the window by moving the right pointer and adding elements to the current sum.
 * 3. If the current sum exceeds k, we shrink the window by moving the left pointer and subtracting elements from the current sum.
 *
 * @TimeComplexity O(n) - linear time, where n is the number of elements in the array
 * @SpaceComplexity O(1) - constant space for variables
 */
const longestSubArrayOptimal = (numbers: number[], k: number) => {
  let maxLen = 0;
  let left = 0;
  let right = 0;
  let currentSum = 0;

  while (right < numbers.length) {
    currentSum += numbers[right];

    if (currentSum > k) {
      currentSum -= numbers[left];
      left++;
    }

    if (currentSum <= k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    // Expand the window to the right
    right++;
  }

  return maxLen;
};

/**
 * Dry Run
 * Input: [2, 5, 1, 7, 10], k = 14
 *
 * 1. Initialize maxLen = 0, left = 0, right = 0, currentSum = 0
 * 2. Start expanding the window:
 *    - Add numbers[0] (2): currentSum = 2, maxLen = 1
 *    - Add numbers[1] (5): currentSum = 7, maxLen = 2
 *    - Add numbers[2] (1): currentSum = 8, maxLen = 3
 *    - Add numbers[3] (7): currentSum = 15 (exceeds k)
 *      - Shrink window: Remove numbers[0] (2): currentSum = 13, left = 1
 *      - maxLen remains 3
 *    - Add numbers[4] (10): currentSum = 23 (exceeds k)
 *      - Shrink window: Remove numbers[1] (5): currentSum = 18, left = 2
 *      - Shrink window: Remove numbers[2] (1): currentSum = 17, left = 3
 *      - Shrink window: Remove numbers[3] (7): currentSum = 10, left = 4
 *      - maxLen remains 3
 * 3. End of array reached. The longest sub-array length with sum <= k is 3.
 *
 * Output: 3
 */

console.log(longestSubArrayOptimal([2, 5, 1, 7, 10], 14));
