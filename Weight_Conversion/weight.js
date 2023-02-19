function convert() {
  // Get the input value and unit
  var inputValue = document.getElementById("inputValue").value;
  var inputUnit = document.getElementById("inputUnit").value;
  var outputUnit = document.getElementById("outputUnit").value;

  // Convert the input value to kilograms
  var kilograms = 0;
  if (inputUnit == "kilograms") {
    kilograms = inputValue;
  } else if (inputUnit == "grams") {
    kilograms = inputValue / 1000;
  } else if (inputUnit == "pounds") {
    kilograms = inputValue * 0.453592;
  } else if (inputUnit == "miligrams") {
    kilograms = inputValue / 1000000;
  } else if (inputUnit == "micrograms") {
    kilograms = inputValue / 1000000000;
  } else if (inputUnit == "tonnes") {
    kilograms = inputValue * 1000;
  } else if (inputUnit == "ounces") {
    kilograms = inputValue * 0.0283495;
  }

  // Convert kilograms to the desired output unit
  var outputValue = 0;
  if (outputUnit == "kilograms") {
    outputValue = kilograms;
  } else if (outputUnit == "grams") {
    outputValue = kilograms * 1000;
  } else if (outputUnit == "pounds") {
    outputValue = kilograms / 0.453592;
  } else if (outputUnit == "miligrams") {
    outputValue = kilograms * 1000000;
  } else if (outputUnit == "micrograms") {
    outputValue = kilograms * 1000000000;
  } else if (outputUnit == "tonnes") {
    outputValue = kilograms / 1000;
  } else if (outputUnit == "ounces") {
    outputValue = kilograms / 0.0283495;
  }

  // Set the output value
  document.getElementById("output").innerHTML = inputValue + " " + inputUnit + " = " + outputValue + " " + outputUnit;
}

function resetValues() {
  document.getElementById("inputValue").value = "";
  document.getElementById("result").innerHTML = "";
}


