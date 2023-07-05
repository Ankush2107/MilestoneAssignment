function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  let celsiusTemperature = 25;
  let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  console.log("Temperature in Fahrenheit: " + fahrenheitTemperature);