// // Load the readline-sync library
// let readline = require("readline-sync");
// // Get input from the user
// let name = readline.question("What is your name? ");
// // Show the input
// console.log("Hello, " + name + "!");
try {
  let result = "3" * 5;
  console.log("Result " + result);
} catch (error) {
  console.log("Oops! Something went wrong:", error.message);
}
