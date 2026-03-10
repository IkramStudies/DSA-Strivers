const palindromeCheck = (n) => {
  let reverseNum = "";
  let num = n.toString();
  for (let i = num.length - 1; i >= 0; i--) {
    reverseNum += num[i];
  }
  if (reverseNum == num) return true;
  else return false;
};
console.log(palindromeCheck(51));
console.log(palindromeCheck(151));
