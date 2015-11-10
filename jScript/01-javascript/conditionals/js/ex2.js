/*
The World Translator

Write a function named helloWorld that:

takes 1 argument, a language code (e.g. "es", "de", "en")
returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
Call that function for each of the supported languages and log the result to make sure it works.
*/

var helloWorld = function(lang) {
	var output = "";

	if (lang === "es") {
		output = "Hola, Mundo";
	}

	else if (lang === "ge") {
		output = "Hallo, Welt";
	}

	else if (lang === "ch") {
		output = "Ni hao, Shijie";
	}

	else if (lang === "ru") {
		output = "Privet, Mir";
	}

	else if (lang === "en") {
		output = "Hello, World";
	}

	else {
		output = "Hello, World";
	}

	console.log(output);
};

var helloWorld2 = function(lang) {
	var output = "";

	switch (lang) {
		case "es":
			output = "Hola, Mundo";
			break;

		case "ge":
			output = "Hallo, Welt";
			break;

		case "ch":
			output = "Ni hao, Shijie";
			break;

		case "ru":
			output = "Privet, Mir";
			break;

		case "en":
			output = "Hello, World";
			break;
		default:
			output = "Hello, World";
	}

	console.log(output);
};

helloWorld();
helloWorld2("ru");
helloWorld("es");