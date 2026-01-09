/**
Given two strings ransomNote and magazine, 
return true if ransomNote can be constructed by using the letters from magazine 
and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

export const canConstruct = (ransomNote: string, magazine: string) => {
  const ransomNote_fr: Record<string, number> = {};

  // count the frequency of ransomNote
  for (let char of ransomNote) {
    ransomNote_fr[char] = (ransomNote_fr[char] || 0) + 1;
  }

  for (let char of magazine) {
    if (ransomNote_fr[char]) {
      // if char frequency is exist in the ransomNote_fr => decrease value by 1
      ransomNote_fr[char] = ransomNote_fr[char] - 1;

      // char frequency === 0 the delete the field from ransomNote_fr
      if (ransomNote_fr[char] === 0) {
        delete ransomNote_fr[char];
      }
    }
  }

  return Object.keys(ransomNote_fr).length === 0;
};

console.log(canConstruct('aab', 'baa'));
console.log(canConstruct('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj'));
