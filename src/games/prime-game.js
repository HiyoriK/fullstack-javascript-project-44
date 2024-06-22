import playGame from '../game.js';
import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPrime = () => {
  const question = getRandomNumber(2, 100);
  const rightAnswer = (isPrime(question)) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const playPrimeGame = () => {
  playGame(startPrime, gameTask);
};

export default playPrimeGame;
