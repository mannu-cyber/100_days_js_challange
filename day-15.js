// const calculateSqr = (num) => {
//   for (let i = 0; i < num.length; i++) {
//     let arr = num[i] * num[i];

//     console.log(arr+arr);
// //     let final = Array.from(String(arr))
// //     console.log(final);
//   }
// };

const calculateSqr = (arr) => {
  return arr.reduce((accu, actual) => accu + actual * actual, 0);
};

console.log(calculateSqr([1, 3, 4]));

//  26
