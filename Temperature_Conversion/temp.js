function convertTemperature() {
    const inputValue = document.getElementById("input-value").value;
    const inputUnit = document.getElementById("input-unit").value;
    const outputUnit = document.getElementById("output-unit").value;
  
    let result;
    if (inputUnit === "celsius") {
      if (outputUnit === "fahrenheit") {
        result = (inputValue * 9 / 5) + 32;
      } else if (outputUnit === "kelvin") {
        result = parseFloat(inputValue) + 273.15;
      } else {
        result = inputValue;
      }
    } else if (inputUnit === "fahrenheit") {
      if (outputUnit === "celsius") {
        result = (inputValue - 32) * 5 / 9;
      } else if (outputUnit === "kelvin") {
        result = (inputValue + 459.67) * 5 / 9;
      } else {
        result = inputValue;
      }
    } else if (inputUnit === "kelvin") {
      if (outputUnit === "celsius") {
        result = inputValue - 273.15;
      } else if (outputUnit === "fahrenheit") {
        result = (inputValue * 9 / 5) - 459.67;
      } else {
        result = inputValue;
      }
    }
    
    document.getElementById("result").innerHTML = result;
  }

  function resetValues() {
    document.getElementById("input-value").value = "";
    document.getElementById("result").innerHTML = "";
  }
  
  
  