const  removeDuplicate = (arr)=>{

let newArr =[...new Set(arr)]
console.log(newArr);
}
console.log(removeDuplicate([1, 2, 1, 2, 3,3]));
