const findPower = (num) => {
  let op = false;

  for (let i = 1; i < num; i++) {
    if (2 ** i === num) {
      op = true;
    }
  }
  return op;
};

//================Home Work=================\\

// solve using bitwise operator\\

let findPower1 = (num) => {
  return num > 0 && (num & (num - 1)) === 0;
};

console.log(findPower1(4));
