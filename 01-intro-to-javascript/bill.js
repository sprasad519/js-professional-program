//Item prices
let coffeePrice = 5;
let sandwichPrice = 8;
let cookiePrice = 2;

// Calcualte quantities
let coffeeQty = 2;
let sandwichQty = 1;
let cookieQty = 3;

// Calculate subtotals
let coffeeTotal = coffeePrice * coffeeQty;
let sandwichTotal = sandwichPrice * sandwichQty;
let cookieTotal = cookiePrice * cookieQty;

//calculate final total
let finalTotal = coffeeTotal + sandwichTotal + cookieTotal;

// Print receipt
console.log("Receipt:");
console.log("coffee: $" + coffeeTotal);
console.log("sandwich: $" + sandwichTotal);
console.log("cookie: $" + cookieTotal);
console.log("Total: $" + finalTotal);
