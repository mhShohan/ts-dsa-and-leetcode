/**
 * 557. Reverse Words in a String II
 * https://leetcode.com/problems/reverse-words-in-a-string-ii/
 *
 * @Steps to solve:
 * 1. Initialize two empty strings: `sentence` to hold the final result and `word` to build each word in reverse.
 * 2. Loop through each character in the input string `s`.
 *    - If the character is not a space, prepend it to the `word` string.
 *    - If the character is a space or it's the last character in the string:
 *      - Append the reversed `word` to `sentence`.
 *      - If it's not the last character, append a space to `sentence`.
 *      - Reset `word` to an empty string for the next word.
 * 3. After the loop, return the `sentence` which now contains all words reversed.
 *
 * @TimeComplexity: O(n) - where n is the length of the input string. We traverse the string once.
 * @SpaceComplexity: O(n) - for storing the output string.
 */

const reverseWords = function (s: string): string {
  let sentence = '';
  let word = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      word = s[i] + word;
    }

    if (s[i] === ' ' || i === s.length - 1) {
      sentence = sentence + word;
      if (i < s.length - 1) {
        sentence = sentence + ' ';
      }
      word = '';
    }
  }

  return sentence;
};
