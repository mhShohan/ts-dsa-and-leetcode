/**
 * 383. Ransom Note
 * https://leetcode.com/problems/ransom-note/
 * @ Steps to solve:
 * 1. Create a frequency map to count occurrences of each character in the ransom note.
 * 2. Iterate through each character in the magazine:
 *    - If the character exists in the frequency map, decrement its count.
 *    - If the count reaches zero, remove the character from the map.
 * 3. After processing the magazine, check if the frequency map is empty:
 *    - If it is empty, return true (all characters were found).
 *    - If not, return false (some characters are missing).
 */

const canConstruct = (ransomNote: string, magazine: string) => {
  const ransomNote_fr: Record<string, number> = {};

  // count the frequency of ransomNote
  for (let char of ransomNote) {
    ransomNote_fr[char] = (ransomNote_fr[char] || 0) + 1;
  }

  for (let char of magazine) {
    if (ransomNote_fr[char]) {
      // if char frequency is exist in the ransomNote_fr => decrease value by 1
      ransomNote_fr[char] = ransomNote_fr[char] - 1;

      // char frequency === 0 the delete the field from ransomNote_fr
      if (ransomNote_fr[char] === 0) {
        delete ransomNote_fr[char];
      }
    }
  }

  return Object.keys(ransomNote_fr).length === 0;
};

console.log(canConstruct('aab', 'baa'));
console.log(canConstruct('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj'));
