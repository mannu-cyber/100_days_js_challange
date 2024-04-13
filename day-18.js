const checkLetter = (str) => {
  if (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) {
    console.log(`${str} is smaller letter`);
  } else if (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) {
    console.log(`${str} is Upper Case`);
  } else {
    console.log("please enter only character");
  }
};

console.log(checkLetter("1"));
