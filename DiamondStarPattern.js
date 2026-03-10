/*
5
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

const starPattern = (n) => {
  let newStr = "";
  for (let i = 0; i < n; i++) {
    if (i == 0) newStr += "*";
    else {
      newStr += "**";
    }
    console.log(newStr);
    if (i == n - 1) {
      newStr = "";
      for (let m = n; m > 1; m--) {
        // for (let m = 0; 0 < 5-1, true)
        newStr = "";
        for (let i = 0; i < 2 * (m - 1) - 1; i++) {
          // for (let i = 0; i < 2 * (n - 1) -1; i++)
          newStr += "*";
          // newStr += '*';
        }
        console.log(newStr);
      }
    }
  }
};

starPattern(5);
