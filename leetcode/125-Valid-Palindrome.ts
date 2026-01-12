/**
 * 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 * @Steps to solve:
 * 1. Use two pointers, one starting from the beginning (left) and the other from the end (right) of the string.
 * 2. Move the left pointer to the right until it points to an alphanumeric character.
 * 3. Move the right pointer to the left until it points to an alphanumeric character.
 * 4. Compare the characters at both pointers (case-insensitive). If they are not equal, return false.
 * 5. Move both pointers towards each other and repeat steps 2-4 until they meet or cross each other.
 * 6. If all characters matched, return true.
 */

function checkAlphaNumeric(char: string): boolean {
  const code = char.charCodeAt(0);

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
    return true;
  }

  return false;
}

function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!checkAlphaNumeric(s[left])) {
      left++;
      continue;
    }
    if (!checkAlphaNumeric(s[right])) {
      right--;
      continue;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
console.log(isPalindrome('0P')); // false
console.log(isPalindrome('ab_a'));
console.log(isPalindrome('Able was I ere I saw Elba'));
console.log(isPalindrome('Madam In Eden, I’m Adam'));
