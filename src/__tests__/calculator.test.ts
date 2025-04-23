import { Calculator } from '../calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should add two numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(-1, 1)).toBe(0);
      expect(calculator.add(0, 0)).toBe(0);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
      expect(calculator.subtract(1, 5)).toBe(-4);
      expect(calculator.subtract(0, 0)).toBe(0);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers correctly', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
      expect(calculator.multiply(-2, 3)).toBe(-6);
      expect(calculator.multiply(0, 5)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should divide two numbers correctly', () => {
      expect(calculator.divide(6, 3)).toBe(2);
      expect(calculator.divide(5, 2)).toBe(2.5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('power', () => {
    it('should calculate power correctly', () => {
      expect(calculator.power(2, 3)).toBe(8);
      expect(calculator.power(4, 0.5)).toBe(2);
    });
  });

  describe('squareRoot', () => {
    it('should calculate square root correctly', () => {
      expect(calculator.squareRoot(9)).toBe(3);
      expect(calculator.squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    it('should throw error for negative numbers', () => {
      expect(() => calculator.squareRoot(-1)).toThrow('Cannot calculate square root of negative number');
    });
  });
});
