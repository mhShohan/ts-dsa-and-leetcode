/**
 * Find the second largest
 * @Step to solve
 * 1. Initialize two variables to hold the largest and second largest values.
 * 2. Iterate through the array of numbers.
 * 3. For each number, check if it is greater than the current largest number.
 *    - If it is, update the second largest to be the current largest, and then update the largest to be the current number.
 *    - If it is not, check if it is greater than the current second largest number and not equal to the largest number.
 *    - If it is, update the second largest to be the current number.
 * 4. After iterating through the array, return the second largest number found.
 */
const findSecondLargest = (numbers: number[]): number => {
  const n = numbers.length;

  if (n < 2) return -1;

  let large = -Infinity;
  let second_large = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > large) {
      second_large = large;
      large = numbers[i];
    } else if (numbers[i] > second_large && second_large !== large) {
      second_large = numbers[i];
    }
  }

  return second_large;
};

/**
 * Find the second smallest
 * @Step to solve
 * 1. Initialize two variables to hold the smallest and second smallest values.
 * 2. Iterate through the array of numbers.
 * 3. For each number, check if it is less than the current smallest number.
 *    - If it is, update the second smallest to be the current smallest, and then update the smallest to be the current number.
 *    - If it is not, check if it is less than the current second smallest number and not equal to the smallest number.
 *    - If it is, update the second smallest to be the current number.
 * 4. After iterating through the array, return the second smallest number found.
 */
const findSecondSmall = (numbers: number[]): number => {
  const n = numbers.length;
  if (n < 2) return -1;

  let small = Infinity;
  let second_small = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < small) {
      second_small = small;
      small = numbers[i];
    } else if (numbers[i] < second_small && second_small !== small) {
      second_small = numbers[i];
    }
  }

  return second_small;
};

console.log('second_small', findSecondSmall([1, 2, 4, 7, 7, 5]));
console.log('second_large', findSecondLargest([1, 2, 4, 7, 7, 5]));
