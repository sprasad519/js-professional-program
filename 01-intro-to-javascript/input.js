let readline = require("readline-sync");

// Get the age
let age = readline.question("What is your age? ");

try {
  // Convert to number
  let ageNumber = Number(age);

  // Check if it's a valid number
  if (isNaN(ageNumber)) {
    throw new Error("That's not a valid age!");
  }

  // Check if age is in valid range
  if (ageNumber < 0 || ageNumber > 120) {
    throw new Error("Age must be between 0 and 120!");
  }

  // Tell them about driving
  if (ageNumber >= 16) {
    console.log("You are old enough to drive!");
  } else {
    console.log("You are not old enough to drive yet.");
  }
} catch (error) {
  console.log("Error: " + error.message);
}
