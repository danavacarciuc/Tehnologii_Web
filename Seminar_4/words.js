String.prototype.capitalizewords = function () {
  return this.replace(/\b[a-z]/g, (match) => match.toLocaleUpperCase());
};

console.log("This words will be capitalized".capitalizewords());
