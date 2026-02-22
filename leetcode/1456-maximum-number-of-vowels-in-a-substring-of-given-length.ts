/**
 * 1456. Maximum Number of Vowels in a Substring of Given Length
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
 *
 * @Explanation
 * We can use a sliding window approach to solve this problem efficiently. We will maintain a count of vowels in the current window of size `k` and update the maximum count as we slide the window across the string.
 *
 * 1. Initialize a set of vowels for quick lookup.
 * 2. Count the number of vowels in the first window of size `k`.
 * 3. Slide the window across the string, adding the new character and removing the old character from the count.
 * 4. Update the maximum count of vowels found in any window.
 * 5. Return the maximum count after processing all windows.
 *
 * @Complexity
 * Time Complexity: O(n), where n is the length of the string `s`. We traverse the string once to count vowels in each window.
 * Space Complexity: O(1), since we are using a fixed-size set for vowels and a few variables to keep track of counts.
 */

const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);

function maxVowels(s: string, k: number): number {
  let max = 0;
  let count = 0;

  for (let i = 0; i < k; i++) {
    const char = s[i];
    if (vowelsSet.has(char)) {
      count++;
    }
  }

  max = count;

  for (let i = k; i < s.length; i++) {
    const char = s[i];
    if (vowelsSet.has(char)) {
      count++;
    }

    const prevChar = s[i - k];
    if (vowelsSet.has(prevChar)) {
      count--;
    }

    max = Math.max(max, count);
  }

  return max;
}

console.log(maxVowels('abciiidef', 3));
// console.log(maxVowels('aeiou', 2));
// console.log(maxVowels('leetcode', 3));
// console.log(maxVowels('weallloveyou', 7));

/**
 * Dry Run:
 *
 * Input: s = "abciiidef", k = 3
 *
 * Step 1: Initialize vowelsSet = {'a', 'e', 'i', 'o', 'u'}, max = 0, count = 0
 * Step 2: Count vowels in the first window "abc":
 *   - 'a' is a vowel, count = 1
 *   - 'b' is not a vowel, count = 1
 *   - 'c' is not a vowel, count = 1
 * max = 1
 *
 * Step 3: Slide the window:
 *   - Window "bci": add 'i' (vowel), count = 2; remove 'a' (vowel), count = 1; max = 2
 *   - Window "cii": add 'i' (vowel), count = 2; remove 'b' (not a vowel), count = 2; max = 2
 *   - Window "iii": add 'i' (vowel), count = 3; remove 'c' (not a vowel), count = 3; max = 3
 *   - Window "iid": add 'd' (not a vowel), count = 3; remove 'i' (vowel), count = 2; max = 3
 *   - Window "ide": add 'e' (vowel), count = 3; remove 'i' (vowel), count = 2; max = 3
 *   - Window "def": add 'f' (not a vowel), count = 2; remove 'i' (vowel), count = 1; max = 3
 * Step 4: Return max = 3
 *
 * The output for the input "abciiidef" with k = 3 is 3, which matches the expected result.
 *
 * The function works correctly for the provided test cases and efficiently computes the maximum number of vowels in any substring of length k.
 *
 * Additional test cases can be added to further validate the implementation.
 */
