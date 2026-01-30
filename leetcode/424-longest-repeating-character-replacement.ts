/**
 * 424. Longest Repeating Character Replacement
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 */

function characterReplacement(s: string, k: number): number {
  // Frequency of characters in the current window
  const freq: number[] = new Array(26).fill(0);

  let left = 0;
  let maxFreq = 0; // highest frequency of a single character in the window
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    console.log(freq);
    const index = s.charCodeAt(right) - 65; // 'A' = 65
    freq[index]++;

    // Update max frequency in the window
    maxFreq = Math.max(maxFreq, freq[index]);

    // Current window size
    const windowSize = right - left + 1;

    // If replacements needed > k, shrink window
    if (windowSize - maxFreq > k) {
      const leftIndex = s.charCodeAt(left) - 65;
      freq[leftIndex]--;
      left++;
    }

    // Update result
    result = Math.max(result, right - left + 1);
  }

  return result;
}

console.log(characterReplacement('AAABBCCDD', 2));
