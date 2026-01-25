/**
 * 1423. Maximum Points You Can Obtain from Cards
 * https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
 *
 * Explanation:
 * The function maxScore calculates the maximum points that can be obtained
 * by picking k cards from either end of the array cardPoints.
 * It uses a sliding window approach to efficiently compute the maximum sum.
 *
 * @Steps to solve:
 * 1. Initialize leftSum and rightSum to keep track of sums from both ends.
 * 2. Calculate the initial sum of the first k cards from the left.
 * 3. Iterate backwards through the first k cards, adjusting leftSum and rightSum.
 * 4. Update maxSum with the maximum value found during the iterations.
 * 5. Return maxSum as the result.
 *
 * @Complexity Analysis:
 * - Time Complexity: O(k), where k is the number of cards to pick.
 * - Space Complexity: O(1), as we are using a constant amount of extra space.
 */

function maxScore(cardPoints: number[], k: number): number {
  let leftSum = 0;
  let rightSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    leftSum += cardPoints[i];
  }

  maxSum = leftSum;

  let rightIndex = cardPoints.length - 1;
  for (let i = k - 1; i >= 0; i--) {
    leftSum -= cardPoints[i];
    rightSum += cardPoints[rightIndex];

    rightIndex--;
    maxSum = Math.max(maxSum, leftSum + rightSum);
  }

  return maxSum;
}

/**
 * Dry Run
 * For cardPoints = [1, 2, 3, 4, 5, 6, 1] and k = 3:
 *
 * Initial leftSum = 1 + 2 + 3 = 6
 * maxSum = 6
 *
 * Iteration 1:
 * i = 2 (3rd card from left)
 * leftSum = 6 - 3 = 3
 * rightSum = 0 + 1 = 1
 * maxSum = max(6, 3 + 1) = 6
 *
 * Iteration 2:
 * i = 1 (2nd card from left)
 * leftSum = 3 - 2 = 1
 * rightSum = 1 + 6 = 7
 * maxSum = max(6, 1 + 7) = 8
 *
 * Iteration 3:
 * i = 0 (1st card from left)
 * leftSum = 1 - 1 = 0
 * rightSum = 7 + 5 = 12
 * maxSum = max(8, 0 + 12) = 12
 *
 * Final Result: 12
 */

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3)); // Expected output: 12
