const BmiCalculator = require("./bmi_calculator");

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("calculate");

    button.addEventListener("click", () => {
      let weight = parseInt(document.body.children.weight.value);
      let height = parseFloat(document.body.children.height.value);
      let resultsElement = document.getElementById("results")
      const calculator = new BmiCalculator()
         // here we need to invoke a calculator that
        // helps us to calculate the BMI value
      const results = calculator.calculateMetric({
        weight: weight,
        height: height
      })
   // display the results
      resultsElement.innerText = `Your BMI value is ${results.bmiValue} and you are ${results.message}.`
      debugger;
    });
  });