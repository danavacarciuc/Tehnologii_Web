const memo = {};

function power(base, exp) {
  const key = `${base}_${exp}`;
  if (memo[key] !== undefined) return memo[key];

  if (exp === 0) return 1;
  if (exp === 1) return base;

  const result = base * power(base, exp - 1);
  memo[key] = result;
  return result;
}

console.log(power(2, 5));
console.log(power(3, 4));
console.log(power(2, 5));
