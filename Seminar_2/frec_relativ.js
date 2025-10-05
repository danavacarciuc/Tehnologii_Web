const sampleString = "the quick brown fox jumps over the lazy dog";

const getCounts = (text) => {
  const letters = text.toLowerCase().split("");
  const result = {};
  let totalLetters = 0;

  for (let character of letters) {
    if (character === " ") continue;
    if (character >= "a" && character <= "z") {
      if (character in result) {
        result[character]++;
      } else {
        result[character] = 1;
      }
      totalLetters++;
    }
  }

  for (let character in result) {
    result[character] = result[character] / totalLetters;
  }
  return result;
};

console.log(getCounts(sampleString));
