/**
 * 560. Subarray Sum Equals K
 * https://leetcode.com/problems/subarray-sum-equals-k/
 *
 * @ Steps to solve the problem (pseudocode - Brute Force Approach):
 * 1. Initialize a variable `count` to keep track of the number of subarrays that sum to `k`.
 * 2. Use a nested loop to iterate through all possible subarrays of the input array `nums`.
 *    - The outer loop will start from the first element and go to the end of the array.
 *    - The inner loop will start from the current index of the outer loop and go to the end of the array.
 * 3. For each subarray defined by the indices of the outer and inner loops, calculate the sum of the elements in that subarray.
 * 4. If the calculated sum equals `k`, increment the `count` variable.
 * 5. After iterating through all possible subarrays, return the value of `count`.
 *
 *
 * Brute Force Approach:
 * Time Complexity: O(n^2) - We have two nested loops to calculate the sum of all possible subarrays.
 * Space Complexity: O(1) - We are using a constant amount of space to store the count and sum variables.
 */
function subarraySumBruteForce(nums: number[], k: number): number {
  const n = nums.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = i; j < n; j++) {
      sum += nums[j];
      if (sum === k) count++;
    }
  }

  return count;
}

/**
 * Dry Run:
 * Input: nums = [1, 1, 1], k = 2
 * - Initialize count = 0
 * - Outer loop (i = 0):
 *   - sum = 0
 *   - Inner loop (j = 0): sum = 1 (not equal to k)
 *   - Inner loop (j = 1): sum = 2 (equal to k, count = 1)
 *   - Inner loop (j = 2): sum = 3 (not equal to k)
 * - Outer loop (i = 1):
 *   - sum = 0
 *   - Inner loop (j = 1): sum = 1 (not equal to k)
 *   - Inner loop (j = 2): sum = 2 (equal to k, count = 2)
 * - Outer loop (i = 2):
 *   - sum = 0
 *   - Inner loop (j = 2): sum = 1 (not equal to k)
 * - Return count = 2
 */

console.log(subarraySumBruteForce([1, 1, 1], 2)); // Output: 2
console.log(subarraySumBruteForce([1, 2, 3], 3)); // Output: 2

/**
 * ----------------------------------------------------------------------------
 * -------------------------------Optimized Approach---------------------------
 * ----------------------------------------------------------------------------
 */

/**
 * 560. Subarray Sum Equals K
 * https://leetcode.com/problems/subarray-sum-equals-k/
 *
 * @ Steps to solve the problem (pseudocode - Optimized Approach):
 * 1. Initialize a hash map `prefixSumCount` to store the frequency of prefix sums, and a variable `prefixSum` to keep track of the current prefix sum.
 * 2. Initialize a variable `count` to keep track of the number of subarrays that sum equal to `k`.
 * 3. Iterate through each number in the input array `nums`:
 *    - Update the `prefixSum` by adding the current number.
 *    - Calculate the complement as `prefixSum - k`. This represents the prefix sum that we need to find in order for the current prefix sum to equal `k`.
 *    - If the complement exists in the `prefixSumCount` hash map, it means there are subarrays that sum equal to `k`, so we add the frequency of that complement to our `count`.
 *    - Update the frequency of the current `prefixSum` in the hash map. If it already exists, increment its count; otherwise, set it to 1.
 * 4. After iterating through all numbers, return the value of `count`.
 *
 * Optimized Approach:
 * Time Complexity: O(n) - We traverse the array once, and each lookup and update operation in the hash map is O(1).
 * Space Complexity: O(n) - In the worst case, we might store all prefix sums in the hash map.
 */
function subarraySum(nums: number[], k: number): number {
  // using prefix sum and hash map to store the frequency of prefix sums
  const prefixSumCount: { [key: number]: number } = {};
  let prefixSum = 0;
  let count = 0;

  // Initialize the hash map with the prefix sum of 0 occurring once
  prefixSumCount[0] = 1;

  for (const num of nums) {
    prefixSum += num;

    // Check if there is a prefix sum that when subtracted from the current prefix sum equals k
    const complement = prefixSum - k;
    console.log(prefixSumCount);
    console.log({ num, prefixSum, complement, count });
    if (complement in prefixSumCount) {
      count += prefixSumCount[complement];
    }

    // Update the frequency of the current prefix sum in the hash map
    if (prefixSum in prefixSumCount) {
      prefixSumCount[prefixSum]++;
    } else {
      prefixSumCount[prefixSum] = 1;
    }
  }

  return count;
}

// console.log(subarraySum([1, 1, 1], 2)); // Output: 2
console.log(subarraySum([1, 2, 3], 3)); // Output: 2

/**
 * Dry run
 * Input: nums = [1, 1, 1], k = 2
 *
 * Initialize:
 * prefixSumCount = {0: 1}
 * prefixSum = 0
 * count = 0
 *
 * Iteration 1:
 * num = 1
 * prefixSum = 0 + 1 = 1
 * complement = 1 - 2 = -1 (not in prefixSumCount)
 * Update prefixSumCount: {0: 1, 1: 1}
 *
 * Iteration 2:
 * num = 1
 * prefixSum = 1 + 1 = 2
 * complement = 2 - 2 = 0 (in prefixSumCount, count += 1)
 * count = 1
 * Update prefixSumCount: {0: 1, 1: 1, 2: 1}
 *
 * Iteration 3:
 * num = 1
 * prefixSum = 2 + 1 = 3
 * complement = 3 - 2 = 1 (in prefixSumCount, count += 1)
 * count = 2
 * Update prefixSumCount: {0: 1, 1: 1, 2: 1, 3: 1}
 *
 * Final count = 2
 *
 * The output is 2, which matches the expected result.
 *
 * The time complexity of this algorithm is O(n) where n is the length of the input array, and the space complexity is also O(n) in the worst case due to the hash map storing prefix sums.
 *
 * This approach efficiently counts the number of subarrays that sum to k by leveraging prefix sums and a hash map to track their frequencies.
 */
