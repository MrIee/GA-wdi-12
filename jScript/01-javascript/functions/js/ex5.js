/*
The Temperature Converter

It's hot out! Let's make a converter.

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."
*/

var celsiusToFahrenheit = function(celsius) {
	var fahrenheit = celsius * (9 / 5) + 32;

	var output = celsius + "°C is " + fahrenheit + "°F";

	console.log(output);
};

var fahrenheitToCelsius = function(fahrenheit) {
	var celsius = (fahrenheit - 32) * (5 / 9);

	var output = fahrenheit + "°F is " + celsius + "°C";

	console.log(output);
};

celsiusToFahrenheit(99);
fahrenheitToCelsius(11);