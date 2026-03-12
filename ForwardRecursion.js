const forwardRecursion = (num, n) => {
  console.log(num);
  // num = 1
  // num = 2
  // num = 3
  // num = 4
  // num = 5
  while (num < n) {
    // while (1 < 5), true
    // while (2 < 5), true
    // while (3 < 5), true
    // while (4 < 5), true
    num++;
    // num++, num = 2
    // num++, num = 3
    // num++, num = 4
    // num++, num = 5
    return forwardRecursion(num, n);
    // return forwardRecursion(2, 5);
    // return forwardRecursion(3, 5);
    // return forwardRecursion(4, 5);
    // return forwardRecursion(5, 5);
  }
};
console.log(forwardRecursion(1, 5));
