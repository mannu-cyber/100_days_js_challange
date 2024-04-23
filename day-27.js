const checkReapeatedTask = (str, num) => {
  let mainstr = str;
  let num1 = num;

  let last = " ";

  for (let i = 0; i < num1; i++) {
    last += mainstr;
  }
  return num > 1 ? last : mainstr;
};
console.log(checkReapeatedTask("abc", 0));
