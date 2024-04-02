const isPalidrom = (str) => {
  const words = str.toLowerCase();

  const checked = words.split("").reverse().join("");

  return words === checked ? true : false;
};

console.log(isPalidrom("racecar"));
