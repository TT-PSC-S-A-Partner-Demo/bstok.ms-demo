/**
 * Calculator class providing basic arithmetic operations
 */
export class Calculator {
  /**
   * Adds two numbers
   * @param a First number
   * @param b Second number
   * @returns Sum of the two numbers
   */
  add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Subtracts second number from first number
   * @param a First number
   * @param b Second number to subtract
   * @returns Difference between the numbers
   */
  subtract(a: number, b: number): number {
    return a - b;
  }

  /**
   * Multiplies two numbers
   * @param a First number
   * @param b Second number
   * @returns Product of the two numbers
   */
  multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * Divides first number by second number
   * @param a Dividend
   * @param b Divisor
   * @returns Quotient of the division
   * @throws Error when trying to divide by zero
   */
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }

  /**
   * Calculates the power of a number
   * @param base The base number
   * @param exponent The exponent
   * @returns The base raised to the exponent
   */
  power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  /**
   * Calculates the square root of a number
   * @param num The number
   * @returns The square root of the number
   * @throws Error when trying to calculate square root of negative number
   */
  squareRoot(num: number): number {
    if (num < 0) {
      throw new Error("Cannot calculate square root of negative number");
    }
    return Math.sqrt(num);
  }
}
