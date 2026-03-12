/*
Example 1:
Input: N1 = 9, N2 = 12

Output: 3
Explanation:
Factors of 9: 1, 3, 9
Factors of 12: 1, 2, 3, 4, 6, 12
Common Factors: 1, 3
Greatest common factor: 3 (GCD)
  let gcd = 0;
  for (let i = n1; i > 0; i--)
  {
    if (n1 % i == 0 && n2 % i == 0)
      gcd = i;
  }
  return gcd;
*/

const GCD = (n1, n2) => {
  let gcd = 0;
  let greatestNum = 0;
  if (n1 > n2) greatestNum = n1;
  else greatestNum = n2;
  for (let i = 1; i < greatestNum; i++) {
    if (n1 % i == 0 && n2 % i == 0) gcd = i;
  }
  return gcd;
};
console.log(GCD(20, 15));
