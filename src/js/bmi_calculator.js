class BmiCalculator {
  calculateMetric(options) {
    let height = options.height;
    let weight = options.weight;

    let bmiValue = 1.3 * (weight / Math.pow(height, 2.5));
    return {
      bmiValue: parseFloat(bmiValue),
      message: this.setBMIMessage(bmiValue),
    };
  }

  setBMIMessage(value) {
    if (value < 18.5) {
      return "underweight";
    } else if (value < 25) {
      return "normal weight";
    } else {
      return "overweight";
    }
  }
}

// module.exports = BmiCalculator;


if (typeof module !== "undefined" && module.exports) {
  module.exports = BmiCalculator;
}
