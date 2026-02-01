/**
 * 3010. Divide an Array Into Subarrays With Minimum Cost I
 * https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/
 *
 * @Problem Explanation
 * You are given a 0-indexed integer array nums. You have to divide the array into one or more subarrays such that the cost of each subarray is equal to the minimum element in that subarray.
 * The cost of the division is equal to the sum of the costs of all the subarrays.
 * Return the minimum possible cost of dividing the array into subarrays.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 * @Steps to Solve (pseudocode)
 * 1. Initialize three variables to track the smallest, second smallest, and third smallest elements in the array.
 * 2. Iterate through each element in the array starting from the second element.
 *    a. If the current element is smaller than the second smallest, update the third smallest to be the second smallest, and update the second smallest to be the current element.
 *    b. Else if the current element is smaller than the third smallest, update the third smallest to be the current element.
 * 3. After iterating through all elements, return the sum of the smallest, second smallest, and third smallest elements as the minimum cost.
 *
 * @Complexity Analysis
 * Time Complexity: O(n), where n is the number of elements in the input array nums. We traverse the array once to find the three smallest elements.
 * Space Complexity: O(1), as we are using a constant amount of extra space regardless of the input size.
 */

function minimumCost(nums: number[]): number {
  let cost_1 = nums[0];
  let cost_2 = Infinity;
  let cost_3 = Infinity;

  for (let i = 1; i < nums.length; i++) {
    const element = nums[i];

    if (element < cost_2) {
      cost_3 = cost_2;
      cost_2 = element;
    } else if (element < cost_3) {
      cost_3 = element;
    }
  }

  return cost_1 + cost_2 + cost_3;
}

/**
 * Dry Run
 * Example: nums = [1, 2, 3, 12]
 * 1. Initialize cost_1 = 1, cost_2 = Infinity, cost_3 = Infinity
 * 2. Iterate through nums starting from index 1:
 *    - i = 1: element = 2
 *      - 2 < Infinity (cost_2), so update cost_3 = Infinity, cost_2 = 2
 *    - i = 2: element = 3
 *      - 3 < Infinity (cost_3), so update cost_3 = 3
 *    - i = 3: element = 12
 *      - 12 is not less than cost_2 or cost_3, so no updates
 * 3. After iteration, cost_1 = 1, cost_2 = 2, cost_3 = 3
 * 4. Return sum: 1 + 2 + 3 = 6
 */

console.log(minimumCost([1, 2, 3, 12]));
// console.log(minimumCost([5, 4, 3]));
// console.log(minimumCost([10, 3, 1, 1]));
