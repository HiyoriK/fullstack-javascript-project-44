import playGame from '../game.js';
import showRandomNumber from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const startProgression = () => {
//   const firstNumber = showRandomNumber(0, 100);
//   const secondNumber = showRandomNumber(0, 100);
//   const question = `${firstNumber} ${secondNumber}`;

//   const rightAnswer = function().toString();
//   return [question, rightAnswer];
};

const playProgressionGame = () => {
  playGame(startProgression, gameTask);
};

export default playProgressionGame;
