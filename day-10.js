// const comparing = (ar1, ar2) => {
//   if (ar1.length === ar2.length) {
//     // return true

//     for (let i = 0; i < ar1.length; i++) {
//       if (ar1[i] !== ar2[i]) {
//         return false;
//       } else {
//         return true;
//       }
//     }
//   } else {
//     return false;
//   }
// };

const comparing = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    return arr1.every((curval, index) => curval === arr2[index]); // every()  method is used to check all the element in an arrya are satisfying the particular block of logic or not
  } else {
    return false;
  }
};

const arr1 = [2, 4, 65, 65, 3, 23, 3];

const arr2 = [2, 4, 65, 65, 3, 23];

console.log(comparing(arr1, arr2));
