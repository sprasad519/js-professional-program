// Adventure Game
// This game will be a text-based adventure game where the player will be able
// to make choices that affect the outcome of the game.
// The player will be able to choose their own path and the story will change
// based on their decisions.
// import readline from "readline-sync";

const readline = require("readline-sync");

let playerName = "";
let gameRunning = true;
let inventory = [];
// Create variables for player stats
let health = 100;

//Display the game title
console.log("Welcome to the Adventure Game!");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

// Get player name using readline-sync
playerName = readline.question("What is your name, adventurer? ");

// Display welcome message and starting stats
console.log(`Welcome ${playerName}! Your adventure begins now.`);
console.log(`Health: ${health}`);
// console.log(`Inventory: ${inventory.join(", ")}`);
