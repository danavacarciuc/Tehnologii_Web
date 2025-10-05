const fib = (n) => {
  let a = 0n,
    b = 1n;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
};

const n = parseInt(process.argv[2], 10);
console.log(fib(n).toString());
