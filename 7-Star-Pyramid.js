/*
7
   *
  ***
 *****
*******
let newStr = '';
for (let i = 0; i < n; i++)
{
  // i = 0; 0 < 5
  // i = 1; 1 < 5,
  if (i == 0) newStr += '*';
  for (let j = 0; j < 2; j++)
  // j = 0; j < 1;
  //j++
  // 1 < 1, false
  // j = 0; j < i + 1;
  {
    newStr += '*';
    newStr += '*';
    newStr = '*';
  }
  // 0, 0 < i + 1
  // 0, 0 < 1 + 1,
  // 0, 0 < 2
  {
    newStr += '*',
    newStr = newStr + '*';
    newStr = '**';
  }
  j++;
  1 < 2,
  {
    newStr += '*';
    newStr = newStr + '*';
    newStr = '**' + '*';
    newStr ='***';
  }
  j++;
  2 < 2, false
  console.log(`${newStr}`);
  i++, i = 2;

}
*/
const starpyramid = (n) => {
  let newStr = "";
  for (let i = 0; i < n; i++) {
    if (i == 0) newStr += "*";
    for (let j = 0; j < 2; j++) {
      if (i == 0) break;
      newStr += "*";
    }
    console.log(newStr);
  }
};

starpyramid(4);
