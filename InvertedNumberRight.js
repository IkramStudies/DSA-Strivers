/*
5
12345
1234
123
12
1
let newStr = '';
for (let i = n; i > 0; i--)
{
  newStr = '';
  for (let j = 1; j <= i; j++)
  {
    newStr += j; 
  }
  console.log(newStr);
}
*/
const InvertedNumberRight = (n) => {
  let newStr = "";
  for (let i = n; i > 0; i--) {
    newStr = "";
    for (let j = 1; j <= i; j++) {
      newStr += j;
    }
    console.log(newStr);
  }
};
InvertedNumberRight(5);
