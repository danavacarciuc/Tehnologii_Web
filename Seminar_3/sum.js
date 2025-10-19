const sumDivisibleBy = (numbers, divisor) => {
  const divisible = numbers.filter((num) => num % divisor === 0);

  const sum = divisible.reduce((acc, num) => acc + num, 0);

  return sum;
};

const numbers = [10, 15, 20, 25, 30, 33, 40];
const divisor = 5;

const result = sumDivisibleBy(numbers, divisor);
console.log(
  `Suma numerelor din [${numbers}] divizibile cu ${divisor} este: ${result}`
);
