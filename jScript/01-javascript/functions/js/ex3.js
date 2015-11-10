/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:

takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

var calculateSupply = function(age, amtPerDay) {
	var maxAge = 100;
	var amtPerYear = amtPerDay * 365;
	var supply = Math.ceil(amtPerYear * maxAge);
	// number.toFixed(n) to round to a specified decimal place
	// Math.Round(n) to round to whole number
	// Math.ceil(n) to round up to next highest whole number e.g 3.2 ceil's to 4
	// Math.floor(n) to round down to the next lowest whole number e.g. 3.9 floor's to 3.

	var output = "You will need " + supply + " to last you until the ripe old age of " 
				 + age; 
	console.log(output);
};

calculateSupply(26, 3);
calculateSupply(33, 5);
calculateSupply(35, 1.33);