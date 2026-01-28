/**
 * 1358. Number of Substrings Containing All Three Characters
 * https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/
 *
 * @Explanation of the problem
 * Given a string s consisting only of characters 'a', 'b', and 'c', return the number of substrings containing at least one occurrence of all these characters 'a', 'b', and 'c'.
 * A substring is a contiguous sequence of characters within a string.
 *
 * @Steps to solve the problem (Pseudocode)
 * 1. Initialize two pointers, left and right, both set to 0. These pointers will represent the current window of characters we are considering.
 * 2. Create a hash map to keep track of the count of each character in the current window.
 * 3. Initialize a variable count to keep track of the number of valid substrings found.
 * 4. Iterate with the right pointer through the string s:
 *    a. Add the character at the right pointer to the hash map and update its count.
 *    b. While the size of the hash map is 3 (meaning we have at least one of each character 'a', 'b', and 'c'), move the left pointer to the right until we no longer have all three characters in the window. Update the counts in the hash map accordingly.
 *    c. For each position of the right pointer, add the number of valid substrings ending at right to count. This is given by the current position of the left pointer, since all substrings starting from index 0 to left-1 and ending at right are valid.
 * 5. Return count as the result.
 *
 * @Complexity Analysis
 * - Time Complexity: O(n), where n is the length of the string s. Each character is processed at most twice (once by the right pointer and once by the left pointer).
 * - Space Complexity: O(1), since the hash map will hold at most 3 entries (for 'a', 'b', and 'c') at any time.
 */

function numberOfSubstrings(s: string): number {
  let left = 0;
  let right = 0;
  let count = 0;

  const hash: Map<string, number> = new Map();

  while (right < s.length) {
    const rightChar = s[right];
    hash.set(rightChar, (hash.get(rightChar) || 0) + 1);

    while (hash.size === 3) {
      const leftChar = s[left];
      hash.set(leftChar, hash.get(leftChar)! - 1);
      if (hash.get(leftChar) === 0) {
        hash.delete(leftChar);
      }
      left++;
    }

    count += left; // All substrings ending at 'right' with start index < 'left' are valid

    right++;
  }

  return count;
}

console.log(numberOfSubstrings('abcabc')); // 10
// console.log(numberOfSubstrings("aaacb")) // 3
// console.log(numberOfSubstrings("abc")) // 1

/**
 * Dry Run with explain
 * Input: s = "abcabc"
 *
 * 1. Initialize left = 0, right = 0, count = 0, hash = {}
 * 2. Start iterating with right pointer:
 *   - right = 0: Add 'a' to hash -> hash = {'a': 1}, count = 0
 *   - right = 1: Add 'b' to hash -> hash = {'a': 1, 'b': 1}, count = 0
 *   - right = 2: Add 'c' to hash -> hash = {'a': 1, 'b': 1, 'c': 1}
 *
 * Now hash size is 3, move left pointer:
 *   - left = 0: Remove 'a' -> hash = {'a': 0, 'b': 1, 'c': 1} -> delete 'a' -> hash = {'b': 1, 'c': 1}, left = 1
 *    count += 1 (substrings: "abc")
 *   - right = 3: Add 'a' to hash -> hash = {'b': 1, 'c': 1, 'a': 1}
 * Now hash size is 3, move left pointer:
 *   - left = 1: Remove 'b' -> hash = {'b': 0, 'c': 1, 'a': 1} -> delete 'b' -> hash = {'c': 1, 'a': 1}, left = 2
 *   count += 2 (substrings: "bca", "abca")
 *   - right = 4: Add 'b' to hash -> hash = {'c': 1, 'a': 1, 'b': 1}
 * Now hash size is 3, move left pointer:
 *   - left = 2: Remove 'c' -> hash = {'c': 0, 'a': 1, 'b': 1} -> delete 'c' -> hash = {'a': 1, 'b': 1}, left = 3
 *  count += 3 (substrings: "cab", "bcab", "abcab")
 *   - right = 5: Add 'c' to hash -> hash = {'a': 1, 'b': 1, 'c': 1}
 * Now hash size is 3, move left pointer:
 *   - left = 3: Remove 'a' -> hash = {'a': 0, 'b': 1, 'c': 1} -> delete 'a' -> hash = {'b': 1, 'c': 1}, left = 4
 *  count += 4 (substrings: "abc", "bc", "c", "abcabc")
 *
 *  Final count = 10
 *
 */
