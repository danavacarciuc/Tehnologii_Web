const sortByKey = (array, key) => {
  return array.sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
};

const persoane = [
  { nume: "Ana", varsta: 25 },
  { nume: "Mihai", varsta: 30 },
  { nume: "Bogdan", varsta: 20 },
];

console.log("Sortare după varsta:");
console.log(sortByKey(persoane, "varsta"));

console.log("Sortare după nume:");
console.log(sortByKey(persoane, "nume"));
