const fibunasi = (num) => {
  if (num <= 1) {
    return num;
  } else {
    return fibunasi(num - 1) + fibunasi(num - 2);
  }
};

console.log(fibunasi(7));
