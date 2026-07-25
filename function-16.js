// Write a function to convert temperature from Celsius to Fahrenheit.

function convertTemp(celsiusTemp){
    fahrenheit = (celsiusTemp*1.8)+32 
    return fahrenheit
}
const tempInCelsius = 50
const tempInFahrenheit = convertTemp(tempInCelsius)
console.log(tempInFahrenheit)