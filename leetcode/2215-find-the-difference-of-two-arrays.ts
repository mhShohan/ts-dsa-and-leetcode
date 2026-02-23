/**
 * 2215. Find the Difference of Two Arrays
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/
 *
 * @steps to solve the problem:
 * * 1. Create two sets to store unique elements from both arrays.
 * * 2. Iterate through the first array and add its elements to the first set.
 * * 3. Iterate through the second array and add its elements to the second set.
 * * 4. Create two arrays to store unique elements from each set that are not present in the other set.
 * * 5. Return an array containing both unique arrays.
 *
 * @complexity:
 * * Time Complexity: O(n + m), where n and m are the lengths of nums1 and nums2 respectively.
 * * Space Complexity: O(n + m) in the worst case, if all elements in both arrays are unique.
 */
function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const uniqueToNums1 = Array.from(set1).filter((num) => !set2.has(num));
  const uniqueToNums2 = Array.from(set2).filter((num) => !set1.has(num));

  return [uniqueToNums1, uniqueToNums2];
}

console.log(findDifference([1, 2, 3], [2, 4, 6])); // Output: [[1,3],[4,6]]
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); // Output: [[3],[]]

/**
 * Dry Run:
 *
 * Input: nums1 = [1, 2, 3], nums2 = [2, 4, 6]
 *
 * Step 1: Create sets
 * set1 = {1, 2, 3}
 * set2 = {2, 4, 6}
 *
 * Step 2: Find unique elements
 * uniqueToNums1 = [1, 3] (elements in set1 not in set2)
 * uniqueToNums2 = [4, 6] (elements in set2 not in set1)
 *
 * Step 3: Return result
 * Output: [[1, 3], [4, 6]]
 */
