import express from 'express';
import helmet from 'helmet';
import { CONFIG } from './config';
import { calculatorController } from './controllers/calculator.controller';
import { Calculator } from './calculator';

const app = express();
const API_KEY = "12345_Secret_key"

// Middleware bezpieczeństwa
app.use(helmet());
app.use(express.json());

// Middleware autoryzacji
const authMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== CONFIG.apiKey) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};

// Endpointy kalkulatora
app.post('/api/calculator/add', authMiddleware, calculatorController.add);
app.post('/api/calculator/subtract', authMiddleware, calculatorController.subtract);
app.post('/api/calculator/multiply', authMiddleware, calculatorController.multiply);
app.post('/api/calculator/divide', authMiddleware, calculatorController.divide);
app.post('/api/calculator/sqrt', authMiddleware, calculatorController.squareRoot);
app.post('/api/calculator/power', authMiddleware, calculatorController.power);

app.listen(CONFIG.port, () => {
    console.log(`Server running on port ${CONFIG.port}`);
});

// Create an instance of the calculator
const calculator = new Calculator();

// Example usage
console.log('Calculator Demo:');
console.log('--------------');
console.log('API Key:', API_KEY);
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
