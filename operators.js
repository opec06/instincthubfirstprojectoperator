// operators.js

// declare two let variables num1and num2and assign them initial values of 10 and 5 respectively
let num1 = 10;
let num2 = 5;

// Use the various arithmetic operators perform basic mathematical operations on these variables and print the results to the console using the console.log()* function
let additionResult = num1 + num2;
let subtractionResult = num1 - num2;
let multiplicationResult = num1 * num2;
let divisionResult = num1 / num2;
let percentageResult = num1 % num2;

console.log("Arithmetic Operations on num1 and num2:");
console.log("num1 + num2 =", additionResult);
console.log("num1 - num2 =", subtractionResult);
console.log("num1 * num2 =", multiplicationResult);
console.log("num1 / num2 =", divisionResult);
console.log("num1 % num2 =", percentageResult);

// Use the increment (++) and decrement (--) operators to increase and decrease the value of a variable num1and num2 by 1, respectively.
num1++;
num2--;

console.log("\nAfter Increment and Decrement:");
console.log("num1 =", num1);
console.log("num2 =", num2);

// Use the prompt() function to get two inputs from the user and then store them in input1 and input2 let variables
const prompt = require('prompt-sync')() // My prompt didn't work properly,  so i did 'npm install prompt-sync'
let input1 = parseFloat(prompt("Enter input 1: "));
console.log("Hello there your input is:", input1);
let input2 = parseFloat(prompt("Enter input 2: "));
console.log("Hello there your input is:", input2);
// use the various arithmetic operators such as +, -, *, /, and % to perform basic mathematical operations based on the user input
let additionResult2 = input1 + input2;
let subtractionResult2 = input1 - input2;
let multiplicationResult2 = input1 * input2;
let divisionResult2 = input1 / input2;
let percentageResult2 = input1 % input2;

console.log("\nArithmetic Operations based on user input:");
console.log("input1 + input2 =", additionResult2);
console.log("input1 - input2 =", subtractionResult2);
console.log("input1 * input2 =", multiplicationResult2);
console.log("input1 / input2 =", divisionResult2);
console.log("input1 % input2 =", percentageResult2);