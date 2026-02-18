/**
 * 1732. Find the Highest Altitude
 * https://leetcode.com/problems/find-the-highest-altitude/
 *
 * @Explaination
 * The highest altitude can be found by calculating the cumulative sum of the gain array and keeping track of the maximum value encountered during the calculation. We start with an initial altitude of 0 and iterate through the gain array, adding each gain to the current altitude and updating the maximum altitude if the current altitude exceeds it.
 *
 *@Steps to solve the problem:
 * 1. Initialize two variables: `altitude` to keep track of the current altitude and `max` to keep track of the highest altitude found so far. Both are initialized to 0.
 * 2. Iterate through each element `alt` in the `gain` array:
 *    a. Add the current gain `alt` to the `altitude`.
 *    b. Update `max` to be the maximum of the current `max` and the new `altitude`.
 * 3. After iterating through all gains, return the value of `max`, which represents the highest altitude reached.
 */

function largestAltitude(gain: number[]): number {
  let altitude = 0;
  let max = 0;

  for (let alt of gain) {
    altitude += alt;
    max = Math.max(max, altitude);
  }

  return max;
}

console.log(largestAltitude([-5, 1, 5, 0, -7])); // Output: 1

/**
 * Dry run
 *
 * Input: gain = [-5, 1, 5, 0, -7]
 *
 * Step 1: Initialize altitude = 0, max = 0
 * Step 2: Iterate through gain array:
 *   - alt = -5: altitude = 0 + (-5) = -5, max = max(0, -5) = 0
 *   - alt = 1: altitude = -5 + 1 = -4, max = max(0, -4) = 0
 *   - alt = 5: altitude = -4 + 5 = 1, max = max(0, 1) = 1
 *   - alt = 0: altitude = 1 + 0 = 1, max = max(1, 1) = 1
 *   - alt = -7: altitude = 1 + (-7) = -6, max = max(1, -6) = 1
 * Step 3: Return max which is 1
 *
 * Output: 1
 *
 * The highest altitude reached is 1, which occurs after the third gain of 5 is added to the altitude.
 */
