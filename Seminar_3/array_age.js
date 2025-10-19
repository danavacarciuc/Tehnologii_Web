const birthYears = [1980, 1995, 2006, 2010, 2003, 1999];

const currentYear = new Date().getFullYear();
const ages = birthYears.map((year) => currentYear - year);

const adults = ages.filter((age) => age > 18);

console.log("Ani de naștere:", birthYears);
console.log("Vârste:", ages);
console.log("Vârste peste 18 ani:", adults);
