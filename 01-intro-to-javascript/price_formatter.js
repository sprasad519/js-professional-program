// Create a function that formats prices
// Parameters: price, currencySymbol, decimals
// Example output: $29.95 or €29.95
// Your code here:
/*
Create your price formatting function.

What parameters will you need?

Should any parameters have default values?

How will you handle the decimal places?

Add parameter validation.

What if price is negative?

What if decimals is less than 0?

Should currency symbol be required?

Test with different values.

How does it handle whole numbers?

What about very large numbers?

What about different currencies (€, £, ¥)?

✅ Success Checklist
Create function with three parameters and defaults

Format prices with correct decimals

Handle different currencies correctly
*/
function formatPrice(price, currencySymbol = "$", decimals = 2) {
  if (typeof price !== "number" || isNaN(price)) {
    throw new Error("Invalid price. Please enter a valid number.");
  }
  if (price < 0) {
    throw new Error("Invalid price. Price cannot be negative.");
  }
  if (decimals < 0) {
    throw new Error("Invalid decimals. Decimals cannot be negative.");
  }

  return currencySymbol + price.toFixed(decimals);
}
