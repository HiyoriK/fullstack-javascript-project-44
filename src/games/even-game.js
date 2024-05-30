import playGame from '../game.js';
import showRandomNumber from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
const startEven = () => {
  const isEven = (num) => (num % 2 === 0);
  const question = showRandomNumber(0, 100);
  const rightAnswer = (isEven(question)) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const playEvenGame = () => {
  playGame(startEven, gameTask);
};

export default playEvenGame;
