/**
 * 442. Find All Duplicates in an Array (https://leetcode.com/problems/find-all-duplicates-in-an-array/description)
 * @Steps to solve the problem
 * 1. Create a frequency map to track occurrences of each number.
 * 2. Initialize an empty array to store duplicates.
 * 3. Iterate through the input array:
 *    - For each number, check if it exists in the frequency map.
 *    - If it does not exist, add it to the map with a value indicating it has been seen once.
 *    - If it already exists and indicates it has been seen once, add it to the duplicates array.
 * 4. Return the duplicates array.
 */

function findDuplicates(nums: number[]): number[] {
  const fr: Record<string, boolean> = {};
  const duplicates: number[] = [];

  for (let value of nums) {
    fr[value] = fr[value] === undefined ? false : true;

    if (fr[value]) {
      duplicates.push(value);
    }
  }

  return duplicates;
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // output => [2,3]
console.log(findDuplicates([1, 1, 2])); //output => [1]
console.log(findDuplicates([1])); // output => []
