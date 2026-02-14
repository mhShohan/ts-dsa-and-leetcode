/**
 * 392. Is Subsequence
 * https://leetcode.com/problems/is-subsequence/
 *
 * @Explanation
 * - s এর প্রতিটা character t তে খুঁজে বের করতে হবে।
 * - যদি match হয়, তাহলে s এর pointer এগিয়ে যাবে।
 * - t এর pointer সবসময় এগিয়ে যাবে।
 * - শেষে যদি s এর pointer s এর length এর সমান হয়, তাহলে s একটি subsequence।
 *
 * @Steps to Solve (psuedocode)
 * 1. Initialize two pointers, i for s and j for t, both starting at 0.
 * 2. Loop while i < s.length and j < t.length:
 *   a. If s[i] === t[j], increment i (move to the next character in s).
 *   b. Increment j (move to the next character in t).
 * 3. After the loop, check if i === s.length. If true, return true (s is a subsequence of t), otherwise return false.
 *
 *
 * @Complexity
 * - Time: O(n) where n is the length of t.
 * - Space: O(1)
 */
function isSubsequence(s: string, t: string): boolean {
  let i = 0; // s pointer
  let j = 0; // t pointer

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++; // match হলে s এগোয়
    }
    j++; // t সবসময় এগোয়
  }

  return i === s.length;
}

console.log(isSubsequence('abd', 'ahbgdc'));

/**
 * Dry Run
 * s = "abd", t = "ahbgdc"
 *
 * i = 0, j = 0
 * s[0] = 'a', t[0] = 'a' -> match, i = 1, j = 1
 * s[1] = 'b', t[1] = 'h' -> no match, i = 1, j = 2
 * s[1] = 'b', t[2] = 'b' -> match, i = 2, j = 3
 * s[2] = 'd', t[3] = 'g' -> no match, i = 2, j = 4
 * s[2] = 'd', t[4] = 'd' -> match, i = 3, j = 5
 *
 * i === s.length (3 === 3) -> return true
 */
