const { expect } = require("chai");
const BmiCalculator = require("../../src/js/bmi_calculator");

describe("BmiCalculator", () => {
  // ARRANGE
  subject(() => new BmiCalculator());

  describe("for Roberto", () => {
    def("options", () => ({ weight: 110, height: 1.87 }));

    it("is expected to return 31.5", () => {

      // ACT 
      let results = $subject.calculateMetric($options)
        // ASSERT
      expect(results.bmiValue).to.equal(31.5)
    });
      
      it.only('is expected to return assessment of "overweight"', () => {
        let results = $subject.calculateMetric($options)
        expect(results.message).to.equal('overweight')
      });
  });

  describe("for a random person", () => {
    def("options", () => ({ weight: 80, height: 1.87 }));

    it("is expected to return 31.5", () => {

      // ACT 
      let results = $subject.calculateMetric($options)
        // ASSERT
      expect(results.bmiValue).to.equal(24.5)
    });
      
      it.only('is expected to return assessment of "normal weight"', () => {
        let results = $subject.calculateMetric($options)
        expect(results.message).to.equal('normal weight')
      });
  });

  describe("for a random person", () => {
    def("options", () => ({ weight: 50, height: 1.87 }));

    it("is expected to return 31.5", () => {

      // ACT 
      let results = $subject.calculateMetric($options)
        // ASSERT
      expect(results.bmiValue).to.equal(14.5)
    });
      
      it.only('is expected to return assessment of "underweight"', () => {
        let results = $subject.calculateMetric($options)
        expect(results.message).to.equal('underweight')
      });
  });
});
