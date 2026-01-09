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

function groupAnagrams(strs: string[]) {
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

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
