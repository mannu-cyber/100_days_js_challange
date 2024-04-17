const median = (arr) => {
  let assending = arr.sort((a, b) => a - b);
  console.log(assending);

  if (assending.length % 2 !== 0) {


       let beech = Math.floor(assending.length/2)
       console.log(beech);


//     let average = assending.reduce((accu, curval) => accu + curval, 0);
//     return average / assending.length+1;
//   } else {
//     assending;
  }
};

console.log(median([1, 14, 5, 3, 4, 2,2]));
