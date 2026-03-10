// 5
/*
1       
22
333
4444
55555
*/
const rightAngled = (n) => {
  let newStr = "";
  for (let i = 1; i <= n; i++) {
    // i = 1, 1 <= 5
    newStr = "";
    for (let j = 0; j < i; j++) {
      // j = 0; 0 < 1, true
      newStr += `${i}`;
      // newStr += 1
    }
    console.log(newStr);
  }
};

rightAngled(5);
