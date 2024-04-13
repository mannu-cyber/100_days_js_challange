const camelcase = (str) => {
  const arr = str.split(" ");

  let toConverted = arr.map((curval) => {
    return curval.charAt(0).toUpperCase() + curval.slice(1);
  });

  let final = toConverted.join("");
  return final;
};

console.log(camelcase("this is camel case"));


