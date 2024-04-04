const numbers = (str) => {
  let total = str.reduce((accumalive, acctualVal) => acctualVal + accumalive);
  const average = total / str.length;
  console.log(average);
};

console.log(numbers([1, 4, 5, 9, 45]));

// here i just learned how to use reduce method in an array to find out the sum of that array and average of that arrya




