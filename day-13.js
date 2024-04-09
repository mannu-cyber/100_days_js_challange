const sentense = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  const arr = str.split("");

  for (const iterator of arr) {
    if (vowels.includes(iterator.toLowerCase())) {
      count++;
    }
  }

  return count;
};

console.log(sentense("this is the name of my father"));
