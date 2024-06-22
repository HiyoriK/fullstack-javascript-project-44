import playGame from '../game.js';
import getRandomNumber from '../utils.js';

const isEven = (num) => (num % 2 === 0);

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
const startEven = () => {
  const question = getRandomNumber(0, 100);
  const rightAnswer = (isEven(question)) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const playEvenGame = () => {
  playGame(startEven, gameTask);
};

export default playEvenGame;
