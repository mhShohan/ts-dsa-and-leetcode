/**
 * Group Anagrams
 * @Steps to sove the problem:
 * 1. Create a map to hold sorted string as key and list of anagrams as value.
 * 2. Iterate through each string in the input array.
 * 3. Sort the string to find its anagram key.
 * 4. If the sorted string is not in the map, initialize it with an empty array.
 * 5. Push the original string into the corresponding array in the map.
 * 6. Finally, return the values of the map as an array of arrays.
 */

function groupAnagrams(strs: string[]) {
  const anagramsMap: Record<string, string[]> = {};

  for (let str of strs) {
    // sort the string to find anagrams
    const sortedStr = str.split('').sort().join('');

    if (!anagramsMap[sortedStr]) {
      anagramsMap[sortedStr] = [];
    }
    anagramsMap[sortedStr].push(str);
  }

  return Object.values(anagramsMap);
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['', '']));
console.log(groupAnagrams(['']));

/**
 *  Wrong Approach to Group Anagrams
 */

function checkAnagram(str1: string, str2: string) {
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
}

function groupAnagramsWrongApproach(strs: string[]) {
  const sortedStrs = strs.map((str: string) => {
    return str.split('').sort().join('');
  });

  const obj: Record<string, string[]> = {};

  sortedStrs.forEach((item) => {
    const value = new Set<string>();

    strs.forEach((str) => {
      if (checkAnagram(item, str)) {
        value.add(str);
      }
    });

    if (!obj[item]) {
      obj[item] = [...value];
    }
  });

  return Object.values(obj);
}
