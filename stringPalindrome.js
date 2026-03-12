/*
Input: Str =  “ABCDCBA”
Output: Palindrome
*/
const stringPalindrome = (n) => {
  let newStr = "";
  for (let i = n.length - 1; i >= 0; i--) {
    newStr += n[i];
  }
  if (newStr === n) return true;
  else return false;
};
console.log(stringPalindrome("ABCDCBA"));
