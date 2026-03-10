/*
input: 5
1
22
333
4444
55555
*/

const number = () => {
  let num = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 2; j < num; j++) {
      num += i;
    }
    console.log("\n");
  }
  return num;
};
number(5);
