/**
 * 50. Pow(x, n)
 * https://leetcode.com/problems/powx-n/
 *
 * Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
 *
 * @Explaination
 * We can use the "exponentiation by squaring" method to efficiently compute x^n.
 * The idea is to divide the problem into smaller subproblems:
 * - If n is even, we can compute (x^(n/2))^2.
 * - If n is odd, we can compute x * (x^((n-1)/2))^2.
 * This reduces the time complexity to O(log n).
 *
 * @Steps to solve the problem (psuedocode):
 * 1. If n is 0, return 1 (base case).
 * 2. If n is negative, convert x to 1/x and n to -n.
 * 3. Recursively compute the power for n/2.
 * 4. If n is even, return the square of the result from step 3.
 * 5. If n is odd, return x multiplied by the square of the result from step 3.
 *
 * @TimeComplexity O(log n)
 * @SpaceComplexity O(log n) due to recursion stack
 */
function myPow(x: number, n: number): number {
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let half = myPow(x, Math.floor(n / 2));

  if (n % 2 === 0) {
    return half * half;
  } else {
    return half * half * x;
  }
}

/**
 * Dry Run
 * Input: x = 2.0, n = 10
 * 1. myPow(2.0, 10)
 *    - n is even, compute half = myPow(2.0, 5)
 * 2. myPow(2.0, 5)
 *    - n is odd, compute half = myPow(2.0, 2)
 * 3. myPow(2.0, 2)
 *    - n is even, compute half = myPow(2.0, 1)
 * 4. myPow(2.0, 1)
 *    - n is odd, compute half = myPow(2.0, 0)
 * 5. myPow(2.0, 0)
 *    - base case, return 1
 * Backtrack:
 * 4. myPow(2.0, 1) returns 2.0 * 1 * 1 = 2.0
 * 3. myPow(2.0, 2) returns 2.0 * 2.0 = 4.0
 * 2. myPow(2.0, 5) returns 4.0 * 4.0 * 2.0 = 32.0
 * 1. myPow(2.0, 10) returns 32.0 * 32.0 = 1024.0
 */

console.log(myPow(2.0, 10)); // output: 1024.00000
