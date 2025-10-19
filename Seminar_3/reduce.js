const sampleArray = [1, 2, 3, 4, 5];

const reduce = (array, callback, initialValue) => {
  let acc = initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }
  return acc;
};

const sum = reduce(sampleArray, (a, b) => a + b, 0);
console.log(sum);
