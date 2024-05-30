import playGame from '../game.js';
import showRandomNumber from '../utils.js';

const gameTask = 'What is the result of the expression?';

const startCalc = () => {
  const firstNumber = showRandomNumber(0, 100);
  const secondNumber = showRandomNumber(0, 100);
  const operators = ['+', '-', '*'];
  const getRandomOperator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${firstNumber} ${getRandomOperator} ${secondNumber}`;
  let result = '';
  switch (getRandomOperator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      console.log('No such operator');
      break;
  }
  const rightAnswer = result.toString();
  return [question, rightAnswer];
};

const playCalcGame = () => {
  playGame(startCalc, gameTask);
};

export default playCalcGame;
