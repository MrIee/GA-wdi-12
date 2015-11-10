/*
What number's bigger?

Write a function named greaterNum that:

takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output 
to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

var greaterNum = function(num1, num2) {
	if (num2 > num1) {
		var output = "The greater number of " + num1 + " and " + num2 + " is " + num2;
		console.log(output);
	}
	else if (num1 > num2) {
		var output = "The greater number of " + num1 + " and " + num2 + " is " + num1;
		console.log(output);
	}
	else {
		var output = num1 + " and " + num2 + " are the same";
		console.log(output);
	}
};

greaterNum(2, 3);
greaterNum(3, 1);
greaterNum(5, 5);