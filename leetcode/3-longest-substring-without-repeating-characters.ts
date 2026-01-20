/**
 * 3. Longest Substring Without Repeating Characters
 * http://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * @Steps to solve the problem:
 * 1. Initialize a map to store the last seen index of each character.
 * 2. Use two pointers to represent the current window of non-repeating characters.
 * 3. Iterate through the string with the right pointer, updating the left pointer when a repeating character is found.
 * 4. Update the maximum length of the substring found so far.
 * 5. Return the maximum length after iterating through the string.
 *
 * @Time Complexity: O(n), where n is the length of the string.
 * @Space Complexity: O(min(m, n)), where m is the size of the character set and n is the length of the string.
 */

function lengthOfLongestSubstring(s: string): number {
  const hash: Map<string, number> = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (hash.has(char) && hash.get(char)! >= left) {
      left = hash.get(char)! + 1;
    }

    hash.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
// console.log(lengthOfLongestSubstring('bbbbb'));
// console.log(lengthOfLongestSubstring('pwwkew'));

/**
 * Dry Run Example:
 * Input: s = "abcabcbb"
 * - Initialize hash = {}, left = 0, maxLength = 0
 * - right = 0, char = 'a': hash = {'a': 0}, maxLength = 1
 * - right = 1, char = 'b': hash = {'a': 0, 'b': 1}, maxLength = 2
 * - right = 2, char = 'c': hash = {'a': 0, 'b': 1, 'c': 2}, maxLength = 3
 * - right = 3, char = 'a': left = 1 (update left), hash = {'a': 3, 'b': 1, 'c': 2}, maxLength = 3
 * - right = 4, char = 'b': left = 2 (update left), hash = {'a': 3, 'b': 4, 'c': 2}, maxLength = 3
 * - right = 5, char = 'c': left = 3 (update left), hash = {'a': 3, 'b': 4, 'c': 5}, maxLength = 3
 * - right = 6, char = 'b': left = 5 (update left), hash = {'a': 3, 'b': 6, 'c': 5}, maxLength = 3
 * - right = 7, char = 'b': left = 7 (update left), hash = {'a': 3, 'b': 7, 'c': 5}, maxLength = 3
 * Output: 3
 */
