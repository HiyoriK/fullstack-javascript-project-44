import playGame from '../game.js';
import showRandomNumber from '../utils.js';

const gameTask = 'Answer "yes" if the number is prime, otherwise answer "no".';

const startPrime = () => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  const question = showRandomNumber(2, 100);
  const rightAnswer = (isPrime(question)) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const playPrimeGame = () => {
  playGame(startPrime, gameTask);
};

export default playPrimeGame;
