const passwordValidator = (pass) => {
  let changes = pass.split("");
  for (let i = 0; i <= changes.length; i++) {
    for (let i = 97; i <= 122; i++) {
       console.log(i);
    }
    console.log(changes[i]);
  }
};
console.log(passwordValidator("afcsd1A"));

// console.log("B".charCodeAt(0));
