/*
5
*********   ///
 *******
  *****
   ***
    *
  let newStr = '';
  for (let i = n; i > 0; i--)
  {
    for (let j = 0; j < 2*i -2; j++)
    {
      newStr += '*';
    }
    console.log(newStr);
  }
*/
const InvertedStarPyramid = (n) => {
  let newStr = "";
  for (let i = n; i > 0; i--) {
    // i = 5; 5 > 0, true
    // i = 4; 4 > 0, true
    newStr = "";
    for (let j = 0; j < 2 * i - 1; j++) {
      // j = 0; 0 < 2 * i - 1; j++
      // j = 0; 0 < 2 * 5 - 1; j++
      // j = 0; 0 < 10 - 1; j++
      // j = 0; 0 < 9; j++
      // 2nd Iteration
      // j = 0; 0 < 2 * 4 - 1
      // j = 0; 0
      newStr += "*";
      // newStr += '*';
      // newStr = '*';
      // j++;
      // j = 1; 1 < 9;
      // newStr += '*';
      // newStr = newStr + '*';
      // newStr = '*' + '*';
      // newStr = '**';
      //
    }
    console.log(newStr);
  }
};

InvertedStarPyramid(5);
