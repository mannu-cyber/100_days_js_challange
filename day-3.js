// const strings = (str, occurance) => {
//   str = str.toLowerCase();
//   occurance = occurance.toLowerCase();
//   const totalcount = str.split(" ").reduce((accumlator, acc) => {
//     if (acc === occurance) {
//       accumlator++;
//     }
//     return accumlator;
//   }, 0);
//   return totalcount;
// };

// const strings = (str, occurrence) => {
//   str = str.toLowerCase(); // Assign to lowercase variable
//   occurrence = occurrence.toLowerCase(); // Assign to lowercase variable
//   const totalCount = str.split("").reduce((accumulator, word) => {
//     if (word === occurrence) {
//       accumulator++;
//     }
//     return accumulator;
//   }, 0);
//   return totalCount;
// };

// console.log(strings("Jai shree Ram", "a")); // Output: 1

// const strings = (str, occur) => {
//   str = str.toLowerCase();
//   occur = occur.toLowerCase();

//   const totalCount = str.split("").reduce((accu, curval) => {
//     if (curval === occur) {
//       accu++;
//     }
//     return accu;
//   }, 0);
//   return totalCount;
// };

const strings = (str, occur) => {
  str = str.toLowerCase();
  occur = occur.toLowerCase();

  const totalOccurance = str.split("").reduce((accumlator, words) => {
    if (words === occur) {
      accumlator++;
    }

    return accumlator;
  }, 0);

  return totalOccurance;
};

console.log(strings("Jai shree Rama a a a ", "a"));
