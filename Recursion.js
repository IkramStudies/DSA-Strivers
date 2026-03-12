const Recursion = (n) => {
  console.log(n);
  n--;
  while (n >= 1) return Recursion(n);
};
Recursion(5);

const RecursionNames = (n) => {
  let name = "Mehran";
  console.log(name);
  n--;
  while (n >= 1) return RecursionNames(n);
};

RecursionNames(5);
