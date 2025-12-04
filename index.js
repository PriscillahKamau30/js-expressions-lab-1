//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};

//Temperature data for 30 days in rome
const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

// Conversion function

function fahrenheittoCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
function celsiustoFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

//Convert all temperatures to celsius
const tempsInCelsius = [
    fahrenheittoCelsius(day1TempF),
    day2TempC,
    fahrenheittoCelsius(day3TempF),
    day4TempC,
    fahrenheittoCelsius(day5TempF),
    day6TempC,
    fahrenheittoCelsius(day7TempF),
    day8TempC,
    fahrenheittoCelsius(day9TempF),
    day10TempC,
    fahrenheittoCelsius(day11TempF),
    day12TempC,
    fahrenheittoCelsius(day13TempF),
    day14TempC,
    fahrenheittoCelsius(day15TempF),
    day16TempC,
    fahrenheittoCelsius(day17TempF),
    day18TempC,
    fahrenheittoCelsius(day19TempF),
    day20TempC,
    fahrenheittoCelsius(day21TempF),
    day22TempC,
    fahrenheittoCelsius(day23TempF),
    day24TempC,
    fahrenheittoCelsius(day25TempF),
    day26TempC,
    fahrenheittoCelsius(day27TempF),
    day28TempC,
    fahrenheittoCelsius(day29TempF),
    day30TempC
];

//Convert all temperatures to fahrenheit
const tempsInFahrenheit = [
    day1TempF,
    celsiustoFahrenheit(day2TempC),
    day3TempF,
    celsiustoFahrenheit(day4TempC),
    day5TempF,
    celsiustoFahrenheit(day6TempC),
    day7TempF,
    celsiustoFahrenheit(day8TempC),
    day9TempF,
    celsiustoFahrenheit(day10TempC),
    day11TempF,
    celsiustoFahrenheit(day12TempC),
    day13TempF,
    celsiustoFahrenheit(day14TempC),
    day15TempF,
    celsiustoFahrenheit(day16TempC),
    day17TempF,
    celsiustoFahrenheit(day18TempC),
    day19TempF,
    celsiustoFahrenheit(day20TempC),
    day21TempF,
    celsiustoFahrenheit(day22TempC),
    day23TempF,
    celsiustoFahrenheit(day24TempC),
    day25TempF,
    celsiustoFahrenheit(day26TempC),
    day27TempF,
    celsiustoFahrenheit(day28TempC),
    day29TempF,
    celsiustoFahrenheit(day30TempC)
];

//Calculate the total temperature in celsius

let tot_temperature_in_celsius = 0;
for (let celsius of tempsInCelsius) {
    tot_temperature_in_celsius += celsius;
}

//Calculate the total temperature in fahrenheit
let tot_temperature_in_fahrenheit = 0;
for (let fahrenheit of tempsInFahrenheit) {
    tot_temperature_in_fahrenheit += fahrenheit;
}

//Calculate the average temperature in celsius

const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

//Calculate the average temperature in fahrenheit
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;

//Test (console log) the results

console.log(`Total Temperature in Celsius: ${tot_temperature_in_celsius}`);
console.log(`Average Temperature in Celsius: ${avg_temperature_in_celsius}`);
console.log(`Total Temperature in Fahrenheit: ${tot_temperature_in_fahrenheit}`);
console.log(`Average Temperature in Fahrenheit: ${avg_temperature_in_fahrenheit}`);