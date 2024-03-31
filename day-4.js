const checkTriangle = (firstVal, secondVal, thirdVal) => {
  if (
    firstVal === secondVal &&
    secondVal === thirdVal &&
    thirdVal === firstVal
  ) {
    console.log("sab mil rahe hai");
  } else if (
    firstVal === secondVal ||
    secondVal === thirdVal ||
    thirdVal === firstVal
  ) {
    console.log("do side barabar hia");
  } else {
    console.log("kawano nhi mil rahe hai");
  }
};
console.log(checkTriangle(1, 4, 14));
