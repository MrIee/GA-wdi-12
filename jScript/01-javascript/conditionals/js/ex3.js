/*
The Grade Assigner

Write a function named assignGrade that:

takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.
*/

var assignGrade = function(score) {
	var output = "";

	if (score >= 95) {
		output = "A";
	}

	else if (score >= 80) {
		output = "B";
	}

	else if (score >= 65) {
		output = "C";
	}

	else if (score >= 50) {
		output = "D";
	}

	else {
		output = "F";
	}

	console.log(output);
};

assignGrade(100);
assignGrade(80);
assignGrade(71);
assignGrade(54);
assignGrade(49);