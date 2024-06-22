import playGame from '../game.js';
import getRandomNumber from '../utils.js';

let result = '';

const getRandomOperator = (array) => array[Math.floor(Math.random() * array.length)];

const calculation = (a, b, actionSign) => {
  switch (actionSign) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      console.log('No such operator');
      break;
  }
};

const gameTask = 'What is the result of the expression?';

const startCalc = () => {
  const operators = ['+', '-', '*'];
  const operator = getRandomOperator(operators);
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  calculation(firstNumber, secondNumber, operator);
  const rightAnswer = result.toString();
  return [question, rightAnswer];
};

const playCalcGame = () => {
  playGame(startCalc, gameTask);
};

export default playCalcGame;
