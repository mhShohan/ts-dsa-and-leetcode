/**
 * 633. Sum of Square Numbers
 * https://leetcode.com/problems/sum-of-square-numbers/
 *
 * Given a non-negative integer c, decide whether there're two integers a and b such that a^2 + b^2 = c.
 *
 * @Steps to solve
 *
 * 1. Initialize two pointers, `a` starting at 0 and `b` starting at the integer square root of `c`.
 * 2. Use a while loop to iterate as long as `a` is less than or equal to `b`.
 * 3. In each iteration, calculate the sum of squares of `a` and `b`.
 * 4. If the sum equals `c`, return true.
 * 5. If the sum is greater than `c`, decrement `b` to reduce the sum.
 * 6. If the sum is less than `c`, increment `a` to increase the sum.
 * 7. If the loop ends without finding such a pair, return false.
 *
 * @Time Complexity: O(√c) because in the worst case, we may need to check all pairs (a, b) where a and b are less than or equal to √c.
 * @Space Complexity: O(1) since we are using only a constant amount of extra space.
 */

const judgeSquareSum = function (c: number): boolean {
  if (c === 0) return true;
  let a = 0;
  let b = Math.sqrt(c);

  while (a < b) {
    const sum = a ** 2 + b ** 2;

    if (sum === c) {
      return true;
    } else if (sum > c) {
      b--;
    } else {
      a++;
    }
  }

  return false;
};

console.log(judgeSquareSum(5)); // true
console.log(judgeSquareSum(3)); // false
console.log(judgeSquareSum(4)); // true
console.log(judgeSquareSum(2)); // true
console.log(judgeSquareSum(1)); // true
