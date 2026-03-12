/*
Example 1:
Input: N = 5
Output: 0 1 1 2 3 5
let newArr = [];
let nextNum = 0;
let seq = ;
for (let i = 0; i <=5; i++)
{
  // i = 0
  // if (i == 0 || i = 1) newArr.push(i);
  // newArr.push(0)
  // i++;
  // i = 1
  // if (i == 0 || i = 1) true
  // newArr.push(1);
  // i++;
  else {
  nextNum = newArr[i - 1] + newArr[i - 2];
// nextNum = newArr[1] + newArr[0]
// nextNum = 1 + 0
  newArr.push(nextNum);
  // i++;
  // i = 3;
  // nextNum = newArr[i - 1] + newArr[i - 2];
  // nextNum = newArr[3 - 1] + newArr[3 - 2];
  // nextNum = newArr[2] + newArr[1];
  // nextNum = 1 + 1;
  // nextNum = 2;
  // newArr.push(nextNum);
  // newArr = [0, 1, 1, 2];
  // i++;
  // i = 4;
  // nextNum = newArr[i - 1] + newArr[i - 2];
  // nextNum = newArr[3] + newArr[2];
  // nextNum = 2 + 1;
  // nextNum = 3;
  // newArr.push(newNum);
  // newArr.push(3)
  // i++;
  // i = 5;
  // nextNum = newArr[5 - 1] + newArr[5 - 2];
  // nextNum = newArr[4] + newArr[3];
  // nextNum = 3 + 2;
  // newArr.push(nextNum);
  }
}
*/
const fiboSeries = (n) => {
  let nextNum = 0;
  let newArr = [];
  for (let i = 0; i <= n; i++) {
    if (i == 0 || i == 1) newArr.push(i);
    else {
      nextNum = newArr[i - 1] + newArr[i - 2];
      newArr.push(nextNum);
    }
  }
  return newArr;
};
console.log(fiboSeries(5));
