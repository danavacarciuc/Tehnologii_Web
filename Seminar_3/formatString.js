const formatString = (template, params) => {
  return template.replace(/{(\w+)}/g, (match, key) => {
    return key in params ? params[key] : match;
  });
};

const template = "un {substantiv} este {adjectiv}";
const params = {
  substantiv: "căluț",
  adjectiv: "drăguț",
};

const result = formatString(template, params);
console.log(result);
