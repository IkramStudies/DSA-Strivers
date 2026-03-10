const countDigits = (n) => {
  let count = 0;
  let num = n.toString();
  console.log(num.length);
  for (let i = 0; i < num.length; i++) {
    // for (let i = 0; )
    count++;
  }
  return count;
};
console.log(countDigits(12345));
/*
  n = 12345
  count = 0;
  for (let i = 0; i < num.length; i++)
  {
    count++;
  }
  return count;
*/
