import playGame from '../game.js';
import getRandomNumber from '../utils.js';

const getProgression = (firstNumber, numberOfMembers, step) => {
  const numbers = [];
  for (let i = 1; i <= (numberOfMembers - 1); i += 1) {
    numbers.push(firstNumber + step * i);
  }
  return numbers;
};

const gameTask = 'What number is missing in the progression?';

const startProgression = () => {
  const firstNumber = getRandomNumber(0, 100);
  const numberOfMembers = getRandomNumber(5, 18);
  const step = getRandomNumber(2, 10);
  const progression = getProgression(firstNumber, numberOfMembers, step);
  const index = getRandomNumber(0, numberOfMembers);
  const rightAnswer = String(progression[index - 1]);
  progression[index - 1] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

const playProgressionGame = () => {
  playGame(startProgression, gameTask);
};

export default playProgressionGame;
