import playGame from '../game.js';

const showRandomNumber = (min = 0, max = 100) => {
  const result = Math.floor(Math.random() * (max - min) + min);
  return result;
};
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
