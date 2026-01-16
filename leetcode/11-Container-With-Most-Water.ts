/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 * @ Steps to solve:
 * 1. Initialize two pointers, one at the start (left) and one at the end (right) of the array.
 * 2. Calculate the area formed between the two pointers using the formula: area = min(height[left], height[right]) * (right - left).
 * 3. Update the maximum area found so far if the current area is larger.
 * 4. Move the pointer pointing to the shorter line inward (either left++ or right--) to potentially find a taller line that could increase the area.
 * 5. Repeat steps 2-4 until the two pointers meet.
 * 6. Return the maximum area found.
 *
 * @Time Complexity: O(n), where n is the number of elements in the input array, since we are iterating through the array at most once.
 * @Space Complexity: O(1) since we are using only a constant amount of extra space.
 */

function maxArea(height: number[]): number {
  let max = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    const w = right - left;
    const area = h * w;

    if (max < area) {
      max = area;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
