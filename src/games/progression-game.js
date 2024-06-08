import playGame from '../game.js';
import showRandomNumber from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const getProgression = (firstNumber, numberOfMembers, step) => {
  const numbers = [];
  for (let i = 1; i <= (numberOfMembers - 1); i += 1) {
    numbers.push(firstNumber + step * i);
  }
  return numbers;
};

const startProgression = () => {
  const firstNumber = showRandomNumber(0, 100);
  const numberOfMembers = showRandomNumber(5, 15);
  const step = showRandomNumber(2, 10);
  const progression = getProgression(firstNumber, numberOfMembers, step);
  const index = showRandomNumber(0, numberOfMembers);
  const rightAnswer = String(progression[index - 1]);
  progression[index - 1] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

const playProgressionGame = () => {
  playGame(startProgression, gameTask);
};

export default playProgressionGame;
