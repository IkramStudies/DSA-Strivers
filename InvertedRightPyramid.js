// 5
/*
55555
4444
333
22
1
let newStr;
for (let i = 5; i > 0; i--)
{
  newStr = '';
  for (let j = i; j > 0; j--)
  {
    newStr += `${j}`;
  }
  console.log(newStr);
}
*/

const InvertedRightPyramid = (n) => {
  let newStr;
  let str2 = "";
  for (let i = n; i > 0; i--) {
    newStr = "";
    str2 = "";
    for (let j = i; j > 0; j--) {
      newStr += i;
      str2 += "*";
    }
    console.log(newStr);
    console.log(str2);
  }
};

InvertedRightPyramid(5);
