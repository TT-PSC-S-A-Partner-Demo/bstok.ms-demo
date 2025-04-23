import { Calculator } from './calculator';

// Create an instance of the calculator
const calculator = new Calculator();

// Example usage
console.log('Calculator Demo:');
console.log('--------------');

// Addition
const sum = calculator.add(5, 3);
console.log(`5 + 3 = ${sum}`);

// Subtraction
const difference = calculator.subtract(10, 4);
console.log(`10 - 4 = ${difference}`);

// Multiplication
const product = calculator.multiply(6, 7);
console.log(`6 * 7 = ${product}`);

// Division
try {
  const quotient = calculator.divide(20, 5);
  console.log(`20 / 5 = ${quotient}`);
  
  // This will throw an error
  const invalid = calculator.divide(10, 0);
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.error('An unknown error occurred');
  }
}

// Power
const power = calculator.power(2, 8);
console.log(`2^8 = ${power}`);

// Square Root
const root = calculator.squareRoot(25);
console.log(`√25 = ${root}`);
