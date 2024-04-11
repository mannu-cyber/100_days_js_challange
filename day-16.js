const findMin = (arr) => {
       
//      return  Math.min(...arr)


let minVal = arr.sort((a,b)=>a-b)

return minVal[0]

};

console.log(findMin([1, -2, 45, 8]));
