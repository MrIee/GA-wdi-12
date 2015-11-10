/*
The Pluralizer

Write a function named pluralize that:

takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

var pluralize = function(noun, num) {
	var output = num + " " + noun;

	if (num !== 1) {
		output = num + " " + noun + "s";
	}
	
	console.log(output);
}

pluralize("dog", 2);
pluralize("dog", 0);
pluralize("dog", 1);