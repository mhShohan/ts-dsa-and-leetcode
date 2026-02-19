/**
 * 1679. Max Number of K-Sum Pairs
 * https://leetcode.com/problems/max-number-of-k-sum-pairs/
 *
 * @Explanation
 * To solve the problem of finding the maximum number of k-sum pairs in an array, we can use a hash map to keep track of the frequency of each number in the array. The idea is to iterate through the array and for each element, calculate the required complement (k - current element) that would sum up to k. If the complement exists in the hash map and has a positive count, it means we can form a pair, so we increment our operation count and decrease the count of the complement in the hash map. If the complement does not exist or has a count of zero, we add the current element to the hash map with its count.
 * @Steps to solve the problem:
 * 1. Initialize a hash map to store the frequency of each number and a variable `operation` to count the number of pairs.
 * 2. Iterate through each element in the `nums` array:
 *    a. Calculate the complement as `k - element`.
 *    b. Check if the complement exists in the hash map and has a count greater than zero:
 *       - If it does, increment the `operation` count and decrease the count of the complement in the hash map by one.
 *       - If it does not, add or update the count of the current element in the hash map.
 * 3. After iterating through all elements, return the value of `operation`, which represents the maximum number of k-sum pairs found.
 */
function maxOperations(nums: number[], k: number): number {
  const hash = new Map<number, number>();
  let operation = 0;

  for (const element of nums) {
    const need = k - element;

    if (hash.get(need)! > 0) {
      operation++;
      hash.set(need, (hash.get(need) || 0) - 1);
    } else {
      hash.set(element, (hash.get(element) || 0) + 1);
    }
  }

  return operation;
}

console.log(maxOperations([1, 2, 3, 4], 5));

/**
 * Dry Run
 *
 * Input: nums = [1, 2, 3, 4], k = 5
 *
 * Step 1: Initialize hash = {}, operation = 0
 * Step 2: Iterate through nums array:
 *   - element = 1: need = 5 - 1 = 4, hash does not contain 4, update hash to {1: 1}
 *   - element = 2: need = 5 - 2 = 3, hash does not contain 3, update hash to {1: 1, 2: 1}
 *   - element = 3: need = 5 - 3 = 2, hash contains 2 with count > 0, increment operation to 1 and update hash to {1: 1, 2: 0}
 *   - element = 4: need = 5 - 4 = 1, hash contains 1 with count > 0, increment operation to 2 and update hash to {1: 0, 2: 0}
 * Step 3: Return operation which is 2
 */
