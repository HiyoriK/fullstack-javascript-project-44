import playGame from '../game.js';
import showRandomNumber from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
const startDevisor = () => {
//   const question = showRandomNumber(0, 100);
//   const rightAnswer = (isEven(question)) ? 'yes' : 'no';
//   return [question, rightAnswer];
};

const playDevisorGame = () => {
  playGame(startDevisor, gameTask);
};

export default playDevisorGame;
