const reverseANumber = (n) => {
  let num = n.toString();
  let newNum = "";
  for (let i = num.length - 1; i >= 0; i--) {
    newNum += num[i];
    parseInt(newNum);
  }
  return newNum;
};
console.log(reverseANumber(51));
