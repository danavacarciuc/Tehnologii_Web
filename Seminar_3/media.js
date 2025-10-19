const calculeazaMedia = (numere) => {
  const suma = numere.reduce((acc, val) => acc + val, 0);
  return suma / numere.length;
};

const valori = [10, 20, 30, 40, 50];
console.log("Media este:", calculeazaMedia(valori));
