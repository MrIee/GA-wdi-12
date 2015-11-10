/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

console.log("------Temperature Converter-------");

var cTemp = 30;
var fTemp = cTemp * (9 / 5) + 32;

console.log(cTemp + "°C is " + fTemp + "°F");

var fTemp2 = 100;
var cTemp2 = (fTemp2 - 32) * (5 / 9);

console.log(fTemp2 + "°F is " + cTemp2 + "°C");