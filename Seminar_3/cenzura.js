const cenzureaza = (text, dictionar) => {
  let rezultat = text;

  dictionar.forEach((cuvant) => {
    const pattern = new RegExp(cuvant, "gi");
    const cenzurat =
      cuvant[0] + "*".repeat(cuvant.length - 2) + cuvant[cuvant.length - 1];
    rezultat = rezultat.replace(pattern, cenzurat);
  });

  return rezultat;
};

const text = "javascript este minunat";
const dictionar = ["este"];

console.log(cenzureaza(text, dictionar));
