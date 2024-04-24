// const findRange = (a, b) => {
//   let num = [];
//   while (a <= b) {
//     num.push(a);
//     a++;
//   }
//   return num;
// };

// console.log(findRange(0, 4));
const findrange = (a, b) => {
  let arr = [];

  while (a <= b) {
    arr.push(a);
    a++;
  }
  return arr;
};

console.log(findrange(3, 10));
