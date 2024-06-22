import playGame from '../game.js';
import getRandomNumber from '../utils.js';

const getGreatCommonDevisor = (x, y) => {
  if (x === 0) return y;
  return getGreatCommonDevisor(y % x, x);
};

const gameTask = 'Find the greatest common divisor of given numbers.';

const startDevisor = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = getGreatCommonDevisor(firstNumber, secondNumber).toString();
  return [question, rightAnswer];
};

const playDevisorGame = () => {
  playGame(startDevisor, gameTask);
};

export default playDevisorGame;
