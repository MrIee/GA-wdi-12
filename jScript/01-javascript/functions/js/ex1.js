
/*
The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:

takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

var tellFortune = function(numKids, partnerName, geoLoc, jobTitle) {
	var output = "You will be a " + jobTitle + " in " + geoLoc
	 				+ ", and married to " + partnerName + " with " + numKids +
	 				".";
	 console.log(output);
};

tellFortune(5, "partner0", "Sydney", "Anthropologist");
tellFortune(6, "partner1", "Brisbane", "Programmer");
tellFortune(7, "partner2", "Melbourne", "Ecologist");