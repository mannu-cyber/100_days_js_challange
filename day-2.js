// const hashTageconverter = (str) => {
//   const trimedVal = str.split(" ").trimedVal.forEach((element) => {
//     const capi = (element.trim(" ").style.textTransformation = "capitalised");
//   });

//     console.log(trimedVal);
// };

// console.log(hashTageconverter(" this is the best to learn javascript"));

// const hashTageconverter = (str) => {
//   const trimedVal = str;

// elseif (trimedVal !== "") {
//   trimedVal= trimedVal.split(" ")
//     .map((word) => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join("");

//     console.log(trimedVal);
//               }

//        return trimedVal}

// hashTageconverter(prompt(" chacha"));

let inputtext = document.getElementById("inputtext");
let para = document.querySelector("#heading");
const hashTagConverter = (str) => {
  let trimedVal = str;
  if (trimedVal === " ") {
    return;
  }

  if (trimedVal !== " ")
    trimedVal = trimedVal
      .split(" ")
      .map((words) => {
        return words.charAt(0).toUpperCase() + words.slice(1);
      })
      .join("");

  para.innerHTML = ` #${trimedVal}`;

  inputtext.value = " ";
};

document.getElementById("btn").addEventListener("click", () => {
  hashTagConverter(inputtext.value);
});
