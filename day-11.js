const numbers = 1235;

// const toArray = Array.from(String(numbers), Number)
// const sum = toArray.reduce((accumilater, acctula)=>accumilater += acctula,0)

// console.log(sum);

// console.log(toArray);
// const toArray = toUpperCase.split("")


// const toArray  = Array.from(String(numbers), Number)
// const sum = toArray.reduce((accu, accutal)=>accu+accutal, 0)

// console.log(sum);

let number = 12394;
let sum = 0;

while (number > 0) {
    sum += number % 10; // Add the last digit to the sum
    number = Math.floor(number / 10); // Remove the last digit from the number
}

console.log(sum); // Output: 10 (1 + 2 + 3 + 4 = 10)


