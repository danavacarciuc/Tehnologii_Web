const toArray = (...args) =>
  args.length === 1 && Array.isArray(args[0]) ? [...args[0]] : args;

console.log(toArray(1, 2, 3));
console.log(toArray([4, 5, 6]));
