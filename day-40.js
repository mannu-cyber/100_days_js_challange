const printStar = (arr) => {
  let newArr = arr.map((curval, index) => {
    let numbers = 0;
    let starts = 0;
    while (numbers < curval) {
           numbers++
numbers=+numbers
return `${index + 1}: ${numbers}`
    }
});
return newArr.join("\n")
};
console.log(printStar([2, 3, 5, 9]));
