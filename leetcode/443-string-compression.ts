/**
 * 443. String Compression
 * https://leetcode.com/problems/string-compression/
 *
 * @ Explanation of the code:
 * - We initialize a `count` variable to keep track of the number of occurrences of the current character and an `index` variable to keep track of the position in the `chars` array where we will write the compressed characters.
 * - We iterate through the `chars` array starting from the second character:
 *   - If the current character is the same as the previous character, we increment the `count`.
 *   - If the current character is different from the previous character, we write the previous character to the `chars` array at the current `index`, and if `count` is greater than 1, we convert it to a string and write each digit to the `chars` array.
 *   - We reset the `count` to 1 for the new character.
 * - After the loop, we handle the last character and its count in a similar way.
 * - Finally, we return the value of `index`, which represents the length of the compressed string in the `chars` array.
 *
 * @Steps to solve the problem (pseudocode):
 * 1. Initialize `count` to 1 and `index` to 0.
 * 2. Iterate through the `chars` array starting from the second character:
 *   a. If the current character is the same as the previous character, increment `count`.
 *   b. If the current character is different from the previous character:
 *      i. Write the previous character to the `chars` array at the current `index`.
 *      ii. If `count` is greater than 1, convert it to a string and write each digit to the `chars` array.
 *      iii. Reset `count` to 1 for the new character.
 * 3. After the loop, handle the last character and its count in a similar way.
 * 4. Return the value of `index`, which represents the length of the compressed string in the `chars` array.
 *
 *
 *
 * @ Time Complexity: O(n) - We traverse the array once.
 * @ Space Complexity: O(1) - We use only a constant amount of extra space for the count and index variables.
 */
function compress(chars: string[]): number {
  let count = 1;
  let index = 0;

  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      count++;
    } else {
      chars[index++] = chars[i - 1];
      if (count > 1) {
        const countStr = count.toString();
        for (const digit of countStr) {
          chars[index++] = digit;
        }
      }
      count = 1;
    }
  }

  chars[index++] = chars[chars.length - 1];
  if (count > 1) {
    const countStr = count.toString();
    for (const digit of countStr) {
      chars[index++] = digit;
    }
  }

  return index;
}

console.log('output', compress(['a', 'a', 'b', 'b', 'c', 'c', 'c'])); // output 6
// console.log(compress(['a']));
// console.log(compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']));

/**
 * Dry Run:
 * Input: chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c']
 * - Initialize count = 1, index = 0
 * - Iterate through chars:
 *   - i = 1: chars[1] = 'a' (same as chars[0]), count = 2
 *   - i = 2: chars[2] = 'b' (different from chars[1]):
 *     - Write 'a' to chars[0], index = 1
 *     - Write '2' to chars[1], index = 2
 *     - Reset count = 1
 *   - i = 3: chars[3] = 'b' (same as chars[2]), count = 2
 *   - i = 4: chars[4] = 'c' (different from chars[3]):
 *     - Write 'b' to chars[2], index = 3
 *     - Write '2' to chars[3], index = 4
 *     - Reset count = 1
 *   - i = 5: chars[5] = 'c' (same as chars[4]), count = 2
 *   - i = 6: chars[6] = 'c' (same as chars[5]), count = 3
 * - After the loop, handle the last character 'c':
 *   - Write 'c' to chars[4], index = 5
 *   - Write '3' to chars[5], index = 6
 * Output: 6 (chars array is now ['a', '2', 'b', '2', 'c', '3'])
 *
 * Input: chars = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
 * - Initialize count = 1, index = 0
 * - Iterate through chars:
 *   - i = 1: chars[1] = 'b' (different from chars[0]):
 *     - Write 'a' to chars[0], index = 1
 *     - Reset count = 1
 *   - i = 2: chars[2] = 'b' (same as chars[1]), count = 2
 *   - i = 3: chars[3] = 'b' (same as chars[2]), count = 3
 *   - i = 4: chars[4] = 'b' (same as chars[3]), count = 4
 *   - i = 5: chars[5] = 'b' (same as chars[4]), count = 5
 *   - i = 6: chars[6] = 'b' (same as chars[5]), count = 6
 *   - i = 7: chars[7] = 'b' (same as chars[6]), count = 7
 *   - i = 8: chars[8] = 'b' (same as chars[7]), count = 8
 *   - i = 9: chars[9] = 'b' (same as chars[8]), count = 9
 *   - i = 10: chars[10] = 'b' (same as chars[9]), count = 10
 *   - i = 11: chars[11] = 'b' (same as chars[10]), count = 11
 *   - i = 12: chars[12] = 'b' (same as chars[11]), count = 12
 * - After the loop, handle the last character 'b':
 *   - Write 'b' to chars[1], index = 2
 *   - Write '1' to chars[2], index = 3
 *   - Write '2' to chars[3], index = 4
 * Output: 4 (chars array is now ['a', 'b', '1', '2'])
 */
