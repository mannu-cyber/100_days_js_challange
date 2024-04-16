
const findMin = (arr)=>{
const finde = arr.reduce((accu, actual)=>accu+actual, 0)
 return finde/arr.length
}



console.log(findMin([-1+0+1]));
