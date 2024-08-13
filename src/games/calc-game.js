import playGame from '../game.js';
import getRandomInRange from '../utils.js';

const calculation = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const startCalc = () => {
  const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    return operators[getRandomInRange(0, operators.length - 1)];
  };
  const operator = getRandomOperator();
  const firstNumber = getRandomInRange(0, 100);
  const secondNumber = getRandomInRange(0, 100);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const rightAnswer = String(calculation(firstNumber, secondNumber, operator));
  return [question, rightAnswer];
};

const playCalcGame = () => {
  const gameTask = 'What is the result of the expression?';
  playGame(startCalc, gameTask);
};

export default playCalcGame;
