/**
 * 12. Integer to Roman
 * https://leetcode.com/problems/integer-to-roman/
 *
 * Given an integer, convert it to a Roman numeral.
 *
 * @Steps to solve the problem (pseudocode):
 * 1. Create two arrays: one for integer values and another for corresponding Roman numeral symbols.
 * 2. Initialize an empty string to build the Roman numeral.
 * 3. Loop through the integer values array:
 *    a. While the input number is greater than or equal to the current integer value:
 *       i. Subtract the integer value from the input number.
 *       ii. Append the corresponding Roman numeral symbol to the result string.
 * 4. Return the resulting Roman numeral string.
 */

function intToRoman(num: number): string {
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let romanNumeral = '';

  for (let i = 0; i < val.length; i++) {
    while (num >= val[i]) {
      num -= val[i];
      romanNumeral += syms[i];
    }
  }
  return romanNumeral;
}

/**
 * Dry Run
 * Input: 3749
 *
 * Step 1: Initialize arrays and result string
 * val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
 * syms = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
 * romanNumeral = ''
 *
 * Step 2: Start looping through val array
 * i = 0: num (3749) >= 1000
 *   - Subtract 1000: num = 2749, romanNumeral = 'M'
 *   - Subtract 1000: num = 1749, romanNumeral = 'MM'
 *   - Subtract 1000: num = 749, romanNumeral = 'MMM'
 * i = 1: num (749) < 900, move to next
 * i = 2: num (749) >= 500
 *   - Subtract 500: num = 249, romanNumeral = 'MMMD'
 * i = 3: num (249) < 400, move to next
 * i = 4: num (249) >= 100
 *   - Subtract 100: num = 149, romanNumeral = 'MMMDC'
 *   - Subtract 100: num = 49, romanNumeral = 'MMMDCC'
 * i = 5: num (49) < 90, move to next
 * i = 6: num (49) >= 50, move to next
 * i = 7: num (49) >= 40
 *   - Subtract 40: num = 9, romanNumeral = 'MMMDCCXL'
 * i = 8: num (9) < 10, move to next
 * i = 9: num (9) >= 9
 *   - Subtract 9: num = 0, romanNumeral = 'MMMDCCXLIX'
 *
 * Step 3: num is now 0, exit loop
 *
 * Final Output: 'MMMDCCXLIX'
 */

console.log(intToRoman(3749)); // Expected output: "MMMDCCXLIX"
