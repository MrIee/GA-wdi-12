/*
The Age Calculator

Forgot how old you are? Calculate it!

Write a function named calculateAge that:

takes 2 arguments: birth year, current year.
calculates the 2 possible ages based on those years.
outputs the result to the screen like so: "You are either NN or NN"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

var calculateAge = function(birthYear) {
	var d = new Date();
	var age1 = d.getFullYear() - birthYear;
	var age2 = age1 - 1;

	var output = "You are either " + age1 + " or " + age2;

	console.log(output);
};

calculateAge(1989);
calculateAge(1982);
calculateAge(1981);