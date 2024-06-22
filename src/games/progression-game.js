import playGame from '../game.js';
import getRandomNumber from '../utils.js';

const getProgression = (a, quantity, difference) => {
  const numbers = [];
  for (let i = 1; i <= (quantity - 1); i += 1) {
    numbers.push(a + difference * i);
  }
  return numbers;
};

const gameTask = 'What number is missing in the progression?';

const startProgression = () => {
  const firstNumber = getRandomNumber(0, 100);
  const numberOfMembers = getRandomNumber(6, 15);
  const step = getRandomNumber(2, 4);
  const progression = getProgression(firstNumber, numberOfMembers, step);
  const index = getRandomNumber(1, numberOfMembers);
  const rightAnswer = String(progression[index - 1]);
  progression[index - 1] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

const playProgressionGame = () => {
  playGame(startProgression, gameTask);
};

export default playProgressionGame;
