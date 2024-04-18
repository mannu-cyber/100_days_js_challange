const arr = [2, 4,3 ,2,1,4,2]
  let count = {};

  for (let element of arr) {
    count[element] = (count[element] || 0) + 1;
  }


console.log(count);

