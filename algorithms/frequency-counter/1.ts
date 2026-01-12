const frequencyCounter = (firstArr: number[], secondArr: number[]) => {
  if (firstArr.length !== secondArr.length) return false;
  const fr_one: Record<number, number> = {};
  const fr_two: Record<number, number> = {};

  for (let i = 0; i < firstArr.length; i++) {
    fr_one[firstArr[i]] = fr_one[firstArr[i]] ? fr_one[firstArr[i]] + 1 : 1;
    fr_two[secondArr[i]] = fr_two[secondArr[i]] ? fr_two[secondArr[i]] + 1 : 1;
  }
  // console.log(fr_one, 'fr_one');
  // console.log(fr_two, 'fr_two');

  for (const key in fr_one) {
    // console.log(key, Number(key) ** 2);
    if (!fr_two[Number(key) ** 2] || fr_one[key] !== fr_two[Number(key) ** 2]) {
      return false;
    }
  }

  return true;
};

// console.log(frequencyCounter([1, 2, 3, 4, 2], [1, 9, 4, 4, 16]));
// console.log(frequencyCounter([1, 2, 3, 4], [1, 9, 4, 16]));
// console.log(frequencyCounter([1, 2, 2, 3, 4, 3], [1, 4, 9, 4, 8, 16]));

const isAnagram = (str1: string, str2: string) => {
  if (str1.length !== str2.length) return false;

  const str1_count: Record<string, number> = {};
  const str2_count: Record<string, number> = {};

  for (let i = 0; i < str1.length; i++) {
    str1_count[str1[i]] = str1_count[str1[i]] ? str1_count[str1[i]] + 1 : 1;
    str2_count[str2[i]] = str2_count[str2[i]] ? str2_count[str2[i]] + 1 : 1;
  }

  for (let key in str1_count) {
    if (!str2_count[key] || str1_count[key] !== str2_count[key]) {
      return false;
    }
  }

  return true;
};

// console.log(isAnagram('abc', 'bcd'));
// console.log(isAnagram('bcd', 'dbc'));
// console.log(isAnagram('azz', 'aaz'));

const firstUniqChar = (s: string): Number => {
  const str_count: Record<string, number> = {};

  for (const char of s) {
    str_count[char] = str_count[char] ? str_count[char] + 1 : 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (str_count[s[i]] === 1) return i;
  }

  return -1;
};

// console.log(firstUniqChar('leetcode'));
// console.log(firstUniqChar('loveleetcode'));
// console.log(firstUniqChar('aabb'));

// console.log(canConstruct('a', 'ab'));
// console.log(canConstruct('aa', 'abaa'));
// console.log(canConstruct('aab', 'aabaac'));

function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let fr = 0;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (candidate === element) {
      fr++;
    } else {
      fr--;
    }
    console.log(`candidate:${candidate} - element: ${element} - fr:${fr}`);
    if (fr === 0) {
      candidate = nums[i + 1];
    }
  }

  return candidate;
}

console.log(majorityElement([2, 2, 1, 1, 2]));
