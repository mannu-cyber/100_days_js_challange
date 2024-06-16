// let a = 1;

// const recur = () => {
//   if (a <= 10) console.log("hello");

//   recur(a++);
// };

// recur();

// const factorial = (num)=>{
// if(num ===0 || num ===1){
//        return 1
// }
// else{
//        return num * factorial(num -1)
// }

// }

// console.log(factorial(5));

// function factorial (num){
// if(num ===0|| num===1){
//        return 1}
// return num * factorial(num -1)

// }
// console.log(factorial(5));

// const series = (base, endPoin, arr=  [])=>{
// if(base<=endPoin){
//        arr.push(base)
// return series(base +1, endPoin, arr)
// }
// return arr

// }
// console.log(series(0, 5));

const series = (starting, end, arr = []) => {
  if (starting <= end) {
    arr.push(starting);
    return series(starting + 1, end, arr);
  }
  return arr;
};

console.log(series(1, 10));
