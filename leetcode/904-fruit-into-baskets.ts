/**
 * 904. Fruit Into Baskets
 * https://leetcode.com/problems/fruit-into-baskets/
 *
 * @Explanation of the problem
 * You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.
 * You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:
 * 1. You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
 * 2. Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
 * 3. Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
 *
 * Given the integer array fruits, return the maximum number of fruits you can pick.
 *
 * @Steps to solve the problem (Pseudocode)
 * 1. Initialize two pointers, left and right, both set to 0. These pointers will represent the current window of trees we are considering.
 * 2. Create a hash map to keep track of the count of each type of fruit in the current window.
 * 3. Initialize a variable maxFruits to keep track of the maximum number of fruits collected.
 * 4. Iterate with the right pointer through the fruits array:
 *    a. Add the fruit at the right pointer to the hash map and update its count.
 *    b. If the size of the hash map exceeds 2 (meaning we have more than two types of fruits), move the left pointer to the right until we are back to having only two types of fruits in the window. Update the counts in the hash map accordingly.
 *    c. Calculate the current window size (right - left + 1) and update maxFruits if this size is greater than maxFruits.
 * 5. Return maxFruits as the result.
 *
 * @Complexity Analysis
 * - Time Complexity: O(2n), where n is the number of trees. Each tree is processed at most twice (once by the right pointer and once by the left pointer).
 * - Space Complexity: O(1), since the hash map will hold at most 3 entries (for the 3 types of fruits) at any time.
 */

function totalFruit(fruits: number[]): number {
  let left = 0;
  let right = 0;
  let maxFruits = 0;

  const hash: Map<number, number> = new Map();

  while (right < fruits.length) {
    const rightElement = fruits[right];
    hash.set(rightElement, (hash.get(rightElement) || 0) + 1);

    if (hash.size > 2) {
      while (hash.size > 2) {
        const leftElement = fruits[left];
        hash.set(leftElement, hash.get(leftElement)! - 1);
        if (hash.get(leftElement) === 0) {
          hash.delete(leftElement);
        }
        left++;
      }
    }

    if (hash.size <= 2) {
      maxFruits = Math.max(maxFruits, right - left + 1);
    }

    right++;
  }

  return maxFruits;
}

// console.log(totalFruit([1, 2, 1]));
// console.log(totalFruit([0, 1, 2, 2]));
console.log(totalFruit([1, 2, 3, 2, 2]));

/**
 * Dry Run with explain
 * Input: fruits = [1, 2, 3, 2, 2]
 *
 * 1. Initialize left = 0, right = 0, maxFruits = 0, hash = {}
 * 2. Start iterating with right pointer:
 *    - right = 0: Add fruit 1 to hash -> hash = {1: 1}, maxFruits = 1
 *    - right = 1: Add fruit 2 to hash -> hash = {1: 1, 2: 1}, maxFruits = 2
 *    - right = 2: Add fruit 3 to hash -> hash = {1: 1, 2: 1, 3: 1} (size > 2)
 *      - Move left pointer:
 *        - left = 0: Remove fruit 1 -> hash = {2: 1, 3: 1}, left = 1
 *    - right = 2: Now size <= 2, maxFruits = 2
 *    - right = 3: Add fruit 2 to hash -> hash = {2: 2, 3: 1}, maxFruits = 3
 *    - right = 4: Add fruit 2 to hash -> hash = {2: 3, 3: 1}, maxFruits = 4
 *
 * 3. End of iteration, return maxFruits = 4
 */
