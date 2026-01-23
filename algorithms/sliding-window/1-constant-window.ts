/**
 * Explanation of constant window technique:
 * The constant window technique, also known as the sliding window technique,
 * is an efficient way to solve problems that involve finding a subset of contiguous elements
 * in an array or list. The idea is to maintain a "window" of a fixed size that moves through
 * the array, updating the sum or other relevant metric as it goes, without having to recalculate
 * everything from scratch each time.
 * In this implementation, we are looking to find the maximum sum of any contiguous subarray
 * of a given size (windowSize) within the input array (numbers). The algorithm works as follows:
 * 1. Initialize two pointers, left and right, to represent the boundaries of the window.
 * 2. Calculate the sum of the first window of size windowSize.
 * 3. Move the window one element to the right by adding the next element (right pointer)
 *    and subtracting the element that is no longer in the window (left pointer).
 * 4. Update the maximum sum if the current window's sum is greater than the previously recorded maximum.
 * 5. Repeat steps 3 and 4 until the right pointer reaches the end of the array.
 *
 * This approach ensures that we only traverse the array once, resulting in a time complexity of O(n),
 * where n is the number of elements in the array.
 */

const constantWindow = (numbers: number[], windowSize: number): number => {
  let max = 0;
  let sum = 0;
  let left = 0;
  let right = 0;

  while (right < windowSize) {
    sum += numbers[right];
    right++;
  }

  max = Math.max(max, sum);
  left++;

  while (right < numbers.length) {
    sum = sum + numbers[right] - numbers[left - 1];
    max = Math.max(max, sum);

    left++;
    right++;
  }

  return max;
};

console.log(constantWindow([-1, 2, 3, 3, 4, 5, 1], 4));

/**
 * Dry Run
 * Input: numbers = [-1, 2, 3, 3, 4, 5, 1], windowSize = 4
 *
 * Initial State:
 * max = 0
 * sum = 0
 * left = 0
 * right = 0
 *
 * First while loop (right < windowSize):
 * Iteration 1: right = 0, sum = -1
 * Iteration 2: right = 1, sum = 1
 * Iteration 3: right = 2, sum = 4
 * Iteration 4: right = 3, sum = 7
 *
 * After first loop:
 * max = 7
 * left = 1 - Increment left pointer to shift the window
 *
 * Second while loop (right < numbers.length):
 * Iteration 1: right = 4, sum = (7 + 4) - (-1) = 12, max = 12
 * Iteration 2: right = 5, sum = (12 + 5) - 2 = 15, max = 15
 * Iteration 3: right = 6, sum = (15 + 1) - 3 = 13, max = 15
 *
 */
