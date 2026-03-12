const ReverseRecursion = (n) => {
  if (n != 0) {
    console.log(n);
  }
  while (n >= 1) {
    n--;
    return ReverseRecursion(n);
  }
};
ReverseRecursion(5);
