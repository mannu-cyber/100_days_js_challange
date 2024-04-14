const check = (str, substr) => {
  const toLowercase = str.toLowerCase().split(" ");

  for (let i = 0; i <= toLowercase.length; i++) {
    if (toLowercase[0] === substr) {
return true
    } else {
 return false
    }
  }
};


// const check = (str, subtring)=>{


//        return str.toLowerCase().startsWith(subtring)
// }

console.log(check("today is 19 day of 100days js challenge", "today"));
